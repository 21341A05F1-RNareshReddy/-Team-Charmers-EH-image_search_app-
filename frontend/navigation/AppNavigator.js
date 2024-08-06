import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from '../components/SearchScreen';
import ImageDetailScreen from '../components/ImageDetailScreen';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="ImageDetail" component={ImageDetailScreen} />
    </Stack.Navigator>
  );
}

export default AppNavigator;
