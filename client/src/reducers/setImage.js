import { SET_PROFILE_IMAGE, SET_PROFILE_IMAGE_ERORR } from '../action/type';

const intialState = {
  imgUrl: '',
  isLoading: true
};

export default (state = intialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_PROFILE_IMAGE:
      return {
        imgUrl: payload,
        isLoading: false
      };
    case SET_PROFILE_IMAGE_ERORR:
      return {
        imgUrl: '',
        isLoading: false
      };
    default:
      return state;
  }
};
