import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native';

export default function Select() {
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Animatable.Image
                    animation= "flipInY"
                    source={require('../../assets/Logo.png')}
                    style={{width: '100%' }}
                    resizeMode="contain"
                />
            </View>

            <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}> 
                <Text style={styles.title}>Entrar como:</Text>

                <TouchableOpacity 
                style={styles.button1}
                onPress={ () => navigation.navigate('LoginAlmox') }
                >
                    <Text style={styles.buttonText}>Almoxarifado</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                style={styles.button2}
                onPress={ () => navigation.navigate('LoginOper') }
                >
                    <Text style={styles.buttonText}>Operador</Text>
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
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 12,
        marginLeft: 90
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