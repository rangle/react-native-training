import React, {
  StyleSheet,
  Text,
  View,
  Component,
  ActivityIndicatorIOS,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as topicActions from '../reducers/topics';

function mapStateToProps(state) {
  return {
    pending: state.topics.get('pending'),
    currentCard: state.topics.get('result'),
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(topicActions, dispatch);
}

import Button from '../components/ui/Button';
import Alert from '../components/ui/Alert';
import Scene from '../components/ui/Scene';
import LoadingOverlay from '../components/ui/LoadingOverlay';

class Topics extends Component {
  componentDidMount() {
    this.props.requestTopics();
  }

  render() {
    const {
      currentCard,
      markInterested,
      markUninterested,
    } = this.props;

    if (this.props.pending) {
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

    if (!currentCard) {
      return (
        <Scene>
          <Alert type="info">No more cards left!</Alert>
        </Scene>
      );
    }

    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <View style={{
            height: 300,
            width: 300,
            backgroundColor: 'blue',
            justifyContent: 'center',
            alignItems: 'center',
         }}>
          <Text style={{ color: 'white' }}>
            { currentCard.get('title') }
          </Text>
          <Text style={{ color: 'white' }}>
            { currentCard.get('description') }
          </Text>
        </View>
        <Button
          onPress={() => markInterested(currentCard)}
          type="success"
          style={{ margin: 15, width: 100 }}>Yes</Button>
        <Button
          onPress={() => markUninterested(currentCard)}
          type="warning"
          style={{ margin: 15, width: 100 }}>No</Button>
      </View>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Topics);
