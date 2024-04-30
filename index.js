/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import FirstTask from './src/screens/components/FirstTask';

AppRegistry.registerComponent(appName, () => FirstTask);
