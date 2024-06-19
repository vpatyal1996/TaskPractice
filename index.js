/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
// import FirstTask from './src/screens/components/FirstTask';
// import SecondTask from './src/screens/components/SecondTask';
import FourthTask from './src/screens/components/FourthTask';
// import SixthTask from './src/screens/components/SixthTask';
import modal from './src/screens/common/Modal';
import DrragableList from './src/screens/components/DrragableList';
import {fetchData } from './src/screens/components/sslPinning/PageOne';
import one from './src/screens/components/classcomponent/one';
import SecondTask from './src/screens/components/SecondTask';
import Sevevn from './src/screens/components/Sevevn';
import ToDo from './src/screens/components/ToDo';
import Dragable_two from './src/screens/components/Dragable_two';
import QrCode from './src/screens/components/QrCode';
import QRCODE from './src/screens/components/QrCode';
import searchBar from './src/screens/components/searchBar/searchBar';
// import Navigation from './src/screens/components/Navigatation/Navigation';
// import FifthTask from './src/screens/components/FifthTask';

AppRegistry.registerComponent(appName, () =>  searchBar);
