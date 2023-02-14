import { View, Text, Image, StyleSheet, Button } from "react-native";

const RecipeCard = ({ item }) => {
    const id = item.id
    console.log(item.image)
    return (
        <View style={styles.container}>
            <View style={styles.imageBloc}>
                <Image source={{uri: item.image}} style={styles.image} />
            </View>
            <View style={styles.textBloc}>
                <Text style={styles.text}>{item.title}</Text>
                <Button 
                    title="View recipe"
                />
            </View>
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
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    imageBloc : {
        width: "50%"
    },
    image: {
        width: "100%",
        height: 200,
        resizeMode: "cover",
    },
    textBloc: {
        width: "50%"
    },
    text: {
        textAlign: "center",
        fontSize: 20,
        padding: 7,
    }
})