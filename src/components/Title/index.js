import React from "react";
import { View, Text, StyleSheet } from "react-native";

export function Title(){
    return(
        <View style={styles.boxTitle}>
            <Text style={styles.title}>YOU'imc</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    boxTitle:{
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        backgroundColor: "#001a5f"
    },
    title:{
        fontSize: 30,
        color: "#FF0043",
        fontWeight: "bold"
    },
})