import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CommonInfoRow from './CommonInfoRow';
import {images} from '../../Utils/Images';
import colors from '../../../theme/Colors';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';

const MyShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

const ShimmerData = () => {
  const array = [
    {text: 'Conversion Rate', Price: '1USD=1.4391 MATIC'},
    {text: 'Payment Gateway Fee', Price: '$2.81(5.63%)'},
    {text: 'Total you Will Receive', Price: '$ 46.9676'},
  ];

  return (
    <View style={{backgroundColor: 'black', paddingHorizontal: 40}}>
      <View style={{marginVertical: 50}}>
        <CommonInfoRow
          iconSource={images.usd}
          title="Payment Gateway"
          value="Mercuryo"
        />
      </View>
      <FlatList
        data={array}
        renderItem={({item}) => (
          <View style={styles.container}>
            <MyShimmerPlaceholder style={{width: '30%', borderRadius: 5}}>
              <Text style={styles.item_text}>{item.text}</Text>
            </MyShimmerPlaceholder>

            <MyShimmerPlaceholder style={{width: '50%', borderRadius: 5}}>
              <Text style={styles.item_price}>{item.Price}</Text>
            </MyShimmerPlaceholder>
          </View>
        )}
      />
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          StrikeX does not have access to your information. You will be taken to
          a secure and regulated third-party payment gateway provider to
          complete your purchase.
        </Text>
      </View>
    </View>
  );
};

export default ShimmerData;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  item_text: {
    color: colors.drk_grey,
    fontWeight: 'bold',
  },
  item_price: {
    color: colors.price_color,
    fontWeight: 'bold',
  },
  text: {
    color: colors.drk_grey,
    textAlign: 'center',
    fontSize: 12,
  },
  textContainer: {
    marginVertical: 30,
  },
});
