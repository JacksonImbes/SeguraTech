import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db, auth1 } from '../../../config/firebaseConfig1';

export default function OperatorChecklistListScreen() {
  const navigation = useNavigation();
  const [checklists, setChecklists] = useState([]);

  useEffect(() => {
    const fetchChecklists = async () => {
      try {
        const currentUser = auth1.currentUser;
        const emailOper = currentUser ? currentUser.email : '';

        // Adiciona filtro para obter apenas checklists com o email do operador
        const checklistsCollection = collection(db, 'checklists');
        const checklistsSnapshot = await getDocs(query(checklistsCollection, where('emailOper', '==', emailOper)));

        const checklistsData = checklistsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setChecklists(checklistsData);
      } catch (error) {
        console.error('Erro ao buscar checklists:', error);
      }
    };

    fetchChecklists();
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.checklistItem}
      onPress={() => navigation.navigate('RelatorioDetail', { checklistId: item.id })}
    >
      <Text style={styles.checklistItemText}>{item.nomeOper}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Text style={styles.title}>Meus Relatórios</Text>
      </View>
      <View style={styles.containerForm}>
        <Text style={styles.subtitle}>Gerados:</Text>
        <FlatList
          data={checklists}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E2F4FF',
    justifyContent: 'flex-start',
  },
  containerHeader: {
    marginTop: '14%',
    marginBottom: '8%',
    paddingStart: '5%',
    paddingEnd: '5%'
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#0E5CB5',
    marginLeft: '22%'
  },
  containerForm: {
    backgroundColor: '#FFF',
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderTopEndRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexGrow: 1,
  },
  checklistItem: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 22,
    elevation: 3,
    marginTop: 10,
    marginLeft: '5%',
    marginRight: '5%',
    marginBottom: 20,
  },
  checklistItemText: {
    fontSize: 18,
    color: '#0E5CB5',
    fontWeight:'bold',
  },
  subtitle: {
    fontSize: 30,
    marginTop: 30,
    fontWeight: 'bold',
    color: '#0E5CB5',
    marginBottom: 20,
  },
});
