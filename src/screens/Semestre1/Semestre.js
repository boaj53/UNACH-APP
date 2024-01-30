import React from "react";
import { Text,View, StyleSheet, FlatList, TouchableOpacity,Linking} from "react-native";


const Semestre = ({navigation}) => {    
const data = [
    {
        id: 1,
        tittle: 'Video La economia como Ciencia Social', /*tengo que agregar otro parametro con la descripcion del material y agregarle el link*/
        description: 'Video de La economia como ciencia social',
        webLink: 'https://www.youtube.com/embed/IbWiuX2vUUM',
        
    },
    {
        id: 2,
        tittle: 'Construccion Del Objeto y Economía Politica',
        description: 'Hola alumno, aca estará tu link del material pronto :)',
        webLink: 'https://drive.google.com/drive/u/2/folders/1cVNmDf6-akrsfe4aEhu2iOSZ1frORhN6'
    },
    {
        id: 3,
        tittle: 'Teoria Objetiva y Teoria Subjetiva Del Valor',
        description: 'Teoria Objetiva y Teoria Subjetiva Del Valor',
        webLink: 'https://drive.google.com/drive/u/2/folders/1jwYN6XWcFli1MfPVgcGMB9HmP99c1XQw',
    },
    {
        id: 4,
        tittle: 'Instalacion de CmapTools',
        description: 'Video tutorial de instalacion de la herramienta CmapTools',
        webLink: 'https://www.youtube.com/embed/xSAE9i6sM1I',
    },
    {
        id: 5,
        tittle: 'Los Agentes Económicos',
        description: '',
        webLink: 'https://drive.google.com/drive/u/2/folders/1CtT90IyuTyCNPOyJRslgCSyp211bFkAp',
    }
];

// Funcion para manejar la seleccion de un elemneto en la Flatlist


const handlePress = (webLink) => {
    // Navegar a DetailsScreen y pasar los parametros
    //navigation.navigate('DetailsScreen',{itemId: item.id, itemTitle: item.tittle, itemDesc: item.description, itemLink: item.link});
    navigation.navigate('DetailsScreen', {webLink});
};

const renderItem = ({ item }) => {
    return(
        <TouchableOpacity onPress={() => handlePress(item.webLink)}>
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
            keyExtractor={(item) => item.id}
            renderItem={renderItem} 
            contentContainerStyle={styles.flatListContent}
        />
    </View>
);
};

const styles = StyleSheet.create({
    container:{
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

export default Semestre;