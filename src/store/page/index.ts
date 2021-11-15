import { PageState } from './types'
import { ActionType } from '../type'

const initState: PageState = {
  title: '测试标题',
}

const CHANGE_TITLE = 'change_title'

const pageReducer = (state = initState, action: ActionType): PageState => {
  switch (action.type) {
    case CHANGE_TITLE:
      state.title = action.title || state.title
      return state
    default:
      return state
  }
}

export { pageReducer }
