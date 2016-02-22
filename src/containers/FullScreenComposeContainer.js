import _ from 'lodash'
import { connect } from 'react-redux'
import Immutable from 'immutable'
import { toggleCompose } from '../actions/index'
import FullScreenCompose from '../components/common/FullScreenCompose'

const mapStateToProps = (state) => {
  return {
    expanded: state.uiReducer.get('expandedCompose'),
    type: state.uiReducer.get('composeType'),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleToggleCompose: () => {
      dispatch(toggleCompose())
    },
  }
}

const FullScreenComposeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FullScreenCompose)

export default FullScreenComposeContainer
