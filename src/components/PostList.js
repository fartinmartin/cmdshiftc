/** @jsx jsx */
import { graphql, Link, StaticQuery } from "gatsby"
import { Divider, jsx, Styled } from "theme-ui"

export default props => (
  <StaticQuery
    query={graphql`
      query PostList {
        allMdx(filter: { fileAbsolutePath: { regex: "/src/posts/" } }) {
          edges {
            node {
              id
              excerpt
              frontmatter {
                title
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `}
    render={data => {
      const { edges: posts } = data.allMdx
      return (
        <ul
          sx={{
            listStyle: "none",
            m: "0 auto",
            px: 3,
            py: 4,
            maxWidth: "50ch",
          }}
        >
          {posts.map(({ node: post }) => (
            <li
              key={post.id}
              sx={{
                mb: 4,
              }}
            >
              <Styled.h2
                sx={{
                  m: 0,
                }}
              >
                <Link
                  to={post.fields.slug}
                  sx={{
                    color: "inherit",
                    textDecoration: "none",
                    ":hover,:focus": {
                      color: "primary",
                      textDecoration: "underline",
                    },
                  }}
                >
                  {post.frontmatter.title}
                </Link>
              </Styled.h2>
              <small sx={{ fontWeight: "bold" }}>{post.date}</small>
              <Styled.p>{post.excerpt}</Styled.p>
              <Divider />
            </li>
          ))}
        </ul>
      )
    }}
  />
)
