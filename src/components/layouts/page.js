/** @jsx jsx */
import { MDXProvider } from "@mdx-js/react"
import { Link } from "gatsby"
import Collapse from "rc-collapse"
import { Helmet } from "react-helmet"
import { Flex, jsx, Styled } from "theme-ui"
import Container from "./../Container"
import Footer from "./../Footer"
import Header from "./../Header"
import MenuTree from "./../MenuTree"
import MyList from "./../MyList"
import Note from "./../Note"
import Prop from "./../Prop"
import Value from "./../Value"

const Panel = Collapse.Panel

const shortcodes = {
  Link,
  Prop,
  Value,
  MenuTree,
  Collapse,
  Panel,
  ol: MyList,
  Note,
}

export default ({ children }) => (
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
        <Container sx={{ maxWidth: "55ch" }}>
          <MDXProvider components={shortcodes}>{children}</MDXProvider>
        </Container>
      </main>
      <Footer
        sx={{
          width: "100%",
        }}
      />
    </Flex>
  </Styled.root>
)
