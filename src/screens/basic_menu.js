import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {device_height, device_width} from '../components/dimensions';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Basic_menu = () => {
  const navigation = useNavigation();

  const ImageComponent = ({title, image_url, navigation_url}) => (
    <TouchableOpacity
      onPress={() => navigation.navigate(navigation_url)}
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 4,
        borderColor: 'white',
        width: device_width * 0.8,
        paddingHorizontal: 20,
        paddingVertical: 7,
        marginVertical: 5,
      }}>
      <View
        style={{
          height: 40,
          width: 40,
          borderRadius: 100,
          borderWidth: 1,
          borderColor: 'white',
          marginRight: 20,
        }}>
        <Image
          resizeMode="cover"
          style={{
            height: undefined,
            width: undefined,
            flex: 1,
            borderRadius: 100,
          }}
          source={image_url}
        />
      </View>
      <Text
        style={{
          color: 'white',
          fontSize: 20,
          fontWeight: 'bold',
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View
      style={{
        height: device_height,
        backgroundColor: 'black',
      }}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
          marginBottom: 15
        }}>
        <Icon name="keyboard-arrow-left" color="white" size={50} />
        <Text style={{fontSize: 22, color: 'white', marginLeft: -10}}>
          Back
        </Text>
      </TouchableOpacity>
      <View
        style={{
          height: device_height * 0.9,
          width: device_width,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 34,
            fontWeight: 'bold',
          }}>
          <Text style={{fontStyle: 'italic'}}>"</Text> BASIC{' '}
          <Text style={{fontStyle: 'italic'}}>"</Text>
        </Text>
        <ImageComponent
          title="PASHA"
          image_url={require('../assets/Images/Basic/pasha.jpeg')}
          navigation_url="basic_menu1"
        />
        <ImageComponent
          title="ONE LOVE"
          image_url={require('../assets/Images/Basic/one_love.png')}
          navigation_url="basic_menu2"
        />
        <ImageComponent
          title="SEA BREEZE"
          image_url={require('../assets/Images/Basic/sea_breeze.png')}
          navigation_url="basic_menu3"
        />
        <ImageComponent
          title="BLACK MAGIC"
          image_url={require('../assets/Images/Basic/black_magic.png')}
          navigation_url="basic_menu4"
        />
        <ImageComponent
          title="CINNAMON GUM"
          image_url={require('../assets/Images/Basic/cinnamon_gum.png')}
          navigation_url="basic_menu5"
        />
        <ImageComponent
          title="COLA LEMON"
          image_url={require('../assets/Images/Basic/cola_lemon.jpeg')}
          navigation_url="basic_menu6"
        />
        <ImageComponent
          title="BIG DADDY"
          image_url={require('../assets/Images/Basic/big_daddy.jpeg')}
          navigation_url="basic_menu7"
        />
        <ImageComponent
          title="ONE BASICS"
          image_url={require('../assets/Images/Basic/one_basics.png')}
          navigation_url="basic_menu8"
        />
      </View>
    </View>
  );
};

export default Basic_menu;
