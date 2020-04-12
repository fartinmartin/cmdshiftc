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
import Key from "./../Key"
import MenuTree from "./../MenuTree"
import MyList from "./../MyList"
import Prop from "./../Prop"
import Value from "./../Value"

const shortcodes = { Link, Key, Prop, Value, MenuTree, ol: MyList }

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
        }}
      >
        <Container sx={{ maxWidth: "55ch" }}>
          <h1>{mdx.frontmatter.title}</h1>
          <TOC headings={mdx.headings} location={location} />
        </Container>

        <MDXProvider components={shortcodes}>
          <Container sx={{ maxWidth: "55ch" }}>
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
