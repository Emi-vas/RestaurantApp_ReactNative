import { View, Text, Image, StyleSheet } from "react-native";

const RecipeCard = ({ item }) => {
    const id = item.id
    console.log(item.image)
    return (
        <View style={styles.container}>
            <Image source={{uri: item.image}} style={styles.image} />
            <Text style={styles.text}>{item.title}</Text>
        </View>
    );
};

export default RecipeCard;


const styles = StyleSheet.create({
    container : {
        width: "100%",
        marginTop: 20,
        marginBottom: 20,
        borderRadius: 40,
        position: 'relative',
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        width: 370,
        height: 300,
        resizeMode: "cover",
    },
    text: {
        position: "absolute",
        textAlign: "center",
        fontSize: 20,
        color: "white",
        backgroundColor: "rgba(0, 0, 0, 0.43)",
        padding: 7,
    }
})