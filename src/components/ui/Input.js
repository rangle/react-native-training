import React, {
  PropTypes,
  StyleSheet,
  TextInput,
} from 'react-native';

import defaultStyles from '../../styles';

const Input = (props) => {
  return (
    <TextInput style={ styles.input } { ...props } />
  );
}

Input.defaultName = 'Input';
Input.propTypes = {};
Input.defaultProps = {};

const styles = StyleSheet.create({
  input: {
    height: 40,
    backgroundColor: defaultStyles.lightgray,
    borderRadius: 3,
    color: defaultStyles.black,
    padding: 10,
  },
});

export default Input;
