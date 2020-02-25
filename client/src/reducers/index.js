import { combineReducers } from 'redux';
import setImage from './setImage';
import alert from './alert';

import contactMangment from './contactMangment';
export default combineReducers({ setImage, alert, contactMangment });
