import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import LoadingSpinner from '../Layout/LoadingSpinner/LoadingSpinner';

// this Fcomponent show random  avatar
const Imgrandom = props => {
  let src = props.Customimg;

  return (
    <Fragment>
      <img src={src} alt='avatar' />
    </Fragment>
  );
};

const mapStateToProps = state => ({
  imgUrl: state.setImage.imgUrl,
  isLoading: state.setImage.isLoading
});
export default connect(mapStateToProps, null)(Imgrandom);
