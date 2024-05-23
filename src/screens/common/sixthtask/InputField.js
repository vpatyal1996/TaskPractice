// InputField.js
import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const InputField = ({ editable,label,onChangeText, value, placeholder, keyboardType, containerStyle, labelStyle, inputStyle, additionalComponent }) => {
  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        editable={editable}
        style={inputStyle}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        keyboardType={keyboardType}
      />
      {additionalComponent && (
        <View style={styles.additionalComponent}>
          {additionalComponent}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  additionalComponent: {
    marginTop: 10,
    alignItems: 'flex-end',
  },
});

export default InputField;
