import React, { usesState} from "react";
import { Text,View, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import Boton2 from "../components/Buton2";


export default function Inicio({navigation}) {

    const Header = () => {
        return (
            
            <View style={styles.header}>
                <Text style={styles.header}> Selecciona tu Semestre</Text>

            </View>
            
        )
    }

    const Boxes = () => {
        return(
            <View style={styles.boxContainer}> 
                
                <View style={styles.box}> 
                    <View style={styles.inner}>
                       <Text> </Text> 
                       <Boton2 
                       text = '1er Semestre'
                       onPress = { () => {navigation.navigate('Semestre')}}
                       />
                    </View>
                </View>

                <View style={styles.box}> 
                    <View style={styles.inner}>
                       <Text></Text> 
                       <Boton2 
                       text = '2do Semestre'
                       onPress = { () => {navigation.navigate('Semestre2')}}
                       />
                    </View>             
                </View>

                <View style={styles.box}> 
                    <View style={styles.inner}>
                       <Text></Text> 
                       <Boton2 
                       text = '3er Semestre'
                       onPress = { () => {navigation.navigate('Semestre3')}}
                       />
                    </View>             
                </View>

                <View style={styles.box}> 
                    <View style={styles.inner}>
                       <Text></Text> 
                       <Boton2 
                       text = '4to Semestre'
                       onPress = { () => {navigation.navigate('Semestre4')}}
                       />
                    </View>             
                </View>

                <View style={styles.box}> 
                    <View style={styles.inner}>
                       <Text></Text> 
                       <Boton2 
                       text = '5to Semestre'
                       onPress = { () => {navigation.navigate('Semestre5')}}
                       />
                    </View>             
                </View>

                <View style={styles.box}> 
                    <View style={styles.inner}>
                       <Text></Text> 
                       <Boton2 
                       text = '6to Semestre'
                       onPress = {() => {navigation.navigate('Semestre6')}}
                       />
                    </View>             
                </View>


            </View>
        )
    };



    return(
        <SafeAreaView style={styles.container}>
            <Header/>
            <Boxes />           
        </SafeAreaView>
    )   
};

const styles = StyleSheet.create({

    container: {
        flex: 1
    },
    header:{
        width: '100%',
        height: '16%',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: "bold",
        textAlign: "center"
              
    },
    boxContainer: {
        width: '100%',
        height: '85%',
        backgroundColor: '#0C2566',
        padding: 7,
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderRadius: 2,
    },
    box: {
        width: '50%',
        height: '33%',
        padding: 7,
        backgroundColor: '#ABA2A2',
        borderRadius: 15,
        
    },
    inner: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,

    }  

});