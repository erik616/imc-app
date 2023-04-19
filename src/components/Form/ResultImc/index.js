import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Share } from "react-native";

export function ResultImc(props) {
    const onShare = async () => {
        const result = await Share.share({
            message: `Meu imc hoje é: ${props.result}`
        })
    }

    return (
        <View style={styles.resultImc}>
            <View style={styles.boxBtn}>
                <Text style={styles.information}>
                    {props.message}
                </Text>
                <Text style={styles.number}>
                    {props.result}
                </Text>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={onShare}
                >
                    <Text style={styles.textBtn}>Compartilhar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    resultImc: {
        flex: 1,
        alignItems: "center",
        width: "100%",
        paddingTop: 80,
    },
    information: {
        fontSize: 18,
        color: "#FF0043",
        fontWeight: "bold",
        textTransform: "uppercase"
    },
    number: {
        fontSize: 48,
        color: "#FF0043",
        fontWeight: "bold",
    },
    boxBtn: {
        width: "100%",
        alignItems: "center",
        marginBottom: 8
    },
    btn: {
        backgroundColor: "#1877f2",
        borderRadius: 50,
        padding: 5,
        paddingHorizontal: 28
    },
    textBtn: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold"
    }
})