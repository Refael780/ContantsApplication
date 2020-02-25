import { SET_PROFILE_IMAGE, SET_PROFILE_IMAGE_ERORR } from './type';
const MIN = 1;
const MAX = 100;
export const setImage = () => dispath => {
  const rand = MIN + Math.floor(Math.random() * (MAX - MIN));

  try {
    const GENDER = rand % 2 === 0 ? 'men' : 'women';
    const imgUrl = `https://randomuser.me/api/portraits/${GENDER}/${rand}.jpg`;
    dispath({
      type: SET_PROFILE_IMAGE,
      payload: imgUrl
    });
  } catch (error) {
    dispath({
      type: SET_PROFILE_IMAGE_ERORR
    });
  }
};
