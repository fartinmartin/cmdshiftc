/** @jsx jsx */
import Collapse from "rc-collapse/lib/Collapse"
import { jsx } from "theme-ui"
const Panel = Collapse.Panel

export default ({ children }) => {
  return (
    <Collapse defaultActiveKey={(["0"], ["1"])}>
      <Panel header="hello">this is panel content</Panel>
      <Panel header="title2">this is panel content2 or other</Panel>
      <Panel header="3">3this is panel content</Panel>
      <Panel header="4">4this is panel content</Panel>
    </Collapse>
  )
}
