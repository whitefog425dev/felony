'use strict'

import React, { Component } from 'react'
import ReactCSS from 'reactcss'

import { spacing } from '../../assets/styles/variables/utils'

import { Icon } from '../common/index'
import FloatingButtonItem from './FloatingButtonItem'

class FloatingButton extends Component {
  state = { isShowingActions: false }

  classes() {
    return {
      'default': {
        wrap: {
          position: 'fixed',
          right: `${ spacing.m }px`,
          bottom: `${ spacing.m }px`,
        },
        buttons: {
          zIndex: '9990',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '10px',
        },
        item: {
          marginTop: '10px',
        },
      },
    }
  }

  handleOpen = () => this.setState({ isShowingActions: true })

  handleClose = () => this.setState({ isShowingActions: false })

  render() {
    return (<div
      is="wrap"
      onMouseLeave={ this.handleClose }
    >
      { this.state.isShowingActions ?
        <div>
          <div is="buttons">
            <div is="item" onClick={ this.props.showComposer.bind(this, 'add key') }>
              <FloatingButtonItem label="Add Key">
                <Icon name="add-key" />
              </FloatingButtonItem>
            </div>
            <div is="item" onClick={ this.props.showComposer.bind(this, 'verify') }>
              <FloatingButtonItem label="Verify">
                <Icon name="verify" />
              </FloatingButtonItem>
            </div>
            <div is="item" onClick={ this.props.showComposer.bind(this, 'sign') }>
              <FloatingButtonItem label="Sign">
                <Icon name="sign" />
              </FloatingButtonItem>
            </div>
            <div is="item" onClick={ this.props.showComposer.bind(this, 'decrypt') }>
              <FloatingButtonItem size="large" label="Decrypt" >
                <Icon name="decrypt" />
              </FloatingButtonItem>
            </div>
          </div>
        </div>
        :
        <div onMouseEnter={ this.handleOpen }>
          <FloatingButtonItem size="large">
            <Icon name="plus" />
          </FloatingButtonItem>
        </div>
      }
    </div>)
  }
}

export default ReactCSS(FloatingButton)
