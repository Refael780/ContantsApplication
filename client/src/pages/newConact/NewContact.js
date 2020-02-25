import React, { Component, Fragment } from 'react';
import '../contract/Contact.css';
import { setImage } from '../../action/setImage';
import Imgrandom from '../../components/Imgrandom';
import { connect } from 'react-redux';
import AddContactsForm from '../../components/AddContactsForm';

class NewContact extends Component {
  state = {
    imgUrl: '',
    isLoading: true,
    isRedirect: false
  };

  componentDidMount = () => {
    this.props.setImage();
  };
  changeImgHandler = () => {
    console.log('Enter');

    this.props.setImage();
  };
  render() {
    return (
      <Fragment>
        <div className='contact-container'>
          <div className='new-contact-container'>
            <div className='new-contact-avatar'>
              <Imgrandom></Imgrandom>
              <button onClick={() => this.changeImgHandler()}>
                <i className='fa fa-refresh' aria-hidden='true'></i>
              </button>
            </div>

            <AddContactsForm />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default connect(null, { setImage })(NewContact);
