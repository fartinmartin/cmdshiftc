/** @jsx jsx */
import { Button, Flex, jsx } from "theme-ui"
import Container from "./Container"

export default props => {
  const scrollToTop = () => {
    try {
      // trying to use new API - https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      })
    } catch (error) {
      // just a fallback for older browsers
      window.scrollTo(0, 0)
    }
  }

  return (
    <div sx={{ mb: 128 }}>
      <Container py={128}>
        <Flex
          sx={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button sx={{ cursor: "pointer" }} onClick={() => scrollToTop()}>
            Take me to the top!
          </Button>
        </Flex>
      </Container>
    </div>
  )
}
