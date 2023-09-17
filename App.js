import React from 'react';
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from '@react-navigation/stack';

import Splashscreen from './src/screens/splashscreen';
import Mainmenuu from './src/screens/Mainmenu';
import Onboarding1 from './src/screens/onboard';
import Onboarding2 from './src/screens/onboard2';
import Onboarding3 from './src/screens/onboard3';

const Stack = createStackNavigator();

const App = () =>{
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={Splashscreen} options={{ headerShown: false }} />
        <Stack.Screen name="OnBoarding" component={Onboarding1} options={{ headerShown: false }} />
        <Stack.Screen name="Onboarding2" component={Onboarding2} options={{ headerShown: false }} />
        <Stack.Screen name="Onboarding3" component={Onboarding3} options={{ headerShown: false }} />
        <Stack.Screen name="MainMenu" component={Mainmenuu} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
