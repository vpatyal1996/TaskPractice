import React from 'react';
import { View, Text, Animated, TextInput, StyleSheet, Alert } from 'react-native';
import colors from '../../../theme/Colors';

const CoinDetails = ({ animation, btnClicked, inputPlaceholder, balance,onSubmitEditing }) => {
  return (
    <View style={styles.coin_details}>

      <Animated.Text
        style={[
          styles.coin_details_text,
          {
            transform: [
              {
                translateY: animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, -60],
                }),
              },
            ],
          },
        ]}>
        Network: METIC
      </Animated.Text>

      {!btnClicked ? (
        <Text style={styles.coin_details_text}>Min Buy $13.14 USD</Text>
      ) : null}

      {btnClicked ? (
        <Animated.Text
          style={[
            { color: colors.price_color },
            {
              opacity: animation,
            },
          ]}>
          =719577
        </Animated.Text>
      ) : null}

      <Animated.View
        style={[
          {
            flexDirection: 'row',
            alignItems: 'center',
          },
          {
            transform: [
              {
                translateY: animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, -95],
                }),
              },
            ],
          },
        ]}>
        <Text style={{ fontSize: 40, color: '#6B6782' }}>$</Text>

        <TextInput
          style={styles.input}
          placeholder={inputPlaceholder}
          keyboardType="numeric"
          placeholderTextColor="#6B6782"
          onSubmitEditing={onSubmitEditing}
        />
      </Animated.View>

      {!btnClicked ? (
        <Text style={styles.coin_details_text}>
          Balance <Text style={{ color: colors.lightBlue }}>{balance}</Text>
          MATIC
        </Text>
      ) : null}
    </View>
  );
};

export default CoinDetails;
const styles = StyleSheet.create({
    coin_details_text: {
        color: '#625F77',
      },
      //   second /
      coin_details: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        gap: 8,
        // backgroundColor: 'yellow',
      },
      input: {
        marginLeft: -5,
        borderWidth: 0,
        fontSize: 40,
        color: colors.textInput_fontColor
      },
})