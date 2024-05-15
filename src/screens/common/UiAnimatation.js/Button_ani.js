

import { TouchableOpacity, Text } from 'react-native';

const CommonButton = ({ onPress, text, buttonStyle, textStyle }) => {
  return (
    <TouchableOpacity style={[styles.btn, buttonStyle]} onPress={onPress}>
      <Text style={[styles.btn_text, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  btn: {
    backgroundColor: '#216F89',
    alignItems: 'center',
    borderRadius: 20,
    paddingVertical: 15,
  },
  btn_text: {
    color: '#FFFFFF',
    fontWeight:'bold',
    fontSize:16
  },
};

export default CommonButton;
