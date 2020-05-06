/** @jsx jsx */
import { Link } from "gatsby"
import { Flex, jsx } from "theme-ui"
import ColorMode from "./ColorMode"
import Container from "./Container"
import Logo from "./Logo"

export default props => (
  <header
    sx={{
      position: "fixed",
      width: "100%",
      bg: "white",
      zIndex: "100",
    }}
  >
    <Container>
      <Flex
        sx={{
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          height: "6em",
        }}
      >
        <Link
          to="/"
          sx={{
            textDecoration: "none",
          }}
        >
          <Logo />
        </Link>
        <div sx={{ position: "absolute", right: "0", opacity: 0 }}>
          <Link
            to="/key"
            sx={{
              textDecoration: "none",
              mr: ".25em",
            }}
          >
            <span role="img" aria-label="A key">
              🔑
            </span>
          </Link>
          <ColorMode />
        </div>
      </Flex>
    </Container>
  </header>
)
