import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Vibration,
    TouchableOpacity,
    Pressable,
    Keyboard,
    FlatList
} from "react-native";
import { ResultImc } from "./ResultImc";

export function Form() {

    const [heigth, setHeigth] = useState(null)
    const [weigth, setWeigth] = useState(null)
    const [messageImc, setMessageImc] = useState("preenchao o peso e altura");
    const [imc, setImc] = useState(null);
    const [textButton, setTextButton] = useState("Calcular")
    const [error, setError] = useState(null)
    const [imcList, setImcList] = useState([])

    function imcCalcular() {
        let heigthFormat = heigth.replace(",", ".")
        let totalIMC = (weigth / (heigthFormat * heigthFormat)).toFixed(2)
        setImcList((arr) => [...arr, { id: new Date().getTime(), imc: totalIMC }])
        setImc(totalIMC)
    }

    function verificatioIMC() {
        if (imc === null) {
            Vibration.vibrate()
            setError("Campo obrigatorio")
        }
    }

    function validation() {
        if (weigth !== null && heigth !== null) {
            imcCalcular()
            setHeigth(null)
            setWeigth(null)
            setMessageImc("Seu imc é igual:")
            setTextButton("Calcular Novamente")
            setError(null)
        } else {
            verificatioIMC()
            setImc(null)
            setTextButton("Calcular")
            setMessageImc("preencha o peso e a altura")
        }
    }

    return (
        <View style={styles.formContext}>
            {imc === null ?
                <Pressable
                    onPress={Keyboard.dismiss}
                    style={styles.form}
                >
                    <Text style={styles.formLabel}>Altura</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setHeigth}
                        value={heigth}
                        placeholder="Ex. 1.80"
                        keyboardType="numeric"
                    />
                    <Text style={styles.error}>{error}</Text>

                    <Text style={styles.formLabel}>Peso</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setWeigth}
                        value={weigth}
                        placeholder="Ex. 75.676"
                        keyboardType="numeric"
                    />
                    <Text style={styles.error}>{error}</Text>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => validation()}
                    >
                        <Text
                            style={styles.textButton}
                        >
                            {textButton}
                        </Text>
                    </TouchableOpacity>

                </Pressable>
                :
                <View style={styles.showResultImc}>
                    <ResultImc
                        message={messageImc}
                        result={imc}
                    />
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => validation()}
                    >
                        <Text
                            style={styles.textButton}
                        >
                            {textButton}
                        </Text>
                    </TouchableOpacity>
                </View>
            }
            <FlatList
                style={styles.listImc}
                data={imcList.reverse()}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.listContent}>
                            <Text style={styles.textList}>IMC = {item.imc}</Text>
                        </View>
                    )
                }}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                horizontal={true}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    formContext: {
        width: "100%",
        height: "100%",
        bottom: 0,
        backgroundColor: "#fff",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    form: {
        width: "100%",
        height: "auto",
        marginTop: 30,
        padding: 10,
        paddingTop: 0
    },
    formLabel: {
        color: "#000",
        fontSize: 18,
        paddingLeft: 20,
        marginTop: 14
    },
    input: {
        width: "90%",
        borderRadius: 50,
        backgroundColor: "#f6f6f6",
        height: 40,
        margin: 12,
        marginBottom: 0,
        paddingLeft: 10
    },
    button: {
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
        backgroundColor: "#FF0043",
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 12,
        marginTop: 10,
    },
    textButton: {
        fontSize: 20,
        color: "#fff",
        fontWeight: "bold"
    },
    error: {
        fontSize: 12,
        color: "#FF0000",
        fontWeight: "bold",
        paddingLeft: 20
    },
    showResultImc: {
        width: "100%",
        height: "50%",
    }, 
    listImc:{
        width: "100%",
        padding: 20,
        display: "flex",
    },
    listContent:{
        height: 40,
        width: 140,
        backgroundColor: "#cedcff",
        padding: 8,
        paddingLeft: 18,
        borderRadius: 50,
        marginRight: 14
    },
    textList:{
        fontSize: 18,
        fontWeight: 500
    }
})