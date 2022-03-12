import * as ACTION_TYPES from './action_types';

export const login = (token, user = {}) => {
  return {
    type: ACTION_TYPES.LOGIN,
    token,
    user,
  };
};

export const first_login_handle = (first_login) => {
  return {
    type: ACTION_TYPES.FIRST_LOGIN,
    first_login,
  };
};
export const first_for_info_module_handle = (first_for_info_module) => {
  return {
    type: ACTION_TYPES.FIRST_FOR_INFO_MODULE,
    first_for_info_module,
  };
};
export const impersonate_mode_handle = (impersonate_mode) => {
  return {
    type: ACTION_TYPES.IMPERSONATE_MODE,
    impersonate_mode,
  };
};
export const set_device_id = (device_id) => {
  return {
    type: ACTION_TYPES.DEVICE_ID,
    device_id,
  };
};
export const language_choose_handle = (language_choose) => {
  return {
    type: ACTION_TYPES.LANGUAGE_CHOOSE,
    language_choose,
  };
};
export const log_out = () => {
  return {
    type: ACTION_TYPES.LOGOUT,
  };
};
export const clear = () => {
  return {
    type: ACTION_TYPES.CLEAR,
  };
};
export const get_token = (token) => {
  return {
    type: ACTION_TYPES.GET_TOKEN,
    token,
    isLoading: false,
  };
};
export const get_language = (language, translations) => {
  return {
    type: ACTION_TYPES.GET_LANGUAGE,
    language: language,
    translations: translations,
  };
};

export const get_skills = (skills) => {
  return {
    type: ACTION_TYPES.GET_SKILLS,
    skills,
  };
};
