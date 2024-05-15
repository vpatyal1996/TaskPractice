// CommonInfoRow.js

import React from 'react';
import { View, Text, Image } from 'react-native';



const CommonInfoRow = ({ iconSource, title, value }) => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Image style={styles.icon} source={iconSource} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.value}>{value}</Text>
        </View>
      </View>
      <Text style={styles.unit}>MATIC</Text>
    </View>
  );
};

const styles = {
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    // paddingHorizontal: 10,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  textContainer: {
    
  },
  title: {
    fontWeight: 'bold',
    color: '#35343E',
  },
  value: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  icon: {
    height: 35,
    width: 35,
  },
  unit: {
    fontWeight: 'bold',
    color: '#35343E',
  },
};

export default CommonInfoRow;
