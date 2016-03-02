import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  TabBarIOS,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

class App extends Component {
  constructor() {
    super();

    this.state = {
      selectedTab: 'topics',
    };
  }

  render() {
    return (
      <TabBarIOS
        tintColor="white"
        barTintColor="#323232">
        <Icon.TabBarItem
          title="Topics"
          iconName="ios-chatboxes-outline"
          selectedIconName="ios-chatboxes"
          selected={ this.state.selectedTab === 'topics' }
          onPress={() => {
            this.setState({
              selectedTab: 'topics',
            });
          }}>
          <View style={ styles.tabContent }>
            <Text>Topics Tab</Text>
          </View>
        </Icon.TabBarItem>
        <Icon.TabBarItem
          title="Matches"
          iconName="ios-flame-outline"
          selectedIconName="ios-flame"
          selected={ this.state.selectedTab === 'matches' }
          onPress={() => {
            this.setState({
              selectedTab: 'matches',
            });
          }}>
          <View style={ styles.tabContent }>
            <Text>Matches Tab</Text>
          </View>
        </Icon.TabBarItem>
        <Icon.TabBarItem
          title="Create"
          iconName="ios-compose-outline"
          selectedIconName="ios-compose"
          selected={ this.state.selectedTab === 'create' }
          onPress={() => {
            this.setState({
              selectedTab: 'create',
            });
          }}>
          <View style={ styles.tabContent }>
            <Text>Create Tab</Text>
          </View>
        </Icon.TabBarItem>
      </TabBarIOS>
    );
  }
}

const styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    alignItems: 'center',
    marginTop: 100,
  },
});

export default App;
