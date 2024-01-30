import React from "react";
import { Text,View, StyleSheet, FlatList, TouchableOpacity } from "react-native";


const Semestre6 = ({navigation}) => {
    const data = [
        {
            id: 16,
            tittle: 'Item 16',
        },
        {
            id: 17,
            tittle: 'Item 17',
        },
        {
            id: 18,
            tittle: 'Item 18'
        },
    ];


    const handleItemPress = (item) => {
        navigation.navigate('DetailsScreen',{itemId: item.id, itemTitle: item.tittle});
    };

    return(
        <View style={styles.container}>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => handleItemPress(item)} style={styles.item}>
                        <Text>{item.tittle}</Text>

                    </TouchableOpacity>
                )}

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
    },
    flatListContent: {
        width: '%100',
        paddingHorizontal: 16,
    },

    
});


export default Semestre6;