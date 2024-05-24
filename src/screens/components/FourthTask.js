import { Button, StyleSheet, Switch, Text, TextInput, View, useColorScheme } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import Slider from '@react-native-community/slider';
import colors from '../../theme/Colors';
import { AppContext } from '../../theme/AppContext';
import { useTheme } from '@react-navigation/native';

const FourthTask = ({navigation}) => {
  
  const [per, setPer] = useState('');
  const [number, onChangeNumber] = React.useState('');
  const [value, setValue] = useState();
  const [perGet, setPerGet] = useState();
  

  // console.log({per})
  const{isDarkTheme,setIsDarkTheme,storeUser} = useContext(AppContext)
  
  // console.log(isDarkTheme)
  const {colors: themeColor} = useTheme()

  // const handleClick = () => {
  //   onChangeNumber('');
  // };

  useEffect(() => {
    setValue(number);

    if (number !== '' && per !== '') {
      const perValue = parseInt(per) / 100;
      const result = number * perValue;
      setPerGet(result);
    } else {
      setValue(0);
      setPerGet(0);
    }
  }, [per, number]);


  const handleClick=(theme)=>{
    setIsDarkTheme(prev=>!prev)
    storeUser(!theme)
    
  }
  
  

  return (
    <View style={[styles.container,{backgroundColor:themeColor.background}]}>
      <View style={styles.value}>
        <Text style={styles.value_text}>Balance: </Text>
        <Text style={styles.value_number}>{value}</Text>
      </View>
      <View style={styles.value}>
        <Text style={styles.value_text}>Percentage: </Text>
        <Text style={styles.value_number}>{perGet}</Text>
      </View>
      <View style={styles.value}>
        <Text style={styles.value_text}>Select Percentage: </Text>
        <Text style={styles.value_number}>{per}</Text>
      </View>
      <View style={styles.slider_container}>
        <Slider
          style={{ width: 200, height: 40 }}
          minimumValue={0}
          maximumValue={100}
          value={1}
          onValueChange={(val) => setPer(parseInt(val) + '%')}
          minimumTrackTintColor="red"
          maximumTrackTintColor="#000000"
        />
      </View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Enter number"
        keyboardType="numeric"
      />
      <Switch value={isDarkTheme} onChange={()=>handleClick(isDarkTheme)}/>
      <Button title='next page' onPress={()=>navigation.navigate('invest')}/>
    </View>
  );
};

export default FourthTask;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.lightCardBg,
    
  },
  value: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  value_text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.drk_grey, 
  },
  value_number: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555', 
  },
  slider_container: {
    alignItems: 'center',
    marginBottom: 20,
    
  },
  input: {
    height: 40,
    width: '80%',
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: '#ccc',
    backgroundColor: '#fff', 
    color: '#333', 
  },
});
