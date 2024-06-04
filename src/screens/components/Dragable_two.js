import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import DraggableFlatList, {
    ScaleDecorator,
  } from 'react-native-draggable-flatlist';


const Dragable_two = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then(response => {
        setdata(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  console.log(data);
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.header}>
      <Text style={styles.header_text}>List Data</Text>
      </View>
      {/* flatlist Data  */}
      <DraggableFlatList
        data={data}
        onDragEnd={({data}) => setdata(data)}
        renderItem={({item,drag}) => (
          <TouchableOpacity onLongPress={drag} style={styles.flatlist_container}>
            <Image style={styles.image} source={{uri:item.image}}/>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.title}>{item.price}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item=>item.id)}
      />
    </SafeAreaView>
  );
};

export default Dragable_two;

const styles = StyleSheet.create({
  main: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : null,
    flex: 1,
    backgroundColor:'grey'
  },
  header: {
    alignItems: 'center',
  },
  header_text: {
    color: 'white',
    fontSize: 18,
  },
  title: {
    color: 'white',
  },
  flatlist_container: {
    margin: '5%',
    borderWidth:1,
    borderRadius:10,
    padding:10
  },
  image:{
    height:150,
    width:150,
    borderRadius:10
  }
});
