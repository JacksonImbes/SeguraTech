import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { createUserWithEmailAndPassword} from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

import { auth1,db } from '../../../config/firebaseConfig1'

import * as Animatable from 'react-native-animatable';

import { useNavigation } from '@react-navigation/native';

import {useForm, Controller } from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup';

const schema = yup.object().shape({
    username: yup.string().required('Campo \"Nome"\ é obrigatório'),
    email: yup.string().email('E-mail inválido').required('Campo \"Email"\ é obrigatório'),
    password: yup.string().min(6, 'Senha deve ter no mínimo 6 caracteres').required('Campo \"Senha"\ é obrigatório'),
    confirmarSenha: yup.string().required('Campo \"Confirmar Senha"\ é obrigatório').test('password-match', 'Senhas devem ser iguais', function(value) {
        return this.parent.password === value;
      }),
  });
  
  export default function SignupAlmox() {
    const navigation = useNavigation();
  
    const { control, handleSubmit, formState: { errors } } = useForm({
      resolver: yupResolver(schema)
    });
  

    async function createUser(schema) {
      await createUserWithEmailAndPassword(auth1, schema.email, schema.password, schema.confirmarSenha, schema.username, "Almoxarifado")
        .then(() => {
          console.log('Conta criada com sucesso!');
          // Adicione a lógica para definir o tipo de usuário no Firestore
          const currentUser = auth1.currentUser;
          if (currentUser) {
            const currentUserUid = currentUser.uid;
            const userRef = doc(db, "users", currentUserUid);  // Use doc aqui
            setDoc(userRef, {
              userType: "Almoxarifado",
            }, { merge: true });
          }
          navigation.navigate('LoginAlmox');
        });
    }
  
    return (
      <View style={styles.container}>
        <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
  
          <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
            <Text style={styles.message}>Cadastre-se</Text>
          </Animatable.View>
  
          <Animatable.View animation="fadeInUp" style={styles.containerForm}>
  
            <Text style={styles.title}>Nome</Text>
            <View style={styles.containerUsername}>
              <Controller
                control={control}
                name="username"
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    placeholder="Digite seu nome"
                    placeholderTextColor='#fff'
                    style={[styles.inputUsername, {
                      borderWidth: errors.username && 1,
                      borderColor: errors.username && '#ff375b'
                    }]}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                  />
                )}
              />
              <Icon style={styles.iconUsername} name="person" color='#fff' size={25} />
            </View>
            {errors.username && <Text style={styles.labelError}>{errors.username.message}</Text>}
  
            <Text style={styles.title}>Email</Text>
            <View style={styles.containerEmail}>
              <Controller
                control={control}
                name="email"
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    placeholder="Digite seu email"
                    placeholderTextColor='#fff'
                    style={[styles.inputEmail, {
                      borderWidth: errors.email && 1,
                      borderColor: errors.email && '#ff375b'
                    }]}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                    keyboardType='email-address'
                  />
                )}
              />
              <Icon style={styles.iconMail} name="mail" color='#fff' size={25} />
            </View>
            {errors.email && <Text style={styles.labelError}>{errors.email.message}</Text>}
  
            <Text style={styles.title}>Senha</Text>
            <View style={styles.containerSenha}>
              <Controller
                control={control}
                name="password"
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    placeholder="Digite sua Senha"
                    placeholderTextColor='#fff'
                    style={[styles.inputSenha, {
                      borderWidth: errors.password && 1,borderColor: errors.password && '#ff375b'
                    }]}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                    secureTextEntry={true}
                  />
                )}
              />
              <Icon style={styles.iconSenha} name="key" color="#fff" size={25} />
            </View>
            {errors.password && <Text style={styles.labelError}>{errors.password.message}</Text>}

            <Text style={styles.title}>Confirmar Senha</Text>
            <View style={styles.containerSenha}>
            <Controller
                control={control}
                name="confirmarSenha"
                rules={{ validate: (value) => schema.validate({ confirmarSenha: value }) }}
                defaultValue=""
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    placeholder="Confirme sua senha"
                    placeholderTextColor='#fff'
                    style={[styles.inputSenha, {
                      borderWidth: errors.password && 1,borderColor: errors.password && '#ff375b'
                    }]}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                    secureTextEntry={true}
                  />
                )}
              />
              <Icon style={styles.iconSenha} name="checkmark-circle" color="#fff" size={25} />
            </View>
            {errors.confirmarSenha && <Text style={styles.labelError}>{errors.confirmarSenha.message}</Text>}
        
            <TouchableOpacity 
              style={styles.button}
              onPress={handleSubmit(createUser)}
            >
              <Text style={styles.buttonText}>Confirmar</Text>
            </TouchableOpacity>


            <Text style={styles.normalText}>
            Ao se cadastrar você está aceitando os
            {' '}
            <View style={styles.inline}>
              <TouchableOpacity
                style={styles.buttonTermos}
                onPress={() => navigation.navigate('TermosDeUso')}>
              <Text style={styles.termosText}>
                Termos de Uso e Política de Privacidade
              </Text>
              </TouchableOpacity>
            </View>
            </Text>

          </Animatable.View>
            
        </ScrollView>

      </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#E2F4FF"
    },
    containerHeader:{
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%',
        paddingEnd:'5%'
    },
    message:{
        fontSize: 28,
        fontWeight: 'bold',
        color: '#0E5CB5'
    },
    containerForm:{
        backgroundColor: '#FFF',
        flex: 2,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        borderTopEndRadius:25,
        paddingStart: '5%',
        paddingEnd: '5%',
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25
    },
    title:{
        fontSize: 20,
        marginTop: 28,
        fontWeight: 'bold'     
    },
    button:{
        backgroundColor: '#0E5CB5',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: '15%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingEnd: '5%',
        marginBottom: '20%'
    },
    buttonText:{
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold'
    },
    content:{
        marginBottom: '3%'
    },
    containerEmail: {
        borderRadius: 5,
        height: 50,
        marginBottom: 4,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor:'#0E5CB5',
        width:'100%',
        marginTop: 12
    },
    inputEmail:{
        width: '85%',
        height: 50,
        padding: 8,
        fontSize: 18,
        borderRadius: 5,
        color: '#fff',
    },
    iconMail:{
        paddingStart: 15,
        width: '15%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerSenha: {
        borderRadius: 5,
        height: 50,
        marginBottom: 4,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor:'#0E5CB5',
        width:'100%',
        marginTop: 12
    },
    inputSenha:{
        width: '85%',
        height: 50,
        padding: 8,
        fontSize: 18,
        borderRadius: 5,
        color: '#fff',
    },
    iconSenha: {
        paddingStart: 15,
        width: '15%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerUsername: {
        flexDirection:'row',
        width: '100%',
        backgroundColor:'#0E5CB5',
        borderRadius: 5,
        height: 50,
        alignItems:'center',
        marginBottom: 4,
        marginTop: 12
    },
    inputUsername:{
        width: '85%',
        height: 50,
        padding: 8,
        fontSize: 18,
        borderRadius: 5,
        color: '#fff',
    },
    iconUsername:{
        paddingStart: 15,
        width: '15%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    labelError:{
        alignSelf: 'flex-start',
        color:'#ff375b',
        marginBottom: 8
    },
    titleCargo:{
        marginBottom:16,
        fontSize: 20,
        marginTop: 28,
        fontWeight: 'bold'
    },
    normalText:{
      color: 'grey',
      fontSize: 15,
      fontWeight:'bold',
      marginLeft: 25,
      marginBottom: 15,
      marginTop:-40
    },
    termosText:{
      fontSize: 15,
      color: '#555',
      textDecorationLine: 'underline',
      fontWeight: 'bold',
    },
    meioText:{
      color: 'grey',
      fontSize: 15,
      fontWeight:'bold',
    },
    inline:{
      flexDirection: 'row',
      alignItems: 'center',
    }

});