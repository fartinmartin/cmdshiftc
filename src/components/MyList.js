/** @jsx jsx */
import Collapse from "rc-collapse/lib/Collapse"
import React, { useState } from "react"
import { Flex, jsx } from "theme-ui"
import ShyGuy from "./ShyGuy"
const Panel = Collapse.Panel

const Number = ({ children }) => (
  <div sx={{ mr: ".5em", opacity: ".5", textAlign: "right" }}>{children}. </div>
)

export default ({ children }) => {
  // TODO: handle lists with only one item/child/step
  // TODO: refractor header logic into Header component

  // 1. create an array of strings the length of children...
  let allKeys = []
  children.forEach((item, index) => allKeys.push(index.toString()))

  // 2. use that array to set all rc-collapse "keys" to active
  const [activeKeys, setActiveKeys] = useState(allKeys)
  const [allOpen, setAllOpen] = useState(true)

  function handleToggleAll() {
    setAllOpen(!allOpen)
  }

  // onChange returns an array of rc-collapse "keys" (eg ["1", "2", "4"])
  function onChange(newKeys) {
    setActiveKeys(newKeys)
  }

  return (
    <div sx={{ position: "relative" }}>
      <Flex
        sx={{
          alignItems: "center",
          height: "43px",
          position: "absolute",
          left: "-1rem",
          transform: "translateX(-100%)",
        }}
      >
        <ShyGuy onClick={handleToggleAll} allOpen={allOpen} />
      </Flex>
      <Collapse activeKey={allOpen ? activeKeys : [""]} onChange={onChange}>
        {children.map((item, index) => {
          const itemChildren = item.props.children
          let header = []
          let content

          // collect children (if present) inside an array/variable to be used later
          if (typeof itemChildren !== "string") {
            // will we need Array.from() ????
            itemChildren.forEach(child => {
              if (typeof child === "string") {
                header.push(child)
              } else if (child.props.mdxType !== "ul") {
                header.push(child)
              } else if (child.props.mdxType === "ul") {
                if (Array.isArray(child.props.children)) {
                  content = child.props.children
                } else {
                  content = child.props.children.props.children
                }
              } else {
                return null
              }
            })
          } else if (typeof itemChildren === "string") {
            // this is for cases in which the step has components (i.e. Value) && has children steps
            return (
              <Panel
                header={
                  <Flex sx={{ flexGrow: "1" }}>
                    <Number>{index + 1}</Number>
                    <span>{item.props.children}</span>
                  </Flex>
                }
                disabled
              />
            )
          } else {
            return null
          }

          if (!content) {
            // this is for cases in which the step has components (i.e. <Value />) but no children
            return (
              <Panel
                header={
                  <Flex sx={{ flexGrow: "1" }}>
                    <Number>{index + 1}</Number>
                    <span>{header.map(item => ({ item }))}</span>
                  </Flex>
                }
              />
            )
          } else if (content) {
            // this is for cases in which the step has components (i.e. <Value />) and/or has children steps

            // in order to correctly wrap out content we need to check is composition
            let renderedContent

            if (typeof content === "string") {
              // if theres only one step AND it is a string
              renderedContent = (
                <li>
                  <span>{content}</span>
                </li>
              )
            } else if (content.every(item => typeof item !== "string")) {
              // if content is an object with NO strings
              renderedContent = (
                <React.Fragment>
                  <span>{content}</span>
                </React.Fragment>
              )
            } else {
              // if content is an object with some strings
              renderedContent = (
                <React.Fragment>
                  <li>
                    <span>{content}</span>
                  </li>
                </React.Fragment>
              )
            }

            return (
              <Panel
                header={
                  <Flex sx={{ flexGrow: "1" }}>
                    <Number>{index + 1}</Number>
                    <span>
                      {header.map(item => (
                        <React.Fragment>{item}</React.Fragment>
                      ))}
                    </span>
                  </Flex>
                }
              >
                <ol>{renderedContent}</ol>
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
