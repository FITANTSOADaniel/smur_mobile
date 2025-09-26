import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { getAllUsers } from '../api/service';

type User = {
  id: string;
  nom: string;
  prenom: string;
  email: string;
};

export default function GestionUser() {
  const router = useRouter();
  const [users, setUsers] = useState<User[]>([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getAllUsers();
        setUsers(response.data as User[]);
      } catch (error) {
        console.error('Erreur lors du chargement des utilisateurs:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const filteredUsers = users.filter((u) => {
    const q = search.toLowerCase();
    return u.nom.toLowerCase().includes(q) || u.prenom.toLowerCase().includes(q);
  });

  const handleUserPress = (user: User) => {
    router.push({ pathname: '/userDetail', params: { id: user.id } });
  };

  const renderItem = ({ item }: { item: User }) => (
    <TouchableOpacity
      onPress={() => handleUserPress(item)}
      className="bg-gray-100 rounded-2xl p-4 mb-3 active:opacity-90"
    >
      <Text className="text-lg font-semibold text-gray-800">
        {item.nom} {item.prenom}
      </Text>
      <Text className="text-gray-500">{item.email}</Text>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center bg-gray-50">
        <ActivityIndicator size="large" color="#3b82f6" />
        <Text className="mt-4 text-gray-500">Chargement des utilisateurs…</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-gray-50 px-6 pt-10">
      <Text className="text-blue-500 mt-2 text-4xl font-bold text-center m-5">
        Gestion des utilisateurs
      </Text>

      <View className="flex-row items-center bg-gray-100 px-4 py-3 rounded-2xl mb-6 border border-gray-200">
        <TextInput
          placeholder="Rechercher par nom ou prénom"
          placeholderTextColor="gray"
          value={search}
          onChangeText={setSearch}
          className="flex-1 text-base text-gray-800"
        />
      </View>

      <FlatList
        data={filteredUsers}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ListEmptyComponent={
          <Text className="text-center text-gray-400 mt-6">
            Aucun utilisateur trouvé
          </Text>
        }
      />
    </View>
  );
}