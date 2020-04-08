/** @jsx jsx */
import Collapse from "rc-collapse/lib/Collapse"
import React from "react"
import { jsx } from "theme-ui"
const Panel = Collapse.Panel

export default ({ children }) => {
  // set all panels open by default
  const defaultActiveKeys = []
  children.forEach((item, index) => {
    let array = []
    array.push(index.toString())
    defaultActiveKeys.push(array)
  })

  return (
    <Collapse defaultActiveKey={defaultActiveKeys}>
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
        } else if (itemType === "string") {
          // this is for cases in which the step has components (i.e. Key) && has children steps
          return (
            <Panel
              header={<React.Fragment>{item.props.children}</React.Fragment>}
              disabled
            />
          )
        }

        if (!newContent) {
          // this is for cases in which the step has components (i.e. <Key />) but no children
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
          // this is for cases in which the step has components (i.e. <Key />) and/or has children steps
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
