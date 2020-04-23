/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import show from "../../static/images/shyguy-closed.svg"
import hide from "../../static/images/shyguy-open.svg"

export default props => (
  <button
    {...props}
    sx={{
      variant: "button.reset",
      height: "1rem",
      width: "1rem",
      background: "red",
      cursor: "pointer",
      fontSize: 0,
    }}
    alt={`${props.allOpen ? "Hide" : "Reveal"} sub-steps.`}
  >
    {props.allOpen ? (
      <React.Fragment>
        <img alt="Hide sub-steps." src={hide} /> Collapse Steps
      </React.Fragment>
    ) : (
      <React.Fragment>
        <img alt="Reveal sub-steps." src={show} /> Expand Steps
      </React.Fragment>
    )}
  </button>
)
