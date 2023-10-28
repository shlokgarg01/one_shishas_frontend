import { View, Text, Image } from 'react-native'
import React from 'react'
import { device_height } from '../components/dimensions'

const Test = () => {
  return (
    <View style={{ height: device_height, backgroundColor: 'black' }}>
      <Text style={{ color: 'white', fontSize: 40 }}>Test</Text>
      <View
        style={{
          height: 100,
          width: 100,
          borderRadius: 100,
          borderWidth: 1,
          borderColor: 'white',
          backgroundColor: 'green'
          // marginRight: 20,
        }}>
        <Image
          resizeMode="cover"
          style={{
            // resizeMode: 'cover',
            height: undefined,
            width: undefined,
            flex: 1,
            borderRadius: 100,
          }}
          source={require('../assets/Images/Premium/Two_apples.png')}
        />
      </View>
    </View>
  )
}

export default Test