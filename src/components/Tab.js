import PropTypes from "prop-types"
import React, { Component } from "react"

class Tab extends Component {
  static propTypes = {
    activeTab: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  }

  onClick = () => {
    const { label, onClick } = this.props
    onClick(label)
  }

  render() {
    const {
      onClick,
      props: { activeTab, label },
    } = this

    let className = "tab-list-item"

    if (activeTab === label) {
      className += " tab-list-active"
    }

    return (
      <li>
        <button className={className} onClick={onClick}>
          {label}
        </button>
      </li>
    )
  }
}

export default Tab
