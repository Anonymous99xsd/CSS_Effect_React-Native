import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import EffectContainer from './EffectContainer';
import CardExpansion from './CardExpansion/CardExpansion';

const Stack = createNativeStackNavigator();

export default function EffectHome() {
  return (
    <Stack.Navigator initialRouteName="EffectContainer">
      <Stack.Screen
        name="EffectContainer"
        component={EffectContainer}
        options={{headerTitle: "Effect Main Page"}}
      />
      <Stack.Screen
        name="CardExpansion"
        component={CardExpansion}
        options={({route}) => ({title: route.params.title})}
      />
    </Stack.Navigator>
  );
}
