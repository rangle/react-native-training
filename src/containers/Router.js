import React, {
  PropTypes,
  Navigator,
  Component,
} from 'react-native';
import { connect } from 'react-redux';

import App from './App';
import LoginForm from '../components/login/LoginForm';
import Scene from '../components/ui/Scene';

class Router extends Component {
  _renderScene(route, nav) {
    switch(route.id) {
      case 'loggedIn':
        return (
          <App navigator={ nav } />
        );

      case 'loggedOut':
        return (
          <Scene>
            <LoginForm onSubmit={ () => nav.push({ id: 'loggedIn' }) } />
          </Scene>
        );
    }
  }

  render() {
    return (
      <Navigator
        sceneStyle={{ backgroundColor: 'white' }}
        initialRouteStack={[
          { id: 'loggedOut' },
          // { id: 'loggedIn' },
        ]}
        renderScene={ this._renderScene }
        configureScene={(route) => {
          if (route.sceneConfig) {
            return route.sceneConfig;
          }

          return Navigator.SceneConfigs.FloatFromRight;
        }}
      />
    );
  }
}

export default Router;
