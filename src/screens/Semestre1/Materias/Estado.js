import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'

const Estado = ({navigation}) => {

    const data = [
        {
            id: 1,
            tittle: 'Constitucion Politica de los Estados Unidos Mexicanos', 
            
            

        },
        {
            id: 2,
            tittle: 'Video Elementos del Estado',
            
        },
        {
            id: 3,
            tittle: 'Elementos constituidos del Estado',
           
        },
        {
            id: 4,
            tittle: 'El Estado como tipo',
           
        },
        {
            id: 5,
            tittle: 'Guía a la redacción en el estilo APA, 6ta edición',
            
        },
        {
            id: 6,
            tittle: 'Análisis estructural de la Teoría de Estado',
            
        },
    ];

    const handlePress = (item) => {
        console.log(item);
        // Navegar a DetailsScreen y pasar los parametros
        //navigation.navigate('DetailsScreen',{itemId: item.id, itemTitle: item.tittle, itemDesc: item.description, webLink: webLink});
        navigation.navigate('DetailsScreen', { data: JSON.stringify(item) });
    };

  return (
    <View style={{ flex:1, marginTop: 40}}>
      <FlatList 
      data={data}
      numColumns={2}
      columnWrapperStyle={{ gap: 10, paddingHorizontal: 12}}
      contentContainerStyle={{ gap: 10, paddingBottom: 20}}
      keyExtractor={(item, idx) => item.tittle + idx}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => {
        return (
            
            <TouchableOpacity onPress={() => handlePress(item)}
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row",
                    backgroundColor: "#6b7280",
                    flex: 1,
                    height: 210,
                    borderRadius: 20
                }}
            >

                <Text style={{ color: "white"}}>{item.tittle}</Text>

            </TouchableOpacity>
        )
      }}
      />
            <View
                style={{
                    display: "flex",
                    justifyContent: 'space-around',
                    alignItems: "center",
                    flexDirection: "row",
                    paddingHorizontal: 15,
                    marginTop: 15,
                }}
                >
                    

            </View>

    </View>
  )
}

export default Estado