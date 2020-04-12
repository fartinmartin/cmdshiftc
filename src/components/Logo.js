/** @jsx jsx */
import { jsx } from "theme-ui"

export default ({ variant }) => {
  const overrideStyles = {
    fontSize: "14px !important",
    mx: 1,
  }

  const interactiveStyles = {
    "&:hover": {
      bg: "#fafafa",
    },
    "&:active": {
      transform: "translateX(.5px) translateY(.5px)",
      boxShadow: `inset 0.25px 0.25px .5px 0.25px hsl(0, 0%, 98%),
                  inset -0.5px -0.5px 0 0.5px hsl(0, 0%, 100%),
                  0 0 0 1px hsl(0, 0%, 85%), -1px -1px 0 1px hsl(0, 0%, 98%);`,
    },
  }
  if (!variant) {
    return (
      <div>
        <kbd sx={{ ...overrideStyles, ...interactiveStyles }}>⌘ Cmd</kbd>
        <kbd sx={{ ...overrideStyles, ...interactiveStyles }}>⇧ Shift</kbd>
        <kbd sx={{ ...overrideStyles, ...interactiveStyles }}>C</kbd>
      </div>
    )
  } else if (variant === "small") {
    return (
      <div>
        <kbd sx={{ ...overrideStyles, ...interactiveStyles }}>⌘</kbd>
        <kbd sx={{ ...overrideStyles, ...interactiveStyles }}>⇧</kbd>
        <kbd sx={{ ...overrideStyles, ...interactiveStyles }}>C</kbd>
      </div>
    )
  } else {
    return null
  }
}
