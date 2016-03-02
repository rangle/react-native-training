import React, {
  PropTypes,
  StyleSheet,
  TextInput,
} from 'react-native';

import defaultStyles from '../../styles';

const Input = ({ children, onChange, value, placeholder }) => {
  return (
    <TextInput
      style={ styles.input }
      onChangeText={ onChange }
      placeholder={ placeholder }
      value={ value }
    />
  );
}

Input.defaultName = 'Input';
Input.propTypes = {
  /**
   * When the text changes, fire this function
   */
  onChange: PropTypes.func,
  /**
   * The value of the input
   */
  value: PropTypes.string,
  /**
   * The value of the placeholder
   */
  placeholder: PropTypes.string,
};
Input.defaultProps = {
  onChange: () => {},
  value: '',
  placeholder: '',
};

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
