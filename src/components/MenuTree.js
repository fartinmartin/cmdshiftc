/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"

const Divider = props => (
  <span
    sx={{
      opacity: 0.5,
      mx: 1,
      verticalAlign: 1,
      fontSize: "10px",
    }}
  >
    >
  </span>
)

export default ({ tree }) => (
  <span
    sx={{
      display: "inline-flex",
      alignItems: "center",
      bg: "muted",
      px: 2,
      py: 1,
      borderRadius: `.125em`,
      fontSize: 1,
      textShadow: "1px 1px 1px white",
      lineHeight: 1,
    }}
  >
    {tree.map((item, index) => (
      <React.Fragment>
        {item}
        {index < tree.length - 1 ? <Divider /> : null}
      </React.Fragment>
    ))}
  </span>
)
