import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';

const FifthTask = () => {
  const [data, setData] = useState([
    '1.attitude',
    '2.girls',
    '3.winners',
    '4.person',
    '5.academic',
    '6.torn',
    '7.lemon',
    '8.lesson',
    '9.jigga',
    '10.limit',
    '11.orotund',
    '12.soda',
  ]);
  const [topContainer, setTopCoantainer] = useState();

  const handleClick = (item, index) => {
    const abc = [...data];
    // console.log(abc[index],index)
    abc.splice(index, 1, '');
    setData(abc);
    const store = `${item}${index}`;
    setTopCoantainer(store);
  };
  console.log('top------', topContainer);

  // const ItemSeparator = () => <View style={styles.separator} />;

  return (
    <View style={styles.main}>
      {/* first container start here  */}
      <View style={styles.Top_Container}></View>
      {/* end here  */}
      <View style={styles.bottom_Container}>
        <FlatList
          data={data}
          numColumns={4}
          renderItem={({item, index}) => (
            <View style={styles.outsideMain}>
              <TouchableOpacity
                style={styles.box}
                onPress={() => handleClick(item, index)}>
                <Text>{item}</Text>
              </TouchableOpacity>
            </View>
          )}
          // ItemSeparatorComponent={ItemSeparator}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
};

export default FifthTask;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  Top_Container: {
    marginVertical: verticalScale(24),
    height: verticalScale(167.13),
    backgroundColor: '#F0F9FC',
    marginHorizontal: moderateScale(24),
    gap: 10,
  },
  bottom_Container: {
    marginVertical: verticalScale(24),
    // height: verticalScale(140),
    backgroundColor: '#F0F9FC',
    marginHorizontal: moderateScale(24),
  },
  box: {
    width: 88,
    height: 40,
    borderWidth: 1,
    borderStyle: 'dotted',
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  outsideMain: {
    flex: 1,
    margin: moderateScale(2),
  },
  // separator: {
  //   // height: verticalScale(10),
  // },
});
