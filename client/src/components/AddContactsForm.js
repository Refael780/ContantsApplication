import React, { Fragment, useState, useEffect } from 'react';
import { setAlert } from '../action/setAlert';
import { setContact, getContent, updateContact } from '../action/contact';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import AlertOn from '../Layout/AlertOn';
import 'bootstrap/dist/css/bootstrap.css';

// // this Fcomponent  that charge on the form component
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
  useEffect(() => {
    if (props.disabled) {
      const msg = 'The selected contact does not exist';
      errorMsg.push(msg);
      props.setAlert(errorMsg);
    } else {
      if (props.saveContant != null) {
        if (props.saveContant.length > 0) {
          setFormData({
            ...formData,
            Name: props.saveContant[0].name,
            Phone: props.saveContant[0].phone,
            Title: props.saveContant[0].title
          });
        }
      }
    }
  }, [props.saveContant, props.disabled]);

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

    // Reg expression for validate phone Number
    const phoneno = /^(\d+-?)+\d+$/;

    isValid = Phone.match(phoneno) !== null;
    if (!isValid) pushErrorMassage('Iligal phone format');

    isValid = errorMsg.length > 0 ? false : true;
    return isValid;
  };

  const RegisterHandler = async e => {
    e.preventDefault();
    if (!checkValidity(Name, Phone, Title)) {
      console.log(props.saveContant[0].id);
      props.setAlert(errorMsg);
    } else {
      if (props.saveContant !== null) {
        await props.updateContact(
          props.saveContant[0].id,
          Name,
          Phone,
          Title,
          props.saveContant[0].avatar
        );
        setFormData({ ...formData, isRedirect: true });
      } else {
        await props.setContact(Name, Phone, Title, props.imgUrl);
        setFormData({ ...formData, isRedirect: true });
      }
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
              value={Name}
              onChange={e => onChange(e)}
              required
              name='Name'
              type='text'
              disabled={props.disabled}
            />
          </div>
          <div className='new-contact-input'>
            <label>Phone</label>

            <input
              value={Phone}
              onChange={e => onChange(e)}
              required
              name='Phone'
              type='text'
              disabled={props.disabled}
            />
          </div>
          <div className='new-contact-input'>
            <label>Title</label>
            <input
              value={Title}
              onChange={e => onChange(e)}
              required
              name='Title'
              type='text'
              disabled={props.disabled}
            />
          </div>
          <div className='new-contact-buttons'>
            <button
              onClick={e => RegisterHandler(e)}
              type='submit'
              className='button-ok'
              disabled={props.disabled}
            >
              Save
            </button>
            <button
              onClick={e => cencleHandler(e)}
              type='submit'
              className='button-cancel'
              disabled={props.disabled}
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

export default connect(mapStateToProps, {
  setAlert,
  setContact,
  getContent,
  updateContact
})(AddContactsForm);
