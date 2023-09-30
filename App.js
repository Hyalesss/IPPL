import React, { useState, useEffect } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import EdukasiScreen from './src/navigation/Edukasikesehatan';
import CatatanHarian from './src/navigation/Catatanharian';
import Splashscreen from './src/screens/splashscreen';
import Mainmenuu from './src/screens/Mainmenu';
import Onboarding1 from './src/screens/onboard';
import Onboarding2 from './src/screens/onboard2';
import Onboarding3 from './src/screens/onboard3';
import BuatCatatan from './src/navigation/buatcatatan';
import DetailCatatan from './src/navigation/detailcatatan';


const Stack = createStackNavigator();

const EdukasiFitur = () => (
  <Stack.Navigator>
    <Stack.Screen name="EdukasiFitur" component={EdukasiScreen} options={{ headerShown: false }} />
  </Stack.Navigator>
);

const CatatanFitur = () => (
  <Stack.Navigator>
    <Stack.Screen name="CatatanFitur" component={CatatanHarian} options={{ headerShown: false }} />
  </Stack.Navigator>
);

// const DetailCatatanScreen = () => ( 
//   <Stack.Navigator>
//     <Stack.Screen name="DetailCatatanCRUD" component={DetailCatatan} options={{ headerShown: false }} />
//   </Stack.Navigator>
// );

const App = () => {
  const [hasSeenSplash, setHasSeenSplash] = useState(false);
  const [hasSeenOnboarding, setHasSeenOnboarding] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem('hasSeenSplash').then(value => {
      if (value === 'true') {
        setHasSeenSplash(true);
      }
    });

    AsyncStorage.getItem('hasSeenOnboarding').then(value => {
      if (value === 'true') {
        setHasSeenOnboarding(true);
      }
    });
  }, []);

  useEffect(() => {
    if (hasSeenOnboarding) {
      useNavigation.reset({
        index: 0,
        routes: [{ name: 'MainMenu' }],
      });
    }
  }, [hasSeenOnboarding]);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={hasSeenSplash ? "MainMenu" : "Splash"}>
        <Stack.Screen name="Splash" component={Splashscreen} options={{ headerShown: false }} />
        <Stack.Screen name="Onboarding1" component={Onboarding1} options={{ headerShown: false }} />
        <Stack.Screen name="Onboarding2" component={Onboarding2} options={{ headerShown: false }} />
        <Stack.Screen name="Onboarding3" component={Onboarding3} options={{ headerShown: false }} />
        <Stack.Screen name="MainMenu" component={Mainmenuu} options={{ headerShown: false }} />
        <Stack.Screen name="EdukasiCuy" component={EdukasiFitur} />
        <Stack.Screen name="CatatanCuy" component={CatatanFitur} />
        <Stack.Screen name="BuatCatatan" component={BuatCatatan} />
        <Stack.Screen name="DetailCatatan" component={DetailCatatan} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
