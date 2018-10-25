import * as actionTypes from './index';

export function homeAdd(num) {
  return {
    type: actionTypes.HOME_ADD,
    num
  }
}

export function homeCut(num) {
  return {
    type: actionTypes.HOME_CUT,
    num
  }
}