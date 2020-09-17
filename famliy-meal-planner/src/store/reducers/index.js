import {
  SIGN_UP_START,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  FETCH_TITLES_START,
  FETCH_TITLES_SUCCESS,
  FETCH_TITLES_FAILURE,
  FETCH_RECIPE_START,
  FETCH_RECIPE_SUCCESS,
  FETCH_RECIPE_FAILURE,
  ADD_RECIPE_START,
  ADD_RECIPE_SUCCESS,
  ADD_RECIPE_FAILURE,
} from '../actions';

const initialState = {
  recipe: {},
  titles: [],
  error: null,
  signingUp: false,
  logginIn: false,
  success: false,
  fetchingTitles: false,
  currentRecipes: [],
  fetchingRecipe: false,
  addingRecipe: false,
};

export default (state = initialState, action) => {
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
    case FETCH_TITLES_START:
      return {
        ...state,
        error: null,
        fetchingTitles: true,
        success: false,
      };
    case FETCH_TITLES_SUCCESS:
      return Object.assign({}, state, {
        currentRecipes: [...state.currentRecipes, ...action.payload],
        titles: [...state.titles, ...action.payload], //if our promise was successful, build out the titles array.
        fetchingTitles: false, //also, set our boolean to false, because we're no longer fetching
        success: true,
        error: null,
      });
    case FETCH_TITLES_FAILURE:
      return {
        ...state,
        error: action.payload,
        fetchingTitles: false,
        success: false,
      };
    case FETCH_RECIPE_START:
      return {
        ...state,
        fetchingRecipe: true,
        error: null,
        success: false,
      };
    case FETCH_RECIPE_SUCCESS:
      return {
        ...state,
        error: null,
        fetchingRecipe: false,
        recipe: action.payload,
        success: true,
      };
    case FETCH_RECIPE_FAILURE:
      return {
        ...state,
        error: action.payload,
        fetchingRecipe: false,
        success: false,
      };
    case ADD_RECIPE_START:
      return {
        ...state,
        addingRecipe: true,
        recipes: action.payload,
        error: false,
        success: false,
      };
    case ADD_RECIPE_SUCCESS:
      return {
        ...state,
        error: null,
        addingRecipe: false,
        recipes: action.payload,
        success: true,
      };
    case ADD_RECIPE_FAILURE:
      return {
        ...state,
        error: action.payload,
        addingRecipe: false,
        success: false,
      };
    default:
      return state;
  }
};
