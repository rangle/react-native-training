import React, { View, Text, PropTypes } from 'react-native';
import { reduxForm } from 'redux-form';

import Button from '../ui/Button';
import Input from '../ui/Input';
import Label from '../ui/Label';
import FormGroup from '../ui/FormGroup';

const RegisterForm = (props) => {
  const {
    fields: {
      username,
      password,
      email,
      displayName,
    },
    handleSubmit,
    hasError,
  } = props;

  return (
    <View>
      <FormGroup>
        <Label>Username</Label>
        <Input
          autoCorrect={ false }
          autoCapitalize="none"
          { ...username } />
      </FormGroup>

      <FormGroup>
        <Label>Password</Label>
        <Input
          autoCorrect={ false }
          autoCapitalize="none"
          { ...password } />
      </FormGroup>

      <FormGroup>
        <Label>E-mail</Label>
        <Input
          autoCorrect={ false }
          autoCapitalize="none"
          { ...email } />
      </FormGroup>

      <FormGroup>
        <Label>Display Name</Label>
        <Input
          autoCorrect={ false }
          autoCapitalize="none"
          { ...displayName } />
      </FormGroup>

      <Button
        style={{
          borderRadius: 100,
          marginTop: 15,
        }}
        onPress={ handleSubmit }
        type="success">
        Register
      </Button>
    </View>
  );
};

RegisterForm.displayName = 'RegisterForm';
RegisterForm.propTypes = {
  /**
   * Redux form defintion
   */
  fields: PropTypes.object,
  /**
   * When the form is submitted, this function is called
   */
  handleSubmit: PropTypes.func,
};
RegisterForm.defaultProps = {
  handleSubmit: () => {},
};

export default reduxForm({
  form: 'register',
  fields: ['username', 'password', 'email', 'displayName'],
})(RegisterForm);
