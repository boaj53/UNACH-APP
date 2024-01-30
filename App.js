import {  NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Semestre from './src/screens/Semestre1/Semestre';
import Semestre2 from './src/screens/Semestre2/Semestre2';
import Semestre3 from './src/screens/Semestre3/Semestre3';
import Semestre4 from './src/screens/Semestre4/Semestre4';
import Semestre5 from './src/screens/Semestre5/Semestre5';
import Semestre6 from './src/screens/Semestre6/Semestre6';
import DetailsScreen from './src/screens/DetailsScreen';
import Inicio from './src/screens/Inicio';


const Stack = createNativeStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        
       <Stack.Screen name="Inicio" component={Inicio} options={{title: 'Inicio',headerStyle:{backgroundColor:'#0C2566' },headerTintColor:'#fff',}}/>
       
        <Stack.Group> 
        <Stack.Screen name="Semestre" component={Semestre} options={{title: '1er Semestre',headerStyle:{backgroundColor:'#0C2566' },headerTintColor:'#fff'}}/>
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} options={{title: 'Detalles', headerStyle:{backgroundColor:'#0C2566'}, headerTintColor:'#fff'}}/>
        
        </Stack.Group>         
        
        <Stack.Group>
        <Stack.Screen name="Semestre2" component={Semestre2} options={{title: '2do Semestre',headerStyle:{backgroundColor:'#0C2566' },headerTintColor:'#fff',}}/>
        </Stack.Group>

        <Stack.Group>
        <Stack.Screen name="Semestre3" component={Semestre3} options={{title: '3er Semestre',headerStyle:{backgroundColor:'#0C2566' },headerTintColor:'#fff',}}/>
        </Stack.Group>

        <Stack.Group>
        <Stack.Screen name="Semestre4" component={Semestre4} options={{title: '4to Semestre',headerStyle:{backgroundColor:'#0C2566' },headerTintColor:'#fff',}}/>
        </Stack.Group>

        <Stack.Group>
        <Stack.Screen name="Semestre5" component={Semestre5} options={{title: '5to Semestre',headerStyle:{backgroundColor:'#0C2566' },headerTintColor:'#fff',}}/>
        </Stack.Group>
          
        <Stack.Group>
        <Stack.Screen name="Semestre6" component={Semestre6} options={{title: '6to Semestre',headerStyle:{backgroundColor:'#0C2566' },headerTintColor:'#fff',}}/>
        </Stack.Group>

       
      </Stack.Navigator>
    
    </NavigationContainer>
  );
}
export default App;





