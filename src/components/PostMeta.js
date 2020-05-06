/** @jsx jsx */
import { jsx } from "theme-ui"

export default ({ mdx: { frontmatter } }) => (
  <div>
    <h4
      sx={{
        m: 0,
        paddingTop: 4,
        textTransform: "uppercase",
        fontSize: 1,
        color: "gray",
      }}
    >
      Quick Look
    </h4>
    <ul
      sx={{
        listStyle: "none",
        margin: 0,
        padding: 0,
        maxWidth: "20ch",
        marginTop: "0.75em",
      }}
    >
      <li>
        <span
          sx={{
            display: "block",
            textTransform: "uppercase",
            fontSize: 1,
            fontWeight: "semibold",
            color: "gray",
          }}
        >
          Beginner
        </span>
        <span sx={{}}>{frontmatter.metaBegTime}</span>
      </li>
      <li>
        <span
          sx={{
            display: "block",
            textTransform: "uppercase",
            marginTop: 3,
            fontSize: 1,
            fontWeight: "semibold",
            color: "gray",
          }}
        >
          Intermediate
        </span>
        <span sx={{}}>{frontmatter.metaMedTime}</span>
      </li>
      <li>
        <span
          sx={{
            display: "block",
            textTransform: "uppercase",
            marginTop: 3,
            fontSize: 1,
            fontWeight: "semibold",
            color: "gray",
          }}
        >
          Advanced
        </span>
        <span sx={{}}>{frontmatter.metaDifTime}</span>
      </li>
      <li>
        <span
          sx={{
            display: "block",
            marginTop: 3,
            textTransform: "uppercase",
            fontSize: 1,
            fontWeight: "semibold",
            color: "gray",
          }}
        >
          Skills
        </span>
        <span sx={{}}>{frontmatter.metaTools}</span>
      </li>
    </ul>
  </div>
)
