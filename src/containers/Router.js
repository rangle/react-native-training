import React, {
  Navigator,
  Component,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import App from './App';
import Portal from './Portal';
import LoadingOverlay from '../components/ui/LoadingOverlay';

function mapStateToProps(state) {
  return {
    initialized: state.navigator.get('initialized'),
    authenticated: state.session.get('sessionToken') !== null,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

class Router extends Component {
  _renderScene(route, nav) {
    switch(route.id) {
      case 'loggedIn':
        return <App />

      case 'loggedOut':
        return <Portal />;
    }
  }

  componentWillReceiveProps(nextProps) {
    const prevProps = this.props;

    // When a users authentication changes, we need to push or
    // pop the new scene into place. We also need to ignore the initial
    // value, so we watch for a change to the initialized property.
    if (nextProps.authenticated !== prevProps.authenticated && prevProps.initialized === true) {
      const navigator = this.refs.sceneNavigator;

      if (nextProps.authenticated === true) {
        navigator.push({ id: 'loggedIn' }); // Push to App
      } else {
        navigator.pop(); // Pop to Login
      }
    }
  }

  render() {
    const { authenticated, initialized } = this.props;

    if (initialized) {
      return (
        <Navigator
          ref="sceneNavigator"
          sceneStyle={{ backgroundColor: 'white' }}
          initialRouteStack={
            authenticated ?
              [{ id: 'loggedOut' }, { id: 'loggedIn' }] :
              [{ id: 'loggedOut' }]
          }
          renderScene={ this._renderScene.bind(this) }
          configureScene={(route) => {
            if (route.sceneConfig) {
              return route.sceneConfig;
            }

            return Navigator.SceneConfigs.FloatFromRight;
          }}
        />
      );
    } else {
      return (
        <LoadingOverlay isVisible={ true } />
      );
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Router);
