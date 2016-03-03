import React, { Text, PropTypes, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as sessionActions from '../reducers/session';
import * as navigatorActions from '../reducers/navigator';

function mapStateToProps(state) {
  return {
    showRegistration: state.navigator.get('showRegistration'),
    loginError: state.session.get('hasError'),
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    ...sessionActions,
    ...navigatorActions,
  }, dispatch);
}

import Scene from '../components/ui/Scene';
import LoginForm from '../components/portal/LoginForm';
import RegisterForm from '../components/portal/RegisterForm';

const Portal = (props) => {
  const {
    loginError,
    login,
    register,
    showRegistration,
    switchPortal,
  } = props;

  return (
    <Scene>
      {
        (() => {
          return showRegistration ?
            <RegisterForm
              hasError={ loginError }
              onSubmit={ register } /> :
            <LoginForm
              hasError={ loginError }
              onSubmit={ login } />
        })()
      }
      <TouchableOpacity onPress={ switchPortal }>
        <Text style={{ textAlign: 'center', padding: 10 }}>or { showRegistration ? 'Login' : 'Register' }</Text>
      </TouchableOpacity>
    </Scene>
  );
};

Portal.displayName = 'Portal';
Portal.propTypes = {};
Portal.defaultProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Portal);
