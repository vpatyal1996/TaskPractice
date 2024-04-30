import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';

const HorizontalLine = ({ color, width, marginVertical,widthHr }) => {
  const customStyle = {
    borderBottomColor: color ,
    borderBottomWidth: width ,
    width:widthHr,
    marginVertical: marginVertical,
  };

  return <View style={[styles.horizontalLine, customStyle]} />;
};

HorizontalLine.propTypes = {
    color: PropTypes.string,
    width: PropTypes.number,
    widthHr: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
    marginVertical: PropTypes.number,
  };
const styles= StyleSheet.create({

})
export default HorizontalLine