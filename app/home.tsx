import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useApp } from './context/Acces';

export default function HomeScreen() {
  const router = useRouter();
  const { accesUser, accesTeam } = useApp();

  return (
    <ScrollView className="flex-1 bg-gray-50 px-6 pt-12">
      <View className="mb-8">
        <Text className="text-gray-500 mt-2 text-3xl font-bold text-center">
          Bienvenue sur l’application SMUR Pontoise
        </Text>
      </View>

      <View className="space-y-4">
        <TouchableOpacity
          className="bg-blue-600 rounded-2xl p-5 shadow-md active:opacity-90 mb-3"
          onPress={() => console.log('Commandes')}
        >
          <Text className="text-white text-lg font-bold text-center">
            Commandes
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          disabled={!accesUser}
          className={`rounded-2xl p-5 shadow-md mb-3 ${
            accesUser ? 'bg-blue-600 active:opacity-90' : 'bg-gray-400'
          }`}
          onPress={() => router.push('/gestionUser')}
        >
          <Text
            className={`text-lg font-bold text-center ${
              accesUser ? 'text-white' : 'text-gray-200'
            }`}
          >
            Gestion des utilisateurs
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          disabled={!accesTeam}
          className={`rounded-2xl p-5 shadow-md mb-3 ${
            accesTeam ? 'bg-blue-600 active:opacity-90' : 'bg-gray-400'
          }`}
          onPress={() => console.log('Gestion des équipes')}
        >
          <Text
            className={`text-lg font-bold text-center ${
              accesTeam ? 'text-white' : 'text-gray-200'
            }`}
          >
            Gestion des équipes
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
