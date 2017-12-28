import React from 'react';
import {connect} from 'react-redux';
import * as Firebase from 'firebase';
import actions from '../actions';

export class App extends React.Component {

  componentWillMount() {
    this.checkUserInfo(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.checkUserInfo(nextProps);
  }

  checkUserInfo = props => {
    const {userInfo, fetchUser} = props;

    if(!userInfo) {
      fetchUser();
    } else if(!userInfo.user) {
      Firebase.auth().signInWithRedirect(new Firebase.auth.GoogleAuthProvider());
    }
  }

  render() {
    return (
      <div>Toimii!</div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userInfo: state.userInfo
  };
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: () => dispatch(actions.fetchUser())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
