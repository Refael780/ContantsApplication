import React, { Fragment, useState } from 'react';
import { setAlert } from '../action/setAlert';
import { setContact, getContent } from '../action/contact';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import AlertOn from '../Layout/AlertOn';
import 'bootstrap/dist/css/bootstrap.css';

const AddContactsForm = props => {
  // loacl state
  const [formData, setFormData] = useState({
    Name: '',
    Phone: '',
    Title: '',
    isRedirect: false
  });

  const errorMsg = [];

  const { Name, Phone, Title } = formData;
  let { isRedirect } = formData;

  const onChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const pushErrorMassage = msg => {
    errorMsg.push(msg);
    return false;
  };

  const checkValidity = (Name, Phone, Title) => {
    let isValid = true;
    isValid = Name.trim() !== '';
    if (!isValid) pushErrorMassage('Name is Requierd');
    isValid = Name.toString().length <= 30;
    if (!isValid) pushErrorMassage('Name field Cant be more 30 Numbers');
    isValid = Phone.trim() !== '';
    if (!isValid) pushErrorMassage('Phone is Requierd');
    isValid = Title.trim() !== '';
    if (!isValid) pushErrorMassage('Title is Requierd');
    isValid = Phone.toString().length <= 15;
    if (!isValid) pushErrorMassage('Phone Number Cant be more 30 Numbers');
    const phoneno = /^(\d+-?)+\d+$/;
    console.log(Phone.match(phoneno));

    isValid = Phone.match(phoneno) !== null;
    if (!isValid) pushErrorMassage('Iligal phone format');

    isValid = errorMsg.length > 0 ? false : true;
    return isValid;
  };

  const RegisterHandler = async e => {
    e.preventDefault();
    if (!checkValidity(Name, Phone, Title)) {
      props.setAlert(errorMsg);
    } else {
      await props.setContact(Name, Phone, Title, props.imgUrl);
      setFormData({ ...formData, isRedirect: true });
    }
  };

  const cencleHandler = e => {
    setFormData({ ...formData, isRedirect: true });
  };

  if (isRedirect) {
    return <Redirect to='/' />;
  }
  return (
    <Fragment>
      <div className='new-contact-inputs'>
        <form>
          <div className='new-contact-input'>
            <label>Name</label>
            <input
              value={Name.value}
              onChange={e => onChange(e)}
              required
              name='Name'
              type='text'
            />
          </div>
          <div className='new-contact-input'>
            <label>Phone</label>

            <input
              value={Phone.value}
              onChange={e => onChange(e)}
              required
              name='Phone'
              type='text'
            />
          </div>
          <div className='new-contact-input'>
            <label>Title</label>
            <input
              value={Title.value}
              onChange={e => onChange(e)}
              required
              name='Title'
              type='text'
            />
          </div>
          <div className='new-contact-buttons'>
            <button
              onClick={e => RegisterHandler(e)}
              type='submit'
              className='button-ok'
            >
              Save
            </button>
            <button
              onClick={e => cencleHandler(e)}
              type='submit'
              className='button-cancel'
            >
              Cancel
            </button>
          </div>
          <AlertOn></AlertOn>
        </form>
      </div>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  imgUrl: state.setImage.imgUrl,
  contact: state.contactMangment.contact
});

export default connect(mapStateToProps, { setAlert, setContact, getContent })(
  AddContactsForm
);
