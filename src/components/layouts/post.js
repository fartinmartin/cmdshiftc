/** @jsx jsx */
import { MDXProvider } from "@mdx-js/react"
import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Helmet } from "react-helmet"
import { Flex, jsx, Styled } from "theme-ui"
import TOC from "../TOC"
import Container from "./../Container"
import Footer from "./../Footer"
import Header from "./../Header"
import MenuTree from "./../MenuTree"
import MyList from "./../MyList"
import Prop from "./../Prop"
import Value from "./../Value"

const shortcodes = { Link, Prop, Value, MenuTree, ol: MyList }

export default ({ data: { mdx }, children, location }) => (
  <Styled.root>
    <Flex
      sx={{
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>⌘⇧C</title>
      </Helmet>
      <Header
        sx={{
          width: "100%",
        }}
      />
      <main
        sx={{
          width: "100%",
          flex: "1 1 auto",
          mt: "6em",
        }}
      >
        <Container sx={{ maxWidth: "55ch", position: "relative" }}>
          <h1>{mdx.frontmatter.title}</h1>
          <img
            src={mdx.frontmatter.featuredImage.publicURL}
            alt={mdx.frontmatter.title}
            sx={{
              width: "100%",
            }}
          />
          <small>
            <a href={mdx.frontmatter.featuredLink}>
              {mdx.frontmatter.featuredCaption}
            </a>
          </small>
        </Container>

        <MDXProvider components={shortcodes}>
          <Container sx={{ maxWidth: "55ch" }}>
            <TOC headings={mdx.headings} location={location} />
            <MDXRenderer>{mdx.body}</MDXRenderer>
          </Container>
        </MDXProvider>
      </main>
      <Footer
        sx={{
          width: "100%",
        }}
      />
    </Flex>
  </Styled.root>
)

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        featuredCaption
        featuredLink
        featuredImage {
          publicURL
        }
      }
      headings {
        depth
        value
      }
      fields {
        slug
      }
    }
  }
`
