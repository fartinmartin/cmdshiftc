/** @jsx jsx */
import { jsx } from "theme-ui"

export default ({ children, variant }) => {
  const baseStyles = {
    display: "inline-flex",
    alignItems: "center",
    bg: "muted",
    color: "primary",
    px: 2,
    py: 1,
    borderRadius: `.125em`,
    textShadow: "1px 1px 1px white",
    fontFamily: "monospace",
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
