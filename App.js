//react
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View} from 'react-native';
//compo
import Categories from './src/components/Categories';
import Header from './src/components/Header';
import Search from './src/components/Search';


export default function App() {
  const [search, setSearch] = useState('')

  return (
    <View style={styles.container}>
        <Header />
        <Search search={search} setSearch={setSearch} />
        <Categories categorieSelected={search} setCategorieSelected={setSearch} />
        <Text style={{fontSize: "20", margin: 33}}>
            {search}
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
