import React from "react";
import { View, Text } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function Inicial(){
    const navigation = {useNavigation};

    return(
        <View>
            <Text> Seguratech - Tela Inicial</Text>
        </View>  
    )
}