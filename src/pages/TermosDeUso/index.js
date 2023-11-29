import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableWithoutFeedback } from 'react-native';

const TermosDeUso = () => {
  return (
    <TouchableWithoutFeedback>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <Text style={styles.title}>Política de Privacidade</Text>
          <Text style={[styles.text, styles.justifyText]}>
            Esta Política de Privacidade descreve como coletamos, usamos e protegemos
            as informações fornecidas pelos usuários do nosso aplicativo de segurança
            no trabalho. Nosso compromisso é garantir a proteção e a confidencialidade
            dos dados pessoais dos usuários.
          </Text>
          <Text style={[styles.text, styles.justifyText]}>
            Reconhecemos e garantimos que, em hipótese alguma, divulgaremos qualquer tipo de dado
            eventualmente enviado a nós, seja por formulário, e-mail ou qualquer outro meio.
          </Text>
          <Text style={[styles.subTitle, styles.justifyText]}>Coleta de Informações:</Text>
          {/* ... (continuação do seu código) */}
          <Text style={[styles.text, styles.justifyText]}>
            Data de Vigência: 01/12/2025
          </Text>
          <Text style={[styles.text, styles.justifyText]}>
            Última Atualização: 29/11/2023
          </Text>
          <Text style={[styles.text, styles.justifyText]}>
            seguratech@contato.com
          </Text>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: "#E2F4FF",
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "#E2F4FF",
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 12,
    textAlign: 'center',
    color: '#0E5CB5', // Cor adicionada
  },
  text: {
    fontSize: 17,
    color: 'black', // Cor adicionada
    marginBottom: 20,
    textAlign: 'justify',
  },
  justifyText: {
    textAlign: 'justify',
  },
  subTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10,
    color: '#0E5CB5', // Cor adicionada
  },
});

export default TermosDeUso;
