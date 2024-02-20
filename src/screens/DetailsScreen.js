import React from "react";
import { useState, useEffect } from "react";
import { Text, View, Linking } from "react-native";



const DetailsScreen = ({ route }) => {
    //Obtener los parametros de la pantalla Semestre
    const { data } = route.params;
    // console.log(JSON.parse(data));
    //const {item} = route.params;

    const [dataSemestre, setDataSemestre] = useState({})

    useEffect(() => {
        setDataSemestre(JSON.parse(data))
    }, [])


    const handleOpenLink = async () => {
        // funcion que abre el enlace en el navegador del dispositivo
        await Linking.openURL(dataSemestre.webLink);

    };

    return (
        <View>
            <Text>ID: {dataSemestre.id}</Text>
            <Text>Titulo: {dataSemestre.tittle}</Text>
            <Text>Descripcion: {dataSemestre.descripcion}</Text>
            <Text>Enlace : {dataSemestre.webLink}</Text>
            <Text onPress={handleOpenLink} style={{ color: 'blue' }}>
                Abrir enlace en el navegador
            </Text>

        </View>
    );

};

export default DetailsScreen;