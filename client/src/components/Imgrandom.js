import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import LoadingSpinner from '../Layout/LoadingSpinner/LoadingSpinner';
const Imgrandom = props => {
  return props.isLoading ? (
    <LoadingSpinner />
  ) : (
    <Fragment>
      <img src={props.imgUrl} alt='avatar' />
    </Fragment>
  );
};

const mapStateToProps = state => ({
  imgUrl: state.setImage.imgUrl,
  isLoading: state.setImage.isLoading
});
export default connect(mapStateToProps, null)(Imgrandom);
