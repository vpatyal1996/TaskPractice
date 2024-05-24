// Header.js
import React from 'react'
import { View, Text, Image, StyleSheet, Touchable, TouchableOpacity } from 'react-native'

const Header = ({ styles, leftIcon, title,handleModal }) => {
  return (
    <View style={[defaultStyles.header, styles.header]}>
      <TouchableOpacity onPress={handleModal} style={[defaultStyles.text, styles.text]}>
        <Image source={leftIcon} />
      </TouchableOpacity >
      <Text style={[defaultStyles.investText, styles.investText]}>{title}</Text>
      <Text style={[defaultStyles.text, styles.text]}></Text>
    </View>
  )
}

const defaultStyles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

  },
  text: {
    flex: 1,
  
  },
  investText: {
    flex: 1,
    textAlign: 'center',
  },
})

export default Header
