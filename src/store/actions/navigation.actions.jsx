import {navigationConstants} from '../constants'

export const navigationActions = {
  NavLoad
}

function NavLoad(params) {
  return {
    type: navigationConstants.SUB_NAVIGATION_LOAD,
    params
  }
}
