/** @jsx jsx */
import { Link } from "gatsby"
import { jsx } from "theme-ui"
import sluggify from "../hooks/slugify"

export default ({ headings, location }) => (
  <ul>
    {headings.map(heading => (
      <li key={heading.value}>
        <Link to={location.pathname + "#" + sluggify(heading.value)}>
          {heading.value}
        </Link>
      </li>
    ))}
  </ul>
)
