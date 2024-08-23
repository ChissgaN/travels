import React from 'react';
import { View } from 'react-native';
import { Slot } from 'expo-router';
import MyComponent from '../../components/AuntenticatedLayout/BottomNavigation'; 

export default function AuthenticatedLayout() {
  return (
    <View style={{ flex: 1 }} className="">
        <Slot /> 
      <MyComponent />
    </View>
  );
}
