import {
  GET_CONTACT,
  GET_ALL_CONTACT,
  REMOVE_CONTACT,
  SET_CONTACT,
  SET_CONTACT_ERROR,
  GET_ALL_CONTACT_ERROR,
  FILLTER_CONTACT
} from './type';
import axios from 'axios';

export const removeContact = id => async dispatch => {
  try {
    await axios.delete(`/api/contacts/${id}`);
    dispatch({
      type: REMOVE_CONTACT,
      payload: id
    });
  } catch (error) {}
};
export const filterContent = con => dispatch => {
  dispatch({
    type: FILLTER_CONTACT,
    payload: con
  });
};

export const getContent = id => dispatch => {
  dispatch({
    type: GET_CONTACT,
    payload: id
  });
};
export const getAllContact = () => async dispatch => {
  try {
    const res = await axios.get('/api/contacts');
    dispatch({
      type: GET_ALL_CONTACT,
      payload: res.data
    });
  } catch (error) {
    console.log(error);

    dispatch({
      type: GET_ALL_CONTACT_ERROR,
      payload: error
    });
  }
};
export const setContact = (Name, Phone, Title, imgUrl) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const body = JSON.stringify({ Name, Phone, Title, imgUrl });

    console.log('BODY');
    console.log(body);

    const res = await axios.post('/api/contacts', body, config);

    dispatch({
      type: SET_CONTACT,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: SET_CONTACT_ERROR,
      payload: error
    });
  }
};
