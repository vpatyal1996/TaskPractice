import {
  Alert,
  AppState,
  BackHandler,
  ScrollView,
  StatusBar,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {colors} from '../common/colors';
import {images} from '../../theme/Images';
import Header from '../common/sixthtask/Header';
import TokenInfoSection from '../common/sixthtask/AboutToken';
import InputField from '../common/sixthtask/InputField';
import {quoteData} from '../common/sixthtask/QuoteData';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TouchID from 'react-native-touch-id';
import ModalComponent from '../common/Modal';
import Navigation from './Navigatation/Navigation';
import DraggableFlatList, {
  ScaleDecorator,
} from 'react-native-draggable-flatlist';

const SixthTask = () => {
  // biometryType
  const [check, setCheck] = useState(false);
  /////

  const [data_1, setData] = useState(quoteData);
  const [price, setPrice] = useState(0);
  const [value, setValue] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [changeQty, setChangeQty] = useState(0);
  const [selectedIndx, setSelectedIndx] = useState();
  // const [modalVisible, setModalVisible] = useState(false);
  const [storage, setStorage] = useState();
  const [toggleSwitch, setSwitch] = useState(false);
  // console.log({toggleSwitch});
  data_1.map((items,index)=>{
   items.id= index+1
   return items
  }
)
  // console.log(data_1)
  const handleSwitch = () => {
    setSwitch(!toggleSwitch);
  };
  //  useEffect(()=>{
  //      storeUser(toggleSwitch)
  //  },[toggleSwitch])
  // const handle_Modal = () => {
  //   setModalVisible(true);
  // };
  // const handleNo = () => {
  //   setModalVisible(false);
  // };
  // const handleYes = () => {
  //   BackHandler.exitApp();
  //   setModalVisible(false);
  // };

  //*****************************back btn**************************************//
  useEffect(() => {
    const backHandler = () => {
      Alert.alert('Exit App', 'Are you sure you want to exit the App?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {text: 'Yes', onPress: () => BackHandler.exitApp()},
      ]);
      return true;
    };

    const backSubscription = BackHandler.addEventListener(
      'hardwareBackPress',
      backHandler,
    );

    return () => backSubscription.remove();
  }, []);
  //****************************ends here*************************************//

  //**************************************appState****************************//
  const appState = useRef(AppState.currentState);
  // console.log({appState});
  const [appStateVisible, setAppStateVisible] = useState(appState.current);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        // console.log('App has come to the foreground!');
        if (toggleSwitch == true) {
          handleBiometric();
        }
      }
      appState.current = nextAppState;
      setAppStateVisible(appState.current);
      console.log('AppState', appState.current);
    });

    return () => {
      subscription.remove();
    };
  }, [toggleSwitch]);
  // *****************************appState ends here****************************************//

  //************************touch id starts here***************************//

  const ConfigObject = {
    title: 'Authentication Required', // Android
    imageColor: '#e00606', // Android
    imageErrorColor: '#ff0000', // Android
    sensorDescription: 'Touch sensor', // Android
    sensorErrorDescription: 'Failed', // Android
    cancelText: 'Cancel', // Android
    fallbackLabel: 'Show Passcode', // iOS (if empty, then label is hidden)
    unifiedErrors: false, // use unified error messages (default false)
    passcodeFallback: false, // iOS - allows the device to fall back to using the passcode, if faceid/touch is not available. this does not mean that if touchid/faceid fails the first few times it will revert to passcode, rather that if the former are not enrolled, then it will use the passcode.
  };
  useEffect(() => {
    if (toggleSwitch == true) {
      handleBiometric();
    }
  }, []);
  const handleBiometric = () => {
    TouchID.isSupported(ConfigObject)
      .then(biometryType => {
        // Success code
        if (biometryType === 'FaceID') {
          console.log('FaceID is supported.');
        } else {
          console.log('TouchID is supported.');
          TouchID.authenticate('', ConfigObject)
            .then(success => {
              Alert.alert(success);
            })
            .catch(err => {
              console.log('error------------------------------------', err);
              BackHandler.exitApp();
            });
        }
      })
      .catch(error => {
        // Failure code
        console.log({error});
      });
  };
  //************************touch id ends here***************************//

  const handleClick = (clickedData, idx) => {
    console.log({idx})
    console.log({clickedData})
    const item_data = clickedData.perUnitPrice;
    const item_available = clickedData.available;
    setPrice(item_data);
    setQuantity(item_available);
    const multiply = item_data * item_available;
    setValue(multiply);
    setSelectedIndx(idx);
    setChangeQty(item_available);
    const data = {
      idx,
      item_data,
      item_available,
      multiply,
    };
    storeUser(data);
  };

  //**********************************Async storage starts here***********************//

  const storeUser = async value => {
    try {
      // console.log({value});
      await AsyncStorage.setItem('selectedIndex', JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  };

  const getUser = async () => {
    try {
      const userData = JSON.parse(await AsyncStorage.getItem('selectedIndex'));
      console.log('userdata-------------', userData);
      if (
        userData.idx >= 0 &&
        !userData.item_available == '' &&
        !userData.item_data == ''
      ) {
        setSelectedIndx(userData.idx);
        setQuantity(userData.item_available);
        setChangeQty(userData.item_available);
        setPrice(userData.item_data);
        setValue(userData.multiply);
        setSwitch(userData);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUser();
  }, []);

  //**********************************Async storage end here***********************//

  const handleValueChange = text => {
    // console.log({changeQty})
    console.log(typeof text);
    console.log({value});
    // console.log({quantity})
    const number = Number(text);
    if (number <= quantity) {
      setChangeQty(text);
      setValue(text * price);
    } else if (number > quantity) {
      setValue(quantity * price);
      setChangeQty(quantity);
    }
  };

  //********************************************************************************//

  return (
    <View style={styles.main}>
      <StatusBar backgroundColor={colors.header.backgroundColor} />

      <Header
        styles={styles}
        leftIcon={images.arrow_back}
        title="Invest"
        // handleModal={() => navigation.navigate('Home')}
      />
      {/* <ModalComponent
        handleNo={handleNo}
        handleYes={handleYes}
        modalVisible={modalVisible}
      /> */}
      {/* section  */}
      <ScrollView>
      <View style={styles.section_container}>
        <View style={{margin: 10}}>
          <Switch onValueChange={() => handleSwitch()} value={toggleSwitch} />
        </View>
        <View style={styles.section}>
          <TokenInfoSection
            title="Token Price"
            amount={price}
            unit="TUT"
            containerStyle={styles.token_price_Maincontainer}
            titleStyle={styles.tokenPrice_text}
            amountStyle={styles.token_price_amount}
            unitStyle={styles.tut}
          />

          <View style={styles.line} />
          <TokenInfoSection
            title="Asset Name"
            amount="TST1"
            containerStyle={styles.token_price_Maincontainer_sec}
            titleStyle={styles.tokenPrice_text}
            amountStyle={styles.token_price_amount_sec}
          />
        </View>

        {/* textInput */}
        <View style={styles.inputField_container}>
          <InputField
            label="Enter Amount"
            value={changeQty}
            onChangeText={handleValueChange}
            keyboardType="numeric"
            containerStyle={styles.first_inputField}
            labelStyle={styles.enter_Amount}
            inputStyle={styles.input}
            additionalComponent={
              <Text style={styles.min_investment}>Min Investment: 10TUT</Text>
            }
          />
          <InputField
            editable={false}
            label="Equivalent amount of Tokens (TST)"
            value={value.toString()}
            keyboardType="numeric"
            containerStyle={styles.first_inputField_two}
            labelStyle={styles.enter_Amount}
            inputStyle={styles.input}
          />

          {/* flatlist data  */}

          {/* <FlatList
            data={data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => (
             
            )}
          /> */}
          <DraggableFlatList
            data={data_1}
            scrollEnabled={false}
            onDragEnd={({data}) => setData(data)}
            renderItem={({item, drag, isActive,getIndex}) => {
              return (
                <ScaleDecorator>
                  {/* {console.log("index>>>>>>>>>>>>>>",getIndex())} */}
                  <TouchableOpacity
                    onLongPress={drag}
                    disabled={isActive}
                    // key={index}
                    style={styles.data_container}
                    onPress={() => handleClick(item, item.id)}>
                    <Text style={styles.quote}>{item.quote}</Text>
                    <View style={styles.selected_container}>
                      <Text style={styles.quantity}>
                        Available Qty: {item.available} tokens
                      </Text>
                      <View style={styles.round_container}>
                        {item.id == selectedIndx ? (
                          <View style={styles.inside_round_container}></View>
                        ) : null}
                      </View>
                    </View>

                    <Text style={styles.price}>
                      Per Unit Price: ${item.perUnitPrice}
                    </Text>
                  </TouchableOpacity>
                </ScaleDecorator>
              );
            }}
            keyExtractor={(item, index) => index}

          />
          {/* {data.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.data_container}
                onPress={() => handleClick(item, index)}>
                <Text style={styles.quote}>{item.quote}</Text>
                <View style={styles.selected_container}>
                  <Text style={styles.quantity}>
                    Available Qty: {item.available} tokens
                  </Text>
                  <View style={styles.round_container}>
                    {index == selectedIndx ? (
                      <View style={styles.inside_round_container}></View>
                    ) : null}
                  </View>
                </View>

                <Text style={styles.price}>
                  Per Unit Price: ${item.perUnitPrice}
                </Text>
              </TouchableOpacity>
            ))} */}
        </View>
      </View>
      </ScrollView>
    </View>
  );
};

export default SixthTask;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.mainView.backgroundColor,
    // paddingTop:Platform.OS==='android'?StatusBar.currentHeight:0
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.header.backgroundColor,
    paddingHorizontal: 20,
    paddingVertical: 13,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
  },
  text: {
    flex: 1,
  },
  investText: {
    flex: 1,
    textAlign: 'center',
    color: colors.header.textColor,
    fontSize: 22,
  },
  section_container: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 24,
  },
  section: {
    backgroundColor: colors.section.backgroundColor,
    borderRadius: 10,
  },
  token_price_Maincontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  token_price_Maincontainer_sec: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  token_price_container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  token_price_amount: {
    fontSize: 30,
    color: colors.section.text_color,
    fontWeight: '500',
  },
  token_price_amount_sec: {
    fontSize: 16,
    color: colors.section.text_color,
    fontWeight: '500',
  },
  tut: {
    fontSize: 14,
    marginTop: 9,
    textAlign: 'center',
    color: colors.section.text_color,
    fontWeight: '500',
  },
  tokenPrice_text: {
    fontSize: 16,
    color: colors.section.tokenPrice_textColor,
    fontWeight: '500',
  },
  line: {
    borderWidth: 0.5,
    borderColor: colors.section.borderLine,
    marginTop: 15.5,
  },
  inputField_container: {
    flex: 1,
    marginVertical: 24,
  },
  // input //
  input: {
    borderWidth: 1,
    padding: 17,
    borderRadius: 10,
    borderColor: colors.section.borderLine,
    fontSize: 16,
    color: 'black',
  },
  first_inputField: {
    gap: 10,
  },
  enter_Amount: {
    fontSize: 16,
  },
  min_investment: {
    fontSize: 14,
    color: colors.section.text_color,
    fontWeight: '500',
  },
  min_investment_container: {
    alignItems: 'flex-end',
  },
  first_inputField_two: {
    marginVertical: 24,
    gap: 10,
  },
  data_container: {
    paddingHorizontal: 20,
    paddingVertical: 18,
    backgroundColor: colors.section.backgroundColor,
    borderRadius: 10,
    gap: 4,
    marginBottom: 16,
    shadowColor: '#00001a',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.17,
    shadowRadius: 2.54,
    elevation: 3,
  },
  quote: {
    fontSize: 16,
    color: colors.section.text_color,
    fontWeight: '500',
  },
  quantity: {
    fontSize: 14,
    color: colors.section.tokenPrice_textColor,
  },
  price: {
    fontSize: 14,
    color: colors.section.tokenPrice_textColor,
  },
  round_container: {
    height: 15,
    width: 15,
    borderRadius: 50,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inside_round_container: {
    height: 10,
    width: 10,
    borderRadius: 50,
    borderWidth: 1,
    backgroundColor: 'black',
  },
  selected_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
