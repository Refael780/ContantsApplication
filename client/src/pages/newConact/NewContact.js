import React, { Component, Fragment } from 'react';
import { getContent, getAllContact } from '../../action/contact';
import '../contract/Contact.css';
import { setImage } from '../../action/setImage';
import Imgrandom from '../../components/Imgrandom';
import { connect } from 'react-redux';
import AddContactsForm from '../../components/AddContactsForm';

class NewContact extends Component {
  state = {
    imgUrl: '',
    isLoading: true,
    isRedirect: false,
    disableButton: false
  };

  componentDidMount = async () => {
    ///if get id
    if (this.props.match.params.id !== null && this.props.match.params.id) {
      await this.props.getAllContact();
      await this.props.getContent(this.props.match.params.id);

      // if found content
      if (this.props.contant !== null && this.props.contant.length !== 0) {
        this.setState({ ...this.state, imgUrl: this.props.contant[0].avatar });
      } else {
        await this.props.setImage();

        this.setState({
          ...this.state,
          imgUrl: this.props.imgUrl,
          disableButton: true
        });
      }
    } else {
      await this.props.setImage();
      this.setState({
        ...this.state,
        imgUrl: this.props.imgUrl
      });
    }
  };
  changeImgHandler = () => {
    this.props.setImage();
  };
  render() {
    return (
      <Fragment>
        <div className='contact-container'>
          <div className='new-contact-container'>
            <div className='new-contact-avatar'>
              {console.log(this.state.imgUrl)}
              <Imgrandom Customimg={this.state.imgUrl}></Imgrandom>
              <button
                disabled={this.state.disableButton}
                onClick={() => this.changeImgHandler()}
              >
                <i className='fa fa-refresh' aria-hidden='true'></i>
              </button>
            </div>

            <AddContactsForm
              saveContant={this.props.contant}
              disabled={this.state.disableButton}
            />
          </div>
        </div>
      </Fragment>
    );
  }
}
const mapStateToProps = state => ({
  contant: state.contactMangment.contact,
  imgUrl: state.setImage.imgUrl
});

export default connect(mapStateToProps, {
  setImage,
  getContent,
  getAllContact
})(NewContact);
