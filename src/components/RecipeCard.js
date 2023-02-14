//React
import { View, Text, Image, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const RecipeCard = ({ item }) => {
    const navigation = useNavigation()
   
    return (
        <View style={styles.container}>
            <View style={styles.imageBloc}>
                <Image source={{uri: item.image}} style={styles.image} />
            </View>
            <View style={styles.textBloc}>
                <Text style={styles.text}>{item.title}</Text>
                <View style={styles.btn}>
                    <Button 
                        title="View recipe"
                        onPress={()=>navigation.navigate("RecipeDetail", {id: item.id})}
                        color="white"
                    />
                </View>
            </View>
        </View>
    );
};

export default RecipeCard;


const styles = StyleSheet.create({
    container : {
        width: "100%",
        height: 200,
        marginTop: 20,
        marginBottom: 20,
        borderRadius: 40,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        overflow: "hidden",
    },
    imageBloc : {
        width: "50%"
    },
    image: {
        width: "100%",
        height: "120%",
        resizeMode: "cover",
    },
    textBloc: {
        width: "50%",
        display: "flex",
        flexDirection: 'column',
        alignItems: "center"
    },
    text: {
        textAlign: "center",
        fontSize: 20,
        padding: 7,
    },
    btn: {
        backgroundColor: "rgb(246, 133, 58)",
        padding: 7,
        borderRadius: 40
    }
})