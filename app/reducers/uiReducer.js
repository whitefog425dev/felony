import { TOGGLE_COMPOSER, SHOW_COMPOSER_WITH_TYPE, SELECT_KEY, SET_ACTIVE_ALIAS, SET_OUTPUT } from '../constants/UIConstants'
import { OrderedMap } from 'immutable'

const initialState = OrderedMap({
  isShowingComposer: false,
  composerType: '',
  selectedKeychain: OrderedMap({}),
  activeAlias: '',
  output: '',
})

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_COMPOSER:
      return state.set('isShowingComposer', !state.get('isShowingComposer'))
    case SHOW_COMPOSER_WITH_TYPE:
      return state.set('composerType', action.data).set('isShowingComposer', true)
    case SELECT_KEY:
      if (state.hasIn(['selectedKeychain', action.id]) && state.getIn(['selectedKeychain', action.id]) === true) {
        return state.setIn(['selectedKeychain', action.id], false)
      } else {
        return state.setIn(['selectedKeychain', action.id], true)
      }

    case SET_ACTIVE_ALIAS:
      return state.set('activeAlias', action.activeAlias)

    case SET_OUTPUT:
      console.log('seeeeeeting output!!!>>>>>>', action.output)
      return state.set('output', action.output)

    default:
      return state
  }
}

export default uiReducer
