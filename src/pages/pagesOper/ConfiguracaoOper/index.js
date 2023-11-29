import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { auth1 } from '../../../config/firebaseConfig1';

import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native';

export default function ConfiguracaoOper() {
    const navigation = useNavigation();

    const handleLogout = async () => {
        try {
          
          await auth1.signOut();
    
          
          navigation.navigate('LoginOper'); 
        } catch (error) {
          console.error('Erro ao fazer logout:', error);
        }
      };

    return(
        <View style={styles.container}>
            <View style={styles.containerHeader}>
                <Text style={styles.title}>Configuração</Text>
            </View>
            <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}> 

                <TouchableOpacity 
                style={styles.button1}
                onPress={ () => navigation.navigate('EditarContaOper') }
                >
                    <Text style={styles.buttonText}>Editar Conta</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                style={styles.button2}
                onPress={handleLogout}
                >
                    <Text style={styles.buttonText}>Logout</Text>
                </TouchableOpacity>
            
            </Animatable.View>           
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
    containerForm:{
        flex: 1,
        backgroundColor: "#FFF",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title:{
      fontSize: 40,
      fontWeight: 'bold',
      color: '#0E5CB5',
      marginLeft: '15%',
      marginBottom: 100,
      marginTop:100
    },
    text:{
        fontSize: 17,
        color: '#a1a1a1'
    },
    button1:{
        backgroundColor: "#0E5CB5",
        borderRadius: 50,
        paddingVertical: 15,
        width: '80%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 130

    },

    button2:{
        backgroundColor: "#0E5CB5",
        borderRadius: 50,
        paddingVertical: 15,
        width: '80%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:40
    },

    buttonText:{
        fontSize: 18,
        color: '#FFF',
        fontWeight: 'bold'
    }
})