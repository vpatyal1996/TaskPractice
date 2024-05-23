import {
  Alert,
  Animated,
  Image,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import React, {useRef, useState} from 'react';
import colors from '../../theme/Colors';
import {images} from '../Utils/Images';
import Header from '../common/UiAnimatation.js/Header';
import CommonInfoRow from '../common/UiAnimatation.js/CommonInfoRow';
import CommonButton from '../common/UiAnimatation.js/Button_ani';
import BuyingData from '../common/UiAnimatation.js/BuyingData';
import CoinDetails from '../common/UiAnimatation.js/CoinDetails';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';
import ShimmerData from '../common/UiAnimatation.js/ShimmerData';

const MyShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

const ThirdTask = () => {
  const window = useWindowDimensions();
  console.log(window);

  const animation = useRef(new Animated.Value(0)).current; 
  const [btnClikced, setBtnclicked] = useState(false);
  const [shimmerEffect, setShimmerEffect] = useState(false);
  console.log(btnClikced);

  const startAnimation = () => {
    Animated.spring(animation, {
      toValue: btnClikced ? 0 : 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  };
  const handleContinue = () => {

    if (!btnClikced) {
      setBtnclicked(true);
      startAnimation();
    }
    
  };

  const handleClose = () => {
    if (btnClikced) {
      setBtnclicked(false);
      startAnimation();
    }
  };
  const handleShimmer = () => {
    if (!shimmerEffect) {
      setShimmerEffect(true);
      setTimeout(() => {
        setShimmerEffect(false);
      }, 2000);
    }
  };

  return (
    <SafeAreaView style={styles.main}>
      <View style={{flex: 0.1}}>
        <View style={styles.header}>
          <Header text="USD" imageSource={images.usd} />
          <Header text="Buy MATIC" imageSource={images.buy} />

          <TouchableOpacity
            onPress={() => handleClose()}
            style={styles.close_Container}>
            <Image style={styles.close_image} source={images.close} />
          </TouchableOpacity>
        </View>
      </View>

      {/* second  */}

      <View style={[{flex: 0.8, justifyContent: 'center'}]}>
        <View style={styles.coin_details}>
          <CoinDetails
            animation={animation}
            btnClicked={btnClikced}
            inputPlaceholder="0"
            balance="0.8683"
            onSubmitEditing={handleShimmer}
          />
        </View>
        <View style={{justifyContent: 'flex-end'}}>
          {!btnClikced ? (
            <View style={{gap: 5}}>
              <CommonInfoRow
                iconSource={images.buy}
                title="You will receive =="
                value="67.5936"
              />
              <CommonInfoRow
                iconSource={images.payment}
                title="Payment Gateway"
                value="Mercuryo"
              />
            </View>
          ) : (
            <View>
              {shimmerEffect == false ? <BuyingData /> : <ShimmerData />}
            </View>
          )}
        </View>
      </View>

      {/* third  */}

      <View
        style={{
          flex: 0.1,
          justifyContent: 'flex-end',
          paddingVertical: 10,
        }}>
        <CommonButton
          onPress={() => {
            handleContinue();
          }}
          text="Continue"
        />
      </View>
    </SafeAreaView>
  );
};

export default ThirdTask;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.Black,
    paddingHorizontal: 10,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buy_conatainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 3,
  },
  close_Container: {
    width: 60,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  close_image: {
    height: 15,
    width: 15,
    tintColor: colors.White,
  },
  // coin_details_text: {
  //   color: '#625F77',
  // },
  //   second /
  coin_details: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    gap: 8,
    // backgroundColor: 'yellow',
  },

  // third //
  btn: {
    backgroundColor: '#216F89',
    alignItems: 'center',
    borderRadius: 20,
    paddingVertical: 15,
  },
  btn_text: {
    color: colors.White,
  },
  // input: {
  //   marginLeft: -5,
  //   borderWidth: 0,
  //   fontSize: 40,
  // },
});
