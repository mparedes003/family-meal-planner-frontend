import { SIGN_UP_START, SIGN_UP_SUCCESS, SIGN_UP_FAILURE } from '../actions';

const initialState = {
  error: null,
  signingUp: false,
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
    default:
      return state;
  }
};

export default reducer;
