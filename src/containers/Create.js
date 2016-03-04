import React, { PropTypes, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as createActions from '../reducers/create';

function mapStateToProps(state) {
  return {
    hasError: state.create.get('hasError'),
    pending: state.create.get('pending'),
    showSuccess: state.create.get('showSuccess'),
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(createActions, dispatch);
}

import Scene from '../components/ui/Scene';
import CreateTopicForm from '../components/topics/CreateTopicForm';

const Create = ({ createTopic, hasError, showSuccess }) => {
  return (
    <Scene>
      <CreateTopicForm
        hasError={ hasError }
        showSuccess={ showSuccess }
        onSubmit={ createTopic } />
    </Scene>
  );
};

Create.displayName = 'Create';
Create.propTypes = {};
Create.defaultProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Create);
