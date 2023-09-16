import React from 'react';
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View } from 'react-native';

import Splashscreen from './src/screens/splashscreen';
import Onboarding1 from './src/screens/onboard';


const Stack = createStackNavigator();

const App = () =>{
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={Splashscreen} options={{ headerShown: false }} />
        <Stack.Screen name="OnBoarding" component={Onboarding1} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
