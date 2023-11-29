import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { collection, doc, getDoc, query, getDocs } from 'firebase/firestore';
import { db } from '../../../config/firebaseConfig1';

export default function ChecklistDetailsScreen() {
  const route = useRoute();
  const [checklist, setChecklist] = useState(null);

  useEffect(() => {
    const fetchChecklistDetails = async () => {
      try {
        const checklistId = route.params.checklistId;
        const checklistDocRef = doc(db, 'checklists', checklistId);
        const checklistDocSnapshot = await getDoc(checklistDocRef);

        if (checklistDocSnapshot.exists()) {
          const checklistData = {
            id: checklistDocSnapshot.id,
            ...checklistDocSnapshot.data(),
          };

          // Fetch items from the 'items' collection
          const itemsCollectionRef = collection(checklistDocRef, 'items');
          const itemsSnapshot = await getDocs(itemsCollectionRef);

          const itemsData = itemsSnapshot.docs.map((itemDoc) => ({
            id: itemDoc.id,
            ...itemDoc.data(),
          }));

          checklistData.items = itemsData;
          setChecklist(checklistData);
        }
      } catch (error) {
        console.error('Erro ao buscar detalhes do checklist:', error);
      }
    };

    fetchChecklistDetails();
  }, [route.params.checklistId]);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.containerHeader}>
          <Text style={styles.message}>Detalhes Relatório</Text>
        </View>
        <View style={styles.containerForm}>
          {checklist ? (
            <>
              <Text style={styles.title}>{checklist.nomeOper}</Text>
              {checklist.items && checklist.items.map((item, index) => (
                <View key={index} style={styles.checklistItem}>
                  <Text style={styles.tituloDados}>Data de Retirada:</Text><Text style={styles.dados}>{item.dataRetirada}</Text>
                  <Text style={styles.tituloDados}>Data de Vencimento:</Text><Text style={styles.dados}>{item.dataVencimento}</Text>
                  <Text style={styles.tituloDados}>Nome do EPI:</Text><Text style={styles.dados}>{item.nomeEPI}</Text>
                </View>
              ))}
            </>
          ) : (
            <Text style={styles.errorText}>Erro ao carregar os detalhes do checklist.</Text>
          )}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E2F4FF", 
    justifyContent: 'flex-start',
  },
  containerHeader: {
    marginTop: '14%',
    marginBottom: '8%',
    paddingStart: '5%',
    paddingEnd: '5%'
  },
  message: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#0E5CB5',
    
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
  title: {
    fontSize: 30,
    marginTop: 30,
    fontWeight: 'bold',
    color: '#0E5CB5',
    marginBottom: 20,
  },
  checklistItem: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 50,
    elevation: 3,
    marginTop: 10,
    marginBottom: 20,
  },
  errorText: {
    fontSize: 16,
    color: 'red',
  },
  content: {
    marginBottom: '3%'
  },
  tituloDados:{
    fontSize: 20,
    color: '#0E5CB5',
    fontWeight: 'bold'
  },
  dados:{
    fontSize: 18,
    fontWeight: 'bold'
  }
});
