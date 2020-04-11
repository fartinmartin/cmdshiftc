/** @jsx jsx */
import Collapse from "rc-collapse/lib/Collapse"
import React, { useState } from "react"
import { Button, Flex, jsx } from "theme-ui"
const Panel = Collapse.Panel

const Number = ({ children }) => (
  <div sx={{ mr: ".5em", opacity: ".5" }}>{children}. </div>
)

export default ({ children }) => {
  // create an array of strings the length of children
  let allKeys = []
  children.forEach((item, index) => allKeys.push(index.toString()))

  // use array to set all "keys" to active (rc-collapse lingo)
  const [activeKeys, setActiveKeys] = useState(allKeys)
  const [allOpen, setAllOpen] = useState(true)

  function handleClick() {
    setAllOpen(!allOpen)
  }

  function onChange(event) {
    setActiveKeys(event)
  }

  return (
    <div sx={{ position: "relative" }}>
      <Button
        onClick={handleClick}
        sx={{
          position: "absolute",
          left: "-1rem",
          transform: "translateX(-100%)",

          p: 0,
          background: "none",
          color: "text",
          fontSize: 0,
          maxWidth: "10ch",
          textAlign: "right",
          cursor: "pointer",
        }}
      >
        Show/Hide extra steps
      </Button>
      <Collapse activeKey={allOpen ? activeKeys : [""]} onChange={onChange}>
        {children.map((item, index) => {
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
                header={
                  <Flex sx={{ flexGrow: "1" }}>
                    <Number>{index + 1}</Number>
                    {item.props.children}
                  </Flex>
                }
                disabled
              />
            )
          }

          if (!newContent) {
            // this is for cases in which the step has components (i.e. <Key />) but no children
            return (
              <Panel
                header={
                  <Flex sx={{ flexGrow: "1" }}>
                    <Number>{index + 1}</Number>
                    {header.map(item => (
                      <React.Fragment>{item}</React.Fragment>
                    ))}
                  </Flex>
                }
              />
            )
          } else if (newContent) {
            // this is for cases in which the step has components (i.e. <Key />) and/or has children steps
            return (
              <Panel
                header={
                  <Flex sx={{ flexGrow: "1" }}>
                    <Number>{index + 1}</Number>
                    {header.map(item => (
                      <React.Fragment>{item}</React.Fragment>
                    ))}
                  </Flex>
                }
              >
                {typeof newContent === "string" && newContent}
                {typeof newContent !== "string" &&
                  newContent.map(item => (
                    <React.Fragment>{item}</React.Fragment>
                  ))}
              </Panel>
            )
          } else {
            return null
          }
        })}
      </Collapse>
    </div>
  )
}
