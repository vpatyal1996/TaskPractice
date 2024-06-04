import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Sevevn = () => {
  const [data, setData] = useState([]);
  useEffect(()=>{
    fetchData();
  },[])
  const fetchData = async () => {
    try {
      const result = await axios.get(' https://fakestoreapi.com/products');
      setData(result.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };
console.log(data)
  return (
    <View style={styles.main}>
      <FlatList 
      data={data}
      renderItem={({item})=>(
         <View style={{backgroundColor:"red",flex:1}}>
            <Text>{item.category}</Text>
            <Text></Text>
         </View>
      )}
      keyExtractor={(item,index)=>index}
      />
    </View>
  );
};

export default Sevevn;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});
