import React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  image: {
    margin: 5,
    height: 100,
    width: 100
  }
});

const ButtonWithImage = ({ onPress, source }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={source} style={styles.image} />
    </TouchableOpacity>
  );
};

export default ButtonWithImage;

ButtonWithImage.propTypes = {
  onPress: PropTypes.func.isRequired,
  source: PropTypes.oneOfType([PropTypes.number, PropTypes.object]).isRequired
};
