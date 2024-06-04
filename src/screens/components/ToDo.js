import {
  Button,
  FlatList,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Btn from '../common/ToDo/ToDoBtn';

const ToDo = () => {
  const [taskdata, setTaskdata] = useState('');
  console.log(taskdata);
  const [abc, setAbc] = useState('');
  const [editData, setEditData] = useState('');
  //   console.log(taskdata);
  console.log({editData});

  const addItem = () => {
    setAbc([...abc, taskdata]);
    setTaskdata('');
  };
  const handleEditing = (edit, index) => {
    setEditData(edit);
    setTaskdata(edit);
  };

  const handledelete = idx => {
    //    const newData= abc.map((item, index) => {
    //         if(index!==idx){
    //             return item
    //         }
    //         else{
    //             return null
    //         }
    //     })
    const newData = abc.filter((item, index) => idx !== index);
    setAbc(newData);
  };
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.inside_main}>
        <View style={styles.header}>
          <Text style={styles.todo_text}>ToDo List</Text>
        </View>

        <View style={styles.search_bar}>
          <TextInput
            value={taskdata}
            placeholder="Add your task here"
            onChangeText={text => {
              setTaskdata(text);
            }}
          />
        </View>
        {!editData > 0 ? (
          <Button title="Add" onPress={addItem} />
        ) : (
          <Button title="Save" onPress={''} />
        )}

        <FlatList
          data={abc}
          renderItem={({item, index}) => (
            <View>
              <View>
                <Text style={{color: 'black'}}>{item}</Text>
              </View>
              <View>
                <Btn
                  onPress={() => handleEditing(item, index)}
                  btnText="Edit"
                />
                <Btn onPress={() => handledelete(index)} btnText="Delete" />
              </View>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default ToDo;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: 'grey',
  },
  inside_main: {
    marginHorizontal: 8,
    gap: 10,
  },
  header: {
    // backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: '3%',
    // borderRadius: 18,
  },
  todo_text: {
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 2,
    color: 'black',
  },
  search_bar: {
    paddingHorizontal: 16,
    borderWidth: 1,
    borderRadius: 20,
  },
});
