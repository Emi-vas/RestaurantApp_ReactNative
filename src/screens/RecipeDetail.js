//react
import { useState } from "react";
import { View, Text, StyleSheet, Image, StatusBar } from "react-native";
//data
import { dataTempRecipe } from "../assets/data"; //temp

const RecipeDetail = ({ route }) => {
    const { id } = route.params //id of recipe
    const [data, setData] = useState(dataTempRecipe)

    return (
        <View>
            <View>
                <Image 
                    source={{ uri: data.image }}
                    style={styles.imageMain}
                />
                <Text>Recipe Details</Text>
                <Text
                    style={{
                        fontSize: 30,
                        marginTop: 80
                    }}
                >ID : {id}</Text>
            </View>
            <StatusBar />
        </View>
    );
};

export default RecipeDetail;

const styles = StyleSheet.create({
    container: {

    },
    imageMain: {
        width: "140%",
        height: 200,
        resizeMode: "cover",
    }
})