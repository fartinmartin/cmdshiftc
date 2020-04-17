/** @jsx jsx */
import { Link } from "gatsby"
import { jsx } from "theme-ui"
import sluggify from "../hooks/slugify"
import "./../css/toc.css"

export default ({ headings, location }) => (
  <div
    sx={{
      position: "sticky",
      top: "8em",
      transform: "translateX(-100%)",
      width: "max-content",
      height: 0,
      px: 4,
    }}
    className="toc"
  >
    <h4
      sx={{
        m: 0,
        paddingTop: 4,
        textTransform: "uppercase",
        fontSize: 1,
        color: "gray",
      }}
    >
      Table of Contents
    </h4>
    <ul
      sx={{
        listStyle: "none",
        margin: 0,
        padding: 0,
      }}
    >
      {headings.map(heading => (
        <li key={heading.value} data-heading-depth={heading.depth}>
          <Link
            to={location.pathname + "#" + sluggify(heading.value)}
            sx={{
              textDecoration: "none",
              color: "gray",
              "&:hover": {
                color: "text",
              },
            }}
          >
            {heading.value}
          </Link>
        </li>
      ))}
    </ul>
  </div>
)
