import React from 'react';
import {createNativeStackNavigator } from '@react-navigation/native-stack';
import Perro from '../screens/Perros';

const Stack = createNativeStackNavigator ();
export default function PerrosStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="perro-stack"
        component={Perro}
        options={{title: 'Perro'}}
      />
    </Stack.Navigator>
  );
}