/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
// import FirstTask from './src/screens/components/FirstTask';
// import SecondTask from './src/screens/components/SecondTask';
import FourthTask from './src/screens/components/FourthTask';
import SixthTask from './src/screens/components/SixthTask';
// import FifthTask from './src/screens/components/FifthTask';

AppRegistry.registerComponent(appName, () => SixthTask );
