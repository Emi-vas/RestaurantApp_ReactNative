
//react
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

//compo
import Home from './src/screens/Home';
import RecipeDetail from './src/screens/RecipeDetail';

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent"
  }
}

export default function App() {
  return (
    <NavigationContainer theme={theme}>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerMode: 'screen',
            headerTintColor: 'white',
            headerStyle: { display: 'tomato' },
            headerShown: false
          }}
          
        >
          <Stack.Screen
            name="Home"
            component={Home}
          />
          <Stack.Screen
            name="RecipeDetail"
            component={RecipeDetail}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}