import React, { useState } from 'react';
import { Button, TextInput, View } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const QRCODE = () => {
  const initialValue = '0x525A969986d8e44CE5139B64b982fE68059A3Ca5';
  const [value, setValue] = useState(initialValue);
  const [textValue, setTextValue] = useState('');
  console.log(value)
  const handleValue = (txt) => {
    const numericValue = txt.replace(/[^0-9]/g, '');
    setTextValue(numericValue);
  };

  const handleClick = () => {
    setValue(`${initialValue} amount=${textValue}`);
    setTextValue('')
  };

  return (
    <View style={{flex:1,gap:15}}>
      <QRCode value={value} size={250} color="black" backgroundColor="white" />
      <TextInput
        value={textValue}
        placeholder='Enter amount'
        onChangeText={handleValue}
        keyboardType="numeric"
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
      />
      <Button title='Submit' onPress={handleClick} />
    </View>
  );
};

export default QRCODE;
