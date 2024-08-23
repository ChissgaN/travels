import React, { useState, useEffect } from 'react';
import { Text, View, ActivityIndicator, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getToken } from '../../AbUtilitis/auth';
import { useRouter } from 'expo-router';

const Dashboard = () => {
  const [userName, setUserName] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = await getToken();
        if (!token) {
          Alert.alert('Error', 'Token no encontrado. Por favor, inicie sesión de nuevo.');
          router.replace('/');
          return;
        }

        const response = await fetch('http://192.168.0.103:8000/api/user', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error('Error al obtener datos del usuario.');
        }

        const data = await response.json();
        if (data && data.name) {
          setUserName(data.name);
        } else {
          throw new Error('Nombre de usuario no encontrado.');
        }
      } catch (error) {
        Alert.alert('Error', error.message);
        router.replace('/'); 
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [router]);

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    
    <SafeAreaView className="flex-1 p-4">
      <View className="">
        <Text className="text-3xl font-bold mb-6 text-left ">Dashboard!!!</Text>
      </View>
      <View className="justify-center h-full">
        <Text className="text-blue-600 text-center text-2xl font-semibold">
          {userName ? `Hola, ${userName}! 🎉` : 'Cargando nombre de usuario...'}
        </Text>
        <View className="flex-row justify-between w-full mt-8">
          <View className="bg-gray-200 rounded-lg p-4 flex-1 mx-2">
            <Text className="text-lg font-semibold text-center">Reportes Realizados</Text>
            <Text className="text-2xl font-bold text-center mt-2">0</Text>
          </View>
          <View className="bg-gray-200 rounded-lg p-4 flex-1 mx-2">
            <Text className="text-lg font-semibold text-center">Reportes Revisados</Text>
            <Text className="text-2xl font-bold text-center mt-2">0</Text>
          </View>
        </View>
        <Text className="text-gray-600 text-lg text-center mt-14">
          Selecciona una opción del menú inferior 👇🏼 para continuar. 
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;
