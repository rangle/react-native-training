import React, {
  PropTypes,
  StyleSheet,
  View,
} from 'react-native';

const FormGroup = ({ children }) => {
  return (
    <View style={ styles.formGroup }>{ children }</View>
  );
}

FormGroup.defaultName = 'FormGroup';
FormGroup.propTypes = {
  /**
   * The children to render inside the form group
   */
  children: PropTypes.node,
};
FormGroup.defaultProps = {};

const styles = StyleSheet.create({
  formGroup: {
    marginBottom: 15,
  },
});

export default FormGroup;
