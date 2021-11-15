import { appState } from './type'
import { ActionType } from '../type'

const appInitState: appState = {
  token: '',
  isLogin: false,
}

const appReducer = (state = appInitState, action: ActionType) => {
  switch (action.type) {
    case `LOGIN_SUCCESS`:
      state.token = 'abcdef'
      state.isLogin = true
      break
    case `LOGOUT`:
      state.token = ''
      state.isLogin = false
      break
    default:
      return state
  }
  return state
}

export { appReducer }
