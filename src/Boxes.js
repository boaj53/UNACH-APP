import React, { usesState} from "react";
import { Text,View,Button, StyleSheet, SafeAreaView, ScrollView } from "react-native";

export default function Boxes() {

    const render = () => {
        return (
            <ScrollView>
            <View style={styles.container}>
             
               

            </View>
            </ScrollView>
        )

    }


    
};

const styles = StyleSheet.create({

    container: {
        flex: 1
    },
    header:{
        width: '100%',
        height: '15%',
        backgroundColor: '#c8c8c8',
        alignItems: 'center',
        justifyContent:'center'
    }

});