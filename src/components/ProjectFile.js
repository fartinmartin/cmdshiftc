/** @jsx jsx */
import { jsx } from "theme-ui"

export default ({ link, children }) => (
  <div
    sx={{
      bg: "#adc9e657",
      p: 4,
      borderRadius: 2,
      // border: "2px solid #49a2ff",
    }}
  >
    {children}
  </div>
)
