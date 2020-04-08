/** @jsx jsx */
import { jsx, useColorMode } from "theme-ui"

export default props => {
  const [mode, setMode] = useColorMode()
  return (
    <button
      {...props}
      onClick={e => {
        const next = mode === "dark" ? "light" : "dark"
        setMode(next)
      }}
      sx={{
        background: "none",
        border: "none",
        fontSize: 2,
        cursor: "pointer",
      }}
    >
      {mode === "light" ? "🌚" : "🌞"}
    </button>
  )
}
