import React, {
  PropTypes,
  StyleSheet,
  View,
  Text,
} from 'react-native';

import defaultStyles from '../../styles';

const colors = {
  warning: defaultStyles.red,
  info: defaultStyles.black,
  success: defaultStyles.green,
};

const Alert = ({ type, children }) => {
  return (
    <View style={ styles.alert }>
      <Text style={{ color: colors[type], textAlign: 'center' }}>{ children }</Text>
    </View>
  );
}

Alert.defaultName = 'Alert';
Alert.propTypes = {
  /**
   * The children to render inside the form group
   */
  children: PropTypes.node,
  /**
   * The type of alert to display
   */
  type: PropTypes.oneOf(['success', 'warning', 'info']),
};
Alert.defaultProps = {
  children: '',
  type: 'info',
};

const styles = StyleSheet.create({
  alert: {
    marginBottom: 15,
  },
});

export default Alert;
