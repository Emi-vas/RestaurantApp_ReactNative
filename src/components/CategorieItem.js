//react
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native'
//style
import { boxShadow } from '../styles/global'

const CategorieItem = ({ name, imgUrl, categorieSelected, setCategorieSelected }) => {
    return(
        <View>
            <TouchableOpacity 
                onPress={() => setCategorieSelected(name)}
                style={[styles.container, boxShadow, categorieSelected == name ? styles.active : null ]}
            >
                <View style={styles.imageBloc}>
                    <Image 
                        style={styles.image}
                        source={imgUrl}
                    />
                </View>
                <Text style={{ fontWeight: "bold" }} >{name}</Text>
            </TouchableOpacity>
           
        </View>
    )
}
export default CategorieItem

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: 120,
        height: 50,
        borderRadius: 50,
        marginVertical: 5,
        marginHorizontal: 10,
        backgroundColor: "white",
        //backgroundColor: "rgb(241,186,37)",

        alignItems: "center",
        justifyContent: "space-around"
    },
    imageBloc: {
        backgroundColor: 'white',
        padding: 5,
        borderRadius: '50%',
    },
    image: {
        width: 40,
        height: 40,
    },
    active: {
        backgroundColor: "rgb(241,186,37)"
    }
})