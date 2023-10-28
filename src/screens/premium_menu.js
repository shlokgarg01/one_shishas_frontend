import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {device_height, device_width} from '../components/dimensions';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Premium_menu = () => {
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
        marginVertical: 16,
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
          <Text style={{fontStyle: 'italic'}}>"</Text> PREMIUM{' '}
          <Text style={{fontStyle: 'italic'}}>"</Text>
        </Text>
        <ImageComponent
          title="LOVE 66"
          image_url={require('../assets/Images/Premium/Love_66.png')}
          navigation_url="premium_menu1"
        />
        <ImageComponent
          title="LADY KILLER"
          image_url={require('../assets/Images/Premium/Lady_killler.png')}
          navigation_url="premium_menu2"
        />
        <ImageComponent
          title="D.MELON ICE"
          image_url={require('../assets/Images/Premium/double_menlon_ice.png')}
          navigation_url="premium_menu3"
        />
        <ImageComponent
          title="MOSCOW EVENINGS"
          image_url={require('../assets/Images/Premium/moscow_evenings.png')}
          navigation_url="premium_menu4"
        />
        <ImageComponent
          title="MARBELLA"
          image_url={require('../assets/Images/Premium/Marbella.png')}
          navigation_url="premium_menu5"
        />
        <ImageComponent
          title="TWO APPLES"
          image_url={require('../assets/Images/Premium/Two_apples.png')}
          navigation_url="premium_menu6"
        />
      </View>
    </View>
  );
};

export default Premium_menu;
