/** @jsx jsx */
import Collapse from "rc-collapse/lib/Collapse"
import React from "react"
import { jsx } from "theme-ui"
const Panel = Collapse.Panel

export default ({ children }) => {
  console.log(children)
  return (
    <Collapse id="fuckface">
      {children.map(child => {
        console.log("##################")
        console.log(child)

        const childType = typeof child.props.children

        return (
          <Panel
            header={
              <React.Fragment>
                {childType === "string"
                  ? child.props.children
                  : child.props.children[0]}
              </React.Fragment>
            }
          >
            {childType !== "string" && (
              <React.Fragment>{child.props.children[1]}</React.Fragment>
            )}
          </Panel>
        )
      })}
    </Collapse>
  )
}
