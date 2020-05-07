/** @jsx jsx */
import { jsx } from "theme-ui"

export default ({ children, variant }) => {
  const baseStyles = {
    display: "inline-flex",
    alignItems: "center",
    bg: "muted",
    color: "#000",
    px: 2,
    py: 1,
    borderRadius: `.125em`,
    textShadow: "1px 1px 1px white",
    fontFamily: "adobe",
    fontWeight: 600,
    fontSize: 1,
    lineHeight: 1,
  }
  if (!variant) {
    return <span sx={baseStyles}>{children}</span>
  } else if (variant === "ae") {
    return <span sx={baseStyles}>{children}</span>
  } else {
    return null
  }
}
