import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/home';
import Menu from './screens/menu';
import Basic_menu from './screens/basic_menu';
import Premium_menu from './screens/premium_menu';
import Contact from './screens/contact';
import Love_66 from './screens/Premium/love_66';
import LadyKiller from './screens/Premium/lady_killer';
import DMelonIce from './screens/Premium/dlemon_ice';
import MoscowEvenings from './screens/Premium/moscow_evenings';
import Marbella from './screens/Premium/marbella';
import TwoApples from './screens/Premium/two_apples';
import Pasha from './screens/Basic/pasha';
import OneLove from './screens/Basic/one_love';
import SeaBreeze from './screens/Basic/sea_breeze';
import BlackMagic from './screens/Basic/black_magic';
import CinnamonGum from './screens/Basic/cinnamon_gum';
import ColaLemon from './screens/Basic/cola_lemon';
import BigDaddy from './screens/Basic/big_daddy';
import OneBasics from './screens/Basic/one_basics';
import Test from './screens/Test';

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* <Stack.Screen name="test" component={Test} /> */}
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="contact" component={Contact} />
        <Stack.Screen name="menu" component={Menu} />
        <Stack.Screen name="basic_menu" component={Basic_menu} />
        <Stack.Screen name="basic_menu1" component={Pasha} />
        <Stack.Screen name="basic_menu2" component={OneLove} />
        <Stack.Screen name="basic_menu3" component={SeaBreeze} />
        <Stack.Screen name="basic_menu4" component={BlackMagic} />
        <Stack.Screen name="basic_menu5" component={CinnamonGum} />
        <Stack.Screen name="basic_menu6" component={ColaLemon} />
        <Stack.Screen name="basic_menu7" component={BigDaddy} />
        <Stack.Screen name="basic_menu8" component={OneBasics} />
        <Stack.Screen name="premium_menu" component={Premium_menu} />
        <Stack.Screen name="premium_menu1" component={Love_66} />
        <Stack.Screen name="premium_menu2" component={LadyKiller} />
        <Stack.Screen name="premium_menu3" component={DMelonIce} />
        <Stack.Screen name="premium_menu4" component={MoscowEvenings} />
        <Stack.Screen name="premium_menu5" component={Marbella} />
        <Stack.Screen name="premium_menu6" component={TwoApples} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
