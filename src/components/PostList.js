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
              frontmatter {
                title
                excerpt
                featuredImage {
                  publicURL
                }
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
                {post.frontmatter.featuredImage ? (
                  <img
                    src={post.frontmatter.featuredImage.publicURL}
                    alt={post.frontmatter.title}
                    sx={{
                      maxWidth: "100%",
                    }}
                  />
                ) : null}
                <Styled.h2
                  sx={{
                    m: 0,
                  }}
                >
                  {post.frontmatter.title}
                </Styled.h2>
                <small sx={{ fontWeight: "bold" }}>{post.date}</small>
                <Styled.p>{post.frontmatter.excerpt}</Styled.p>
              </Link>
              <Divider />
            </li>
          ))}
        </ul>
      )
    }}
  />
)
