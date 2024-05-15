import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import colors from '../../theme/Colors';

const data = [
  {
    category: 'Category 1',
    items: [
      {label: 'Item 1', value: '1'},
      {label: 'Item 2', value: '2'},
      {label: 'Item 3', value: '3'},
    ],
  },
  {
    category: 'Category 2',
    items: [
      {label: 'Item 4', value: '4'},
      {label: 'Item 5', value: '5'},
    ],
  },
];

const SecondTask = () => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && {color: 'blue'}]}>
          Dropdown label
        </Text>
      );
    }
    return null;
  };
  const handleClick = item => {
    // console.log(item)
    setValue(item);
    setIsFocus(false);
  };

  //  storing category in label ,after that i am using it in text field\

  let label = value ? value.category : '';
  let items = value ? value.items : [];

  console.log(items);
  console.log(label);

  return (
    <View style={styles.container}>
      {renderLabel()}
      <Dropdown
        style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search={true}
        maxHeight={300}
        labelField="category"
        valueField="value"
        placeholder={!isFocus ? 'Select item' : '...'}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => handleClick(item)}
        renderLeftIcon={() => (
          <AntDesign
            style={styles.icon}
            color={isFocus ? 'blue' : 'black'}
            name="Safety"
            size={20}
          />
        )}
      />

      <View>
        <Text>you choose: {value === null ? 'null' : label}</Text>
        {items.map(item => (
          <View
            key={item.value}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 10,
            }}>
            <Text
              style={{color: colors.Black, fontWeight: 'bold', fontSize: 18}}>
              Label : {item.label}
            </Text>
            <Text
              style={{
                color: colors.drk_grey,
                fontWeight: 'bold',
                fontSize: 18,
              }}>
              Items : {item.value}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default SecondTask;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
