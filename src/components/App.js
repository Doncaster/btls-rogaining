import React from 'react';
import {connect} from 'react-redux';
import * as Firebase from 'firebase';

import Admin from './admin/Admin';
import User from './User';

import actions from '../actions';

export class App extends React.Component {

  componentWillMount() {
    this.checkUserInfo(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.checkUserInfo(nextProps);
  }

  checkUserInfo = props => {
    const {userInfo, fetchInitialData} = props;

    if(!userInfo) {
      fetchInitialData();
    } else if(!userInfo.user) {
      Firebase.auth().signInWithRedirect(new Firebase.auth.GoogleAuthProvider());
    }
  }

  render() {
    const {userInfo, adminUid} = this.props;
    if (!userInfo) {
      return <div>Loading</div>;
    }
    const isAdmin = userInfo.user && userInfo.user.uid === adminUid;
    return isAdmin ? <Admin/> : <User/>;
  }
}

const mapStateToProps = (state) => {
  return {
    userInfo: state.userInfo,
    adminUid: state.adminUid
  };
}

const mapDispatchToProps = dispatch => {
  return {
    fetchInitialData: () => dispatch(actions.fetchInitialData())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
