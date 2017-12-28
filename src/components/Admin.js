import React from 'react';
import {connect} from 'react-redux';
import actions from '../actions';

export class Admin extends React.Component {

  render() {
    return <div>Admin</div>;
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

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
