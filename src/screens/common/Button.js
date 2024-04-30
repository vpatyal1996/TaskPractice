import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const Button1 = props => {
  console.log(props)
  return (
    <View>
      <TouchableOpacity onPress={props.onPress} disabled={props.disabled}>
        <LinearGradient colors={props.disabled ? ['#4c669f', '#3b5998', '#192f6a']:['#00BEF2', '#008DB4', '#005360']} style={styles.btn}  >
          <Text style={styles.textstyle}>{props.text}</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default Button1;

const styles = StyleSheet.create({
    
  btn: {
    backgroundColor: '#216F89',
    alignItems: 'center',
    borderRadius: 20,
    paddingVertical: 15,
    marginBottom: 60,
  },
  textstyle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
