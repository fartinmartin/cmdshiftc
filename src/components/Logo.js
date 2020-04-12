/** @jsx jsx */
import { jsx } from "theme-ui"

export default ({ variant }) => {
  const interactiveStyles = {
    "&:hover": {
      bg: "#fafafa",
    },
    "&:active": {
      transform: "translateX(.5px) translateY(.5px)",
      boxShadow: `inset 0.25px 0.25px .5px 0.25px hsl(0, 0%, 98%), inset -0.5px -0.5px 0 0.5px hsl(0, 0%, 100%),
0 0 0 1px hsl(0, 0%, 85%), -1px -1px 0 1px hsl(0, 0%, 98%);`,
    },
  }
  if (!variant) {
    const fS = t => `${t.fontSize[1]}px !important`
    return (
      <div>
        <kbd sx={{ fontSize: fS, mr: 2, ...interactiveStyles }}>⌘ Cmd</kbd>
        <kbd sx={{ fontSize: fS, mr: 2, ...interactiveStyles }}>⇧ Shift</kbd>
        <kbd sx={{ fontSize: fS, m: 0, ...interactiveStyles }}>C</kbd>
      </div>
    )
  } else if (variant === "small") {
    const fS = t => `${t.fontSize[1]}px !important`
    return (
      <div>
        <kbd sx={{ fontSize: fS, mr: 2, ...interactiveStyles }}>⌘</kbd>
        <kbd sx={{ fontSize: fS, mr: 2, ...interactiveStyles }}>⇧</kbd>
        <kbd sx={{ fontSize: fS, m: 0, ...interactiveStyles }}>C</kbd>
      </div>
    )
  } else {
    return null
  }
}
