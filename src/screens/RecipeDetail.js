//react
import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, StatusBar, ScrollView, Pressable } from "react-native";
//data
import { dataTempRecipe } from "../assets/data"; //temp
//icons
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
//env
import { API_URL, API_KEY } from "@env"
//compo
import Loader from "../components/Loader";

const RecipeDetail = ({ route }) => {
    const { id } = route.params //id of recipe
    const [data, setData] = useState(null)
    const [instructions, setInstructions] = useState('')
    const [instructionsCut, setInstructionsCut] = useState({
        display: false,
        body: ""
    })

    useEffect(()=>{
        fetch(`${API_URL}${id}/information?apiKey=${API_KEY}`)
        .then(response => response.json())
        .then(data => {
          setData(data)
        }) 
    },[])

    useEffect(() => {
        if(data) {
            //replace html tags
            setInstructions(
                data.instructions.replaceAll(/<\/?[^>]+(>|$)/gi, "")
            )
        }
    }, [data])

    useEffect(() => {
        if(instructions.length > 400) {
            setInstructionsCut({
                display: true,
                body: instructions.slice(0, 400)
            })
        }
    },[instructions])

    if(!data) return <Loader />

    return (
        <View>
            {
                data &&
                <View style={styles.container}>
                    <Image 
                        source={{ uri: data.image }}
                        style={styles.imageMain}
                    />
                    <Text style={styles.title}>{data.title}</Text>

                    <ScrollView style={styles.scrollView}>
                        <View>
                            <Text style={styles.subTitle}>Instructions : </Text>
                            {
                                instructionsCut.display ?
                                <Pressable onPress={()=> setInstructionsCut({...instructionsCut, display: false})}>
                                    <Text style={styles.p}>{instructionsCut.body} 
                                        [...]
                                    </Text>
                                </Pressable>
                                :
                                <Text style={styles.p}>{instructions}</Text>
                            }
                        </View>

                        <View style={styles.blocScore}>
                            <View style={styles.scoreItem}>
                                <FontAwesome5 name="heartbeat" size={50} color="white" />
                                <Text style={styles.scoreTxt}>Health Score : </Text>
                                <Text style={styles.scoreTxtValue}>{data.healthScore}</Text>
                            </View>
                            <View style={styles.scoreItem}>
                                <Ionicons name="ios-timer" size={50} color="white" />
                                <Text style={styles.scoreTxt}>Time : </Text>
                                <Text style={styles.scoreTxtValue}>{data.readyInMinutes} min</Text>
                            </View>
                            <View style={styles.scoreItem}>
                                <Ionicons name="ios-cart" size={50} color="white" />
                                <Text style={styles.scoreTxt}>Price :</Text>
                                <Text style={styles.scoreTxtValue}>${data.pricePerServing}</Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            }
            <StatusBar />
        </View>
    );
};

export default RecipeDetail;

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "white",
        minHeight: "100%"
    },
    imageMain: {
        width: "130%",
        height: 270,
        resizeMode: "cover",
    },
    title: {
        fontSize: 27,
        marginTop: 15,
        marginBottom: 20
    },

    //bloc instruction
    subTitle: {
        fontSize: 20,
        marginLeft: 30,
        color: "rgb(193, 89, 19)",
        fontWeight: "bold"
    },
    p: {
        padding: 15,
        textAlign: "justify",
        fontSize: 14.5
    },
    scrollView: {
        marginBottom: 10,
        flex: 0.4,
    },

    //info
    blocScore: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        flexWrap: "wrap"
    },
    scoreItem : {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        margin: 10,
        padding: 7,
        backgroundColor: "rgb(193, 89, 19)",
        width: 130,
        height: 120,
        borderRadius: 40
    },
    scoreTxt: {
        fontSize: 17,
        color: "white",
        textAlign: "center"
    },
    scoreTxtValue: {
        fontSize: 19,
        color: "white",
        fontWeight: "bold"
    }
})