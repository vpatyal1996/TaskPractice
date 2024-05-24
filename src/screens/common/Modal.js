import {
    BackHandler,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';
  import React from 'react';
  import Modal from 'react-native-modal';
  import colors from '../../../comon/Colors';
  
  const ModalComponent = ({ modalVisible,handleYes,handleNo}) => {
   
  
   
  
    return (
      <View style={styles.container}>
        <Modal isVisible={modalVisible}>
          <View style={styles.modalContent}>
            <View>
              <Text style={styles.modalText}>
                Are you sure you want to exit the app?
              </Text>
            </View>
  
            <View style={styles.btnContainer}>
              <TouchableOpacity
                style={styles.yesText_Container}
                onPress={handleYes}>
                <Text style={styles.yesText}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.yesText_Container}
                onPress={handleNo}>
                <Text style={styles.yesText}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    );
  };
  
  export default ModalComponent;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalContent: {
      height: 200,
      backgroundColor: colors.backgroundColor,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      gap: 20,
    },
    modalText: {
      color: 'black',
      fontSize: 16,
      fontWeight: 'bold',
    },
    btnContainer: {
      flexDirection: 'row',
      gap: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    yesText_Container: {
      backgroundColor: 'black',
      padding: 7,
      borderRadius: 14,
      alignItems: 'center',
      justifyContent: 'center',
    },
    yesText: {
      color: 'white',
      fontSize: 16,
    },
  });
  