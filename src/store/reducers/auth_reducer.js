import * as ACTION_TYPES from '../actions/action_types';

export const initialState = {
  isLoading: true,
  token: null,
  user: {},
  first_login: true,
  language_choose: true,
  impersonate_mode: false,
  first_for_info_module: true,
  device_id: null,
};
export const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.GET_TOKEN:
      return {
        ...state,
        isLoading: false,
        token: action.token,
      };
    case ACTION_TYPES.LOGIN:
      return {
        ...state,
        token: action.token,
        user: action.user,
      };
    case ACTION_TYPES.FIRST_LOGIN:
      return {
        ...state,
        first_login: action.first_login,
      };

    case ACTION_TYPES.DEVICE_ID:
      return {
        ...state,
        device_id: action.device_id,
      };

    case ACTION_TYPES.LOGOUT:
      return {
        ...state,
        user: {},
        token: null,
      };
    case ACTION_TYPES.CLEAR:
      return initialState;
    default:
      return state;
  }
};
