import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Alert } from 'reactstrap';

const AlertOn = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts[0].msg.map(alert => (
    <Fragment>
      <Alert key={alert.id} color='danger'>
        {alert}
        {console.log(alert)}
      </Alert>
    </Fragment>
  ));

AlertOn.propTypes = {
  alerts: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  alerts: state.alert
});

export default connect(mapStateToProps)(AlertOn);
