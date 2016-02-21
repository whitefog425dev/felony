'use strict'

import 'normalize.css'
import React, { Component } from 'react'
import ReactCSS  from 'reactcss'

import '../fonts/work-sans/WorkSans.css!'
import '../styles/felony.css!'
import colors  from '../styles/variables/colors'

import Header from './header/Header'
import FloatingButton from './floating-button/FloatingButton'
import FullScreenComposeContainer from '../containers/FullScreenComposeContainer'
import Encrypt from './encrypt/Encrypt'

export class Felony extends Component {
  state = {
    selected: [], // replaced with redux
  }

  classes() {
    return {
      'default': {
        app: {

          // NOTE: Set here and not in felony.css in order to use color variable
          background: colors.bgLight,
          position: 'absolute',
          width: '100%',
          height: '100%',
          color: 'white',
        },
        header: {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
        },
      },
    }
  }

  // this will be replaced with Redux
  handleAddToSelected = (selected) => {
    this.setState({
      selected: this.state.selected.concat([selected]),
    })
  }

  render() {
    return (
      <div is="app">
        <div is="header"
          onClick={ this.handleAddToSelected }>
          <Header />
        </div>

        <Encrypt />

        <FloatingButton />
        <FullScreenComposeContainer />
      </div>
    )
  }
}

export default ReactCSS(Felony)
