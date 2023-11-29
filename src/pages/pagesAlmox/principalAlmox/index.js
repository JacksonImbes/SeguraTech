import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';

import * as Animatable from 'react-native-animatable';

import Icon from 'react-native-vector-icons/Ionicons';

export default function PrincipalAlmox(){

    const navigation = useNavigation();

    return(

    <View style = {styles.container}>
        <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
            <Text style={styles.message}>SeguraTech</Text>
        </Animatable.View>
        <Animatable.View animation="fadeInUp" style={styles.containerForm}>
            <Animatable.Image
                        animation= "flipInY"
                        source={require('../../../assets/Logo_Login.png')}
                        style={{
                            width: '45%',
                            alignItems: 'center',
                            justifyContent:'center',
                            marginTop: '5%',
                            marginBottom: '10%'
                        }}
                        resizeMode="contain"
                    />
            <View style={{flex:1, flexDirection: 'row'}}>
                <TouchableOpacity 
                style={styles.buttomChecklist}
                onPress={ () => navigation.navigate('Checklist') }
                >
                    <Image
                        source={require('../../../assets/imgCheckList.png')}
                        style={{
                            width: 50,
                            height: 50,
                            marginTop: 10,
                            marginBottom: 10
                        }}
                    />
                    <Text style={{color: '#fff', fontSize: 15, fontWeight: 'bold'}}>Responder Checklist</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                style={styles.buttomRelatorio}
                onPress={() => navigation.navigate('Relatorio')}
                >
                    <Image
                        source={require('../../../assets/relatório.png')}
                        style={{
                            width: 50,
                            height: 50,
                            marginTop: 10,
                            marginBottom: 10
                        }}
                    />
                    <Text style={{color: '#fff', fontSize: 15, fontWeight: 'bold'}}> Relatório EPI's</Text>
                </TouchableOpacity>
            </View>

            <View style={{flex:1.5, flexDirection: 'row'}}>
                <TouchableOpacity 
                style={styles.buttomEstoque}
                onPress={() => navigation.navigate('Estoque')}
                >
                    <Image
                        source={require('../../../assets/estoque.png')}
                        style={{
                            width: 50,
                            height: 50,
                            marginTop: 10,
                            marginBottom: 10
                        }}
                    />
                    <Text style={{color: '#fff', fontSize: 15, fontWeight: 'bold'}}>Controle de Estoque</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                style={styles.buttomConfiguracao}
                onPress={() => navigation.navigate('ConfiguracaoAlmox')}
                >
                    <Icon style={styles.iconConfig} name="settings-outline" color='#fff' size={50}/>
                    <Text style={{color: '#fff', fontSize: 15, fontWeight: 'bold'}}> Configuração</Text>
                </TouchableOpacity>
            </View>
        </Animatable.View>

    </View>

    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#E2F4FF"
    },
    containerHeader:{
        marginTop: '14%',
        marginBottom: '8%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    message:{
        fontSize: 40,
        fontWeight: 'bold',
        color: '#0E5CB5'
    },
    containerForm:{
        backgroundColor: '#FFF',
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    iconConfig:{
        marginTop: 10,
        marginBottom: 10,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttomChecklist:{
        backgroundColor: '#0E5CB5',
        width: '50%',
        height: '85%',
        borderRadius: 5,
        paddingVertical: 8,
        marginEnd: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttomRelatorio:{
        backgroundColor: '#0E5CB5',
        width: '50%',
        height:'85%',
        borderRadius: 5,
        paddingVertical: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginStart: 10
    },
    buttomEstoque:{
        backgroundColor: '#0E5CB5',
        width: '50%',
        height:'55%',
        borderRadius: 5,
        paddingVertical: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginEnd: 5
    },
    buttomConfiguracao:{
        backgroundColor: '#0E5CB5',
        width: '50%',
        height:'55%',
        borderRadius: 5,
        paddingVertical: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginStart: 10
    }

});