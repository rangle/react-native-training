import React, {
  StyleSheet,
  Text,
  View,
  TabBarIOS,
  PropTypes,
  TouchableOpacity,
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import defaultStyles from '../styles';

import Button from '../components/ui/Button';

import * as navigatorActions from '../reducers/navigator';

function mapStateToProps(state) {
  return {
    selectedTab: state.navigator.get('selectedTab'),
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(navigatorActions, dispatch);
}

import Create from './Create';
import Topics from './Topics';
import Matches from './Matches';
import Settings from './Settings';
import Icon from 'react-native-vector-icons/Ionicons';

const App = (props) => {
  const { selectedTab, gotoTab, navigator } = props;

  return (
    <TabBarIOS
      tintColor={ defaultStyles.white }
      barTintColor={ defaultStyles.black }>
      <Icon.TabBarItem
        title="Topics"
        iconName="ios-chatboxes-outline"
        selectedIconName="ios-chatboxes"
        selected={ selectedTab === 'topics' }
        onPress={() => gotoTab('topics')}>
        <Topics />
      </Icon.TabBarItem>
      <Icon.TabBarItem
        title="Matches"
        iconName="ios-flame-outline"
        selectedIconName="ios-flame"
        selected={ selectedTab === 'matches' }
        onPress={() => gotoTab('matches')}>
        <Matches />
      </Icon.TabBarItem>
      <Icon.TabBarItem
        title="Create"
        iconName="ios-compose-outline"
        selectedIconName="ios-compose"
        selected={ selectedTab === 'create' }
        onPress={() => gotoTab('create')}>
        <Create />
      </Icon.TabBarItem>
      <Icon.TabBarItem
        title="Settings"
        iconName="ios-gear-outline"
        selectedIconName="ios-gear"
        selected={ selectedTab === 'settings' }
        onPress={() => gotoTab('settings')}>
        <Settings />
      </Icon.TabBarItem>
    </TabBarIOS>
  );
};

App.displayName = 'App';
App.propTypes = {
  /**
   * The currently selected tab ID
   */
  selectedTab: PropTypes.oneOf(['create', 'topics', 'matches', 'settings']).isRequired,
  /**
   * The function to perform when a tab bar item is clicked
   */
  gotoTab: PropTypes.func,
};
App.defaultProps = {
  gotoTab: () => {},
};

const styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    alignItems: 'center',
    marginTop: 100,
  },
  button: {
    padding: 10,
    margin: 5,
    backgroundColor: 'lightblue',
    borderRadius: 3,
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
