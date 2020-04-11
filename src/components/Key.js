/** @jsx jsx */
import { jsx } from "theme-ui"

export default ({ children, variant, csx }) => {
  const baseStyles = {
    fontFamily: "body",
    display: "inline-block",
    px: 2,
    py: 1,
    verticalAlign: 1,
    fontSize: 0,
    color: "#000",
    bg: "muted",
    borderRadius: `.125em`,
    boxShadow: `inset 0.25px 0.25px 0 0.25px hsl(0, 0%, 100%),
        0 0 0 1px hsl(0, 0%, 85%), 1px 1px 0 1px hsl(0, 0%, 98%);`,
    ...csx,
  }

  if (!variant) {
    return <kbd sx={baseStyles}>{children}</kbd>
  } else if (variant === "interactive") {
    return (
      <kbd
        sx={{
          ...baseStyles,

          "&:hover": {
            bg: "#fafafa",
          },
          "&:active": {
            transform: "translateX(.5px) translateY(.5px)",
            boxShadow: `inset 0.25px 0.25px .5px 0.25px hsl(0, 0%, 98%), inset -0.5px -0.5px 0 0.5px hsl(0, 0%, 100%),
      0 0 0 1px hsl(0, 0%, 85%), -1px -1px 0 1px hsl(0, 0%, 98%);`,
          },
        }}
      >
        {children}
      </kbd>
    )
  } else {
    return null
  }
}
