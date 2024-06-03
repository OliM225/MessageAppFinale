import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigator';
import { Provider } from 'react-redux';
import { store } from './src/store/store';
import SplashScreen from 'react-native-splash-screen';
import { Platform } from 'react-native';
const App = () => {
  
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </Provider>
  );
}
export default App;
