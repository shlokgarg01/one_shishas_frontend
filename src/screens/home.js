import {View, Image, StatusBar} from 'react-native';
import React, {useEffect} from 'react';
import {device_height, device_width} from '../components/dimensions';
import {useNavigation} from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('contact');
    }, 1500);
  }, []);

  return (
    <View
      style={{
        backgroundColor: 'black',
        height: device_height + 120,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {/* <StatusBar hidden /> */}
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: device_height * 0.7,
          width: device_width,
          paddingTop: 100,
        }}>
        <Image
          resizeMode="contain"
          style={{
            height: device_height * 0.65,
            // marginBottom: 50
          }}
          source={require('../assets/logo.png')}
        />
      </View>
      <Image
        resizeMode="contain"
        style={{width: device_width, height: device_height * 0.35}}
        source={require('../assets/lower_pattern.png')}
      />
    </View>
  );
}
