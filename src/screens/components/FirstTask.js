import React, {useEffect, useRef, useState} from 'react';
import {
  Alert,
  Button,
  Dimensions,
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import BottomSheet from 'react-native-simple-bottom-sheet';
import Button1 from '../common/Button';
import colors from '../../theme/Colors';
import {Strings} from '../../theme/String';
import {data_one} from '../common/ArrayData';
import HorizontalLine from '../../../comon/HorizontalLine';
import {getDimensionPercentage as dimen} from '../Utils/Utils';
import CheckBox from 'react-native-check-box';

const FirstTask = () => {
  const [blur,setBlur]=useState()
  const height = Dimensions.get('window').height;
  const panelRef = useRef(null);
  const [data, setData] = useState(data_one);

  const handleClick = index => {
    // console.log(index);
    let oldData = [...data];
    // console.log("old data index-------------------",oldData[index])
    oldData[index].isSelected = !oldData[index].isSelected;
    setData(oldData);
  };

  
  const isAllChecked = () => {
    let isDisable = false;

    data.forEach(element => {
      if (element.isSelected == false) {
        isDisable = true;
        return;
      }
    });

    console.log('ISALL', isDisable);

    return isDisable;
  };

  return (
    <View style={{flex: 1}}>
     

      <BottomSheet
        ref={panelRef}
        isOpen={true}
        sliderMinHeight={0}
        sliderMaxHeight={height / 1.18}
        wrapperStyle={{backgroundColor: colors.backgroundTask}}>
        <View style={styles.mainContainer}>
          <View style={styles.header}>
            <View style={styles.insideHeader}>
              <Text style={styles.insideHeader_Text}>
                {Strings.English.task.heading}
              </Text>
              <Text style={styles.insideHeader_subText}>
                {Strings.English.task.subHeading}
              </Text>
            </View>

            <View>
              <FlatList
                data={data}
                renderItem={({item, index}) => (
                  <View style={styles.itemContainer}>
                    <View style={styles.checkboxContainer}>
                      <CheckBox
                        isChecked={item.isSelected}
                        onClick={() => handleClick(index)}
                        checkedCheckBoxColor={colors.lightBlue}
                        uncheckedCheckBoxColor={colors.White}
                        style={styles.checkbox}
                      />
                      <Text style={styles.text}>{item.text}</Text>
                    </View>
                    {index !== data.length - 1 && (
                      <HorizontalLine
                        color={colors.lineColor}
                        width={1}
                        widthHr={'100%'}
                        marginVertical={15}
                      />
                    )}
                  </View>
                )}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
          </View>

          <View style={styles.footer}>
            <Button1
              text="Continue"
              onPress={() => Alert.alert('All clicked')}
              disabled={isAllChecked()}
            />
          </View>
        </View>
      </BottomSheet>

      <TouchableOpacity onPress={() => panelRef.current.togglePanel()}>
        <Text>Toggle</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FirstTask;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  header: {
    flex: 0.8,
    gap: 20,
  },
  footer: {
    flex: 0.2,
    justifyContent: 'flex-end',
    paddingTop: dimen(35),
  },

  // ************************************** header*******************************//
  insideHeader: {
    paddingHorizontal: 10,
    gap: 5,
    alignItems: 'center',
  },
  insideHeader_Text: {
    fontSize: dimen(18),
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
  insideHeader_subText: {
    fontSize: dimen(14),
    textAlign: 'center',
    lineHeight: 20,
    color: colors.subText,
  },
  checkboxContainer: {
    flexDirection: 'row',
  },
  text: {
    flex: 1,
    color: colors.White,
    marginLeft: 10,
  },
  checkbox: {
    height: dimen(20),
    marginTop: dimen(3),
  },
});
