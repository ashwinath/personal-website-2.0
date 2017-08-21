import * as constants from './constants';

export const successState = newState => () => {
  newState.submitStatus = constants.SUCCESS;
  newState.requestSent = false;
  return newState;
}

export const failedState = newState => () => {
  newState.submitStatus = constants.FAILED;
  newState.requestSent = false;
  return newState;
}

export const submitState = newState => () => {
  newState.submitPressed = true;
  return newState;
}

export const loadingState = newState => () => {
  newState.requestSent = true;
  return newState;
}