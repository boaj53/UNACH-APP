import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'

const Materia = ({navigation}) => {

    const data = [
        {
            id: 1,
            tittle: 'Economia y Mercado', 
            

        },
        {
            id: 2,
            tittle: 'Estado y Sociedad',
            
        },
        {
            id: 3,
            tittle: 'Gobierno y Población',
           
        },
        {
            id: 4,
            tittle: 'Naturaleza del Conocimiento',
           
        },
        {
            id: 5,
            tittle: 'Razonamiento Matematico',
            
        },
        {
            id: 6,
            tittle: 'Sociedad Actual',
            
        },
    ];

    const handlePress = (item) => {
        console.log(item);
        // Navegar a DetailsScreen y pasar los parametros
        //navigation.navigate('DetailsScreen',{itemId: item.id, itemTitle: item.tittle, itemDesc: item.description, webLink: webLink});
        navigation.navigate('Semestre', { data: JSON.stringify(item) });
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
                    <Text style={{fontWeight: "600"}}> Elige tu materia</Text>

            </View>

    </View>
  )
}

export default Materia