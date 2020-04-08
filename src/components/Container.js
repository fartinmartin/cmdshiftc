/** @jsx jsx */
import { Container, jsx } from "theme-ui"

export default ({ children, ...props }) => (
  <Container px={4} {...props}>
    {children}
  </Container>
)
