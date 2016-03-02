import React, {
  StyleSheet,
  PropTypes,
  Text,
  View,
  Image,
} from 'react-native';

const Card = ({ text, backgroundColor }) => {
  return (
    <View style={[
      styles.card,
      { backgroundColor: backgroundColor },
    ]}>
      <Text>{ text }</Text>
    </View>
  );
};

Card.displayName = 'Card';
Card.propTypes = {
  /**
   * The color of the card background
   */
  backgroundColor: PropTypes.string,
  /**
   * The text to display on the card
   */
  text: PropTypes.string,
};
Card.defaultProps = {
  backgroundColor: '#fff',
  text: '',
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 300,
  },
});

export default Card;
