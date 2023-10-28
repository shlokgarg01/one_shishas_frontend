import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {device_height, device_width} from '../components/dimensions';
import {useNavigation} from '@react-navigation/native';

const Contact = () => {
  const navigation = useNavigation();
  const [name, setName] = useState();
  const [number, setNumber] = useState();

  const submit = () => {
    console.log(name, number);
    fetch('https://one-shishas1.onrender.com/send_mail', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        contact: number,
      }),
    })
      .then(resp => resp.json())
      .then(json => console.log('Success - ', json))
      .catch(error => console.error('Error - ', error));
    navigation.navigate('menu');
  };

  return (
    <View
      style={{
        backgroundColor: 'black',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: device_height + 80,
        padding: 0,
      }}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 40,
            fontFamily: 'gothicA1-Regular',
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
          <Text style={{fontStyle: 'italic'}}>"</Text> CONTACT{' '}
          <Text style={{fontStyle: 'italic'}}>"</Text>
        </Text>

        <View style={{marginBottom: 50}}>
          <Text
            style={{
              color: 'white',
              fontSize: 25,
              fontWeight: 'bold',
            }}>
            <Text style={{fontStyle: 'italic'}}>"</Text> NAME{' '}
            <Text style={{fontStyle: 'italic'}}>"</Text>
          </Text>
          <TextInput
            value={name}
            onChangeText={val => setName(val)}
            style={{
              borderWidth: 2,
              borderColor: 'white',
              color: 'white',
              fontSize: 20,
              padding: 10,
              width: device_width * 0.75,
            }}
          />
        </View>

        <View style={{marginBottom: 50}}>
          <Text
            style={{
              color: 'white',
              fontSize: 25,
              fontWeight: 'bold',
            }}>
            <Text style={{fontStyle: 'italic'}}>"</Text> NUMBER{' '}
            <Text style={{fontStyle: 'italic'}}>"</Text>
          </Text>
          <TextInput
            keyboardType="phone-pad"
            value={number}
            onChangeText={val => setNumber(val)}
            style={{
              borderWidth: 2,
              borderColor: 'white',
              color: 'white',
              fontSize: 20,
              padding: 10,
              width: device_width * 0.75,
            }}
          />
        </View>

        <TouchableOpacity onPress={submit}>
          <Text
            style={{
              color: 'white',
              fontSize: 28,
              fontWeight: 'bold',
            }}>
            Submit
          </Text>
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

export default Contact;
