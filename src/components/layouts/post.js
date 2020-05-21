/** @jsx jsx */
import { MDXProvider } from "@mdx-js/react"
import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { Helmet } from "react-helmet"
import { Flex, jsx, Styled } from "theme-ui"
import PostMeta from "../PostMeta.js"
import Container from "./../Container"
import Footer from "./../Footer"
import Header from "./../Header"
import MenuTree from "./../MenuTree"
import MyList from "./../MyList"
import Note from "./../Note"
import PostFooter from "./../PostFooter"
import ProjectFile from "./../ProjectFile"
import Prop from "./../Prop"
import Tabs from "./../Tabs"
import Value from "./../Value"

const shortcodes = {
  Link,
  Prop,
  Value,
  Note,
  MenuTree,
  ol: MyList,
  Tabs,
  ProjectFile,
  AnchorLink,
}

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
          <Container
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 55ch 1fr",
              // gridGap: "32px",
            }}
          >
            {/* <TOC headings={mdx.headings} location={location} /> */}
            <div></div>
            <div sx={{ px: 4 }}>
              <MDXRenderer frontmatter={mdx.frontmatter}>
                {mdx.body}
              </MDXRenderer>
            </div>
            <PostMeta mdx={mdx} />
          </Container>
        </MDXProvider>
      </main>
      <PostFooter />
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
        metaBegTime
        metaMedTime
        metaDifTime
        metaTools
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
