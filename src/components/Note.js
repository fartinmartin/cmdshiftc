/** @jsx jsx */
import { jsx } from "theme-ui"

export default ({ children, variant }) => {
  const baseStyles = {
    display: "flex",
    alignItems: "center",
    bg: "#dcdcdc26",
    color: "text",
    fontStyle: "italic",
    p: 3,
    my: 2,
    borderRadius: `.125em`,
    fontSize: 1,
    lineHeight: 1.2,
    ml: "-1.5rem",
  }
  if (!variant) {
    return <div sx={baseStyles}>{children}</div>
  } else if (variant === "ae") {
    return <div sx={baseStyles}>{children}</div>
  } else {
    return null
  }
}
