import {
  SIGN_UP_START,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from '../actions';

const initialState = {
  error: null,
  signingUp: false,
  logginIn: false,
  success: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP_START:
      return {
        ...state,
        error: null,
        signingUp: true,
        success: false,
      };
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        error: null,
        signingUp: false,
        success: true,
      };
    case SIGN_UP_FAILURE:
      return {
        ...state,
        error: action.payload,
        signingUp: null,
        success: false,
      };
    case LOGIN_START:
      return {
        ...state,
        error: null,
        loggingIn: true,
        success: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        error: null,
        loggingIn: false,
        success: true,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload,
        loggingIn: false,
        success: false,
      };
    default:
      return state;
  }
};

export default reducer;
