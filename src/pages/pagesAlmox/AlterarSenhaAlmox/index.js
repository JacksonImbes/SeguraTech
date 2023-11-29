import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { updatePassword } from 'firebase/auth';
import { auth1 } from '../../../config/firebaseConfig1';

export default function AlterarSenhaAlmox() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [senhaAtual, setSenhaAtual] = useState('');
  const [novaSenha, setNovaSenha] = useState('');

  const handleConfirmar = async () => {
    const user = auth1.currentUser;

    if (user) {
      try {
        await updatePassword(user, novaSenha);

        console.log('Senha alterada com sucesso');
        navigation.navigate('EditarContaAlmo');
      } catch (error) {
        console.error('Erro ao atualizar senha:', error);
      }
    }
  };

  const handleCancelar = () => {
    console.log('EditarContaAlmo');
  };
  return (
    <View style={styles.container}>
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.containerLogo}>
          <Text style={styles.title}>Alterar Senha</Text>
        </View>

        <View style={styles.containerForm}>
          <TextInput
            style={styles.input}
            placeholder="Digite seu email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            keyboardType='email-address'
          />

          <TextInput
            style={styles.input}
            placeholder="Digite sua senha atual"
            value={senhaAtual}
            onChangeText={(text) => setSenhaAtual(text)}
            secureTextEntry={true}
          />

          <TextInput
            style={styles.input}
            placeholder="Digite a nova senha"
            value={novaSenha}
            onChangeText={(text) => setNovaSenha(text)}
            secureTextEntry={true}
          />

          <Text style={styles.text}>
            Preencha os campos acima para alterar sua senha.
          </Text>

          <TouchableOpacity style={styles.buttonConfirmar} onPress={handleConfirmar}>
            <Text style={styles.buttonText}>Confirmar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonCancelar} onPress={handleCancelar}>
            <Text style={styles.buttonText}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#E2F4FF"
},
containerLogo:{
    flex: 1,
    backgroundColor: "#E2F4FF",
    justifyContent: 'center',
    alignItems: 'center'
},
containerForm:{
    flex: 1,
    backgroundColor: "#FFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
},
title:{
    fontSize: 40,
    fontWeight: 'bold',
    color: '#0E5CB5',
    marginBottom: 20,
    marginTop: 20,
},
buttonConfirmar: {
    backgroundColor: "#0E5CB5",
    borderRadius: 50,
    paddingVertical: 15,
    width: '80%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 90,
    },
buttonCancelar: {
    backgroundColor: "#0E5CB5",
    borderRadius: 50,
    paddingVertical: 15,
    width: '80%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    marginBottom:50
},
buttonText: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold',
},
text:{
    color: 'grey',
    fontSize:16,
    fontWeight: 'bold',
    marginTop: 20
},
input: {
    borderBottomWidth: 1,
    borderColor: '#a1a1a1',
    marginVertical: 20,
    fontSize: 18,
    marginTop: 50,
    },
});
