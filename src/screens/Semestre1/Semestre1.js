import React from "react";
import { Text, View, StyleSheet, FlatList, TouchableOpacity, Linking } from "react-native";


const Semestre1 = ({ navigation }) => {
    const data = [
        {
            id: 1,
            tittle: 'Video La economia como Ciencia Social', /*tengo que agregar otro parametro con la descripcion del material y agregarle el link*/
            descripcion: 'Video de La economia como ciencia social',
            webLink: 'https://www.youtube.com/embed/IbWiuX2vUUM',

        },
        {
            id: 2,
            tittle: 'Construccion Del Objeto y Economía Politica',
            descripcion: 'Hola alumno, aca estará tu link del material pronto :)',
            webLink: 'https://drive.google.com/drive/u/2/folders/1cVNmDf6-akrsfe4aEhu2iOSZ1frORhN6'
        },
        {
            id: 3,
            tittle: 'Teoria Objetiva y Teoria Subjetiva Del Valor',
            descripcion: 'Teoria Objetiva y Teoria Subjetiva Del Valor',
            webLink: 'https://drive.google.com/drive/u/2/folders/1jwYN6XWcFli1MfPVgcGMB9HmP99c1XQw',
        },
        {
            id: 4,
            tittle: 'Instalacion de CmapTools',
            descripcion: 'Video tutorial de instalacion de la herramienta CmapTools',
            webLink: 'https://www.youtube.com/embed/xSAE9i6sM1I',
        },
        {
            id: 5,
            tittle: 'Los Agentes Económicos',
            descripcion: '',
            webLink: 'https://drive.google.com/drive/u/2/folders/1CtT90IyuTyCNPOyJRslgCSyp211bFkAp',
        },
        {
            id: 6,
            tittle: 'Modelos Economicos',
            descripcion: '',
            webLink: 'https://drive.google.com/drive/u/2/folders/1CtT90IyuTyCNPOyJRslgCSyp211bFkAp',
        },
        {
            id: 7,
            tittle: 'Del caos a la autorregulacion de un mercado libre',
            descripcion: '',
            webLink: 'https://drive.google.com/drive/u/2/folders/1CtT90IyuTyCNPOyJRslgCSyp211bFkAp',
        },
        {
            id: 8,
            tittle: 'Mercado, clases de mercado, competencia perfecta e imperfecta',
            descripcion: '',
            webLink: 'https://drive.google.com/drive/u/2/folders/1CtT90IyuTyCNPOyJRslgCSyp211bFkAp',
        },
        {
            id: 9,
            tittle: 'Instituciones y desempeño economico',
            descripcion: '',
            webLink: 'https://drive.google.com/drive/u/2/folders/1CtT90IyuTyCNPOyJRslgCSyp211bFkAp',
        }
    ];

    // Funcion para manejar la seleccion de un elemneto en la Flatlist


    const handlePress = (item) => {
        console.log(item);
        // Navegar a DetailsScreen y pasar los parametros
        //navigation.navigate('DetailsScreen',{itemId: item.id, itemTitle: item.tittle, itemDesc: item.description, webLink: webLink});
        navigation.navigate('DetailsScreen', { data: JSON.stringify(item) });
    };

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => handlePress(item)}>
                <View style={styles.container}>
                    <Text style={styles.item}>{item.tittle}</Text>
                </View>
            </TouchableOpacity>

        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                numColumns={2}
                columnWrapperStyle={{ gap: 10, paddingHorizontal: 12}}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                contentContainerStyle={styles.flatListContent}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        padding: 16,
        backgroundColor: '#ecf0f1'

    },
    item: {
        padding: 10,
        marginVertical: 15,
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
        elevation: 3,
        alignItems: 'center',
        textAlign: 'center',
    },
    flatListContent: {
        width: '%100',
        paddingHorizontal: 16,
    },


});

export default Semestre1;