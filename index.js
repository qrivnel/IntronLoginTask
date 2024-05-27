/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

//React Navigation
import { NavigationContainer } from '@react-navigation/native';

const AppContainer = () => (
    <NavigationContainer>
        <App />
    </NavigationContainer>
)

AppRegistry.registerComponent(appName, () => AppContainer);
