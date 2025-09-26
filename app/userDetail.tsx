import { useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';
import { getUsers } from '../api/service';

type User = {
  id: string;
  nom: string;
  prenom: string;
  email: string;
};

export default function UserDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        if (!id) return;
        const response = await getUsers(id);
        setUser(response.data as User);
      } catch (error) {
        console.error('Erreur lors du chargement de l’utilisateur:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [id]);

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center bg-gray-50">
        <ActivityIndicator size="large" color="#3b82f6" />
        <Text className="mt-4 text-gray-500">Chargement des données…</Text>
      </View>
    );
  }

  if (!user) {
    return (
      <View className="flex-1 justify-center items-center bg-gray-50">
        <Text className="text-gray-500">Utilisateur introuvable</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-gray-50 px-6 pt-10">
      <Text className="text-2xl font-extrabold text-blue-600 mb-6">
        Détails de l’utilisateur
      </Text>

      <View className="bg-gray-100 rounded-2xl p-5 space-y-3">
        <Text className="text-lg text-gray-800">
          Nom : <Text className="font-semibold">{user.nom}</Text>
        </Text>
        <Text className="text-lg text-gray-800">
          Prénom : <Text className="font-semibold">{user.prenom}</Text>
        </Text>
        <Text className="text-lg text-gray-800">
          Email : <Text className="font-semibold">{user.email}</Text>
        </Text>
      </View>

      <TouchableOpacity
        className="bg-blue-600 py-4 rounded-2xl mb-4 active:opacity-90"
        >
        <Text className="text-white text-center text-lg font-semibold">
            Modifier
        </Text>
        </TouchableOpacity>

        <TouchableOpacity
        className="bg-red-500 py-4 rounded-2xl active:opacity-90"
        >
        <Text className="text-white text-center text-lg font-semibold">
            Supprimer
        </Text>
        </TouchableOpacity>
    </View>
  );
}