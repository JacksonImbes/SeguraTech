import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import CheckBox from 'react-native-check-box';
import Icon from 'react-native-vector-icons/Ionicons';

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
    cargo: yup.string().test('is-checked', 'Selecione um cargo', (value) => value === 'Almoxarifado' || value === 'Operador').required('Selecione um cargo'),
  });
  
  export default function Checklist() {
    const navigation = useNavigation();
  
    const { control, handleSubmit, formState: { errors }, setValue } = useForm({
      resolver: yupResolver(schema)
    });
  
    const [selectedOption, setSelectedOption] = useState('');
  
    const handleCheckBoxClick = (option) => {
        setSelectedOption(option);
        setValue('cargo', option);
    };

    async function createUser(schema) {
        await createUserWithEmailAndPassword(auth, schema.email, schema.password,schema.confirmarSenha, schema.username, schema.cargo)
        .then(() => {
            console.log('Conta criada com sucesso!');
            navigation.navigate('LogIn');
        });
    };
  
    return (
      <View style={styles.container}>
        <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
  
          <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
            <Text style={styles.message}>Checklist</Text>
          </Animatable.View>
  
          <Animatable.View animation="fadeInUp" style={styles.containerForm}>
  
            <Text style={styles.title}>Nome</Text>
            <View style={styles.containerUsername}>
              <Controller
                control={control}
                name="username"
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    placeholder="Digite nome do funcionário"
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

            <Text style={styles.titleCargo}>EPI's</Text>
            <View style={styles.containerCheckBox}>

            <Controller
                control={control}
                name='Perneira'
                defaultValue={false}
                render={({ field: { onChange, value } }) => (
                    <CheckBox 
                        onChange={onChange}
                        name='Perneira'
                        title='Perneira'
                        style={{marginBottom: 16}}
                        isChecked={selectedOption === 'Perneira'}
                        onClick={() => handleCheckBoxClick('Perneira')}
                        value={value}
                        checkedCheckBoxColor= '#0E5CB5'
                        uncheckedCheckBoxColor='black'
                        rightText="Perneira"
                        rightTextStyle={{ fontSize: 19, color: selectedOption === 'Perneira' ? '#0E5CB5' : 'black', fontWeight: 'bold' }}
                    />

                )}
            />

            <Controller
                control={control}
                name='Avental'
                defaultValue={false}
                render={({ field: { onChange, value } }) => (
                    <CheckBox
                        onChange={onChange}
                        title='Avental'
                        style={{marginBottom: 16}}
                        isChecked={selectedOption === 'Avental'}
                        onClick={() => handleCheckBoxClick('Avental')}
                        value={value}
                        checkedCheckBoxColor= '#0E5CB5'
                        uncheckedCheckBoxColor='black'
                        rightText="Avental"
                        rightTextStyle={{ fontSize: 19, color: selectedOption === 'Avental' ? '#0E5CB5' : 'black', fontWeight: 'bold' }}
                    />
                )}
            />

            <Controller
                control={control}
                name='Máscara'
                defaultValue={false}
                render={({ field: { onChange, value } }) => (
                    <CheckBox
                        onChange={onChange}
                        title='Máscara'
                        style={{marginBottom: 16}}
                        isChecked={selectedOption === 'Máscara'}
                        onClick={() => handleCheckBoxClick('Máscara')}
                        value={value}
                        checkedCheckBoxColor= '#0E5CB5'
                        uncheckedCheckBoxColor='black'
                        rightText="Máscara"
                        rightTextStyle={{ fontSize: 19, color: selectedOption === 'Máscara' ? '#0E5CB5' : 'black', fontWeight: 'bold' }}
                    />
                )}
            />

            <Controller
                control={control}
                name='Luva'
                defaultValue={false}
                render={({ field: { onChange, value } }) => (
                    <CheckBox
                        onChange={onChange}
                        title='Luva'
                        style={{marginBottom: 16}}
                        isChecked={selectedOption === 'Luva'}
                        onClick={() => handleCheckBoxClick('Luva')}
                        value={value}
                        checkedCheckBoxColor= '#0E5CB5'
                        uncheckedCheckBoxColor='black'
                        rightText="Luva"
                        rightTextStyle={{ fontSize: 19, color: selectedOption === 'Luva' ? '#0E5CB5' : 'black', fontWeight: 'bold' }}
                    />
                )}
            />

            <Controller
                control={control}
                name='Touca Árabe'
                defaultValue={false}
                render={({ field: { onChange, value } }) => (
                    <CheckBox
                        onChange={onChange}
                        title='Touca Árabe'
                        style={{marginBottom: 16}}
                        isChecked={selectedOption === 'Touca Árabe'}
                        onClick={() => handleCheckBoxClick('Touca Árabe')}
                        value={value}
                        checkedCheckBoxColor= '#0E5CB5'
                        uncheckedCheckBoxColor='black'
                        rightText="Touca Árabe"
                        rightTextStyle={{ fontSize: 19, color: selectedOption === 'Touca Árabe' ? '#0E5CB5' : 'black', fontWeight: 'bold' }}
                    />
                )}
            />

            <Controller
                control={control}
                name='Óculos'
                defaultValue={false}
                render={({ field: { onChange, value } }) => (
                    <CheckBox
                        onChange={onChange}
                        title='Óculos'
                        style={{marginBottom: 16}}
                        isChecked={selectedOption === 'Óculos'}
                        onClick={() => handleCheckBoxClick('Óculos')}
                        value={value}
                        checkedCheckBoxColor= '#0E5CB5'
                        uncheckedCheckBoxColor='black'
                        rightText="Óculos"
                        rightTextStyle={{ fontSize: 19, color: selectedOption === 'Óculos' ? '#0E5CB5' : 'black', fontWeight: 'bold' }}
                    />
                )}
            />

            <Controller
                control={control}
                name='Jaleco'
                defaultValue={false}
                render={({ field: { onChange, value } }) => (
                    <CheckBox
                        onChange={onChange}
                        title='Jaleco'
                        style={{marginBottom: 16}}
                        isChecked={selectedOption === 'Jaleco'}
                        onClick={() => handleCheckBoxClick('Jaleco')}
                        value={value}
                        checkedCheckBoxColor= '#0E5CB5'
                        uncheckedCheckBoxColor='black'
                        rightText="Jaleco"
                        rightTextStyle={{ fontSize: 19, color: selectedOption === 'Jaleco' ? '#0E5CB5' : 'black', fontWeight: 'bold' }}
                    />
                )}
            />

            <Controller
                control={control}
                name='Protetor Auricular'
                defaultValue={false}
                render={({ field: { onChange, value } }) => (
                    <CheckBox
                        onChange={onChange}
                        title='Protetor Auricular'
                        style={{marginBottom: 16}}
                        isChecked={selectedOption === 'Protetor Auricular'}
                        onClick={() => handleCheckBoxClick('Protetor Auricular')}
                        value={value}
                        checkedCheckBoxColor= '#0E5CB5'
                        uncheckedCheckBoxColor='black'
                        rightText="Protetor Auricular"
                        rightTextStyle={{ fontSize: 19, color: selectedOption === 'Protetor Auricular' ? '#0E5CB5' : 'black', fontWeight: 'bold' }}
                    />
                )}
            />

            <Controller
                control={control}
                name='Sapato de Segurança'
                defaultValue={false}
                render={({ field: { onChange, value } }) => (
                    <CheckBox
                        onChange={onChange}
                        title='Sapato de Segurança'
                        style={{marginBottom: 16}}
                        isChecked={selectedOption === 'Sapato de Segurança'}
                        onClick={() => handleCheckBoxClick('Sapato de Segurança')}
                        value={value}
                        checkedCheckBoxColor= '#0E5CB5'
                        uncheckedCheckBoxColor='black'
                        rightText="Sapato de Segurança"
                        rightTextStyle={{ fontSize: 19, color: selectedOption === 'Sapato de Segurança' ? '#0E5CB5' : 'black', fontWeight: 'bold' }}
                    />
                )}
            />

            </View>
            {errors.cargo && <Text style={styles.labelError}>{errors.cargo.message}</Text>}
        
            <TouchableOpacity 
                    style={styles.button}
                    onPress={handleSubmit(createUser)}
                >
                    <Text style={styles.buttonText}>Confirmar</Text>
                </TouchableOpacity>

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
    }

});