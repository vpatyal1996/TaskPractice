import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FourthTask from '../FourthTask';
import DarkTheme from '../../../theme/DarkTheme';
import LightTheme from '../../../theme/LightTheme';
import {AppContext} from '../../../theme/AppContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FifthTask from '../FifthTask';
// import SixthTask from '../SixthTask';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const storeUser = async value => {
    try {
      await AsyncStorage.setItem('THEME', JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  };

  const getUser = async () => {
    try {
      const savedUser = await AsyncStorage.getItem('THEME');
      console.log({savedUser});
      if (savedUser=='true') {
        setIsDarkTheme(true);
      } else {
        setIsDarkTheme(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    getUser();
  }, []);

  const appContext = {
    isDarkTheme,
    setIsDarkTheme,
    storeUser,
  };

  return (
    <NavigationContainer theme={isDarkTheme ? DarkTheme : LightTheme}>
      <AppContext.Provider value={appContext}>
        <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        >
          <Stack.Screen
            name="Home"
            component={FourthTask}
            options={{title: 'Home'}}
          />
          <Stack.Screen
            name="Verify"
            component={FifthTask}
            options={{title: 'Verify'}}
          />
          <Stack.Screen
          name='invest'
          component={SixthTask}
          
          />
        </Stack.Navigator>
      </AppContext.Provider>
    </NavigationContainer>
  );
};

export default Navigation;
