import {
  CHANGE_SEARCHFIELD,
  REQUEST_FRIENDS_PENDING,
  REQUEST_FRIENDS_SUCCESS,
  REQUEST_FRIENDS_FAILED
 } from './constants';

const initialStateSearch = {
  searchField: ''
} 

export const searchRobots = (state=initialStateSearch, action={}) => {
  switch (action.type) {
    case CHANGE_SEARCHFIELD:
      return Object.assign({}, state, {searchField: action.payload})
    default:
      return state
  }
}

const initialStateRobots = {
  robots: [],
  isPending: true
}

export const requestRobots = (state=initialStateRobots, action={}) => {
  switch (action.type) {
    case REQUEST_FRIENDS_PENDING:
      return Object.assign({}, state, {isPending: true})
    case REQUEST_FRIENDS_SUCCESS:
      return Object.assign({}, state, {robots: action.payload, isPending: false})
    case REQUEST_FRIENDS_FAILED:
      return Object.assign({}, state, {error: action.payload})
    default:
      return state
  }
}