import { Text, StyleSheet, View, Button } from 'react-native'
import React, { Component } from 'react'


export default class one extends Component {
  constructor(){
    super();
    this.state={name:'Visharat',lastName:'patiyal',name_t:'Vish',lastName_t:'patyal',chk:true}
  }
  changeString=()=>{
    this.setState({chk:!this.state.chk})
    
  }
  render() {
    return (
      <View style={{flex:1}}>
        {this.state.chk==true? <Text>Hello{this.state.name} {this.state.lastName}</Text>
        :
        <Text>Hello{this.state.name_t} {this.state.lastName_t}</Text>
        }
      
        <Button title='change string' onPress={this.changeString}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({})
