import React, { useState } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import axios from 'axios';
import loginImage from '../assets/login.jpg';
import { saveToken } from '../AbUtilitis/auth';

export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://192.168.0.103:8000/api/login', { email, password });
      if (response.data.token) {
        await saveToken(response.data.token);
        Alert.alert('Sesión iniciada');
        router.push('/autenticatedLayout/Dashboard');
      } else {
        Alert.alert('Error', 'Credenciales incorrectas');
      }
    } catch (error) {
      Alert.alert('Error', 'Ocurrió un error al iniciar sesión.');
    }
  };

  return (
    <View className="flex-1">
      <Image source={loginImage} className="absolute w-full h-full" />
      <View className="absolute w-full h-full inset-0 flex justify-center items-center">
        <View className="bg-white py-4 px-8 mx-auto my-auto rounded-lg shadow-lg items-center">
          <Text className="text-xl font-bold mb-5">Iniciar Sesión</Text>
          <TextInput
            placeholder="Correo electrónico"
            className="w-64 mb-5 p-3 border border-gray-300 rounded"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            placeholder="Contraseña"
            secureTextEntry
            className="w-64 mb-5 p-3 border border-gray-300 rounded"
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={handleLogin} className="w-full bg-blue-500 p-3 rounded items-center">
            <Text className="text-white">Aceptar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
