// CommonButton.js

import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const Header = ({ text, imageSource, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image style={styles.image} source={imageSource} />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 3,
   
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF', 
  },
  image: {
    height: 20,
    width: 20,
   
  },
};

export default Header;
