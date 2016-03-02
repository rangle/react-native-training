import React, { StyleSheet, PropTypes, View } from 'react-native';

import defaultStyles from '../../styles';

const Scene = ({ children }) => {
  return (
    <View style={ styles.content }>
      { children }
    </View>
  );
};

Scene.defaultName = 'Scene';
Scene.propTypes = {
  /**
   * The children to render inside the scene
   */
  children: PropTypes.node,
};
Scene.defaultProps = {};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingLeft: 64,
    paddingBottom: 64,
    paddingTop: 128,
    paddingRight: 64,
    backgroundColor: defaultStyles.white,
  },
});

export default Scene;
