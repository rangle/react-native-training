import React, {
  StyleSheet,
  Text,
  View,
  Component,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as sessionActions from '../reducers/session';

function mapStateToProps(state) {
  return {
    displayName: state.session.get('displayName'),
    username: state.session.get('username'),
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(sessionActions, dispatch);
}

import Button from '../components/ui/Button';
import Scene from '../components/ui/Scene';
import FormGroup from '../components/ui/FormGroup';

const Matches = ({ logout, displayName, username }) => {
  return (
    <Scene>
      <FormGroup>
        <Text style={{ fontWeight: 'bold' }}>Display Name</Text>
        <Text>{ displayName }</Text>
      </FormGroup>

      <FormGroup>
        <Text style={{ fontWeight: 'bold' }}>Username</Text>
        <Text>{ username }</Text>
      </FormGroup>

      <Button
        type="warning"
        onPress={ logout }>
        Logout
      </Button>
    </Scene>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Matches);
