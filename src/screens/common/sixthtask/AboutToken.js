// TokenInfoSection.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TokenInfoSection = ({ title, amount, unit, containerStyle, titleStyle, amountStyle, unitStyle }) => {
  return (
    <View style={containerStyle}>
      <Text style={titleStyle}>{title}</Text>
      <View style={styles.amountContainer}>
        <Text style={amountStyle}>{amount}</Text>
        {unit && <Text style={unitStyle}>{unit}</Text>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  amountContainer: {
    gap:5,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default TokenInfoSection;
