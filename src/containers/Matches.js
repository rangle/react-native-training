import React, {
  StyleSheet,
  Text,
  View,
  Component,
  ActivityIndicatorIOS,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as matchActions from '../reducers/matches';

function mapStateToProps(state) {
  return {
    matches: state.matches.get('result'),
    currentUserId: state.session.get('id'),
    pending: state.matches.get('pending'),
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(matchActions, dispatch);
}

import Button from '../components/ui/Button';
import Alert from '../components/ui/Alert';
import Scene from '../components/ui/Scene';
import LoadingOverlay from '../components/ui/LoadingOverlay';

class Matches extends Component {
  componentDidMount() {
    this.props.viewMatches();
  }

  render() {
    const {
      currentUserId,
      matches,
      pending,
    } = this.props;

    if (pending) {
      return (
        <Scene>
          <ActivityIndicatorIOS
            style={{
              height: 300,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            size="large" />
        </Scene>
      );
    }

    if (matches.size === 0) {
      return (
        <Scene>
          <Alert type="info">No matches found! Check back soon!</Alert>
        </Scene>
      );
    }

    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Text>
          { JSON.stringify(matches) }
        </Text>
      </View>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Matches);
