import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const ProtectedRoutes = ({ user, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => (user ? <Component {...props} /> : <Redirect to="/" />)}
    />
  );
};
const mapStateToProps = state => ({
  user: 'john doe'
});

export default connect(mapStateToProps, null)(ProtectedRoutes);
