import { StyleSheet, Text, View,FlatList, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const searchBar = () => {
    const [data,setData]=useState([])
    const[filterData,setFilterData]=useState()
    console.log(filterData)
    useEffect(()=>{
        const url = 'https://fakestoreapi.com/products'
        const apiData= axios.get(url)
        .then((res)=>{
            setData(res.data)
            setFilterData(res.data)
        })
        .catch((err)=>{
            console.log("error----------->",err)
        })
        console.log(data)
    },[])
   console.log("data----------->",data)
   const handleFilter=(text)=>{
         const filter= data.filter(item=>item.category.includes(text))
         setFilterData(filter)    
   }
  return (
    <View style={{flex:1}}>
      <View style={{margin:10}}>
      <Text>searchBar</Text>
      <TextInput placeholder='search here ' onChangeText={(text)=>{handleFilter(text)}}/>
      </View>
      <FlatList
      data={filterData}
      renderItem={({item})=>(
        <View style={{flex:1,backgroundColor:"grey",margin:10}}>
            <Text style={{fontSize:20}}>{item.category}</Text>
        </View>
      )}
      />
    </View>
  )
}

export default searchBar

const styles = StyleSheet.create({})