import * as types from '../constants/ActionTypes'

export function addKey(key) {
  return { type: types.ADD_KEY, key }
}

export function selectKey(id) {
  return { type: types.SELECT_KEY, id }
}

export function toggleEncryptCompose() {
  return { type: types.TOGGLE_ENCRYPT_COMPOSE }
}
