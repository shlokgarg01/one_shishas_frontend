import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {device_height, device_width} from '../../components/dimensions';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const OneLove = () => {
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
            source={require('../../assets/Images/Basic/one_love.png')}
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
            marginVertical: 10,
          }}>
          ONE LOVE
        </Text>
        <Text
          style={{
            fontSize: 34,
            fontWeight: '500',
            paddingHorizontal: 40,
            marginBottom: 10,
          }}>
          A MIX BY ONE
        </Text>
        {/* <Text style={{paddingHorizontal: 40, fontSize: 40, marginVertical: 20}}>
          6 different flavours,
        </Text> */}
        <Text style={{paddingHorizontal: 40, fontSize: 25, marginTop: 10}}>
          A flavour you will fall in love
        </Text>
        <Text style={{paddingHorizontal: 40, fontSize: 25}}>
          with. An irresistible sweet taste
        </Text>
        <Text style={{paddingHorizontal: 40, fontSize: 25}}>
          and a long loving after taste.
        </Text>
      </View>
      <View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 14,
          }}>
          <Text style={{fontSize: 22, color: '#383838'}}>SWEET</Text>
          <Text style={{fontSize: 22, color: '#383838'}}>STRONG</Text>
        </View>
        <View
          style={{
            height: 40,
            width: device_width - 20,
            marginLeft: 10,
            borderWidth: 1,
            borderColor: 'white',
            marginRight: 20,
          }}>
          <Image
            resizeMode="contain"
            style={{
              height: undefined,
              width: undefined,
              flex: 1,
            }}
            source={require('../../assets/Ratings/one_love.png')}
          />
        </View>
      </View>
    </View>
  );
};

export default OneLove;
