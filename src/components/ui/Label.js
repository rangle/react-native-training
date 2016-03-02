import React, {
  PropTypes,
  StyleSheet,
  Text,
} from 'react-native';

import defaultStyles from '../../styles';

const Label = ({ children }) => {
  return (
    <Text style={ styles.label }>{ children }</Text>
  );
}

Label.defaultName = 'Label';
Label.propTypes = {
  /**
   * The text to place inside the label
   */
  children: PropTypes.string,
};
Label.defaultProps = {
  children: '',
};

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontWeight: '300',
    color: defaultStyles.almostBlack,
    marginBottom: 5,
  },
});

export default Label;
