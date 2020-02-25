import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Alert } from 'reactstrap';

// this Fcomponent show Coustom Alert

const AlertOn = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts[0].msg.map(alert => (
    <Fragment key={alert.id}>
      <Alert key={alert.id} color='danger'>
        {alert}
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
