//react
import { useState, useEffect } from "react";
import { View, TextInput, StyleSheet, Keyboard } from "react-native"
//icons
import { AntDesign } from '@expo/vector-icons';
//style
import { boxShadow } from "../styles/global";


const Search = ({ search, setSearch }) => {
    const [tempSearch, setTempSearch] = useState('')

    //Only one request when user has finished tipping
    useEffect(() => {
        if(tempSearch == "") return
        
        let timer = setTimeout(() => {
            Keyboard.dismiss()
            setSearch(tempSearch)
        }, 1000)
        return () => clearTimeout(timer)
    }, [tempSearch])

    useEffect(() => {
        //when a user presses categorieItem, it replaces the search
        if(search != tempSearch) setTempSearch(search)
    }, [search])

    const handleChange = (inputValue) => {
        setTempSearch(inputValue)
    }

    return (
        <View style={styles.container}>
            <View style={[styles.inputBloc, boxShadow]}>
                <AntDesign name="search1" size={22} color="black" />
                <TextInput 
                    value={tempSearch}
                    style={styles.input}
                    placeholder="Restaurants, food"
                    onChangeText={handleChange}
                />
            </View>
        </View>
    )
}
export default Search;

const styles = StyleSheet.create({
    container: {
        alignItems: "center"
    },
    inputBloc: {
        flexDirection: "row",
        padding: 15,
        margin: 10,
        marginTop: 20,
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 50,
        backgroundColor: "white",
    },
    input: {
        fontSize: 22,
        marginLeft: 10,
        width: "70%"
    }
})