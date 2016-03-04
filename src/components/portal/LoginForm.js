import React, { View, Text, PropTypes } from 'react-native';
import { reduxForm } from 'redux-form';

import Button from '../ui/Button';
import Input from '../ui/Input';
import Label from '../ui/Label';
import FormGroup from '../ui/FormGroup';
import Alert from '../ui/Alert';

const LoginForm = (props) => {
  const {
    fields: { username, password },
    handleSubmit,
    hasError,
  } = props;

  return (
    <View>
      <FormGroup>
        <Label>Username</Label>
        <Input
          returnKeyType="go"
          autoCorrect={ false }
          autoCapitalize="none"
          { ...username } />
      </FormGroup>

      <FormGroup>
        <Label>Password</Label>
        <Input
          returnKeyType="go"
          autoCorrect={ false }
          autoCapitalize="none"
          { ...password } />
      </FormGroup>

      {(() => {
        if (hasError) {
          return (
            <Alert type="warning">
              Invalid username or password.
            </Alert>
          );
        }
      })()}

      <Button
        style={{
          borderRadius: 100,
          marginTop: 15,
        }}
        onPress={ () => handleSubmit() }
        type="info">
        Login
      </Button>
    </View>
  );
};

LoginForm.displayName = 'LoginForm';
LoginForm.propTypes = {
  /**
   * Redux form defintion
   */
  fields: PropTypes.object,
  /**
   * When the form is submitted, this function is called
   */
  handleSubmit: PropTypes.func,
};
LoginForm.defaultProps = {
  handleSubmit: () => {},
};

export default reduxForm({
  form: 'login',
  fields: ['username', 'password'],
})(LoginForm);
