import React, { Component, Fragment } from 'react';
import { getAllContact, filterContent } from '../../action/contact';
import ShowContact from '../../components/ShowContact';
import { connect } from 'react-redux';
import LoadingSpinner from '../../Layout/LoadingSpinner/LoadingSpinner';
import { Link } from 'react-router-dom';

import './Contact.css';
class Contact extends Component {
  componentDidMount = async () => {
    await this.props.getAllContact();
  };

  serchHandler = async e => {
    if (typeof e.currentTarget.value[0] === 'string') {
      let con = this.props.contacts.filter(
        suggestion =>
          suggestion.name.toLowerCase().indexOf(e.target.value.toLowerCase()) >
          -1
      );
      await this.props.filterContent(con);
    }
  };
  randomContectClickHandler = e => {};

  render() {
    return this.props.isLoading ? (
      <LoadingSpinner></LoadingSpinner>
    ) : (
      <Fragment>
        <div className='body'>
          <div className='contact-container'>
            <div className='search-input'>
              <input
                onChange={e => this.serchHandler(e)}
                type='text'
                name='userInput'
                placeholder='search in contacts...'
              />
              <div className='search-icon'>
                <i className='fa fa-search' aria-hidden='true'></i>
              </div>
            </div>
            <div className='contacts-container'>
              <ShowContact />
            </div>
            <div className='contact-new'>
              <Link to='/contatcs/new'>
                <i className='fa fa-user-plus' aria-hidden='true'></i>
              </Link>

              <button onClick={e => this.randomContectClickHandler}>
                <i
                  className='fa fa-random'
                  aria-hidden='true'
                  style={{ marginLeft: '15px' }}
                ></i>
              </button>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
const mapStateToProps = state => ({
  isLoading: state.contactMangment.loading,
  contacts: state.contactMangment.contacts
});

export default connect(mapStateToProps, { getAllContact, filterContent })(
  Contact
);
