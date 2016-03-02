import React, {
  StyleSheet,
  Text,
  View,
  TabBarIOS,
  PropTypes,
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as navigatorActions from '../reducers/navigator';

function mapStateToProps(state) {
  return {
    selectedTab: state.navigator.get('selectedTab'),
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(navigatorActions, dispatch);
}

import Icon from 'react-native-vector-icons/Ionicons';

const App = ({ selectedTab, gotoTab }) => {
  return (
    <TabBarIOS
      tintColor="white"
      barTintColor="#323232">
      <Icon.TabBarItem
        title="Topics"
        iconName="ios-chatboxes-outline"
        selectedIconName="ios-chatboxes"
        selected={ selectedTab === 'topics' }
        onPress={() => gotoTab('topics')}>
        <View style={ styles.tabContent }>
          <Text>Topics Tab</Text>
        </View>
      </Icon.TabBarItem>
      <Icon.TabBarItem
        title="Matches"
        iconName="ios-flame-outline"
        selectedIconName="ios-flame"
        selected={ selectedTab === 'matches' }
        onPress={() => gotoTab('matches')}>
        <View style={ styles.tabContent }>
          <Text>Matches Tab</Text>
        </View>
      </Icon.TabBarItem>
      <Icon.TabBarItem
        title="Create"
        iconName="ios-compose-outline"
        selectedIconName="ios-compose"
        selected={ selectedTab === 'create' }
        onPress={() => gotoTab('create')}>
        <View style={ styles.tabContent }>
          <Text>Create Tab</Text>
        </View>
      </Icon.TabBarItem>
    </TabBarIOS>
  );
};

App.displayName = 'App';
App.propTypes = {
  /**
   * The currently selected tab ID
   */
  selectedTab: PropTypes.oneOf(['create', 'topics', 'matches']).isRequired,
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
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
