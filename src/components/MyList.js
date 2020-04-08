/** @jsx jsx */
import Collapse from "rc-collapse/lib/Collapse"
import React from "react"
import { jsx } from "theme-ui"
const Panel = Collapse.Panel

export default ({ children }) => {
  const defaultActiveKeys = []
  children.forEach((item, index) => {
    const num = index + 1
    let array = []
    array.push(num.toString())
    defaultActiveKeys.push(array)
  })

  return (
    <Collapse id="fuckface" defaultActiveKey={["1", "2"]}>
      {children.map(item => {
        const itemType = typeof item.props.children
        let header = []
        let content
        let newContent

        if (itemType !== "string") {
          item.props.children.forEach(child => {
            if (typeof child === "string") {
              header.push(child)
            } else if (child.props.mdxType !== "ul") {
              header.push(child)
            } else if (child.props.mdxType === "ul") {
              content = child
              newContent = content.props.children.props.children
            } else {
              return null
            }
          })
        }

        if (!newContent) {
          return (
            <Panel
              header={
                <React.Fragment>
                  {header.map(item => (
                    <React.Fragment>{item}</React.Fragment>
                  ))}
                </React.Fragment>
              }
            />
          )
        } else if (newContent) {
          return (
            <Panel
              header={
                <React.Fragment>
                  {header.map(item => (
                    <React.Fragment>{item}</React.Fragment>
                  ))}
                </React.Fragment>
              }
            >
              {typeof newContent === "string" && newContent}
              {typeof newContent !== "string" &&
                newContent.map(item => <React.Fragment>{item}</React.Fragment>)}
            </Panel>
          )
        } else {
          return null
        }
      })}
    </Collapse>
  )
}
