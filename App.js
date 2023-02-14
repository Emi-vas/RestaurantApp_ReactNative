//react
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';
//compo
import Categories from './src/components/Categories';
import Header from './src/components/Header';
import Search from './src/components/Search';
import RecipeCard from './src/components/RecipeCard';
//env
import { API_URL, API_KEY } from "@env"

//---temp
import { dataTemp } from './src/assets/data';


export default function App() {
  const [search, setSearch] = useState('')
  const [data, setData] = useState(dataTemp)

  useEffect(() => {
    if(search == "") return

    /* fetch(`${API_URL}complexSearch?query=${search}&apiKey=${API_KEY}`)
      .then(response => response.json())
      .then(data => {
        setData(data.results)
      }) */

  }, [search])

  return (
    <View style={styles.container}>
        <Header />
        <Search search={search} setSearch={setSearch} />
        <Categories categorieSelected={search} setCategorieSelected={setSearch} />
        <View style={styles.liste}>
          <FlatList 
              data={data}
              renderItem={({item}) => (
                  <RecipeCard item={item} />
              )}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
          />
        </View>
        <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  liste: {
    alignItems: "center",
    flex: 0.96,
  }
});
