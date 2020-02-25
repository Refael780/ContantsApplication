import React from 'react';
import { removeContact, getAllContact } from '../action/contact';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import '../pages/contract/Contact.css';
const ShowContact = props => {
  const onDeleteContentHandler = async (e, id) => {
    await props.removeContact(id);
    props.getAllContact();
  };

  //this const present all contants
  const showAll = props.contacts.map(el => {
    return (
      <div style={{ cursor: 'pointer' }} className='contact' key={el.id}>
        <div className='contact-avatar'>
          <img src={el.avatar} alt='avatar' />
        </div>
        <div className='contact-details'>
          <div className='contact-name'>{el.name}</div>
          <div className='contact-phone'>{el.phone}</div>
        </div>
        <div className='contact-buttons'>
          <button>
            <Link
              style={{ textDecoration: 'none', color: '#FFF' }}
              to={`/contatcs/${el.id}`}
            >
              <i className='fa fa-phone' aria-hidden='true'></i>
            </Link>
          </button>
        </div>
        <div
          onClick={e => onDeleteContentHandler(e, el.id)}
          className='contact-button-close'
        >
          <i className='fa fa-times' aria-hidden='true'></i>
        </div>
      </div>
    );
  });

  return <div>{showAll}</div>;
};
const mapStateToProps = state => ({
  contacts: state.contactMangment.suggestContacts,
  loading: state.contactMangment.loading
});

export default connect(mapStateToProps, { removeContact, getAllContact })(
  ShowContact
);
