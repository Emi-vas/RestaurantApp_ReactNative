import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';

const Loader = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="rgb(246, 133, 58)" />
        </View>
    );
};

export default Loader;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: "white",
    }
})