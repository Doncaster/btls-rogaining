import React from 'react';
import {connect} from 'react-redux';
import actions from '../actions';

export class User extends React.Component {

  render() {
    return <div>User</div>;
  }
}

const mapStateToProps = (state) => {
  return {
  };
}

const mapDispatchToProps = dispatch => {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(User);
