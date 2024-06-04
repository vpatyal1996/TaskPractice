import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Btn = ({onPress,btnText}) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress} style={styles.btn_container}>
        <Text style={styles.btn_text}>{btnText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Btn;

const styles = StyleSheet.create({
    btn_container:{
        backgroundColor:'#c6c6e6',
        width:'16%',
        alignItems:'center',
        justifyContent:'center',
        padding:'2%',
        borderRadius:5
    },
    btn_text:{
        color:'white',
        fontWeight:'bold',
        
    }
});
