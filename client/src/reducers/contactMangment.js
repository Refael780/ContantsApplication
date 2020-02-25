import {
  GET_CONTACT,
  UPDATE_CONTACT,
  GET_ALL_CONTACT,
  REMOVE_CONTACT,
  FILLTER_CONTACT,
  SET_CONTACT,
  SET_CONTACT_ERROR,
  GET_ALL_CONTACT_ERROR
} from '../action/type';

const initialState = {
  contact: null,
  suggestContacts: [],
  contacts: [],
  loading: true,
  error: {}
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_CONTACT: {
      return {
        ...state,
        contact: state.contacts.filter(el => el.id == payload)
      };
    }
    case SET_CONTACT:
      return {
        ...state,
        contact: payload
      };
    case UPDATE_CONTACT: {
      return {
        ...state
      };
    }
    case GET_ALL_CONTACT_ERROR:
    case SET_CONTACT_ERROR:
      return {
        ...state,
        error: payload,
        contact: null,
        loading: false
      };
    case GET_ALL_CONTACT:
      return {
        ...state,

        contacts: payload,
        suggestContacts: payload,

        loading: false
      };
    case REMOVE_CONTACT:
      let con = [];

      con = state.contacts.filter(el => el.id !== payload);

      return {
        ...state,
        contacts: con,
        loading: false
      };
    case FILLTER_CONTACT:
      return {
        ...state,
        suggestContacts: payload
      };

    default:
      return state;
  }
};
