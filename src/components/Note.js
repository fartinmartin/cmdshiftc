/** @jsx jsx */
import { jsx } from "theme-ui"

export default ({ children, variant }) => {
  const baseStyles = {
    display: "flex",
    alignItems: "center",
    bg: "muted",
    color: "text",
    fontStyle: "italic",
    px: 2,
    py: 1,
    borderRadius: `.125em`,
    fontSize: 1,
    lineHeight: 1,
  }
  if (!variant) {
    return <div sx={baseStyles}>{children}</div>
  } else if (variant === "ae") {
    return <div sx={baseStyles}>{children}</div>
  } else {
    return null
  }
}
