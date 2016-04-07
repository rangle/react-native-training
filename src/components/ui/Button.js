import React, {
  Text,
  PropTypes,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import defaultStyles from '../../styles';

const buttonTypes = {
  info: { fill: defaultStyles.blue, text: defaultStyles.white },
  success: { fill: defaultStyles.lime, text: defaultStyles.black },
  warning: { fill: defaultStyles.red, text: defaultStyles.white },
};

const Button = ({ children, onPress, type, style }) => {
  return (
    <TouchableOpacity
      onPress={ onPress }
      style={[
        styles.button,
        { backgroundColor: buttonTypes[type].fill },
        style,
      ]}>
      <Text style={[
        styles.text,
        { color: buttonTypes[type].text }
      ]}>
        { children }
      </Text>
    </TouchableOpacity>
  );
};

Button.defaultName = 'Button';
Button.propTypes = {
  /**
   * Function to fire when clicked on
   */
  onPress: PropTypes.func,
  /**
   * Text to render inside the button
   */
  children: PropTypes.node,
  /**
   * Type of button to render, one of info, success or warning
   */
  type: PropTypes.oneOf(['info', 'success', 'warning']),
  /**
   * Styles to attach to the button
   */
  style: PropTypes.object,
};
Button.defaultProps = {
  onPress: () => {},
  children: '',
  type: 'info',
  style: {},
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    marginTop: 8,
    marginBottom: 16,
    backgroundColor: 'lightblue',
    borderRadius: 3,
  },
  text: {
    color: 'black',
    textAlign: 'center',
  },
});

export default Button;
