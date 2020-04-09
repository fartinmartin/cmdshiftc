/** @jsx jsx */
import { MDXProvider } from "@mdx-js/react"
import { Link } from "gatsby"
import Collapse from "rc-collapse"
import { Helmet } from "react-helmet"
import { Flex, jsx } from "theme-ui"
import Container from "./../Container"
import Footer from "./../Footer"
import Header from "./../Header"
import Key from "./../Key"
import MenuTree from "./../MenuTree"
import MyList from "./../MyList"
import Prop from "./../Prop"
import Value from "./../Value"

const Panel = Collapse.Panel

const shortcodes = {
  Link,
  Key,
  Prop,
  Value,
  MenuTree,
  Collapse,
  Panel,
  ol: MyList,
}

export default ({ children }) => (
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
      <Container>
        <MDXProvider components={shortcodes}>{children}</MDXProvider>
      </Container>
    </main>
    <Container>{/* <Test /> */}</Container>
    <Footer
      sx={{
        width: "100%",
      }}
    />
  </Flex>
)
