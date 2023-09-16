import { Text, View } from 'react-native';
import React , {useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';

const Splashscreen = () => {

    const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('OnBoarding');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);


  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ color: '#94A684', fontSize: 40, fontWeight: 'bold', lineHeight: 64 }}>NOFAP</Text>
      <Text style={{ color: '#94A684', fontSize: 14, fontWeight: 'normal', lineHeight: 20 }}>Menjaga Kesehatan Anda</Text>
    </View>
  );
}

export default Splashscreen;
