import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StatusBar, View } from 'react-native';
import SixthTask from './src/screens/components/SixthTask'; // Assuming SixthTask contains DraggableFlatList
import { ThemeProvider } from '@react-navigation/native';
import Dragable_two from './src/screens/components/Dragable_two';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex:1}}>
      {/* <ThemeProvider theme={theme}> */}
          {/* <Text>Open up App.js to start working on your app!</Text> */}
          <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
          <View style={{flex: 1}}>
            <Dragable_two />
          </View>
      {/* </ThemeProvider> */}
    </GestureHandlerRootView>
  );
};

export default App;
