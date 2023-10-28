import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {device_height, device_width} from '../../components/dimensions';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const OneBasics = () => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        height: device_height,
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingBottom: 16,
      }}>
      <View>
        <View style={{width: device_width, height: device_height * 0.4}}>
          <Image
            source={require('../../assets/Images/Basic/one_basics.png')}
            resizeMode="cover"
            style={{width: device_width, height: device_height * 0.4}}
          />
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
              }}>
              <Icon name="keyboard-arrow-left" color="white" size={50} />
              <Text style={{fontSize: 22, color: 'white', marginLeft: -10}}>
                Back
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            fontSize: 40,
            fontWeight: 'bold',
            paddingHorizontal: 40,
            marginVertical: 20,
            textAlign: 'center',
          }}>
          ONE BASICS
        </Text>
        <Text
          style={{
            fontSize: 34,
            fontWeight: '500',
            paddingHorizontal: 40,
            marginBottom: 20,
          }}>
          BLENDS WITH US
        </Text>
        <Text
          style={{
            paddingHorizontal: 40,
            fontSize: 28,
            marginVertical: 10,
          }}>
          Don't know what to order?
        </Text>
        <Text style={{paddingHorizontal: 40, fontSize: 28}}>
          Ask the server to surprise you
        </Text>
        <Text style={{paddingHorizontal: 40, fontSize: 28}}>
          Or get anything you like made.
        </Text>
      </View>
    </View>
  );
};

export default OneBasics;
