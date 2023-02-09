//react
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Categories from './src/components/Categories';
//compo
import Header from './src/components/Header';
import Search from './src/components/Search';


export default function App() {
  const [categorieSelected, setCategorieSelected] = useState("")

  return (
    <View style={styles.container}>
        <Header />
        <Search />
        <Categories categorieSelected={categorieSelected} setCategorieSelected={setCategorieSelected} />
        <Text style={{fontSize: "33", margin: 33}}>
            {categorieSelected}
        </Text>
        <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
