/** @jsx jsx */
import { Flex, jsx } from "theme-ui"
import Container from "./Container"

export default props => {
  return (
    <div sx={{ mb: 128 }}>
      <Container py={128}>
        <Flex
          sx={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span role="img" aria-label="party">
            🎉
          </span>
        </Flex>
      </Container>
    </div>
  )
}
