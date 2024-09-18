import React from 'react';

import {Image, ScrollView, Text} from 'react-native';

 

const logo = {

  uri: 'https://reactnative.dev/img/tiny_logo.png',

  width: 64,

  height: 64,

};

 

const App = () => (

  <ScrollView>

    <Text style={{fontSize: 30}}>Scroll me plz</Text>

    <Image source={logo} />

    <Image source={logo} />

    <Image source={logo} />

    <Image source={logo} />

    <Image source={logo} />

    <Text style={{fontSize: 30}}>If you like</Text>

    <Image source={logo} />

    <Image source={logo} />

    <Image source={logo} />

    <Image source={logo} />

    <Image source={logo} />

    <Text style={{fontSize: 30}}>Scrolling down</Text>

    <Image source={logo} />

    <Image source={logo} />

    <Image source={logo} />

    <Image source={logo} />

    <Image source={logo} />

    <Text style={{fontSize: 30}}>What's the best</Text>

    <Image source={logo} />

    <Image source={logo} />

    <Image source={logo} />

    <Image source={logo} />

    <Image source={logo} />

    <Text style={{fontSize: 30}}>Framework around?</Text>

    <Image source={logo} />

    <Image source={logo} />

    <Image source={logo} />

    <Image source={logo} />

    <Image source={logo} />

    <Text style={{fontSize: 30}}>React Native</Text>

  </ScrollView>

);

 

export default App;