import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { collection, doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../../../config/firebaseConfig1';

const Counter = ({ name, value, onIncrease, onDecrease }) => {
  const decreaseCounter = () => {
    if (value > 0) {
      onDecrease();
    }
  };

  return (
    <View style={styles.counter}>
      <Text style={styles.counterText}>{name}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={decreaseCounter}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.counterValue}>{value}</Text>
        <TouchableOpacity style={styles.button} onPress={onIncrease}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


export default function ButtonCounter({ navigation }) {
  const [quantities, setQuantities] = useState({
    Perneira: 0,
    Avental: 0,
    Máscara: 0,
    Luva: 0,
    ToucaÁrabe: 0,
    Jaleco: 0,
    ProtetorAuricular: 0,
    Óculos: 0,
    SapatosDeSegurança: 0,
  });

  const handleCounterChange = (itemName, newValue) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemName]: newValue,
    }));
  };

  const handleSavePress = async () => {
    try {
      // Salva as quantidades atualizadas no Firestore
      const estoqueRef = doc(db, 'estoque', 'quantidades');
      await setDoc(estoqueRef, quantities);

      // Volta para a tela anterior
      navigation.goBack();
    } catch (error) {
      console.error('Erro ao salvar no Firestore:', error);
    }
  };

  useEffect(() => {
    const fetchQuantities = async () => {
      try {
        const estoqueRef = doc(db, 'estoque', 'quantidades');
        const estoqueDoc = await getDoc(estoqueRef);

        if (estoqueDoc.exists()) {
          const estoqueData = estoqueDoc.data();
          setQuantities(estoqueData);
        }
      } catch (error) {
        console.error('Erro ao buscar quantidades no Firestore:', error);
      }
    };

    fetchQuantities();
  }, []);

  const handleBackPress = () => {
    // Cancela qualquer alteração e volta para a tela anterior
    console.log('Operação cancelada');
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Controle de Estoque</Text>
      <ScrollView contentContainerStyle={styles.scrollContentContainer}>
        <View style={styles.counterList}>
          {Object.entries(quantities).map(([itemName, value]) => (
            <Counter
              key={itemName}
              name={itemName}
              value={value}
              onIncrease={useCallback(() => handleCounterChange(itemName, value + 1), [handleCounterChange, itemName, value])}
              onDecrease={useCallback(() => handleCounterChange(itemName, value - 1), [handleCounterChange, itemName, value])}
            />
          ))}
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.button, styles.backButton]} onPress={handleBackPress}>
            <Text style={styles.buttonText}>Voltar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.saveButton]} onPress={handleSavePress}>
            <Text style={styles.buttonText}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E2F4FF",
    paddingVertical: 40,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#0E5CB5',
  },
  scrollContentContainer: {
    flexGrow: 1,
    alignItems: 'center',
  },
  counterList: {
    marginBottom: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop:30
  },
  counter: {
    width: 150,  // Definir uma largura fixa para os contadores
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 10,
    margin: 5,
    alignItems: 'center',
  },
  counterText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#0E5CB5',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#0E5CB5',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 50,
    marginHorizontal: 5,
  },
  buttonText: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold',
  },
  counterValue: {
    fontSize: 25,
    marginHorizontal: 5,
    color: '#0E5CB5',
  },
  backButton: {
    marginRight: 5,
  },
  saveButton: {
    marginLeft: 5,
  },
  counterList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',  // Alinhar os contadores ao centro
  },
});
