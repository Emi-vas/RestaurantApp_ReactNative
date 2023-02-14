//react
import {Text, View, StyleSheet} from "react-native"

const Header = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text} >Anyone can 
                <Text style={{...styles.text, ...styles.big}}> Cook !</Text>
            
            </Text>
        </View>
    )
}
export default Header;

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        marginLeft: 27
    },
    text: {
        fontSize: 30
    },
    big : {
        fontWeight: "700"
    }
})