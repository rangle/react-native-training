import React, { View, Text, PropTypes } from 'react-native';
import { reduxForm } from 'redux-form';

import Button from '../ui/Button';
import Input from '../ui/Input';
import Label from '../ui/Label';
import Alert from '../ui/Alert';
import FormGroup from '../ui/FormGroup';

const CreateTopicForm = (props) => {
  const {
    fields: { title, description },
    handleSubmit,
    hasError,
    showSuccess,
  } = props;

  return (
    <View>
      <FormGroup>
        <Label>Title</Label>
        <Input
          returnKeyType="go"
          autoCorrect={ false }
          autoCapitalize="none"
          { ...title } />
      </FormGroup>

      <FormGroup>
        <Label>Description</Label>
        <Input
          returnKeyType="go"
          autoCorrect={ false }
          autoCapitalize="none"
          { ...description } />
      </FormGroup>

      {(() => {
        if (hasError) {
          return (
            <Alert type="error">
              Invalid title or description.
            </Alert>
          );
        }
      })()}

      {(() => {
        if (showSuccess) {
          return (
            <Alert type="success">
              Successfully created topic.
            </Alert>
          );
        }
      })()}

      <Button
        style={{
          borderRadius: 100,
          marginTop: 15,
        }}
        onPress={ handleSubmit }
        type="success">
        Create
      </Button>
    </View>
  );
};

CreateTopicForm.displayName = 'CreateTopicForm';
CreateTopicForm.propTypes = {
  /**
   * Whether the form should display its error message
   */
  hasError: PropTypes.bool,
  /**
   * Whether the form should display its success message
   */
  showSuccess: PropTypes.bool,
  /**
   * Redux form defintion
   */
  fields: PropTypes.object,
  /**
   * When the form is submitted, this function is called
   */
  handleSubmit: PropTypes.func,
};
CreateTopicForm.defaultProps = {
  hasError: false,
  showSuccess: false,
  handleSubmit: () => {},
};

export default reduxForm({
  form: 'login',
  fields: ['title', 'description'],
})(CreateTopicForm);
