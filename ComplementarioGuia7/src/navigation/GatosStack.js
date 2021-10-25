import React from 'react';
import {createNativeStackNavigator } from '@react-navigation/native-stack';
import Gato from '../screens/Gatos';

const Stack = createNativeStackNavigator ();
export default function GatosStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="gato-stack"
        component={Gato}
        options={{title: 'Gato'}}
      />
    </Stack.Navigator>
  );
}