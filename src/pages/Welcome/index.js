import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native';

export default function Welcome() {
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
                <Text style={styles.title}>Bem Vindo!</Text>
                <Text style={styles.text}>Faça o Login para começar</Text> 

                <TouchableOpacity 
                style={styles.button}
                onPress={ () => navigation.navigate('LogIn') }
                >
                    <Text style={styles.buttonText}>Acessar</Text>
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
        flex: 2,
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
        marginBottom: 12
    },
    text:{
        fontSize: 17,
        color: '#a1a1a1'
    },
    button:{
        position: 'absolute',
        backgroundColor: "#0E5CB5",
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText:{
        fontSize: 18,
        color: '#FFF',
        fontWeight: 'bold'
    }
})