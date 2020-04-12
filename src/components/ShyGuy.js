/** @jsx jsx */
import { jsx } from "theme-ui"
import show from "../../static/images/shyguy-closed.svg"
import hide from "../../static/images/shyguy-open.svg"

export default props => (
  <button
    {...props}
    sx={{
      variant: "button.reset",
      height: "1em",
      width: "1em",
      background: "red",
      cursor: "pointer",
    }}
    alt={`${props.allOpen ? "Hide" : "Reveal"} sub-steps.`}
  >
    {props.allOpen ? (
      <img alt="Hide sub-steps." src={hide} />
    ) : (
      <img alt="Reveal sub-steps." src={show} />
    )}
  </button>
)
