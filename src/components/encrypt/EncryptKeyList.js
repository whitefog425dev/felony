'use strict'

import React, { Component } from 'react'
import ReactCSS from 'reactcss'

import colors from '../../styles/variables/colors'

import EncryptKeyListItem from './EncryptKeyListItem'

class EncryptKeyList extends Component {
  classes() {
    return {
      'default': {

      },
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.props.onTestAdd('Case')
    }, 5000)
  }

  render() {
    return (
        <div>
        { this.props.keys && this.props.keys.map((key, j) => {
          return <EncryptKeyListItem ref="input"
            key={ key.id } // TODO: come up with a better variable name than key
            id={ key.id }
            name={ key.name }
            onSelect={ this.props.selectKey }
            active={ this.props.active[key.id] }
          />
        }) }
        </div>
    )
  }
}

export default ReactCSS(EncryptKeyList)
