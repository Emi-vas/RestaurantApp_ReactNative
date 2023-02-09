//react
import { View, TextInput, StyleSheet } from "react-native"
//icons
import { AntDesign } from '@expo/vector-icons';
//style
import { boxShadow } from "../styles/global";


const Search = () => {
    return (
        <View style={styles.container}>
            <View style={[styles.inputBloc, boxShadow]}>
                <AntDesign name="search1" size={22} color="black" />
                <TextInput 
                    style={styles.input}
                    placeholder="Restaurants, food"
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
        margin: 20,
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