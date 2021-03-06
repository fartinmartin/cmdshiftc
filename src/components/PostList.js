/** @jsx jsx */
import { graphql, Link, StaticQuery } from "gatsby"
import React from "react"
import { Divider, jsx, Styled } from "theme-ui"
import "./../css/post-list.css"

export default props => (
  <StaticQuery
    query={graphql`
      query PostList {
        allMdx(
          filter: {
            fileAbsolutePath: { regex: "/src/posts/" }
            fields: { slug: { ne: "/tut/test" } }
          }
        ) {
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
          id="post-list"
        >
          {posts.map(({ node: post }, index) => (
            <React.Fragment>
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
                      marginTop: 2,
                    }}
                  >
                    {post.frontmatter.title}
                  </Styled.h2>
                  <small sx={{ fontWeight: "bold" }}>{post.date}</small>
                  <Styled.p>{post.frontmatter.excerpt}</Styled.p>
                </Link>
              </li>
              {index < posts.length - 1 ? <Divider my={4} /> : null}
            </React.Fragment>
          ))}
        </ul>
      )
    }}
  />
)
