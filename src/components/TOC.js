/** @jsx jsx */
import { Link } from "gatsby"
import { jsx } from "theme-ui"
import sluggify from "../hooks/slugify"

export default ({ headings, location }) => (
  <div
    sx={{
      position: "fixed",
      // left: "100%",
      transform: "translateX(-100%)",
    }}
  >
    <h4>Table of Contents</h4>
    <ul>
      {headings.map(heading => (
        <li key={heading.value}>
          <Link to={location.pathname + "#" + sluggify(heading.value)}>
            {heading.value}
          </Link>
        </li>
      ))}
    </ul>
  </div>
)
