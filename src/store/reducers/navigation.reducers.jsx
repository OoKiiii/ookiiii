import { navigationConstants } from '../constants'
import NavigationList from '../../json/SubNavList.json'

const initialState = {
  subNavList: []
}

export default function SubNavigation(state = initialState, action) {
  switch (action.type) {
    case navigationConstants.SUB_NAVIGATION_LOAD:
      return {
        ...state,
        subNavList: NavigationList.NavigationList[action.params]
      }
    default:
      return state
  }
}

