import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native';

export default function EditarContaOper() {
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <View style={styles.containerLogo}>
            <Text style={styles.title}>Conta</Text>
            </View>

            <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}> 

                <TouchableOpacity 
                style={styles.button1}
                onPress={ () => navigation.navigate('AlterarEmailOper') }
                >
                    <Text style={styles.buttonText}>Alterar Email</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                style={styles.button2}
                onPress={ () => navigation.navigate('AlterarSenhaOper') }
                >
                    <Text style={styles.buttonText}>Alterar Senha</Text>
                </TouchableOpacity>  
            </Animatable.View>           
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
        paddingEnd: '5%'
    },
    title:{
      fontSize: 40,
      fontWeight: 'bold',
      color: '#0E5CB5'
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
        marginTop: 100

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