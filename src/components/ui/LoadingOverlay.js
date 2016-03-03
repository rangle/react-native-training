import React, { View, ActivityIndicatorIOS, StyleSheet, PropTypes } from 'react-native';
import Overlay from 'react-native-overlay';
import { BlurView } from 'react-native-blur';

import defaultStyles from '../../styles';

const LoadingOverlay = ({ isVisible }) => {
  return (
    <View style={ styles.overlay }>
      <Overlay
        isVisible={ isVisible }>
        <ActivityIndicatorIOS
          size="large"
          animating={ true }
          style={ styles.spinner } />
      </Overlay>
    </View>
  );
};

LoadingOverlay.displayName = 'LoadingOverlay';
LoadingOverlay.propTypes = {
  /**
   * Whether to display the overlay or not
   */
  isVisible: PropTypes.bool,
};
LoadingOverlay.defaultProps = {
  isVisible: false,
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: defaultStyles.black,
  },
  spinner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 75,
  },
});

export default LoadingOverlay;
