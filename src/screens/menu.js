import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {device_height, device_width} from '../components/dimensions';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Menu = () => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        backgroundColor: 'black',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: device_height + 80,
      }}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 40,
            fontFamily: 'gothicA1-Regular'
          }}>
          ONE SHISHAS
        </Text>
        <View
          style={{
            width: 200,
            borderTopWidth: 2,
            borderTopColor: 'white',
            marginTop: 30,
            marginBottom: 50,
          }}
        />
        <Text
          style={{
            color: 'white',
            fontSize: 34,
            fontWeight: 'bold',
            marginBottom: 50,
          }}>
          <Text style={{fontStyle: 'italic'}}>"</Text> MENU{' '}
          <Text style={{fontStyle: 'italic'}}>"</Text>
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('premium_menu')}
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderWidth: 4,
            borderColor: 'white',
            width: device_width * 0.8,
            padding: 20,
            marginVertical: 20,
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 25,
              fontWeight: 'bold',
            }}>
            PREMIUM
          </Text>
          <View
            style={{
              height: 50,
              width: 50,
              borderRadius: 100,
              backgroundColor: 'white',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              paddingLeft: 5,
            }}>
            <Icon name="angle-double-right" color="black" size={37} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('basic_menu')}
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderWidth: 4,
            borderColor: 'white',
            width: device_width * 0.8,
            padding: 20,
            marginVertical: 20,
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 25,
              fontWeight: 'bold',
            }}>
            BASIC
          </Text>
          <View
            style={{
              height: 50,
              width: 50,
              borderRadius: 100,
              backgroundColor: 'white',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              paddingLeft: 5,
            }}>
            <Icon name="angle-double-right" color="black" size={37} />
          </View>
        </TouchableOpacity>
      </View>

      <Image
        source={require('../assets/lower_pattern.png')}
        resizeMode="contain"
        style={{width: device_width, height: 250, paddingBottom: 0}}
      />
    </View>
  );
};

export default Menu;
