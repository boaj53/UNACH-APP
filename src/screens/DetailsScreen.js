import React from "react";
import {Text,View,Linking } from "react-native";



const DetailsScreen = ({ route}) => {
    //Obtener los parametros de la pantalla Semestre
    const {itemId, itemTitle,itemDesc,webLink} = route.params;

    const handleOpenLink = async () => {
        // funcion que abre el enlace en el navegador del dispositivo
        await Linking.openURL(webLink);

    };

    return (
        <View>
            <Text>Item ID: {itemId}</Text>
            <Text>Item Title: {itemTitle}</Text>
            <Text>Item Description: {itemDesc}</Text>
            <Text>Enlace : {webLink}</Text>
            <Text onPress={handleOpenLink} style={{color: 'blue'}}> 
                Abrir enlace en el navegador
                </Text>
            
        </View>
    );

};

export default DetailsScreen;