import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'


const Boton2 = (props) => {

    const { onPress,text} = props    
    return(
        <TouchableOpacity 
            style = {styles.buttonContainer} 
            onPress={ onPress}          // funcion que permite presionar el boton
        >
            <Text style = { styles.buttonText}>
                { text}
            </Text>

        </TouchableOpacity>
    )
}

export default Boton2

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: '#FBD810',
        marginBottom: 10,
        paddingHorizontal: 25, 
        paddingVertical: 35,
        width: 150,
        height: 100,
        flexDirection: 'row',
        borderRadius: 10,
        marginBottom: 7,
    },

    buttonText: {
        color: '#000000',
        textAlign: 'center',
        fontWeight: 'bold'
    },

});