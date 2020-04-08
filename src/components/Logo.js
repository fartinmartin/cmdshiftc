/** @jsx jsx */
import { jsx } from "theme-ui"
import Key from "./Key"

export default ({ variant }) => {
  if (!variant) {
    return (
      <div>
        <Key variant="interactive" csx={{ fontSize: 1, mr: 2 }}>
          ⌘ Cmd
        </Key>
        <Key variant="interactive" csx={{ fontSize: 1, mr: 2 }}>
          ⇧ Shift
        </Key>
        <Key variant="interactive" csx={{ fontSize: 1 }}>
          C
        </Key>
      </div>
    )
  } else if (variant === "small") {
    return (
      <div>
        <Key variant="interactive" csx={{ fontSize: 1, mr: 2 }}>
          ⌘
        </Key>
        <Key variant="interactive" csx={{ fontSize: 1, mr: 2 }}>
          ⇧
        </Key>
        <Key variant="interactive" csx={{ fontSize: 1 }}>
          C
        </Key>
      </div>
    )
  } else {
    return null
  }
}
