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
        width: 110,
        height: 110,
        borderRadius: 50,
        marginVertical: 5,
        marginHorizontal: 10,
        backgroundColor: "white",
        //backgroundColor: "rgb(241,186,37)",

        alignItems: "center",
        justifyContent: "center"
    },
    imageBloc: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: '50%',
        marginBottom: 5
    },
    image: {
        width: 50,
        height: 50,
    },
    active: {
        backgroundColor: "rgb(241,186,37)"
    }
})