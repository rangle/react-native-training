import React, {
  Text,
  View,
  PropTypes,
  Navigator,
  Component,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import Button from '../ui/Button';
import Input from '../ui/Input';
import Label from '../ui/Label';
import FormGroup from '../ui/FormGroup';

const LoginForm = ({ onSubmit }) => {
  return (
    <View style={ styles.content }>
      <FormGroup>
        <Label>Username</Label>
        <Input />
      </FormGroup>

      <FormGroup>
        <Label>Password</Label>
        <Input />
      </FormGroup>

      <Button
        style={{
          borderRadius: 100,
          marginTop: 15,
        }}
        onPress={ onSubmit }
        type="info">
        Submit
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
});

export default LoginForm;
