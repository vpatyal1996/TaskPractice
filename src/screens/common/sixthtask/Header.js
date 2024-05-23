// Header.js
import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const Header = ({ styles, leftIcon, title }) => {
  return (
    <View style={[defaultStyles.header, styles.header]}>
      <View style={[defaultStyles.text, styles.text]}>
        <Image source={leftIcon} />
      </View>
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
