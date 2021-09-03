import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text, Image} from 'react-native';
import EffectHome from './components/EffectHome/EffectHome';

const Tab = createBottomTabNavigator();

const Title = () => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Image
        style={{width: 40, height: 40}}
        source={require('./assets/night.png')}></Image>
      <Text
        style={{
          fontSize: 24,
          color: '#fff',
          fontWeight: '700',
          marginLeft: 10,
        }}>
        CSS Effect
      </Text>
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="CSS Effect"
        screenOptions={{
          headerStyle: {
            backgroundColor: 'rgba(85,88,218,1)',
          },
          headerTintColor: '#fff',
        }}>
        <Tab.Screen
          name="CSS Effect"
          component={EffectHome}
          options={{headerTitle: props => <Title {...props} />}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
