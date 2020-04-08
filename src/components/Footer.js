/** @jsx jsx */
import { Link } from "gatsby"
import { Flex, jsx } from "theme-ui"
import Container from "./Container"
import Logo from "./Logo"

export default props => (
  <footer
    sx={{
      bg: "muted",
    }}
  >
    <Container py="4">
      <Flex
        sx={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Link
          to="/"
          sx={{
            textDecoration: "none",
          }}
        >
          <Logo variant="small" />
        </Link>
      </Flex>
    </Container>
  </footer>
)
