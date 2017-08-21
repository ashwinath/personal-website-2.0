import * as constants from './constants';

export const successState = state => () => ({
  ...state,
  submitStatus: constants.SUCCESS,
  requestSent: false
});

export const failedState = state => () => ({
  ...state,
  submitStatus: constants.FAILED,
  requestSent: false
});

export const submitState = state => () => ({
  ...state,
  submitPressed: true
});

export const loadingState = state => () => ({
  ...state,
  requestSent: true
});