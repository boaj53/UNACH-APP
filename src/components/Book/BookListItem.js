import React from "react";
import {StyleSheet,Text,TouchableOpacity,View} from 'react-native';
import { useNavigation } from "@react-navigation/native";




const styles = StyleSheet.create({
    container:{
    alignItems: "center",
    borderRadius: 20,
    shadowColor: {width: 0, height: 5},
    shadowRadius: 5,
    marginVertical: 10,
    elevation: 3,
    paddingHorizontal: 13,
    paddingVertical: 17,
    backgroundColor: "#fff"
    
    }    
});


export default function BookListItem({book,item}){
        const navigation = useNavigation();
    return(
        
        <View style={styles.container}>
            <TouchableOpacity onPress={() => {navigation.navigate ("DetailsScreen", {item: item})}}>
            <Text>{book.tittle}</Text>   
            </TouchableOpacity>                    
        </View>
        
    );
}