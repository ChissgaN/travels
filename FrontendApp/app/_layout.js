import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import { Slot, useRouter } from 'expo-router';
import { getToken } from '../AbUtilitis/auth';

export default function Layout() {


  return (
    <View style={{ flex: 1 }}>
      <Slot />
    </View>
  );
}
