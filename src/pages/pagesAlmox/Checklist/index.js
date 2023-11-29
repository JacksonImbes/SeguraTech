import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { TextInputMask } from 'react-native-masked-text';
import { useForm, Controller, useFieldArray } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigation } from '@react-navigation/native';
import {db} from '../../../config/firebaseConfig1';
import {collection, addDoc, serverTimestamp } from 'firebase/firestore'


import * as Animatable from 'react-native-animatable';

const schema = yup.object().shape({
  nomeOper: yup.string().required('Campo "Nome" é obrigatório'),
  emailOper: yup.string().email("Email inválido").required("O campo \"Email\" é obrigatório"),
  checklist: yup.array().of(
      yup.object().shape({
          dataRetirada: yup.string().required('Campo "Data de Retirada" é obrigatório'),
          dataVencimento: yup.string().required('Campo "Data de Vencimento" é obrigatório'),
          nomeEPI: yup.string().required('Campo "Nome do EPI" é obrigatório'),
      })
  ),
});

export default function ChecklistScreen() {
  const navigation = useNavigation();

  const { control, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'checklist',
  });

  const addEPIField = () => {
    append({ dataRetirada: '', dataVencimento: '', nomeEPI: '' });
  };

  const onSubmit = async (data) => {
    try {
      console.log('Dados a serem salvos:', data);

      // Salvar no Firebase
      const checklistRef = await addDoc(collection(db, 'checklists'), {
        nomeOper: data.nomeOper,
        emailOper: data.emailOper,
    });

      // Adicionar cada item ao checklist
      const itemsCollection = collection(checklistRef, 'items');
      await Promise.all(data.checklist.map(async (item) => {
        await addDoc(itemsCollection, {
          ...item,
        });
      }));
      console.log('Checklist salvo com ID:', checklistRef.id);

      reset();
      console.log('Formulário limpo com sucesso');
    } catch (error) {
      console.error('Erro ao salvar checklist:', error);
    }
  };
  
  return (
    <View style={styles.container}>
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
          <Text style={styles.message}>Checklist</Text>
        </Animatable.View>

        <Animatable.View animation="fadeInUp" style={styles.containerForm}>

          <Text style={styles.title}>Nome do Operador</Text>
          <View style={styles.containerUsername}>
            <Controller
              control={control}
              name="nomeOper"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  placeholder="Digite o nome do Operador"
                  placeholderTextColor='#fff'
                  style={[styles.inputUsername, {
                    borderWidth: errors.nomeOper && 1,
                    borderColor: errors.nomeOper && '#ff375b'
                  }]}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                />
              )}
            />
          </View>
          {errors.nomeOper && <Text style={styles.labelError}>{errors.nomeOper.message}</Text>}

          <Text style={styles.title}>Email do Operador</Text>
          <View style={styles.containerUsername}>
              <Controller
                  control={control}
                  name="emailOper"
                  render={({ field: { onChange, onBlur, value } }) => (
                      <TextInput
                          placeholder="Digite o email do Operador"
                          placeholderTextColor='#fff'
                          style={[styles.inputUsername, {
                              borderWidth: errors.emailOper && 1,
                              borderColor: errors.emailOper && '#ff375b'
                          }]}
                          onChangeText={onChange}
                          onBlur={onBlur}
                          value={value}
                      />
                  )}
              />
          </View>
          {errors.emailOper && <Text style={styles.labelError}>{errors.emailOper.message}</Text>}

          <Text style={styles.title}>EPIs</Text>
          {fields.map((field, index) => (
            <View key={field.id}>
              <Text style={styles.subtitle}>EPI {index + 1}</Text>

              <Text style={styles.title}>Data de Retirada</Text>
              <View style={styles.containerUsername}>
                <Controller
                  control={control}
                  name={`checklist[${index}].dataRetirada`}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInputMask
                      type={'datetime'}
                      options={{ format: 'DD-MM-YYYY' }}
                      placeholder="DD-MM-YYYY"
                      placeholderTextColor='#fff'
                      style={[styles.inputUsername, {
                        borderWidth: errors.checklist && errors.checklist[index] && errors.checklist[index].dataRetirada && 1, borderColor: errors.checklist && errors.checklist[index] && errors.checklist[index].dataRetirada && '#ff375b'
                      }]}
                      onChangeText={onChange}
                      onBlur={onBlur}
                      value={value}
                    />
                  )}
                />
              </View>
              {errors.checklist && errors.checklist[index] && errors.checklist[index].dataRetirada && <Text style={styles.labelError}>{errors.checklist[index].dataRetirada.message}</Text>}

              <Text style={styles.title}>Data de Vencimento</Text>
              <View style={styles.containerUsername}>
                <Controller
                  control={control}
                  name={`checklist[${index}].dataVencimento`}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInputMask
                      type={'datetime'}
                      options={{ format: 'DD-MM-YYYY' }}
                      placeholder="DD-MM-YYYY"
                      placeholderTextColor='#fff'
                      style={[styles.inputUsername, {
                        borderWidth: errors.checklist && errors.checklist[index] && errors.checklist[index].dataVencimento && 1, borderColor: errors.checklist && errors.checklist[index] && errors.checklist[index].dataVencimento && '#ff375b'
                      }]}
                      onChangeText={onChange}
                      onBlur={onBlur}
                      value={value}
                    />
                  )}
                />
              </View>
              {errors.checklist && errors.checklist[index] && errors.checklist[index].dataVencimento && <Text style={styles.labelError}>{errors.checklist[index].dataVencimento.message}</Text>}

              <Text style={styles.title}>Nome do EPI</Text>
              <View style={styles.containerUsername}>
                <Controller
                  control={control}
                  name={`checklist[${index}].nomeEPI`}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      placeholder="Digite o nome do EPI"
                      placeholderTextColor='#fff'
                      style={[styles.inputSenha, {
                        borderWidth: errors.checklist && errors.checklist[index] && errors.checklist[index].nomeEPI && 1, borderColor: errors.checklist && errors.checklist[index] && errors.checklist[index].nomeEPI && '#ff375b'
                      }]}
                      onChangeText={onChange}
                      onBlur={onBlur}
                      value={value}
                    />
                  )}
                />
              </View>
              {errors.checklist && errors.checklist[index] && errors.checklist[index].nomeEPI && <Text style={styles.labelError}>{errors.checklist[index].nomeEPI.message}</Text>}
            </View>
          ))}

          <TouchableOpacity
            style={styles.addButton}
            onPress={addEPIField}
          >
            <Icon name="add-circle" size={30} color="#0E5CB5" />
            <Text style={styles.addButtonText}>Adicionar EPI</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={handleSubmit(onSubmit)}
            disabled={false}
          >
            <Text style={styles.buttonText}>Confirmar</Text>
          </TouchableOpacity>

        </Animatable.View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E2F4FF"
  },
  containerHeader: {
    marginTop: '14%',
    marginBottom: '8%',
    paddingStart: '5%',
    paddingEnd: '5%'
  },
  message: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#0E5CB5',
    marginLeft:'32%'
  },
  containerForm: {
    backgroundColor: '#FFF',
    flex: 2,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderTopEndRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  title: {
    fontSize: 18,
    marginTop: 10,
    fontWeight: 'bold',
    color: '#0E5CB5',
  },
  subtitle: {
    fontSize: 16,
    marginTop: 20,
    fontWeight: 'bold',
    color: '#0E5CB5',
  },
  button: {
    backgroundColor: '#0E5CB5',
    width: '100%',
    borderRadius: 4,
    paddingVertical: 10,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    marginBottom: '3%'
  },
  containerUsername: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#0E5CB5',
    borderRadius: 5,
    height: 50,
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 12
  },
  inputUsername: {
    flex: 1,
    height: 50,
    padding: 10,
    fontSize: 18,
    borderRadius: 5,
    color: '#fff',
  },
  labelError: {
    alignSelf: 'flex-start',
    color: '#ff375b',
    marginTop: 4,
  },
  inputSenha: {
    height: 50,
    padding: 10,
    fontSize: 18,
    borderRadius: 5,
    borderWidth: 1,
    color: '#fff',
    borderColor: '#0E5CB5',
    marginBottom: 10,
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  addButtonText: {
    color: '#0E5CB5',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  datePickerInput: {
    borderWidth: 1,
    borderColor: '#0E5CB5',
    padding: 10,
    marginBottom: 10,
  },
  datePickerText: {
    color: '#0E5CB5',
  },
});
