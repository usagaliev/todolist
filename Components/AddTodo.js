import React, {useState} from 'react'
import {View, StyleSheet} from "react-native";
import {TextInput, Button, Alert} from "react-native";

export const AddTodo = ({onSubmit}) => {
    const [value, setValue] = useState('')



    const pressHandler = () => {
        if (value.trim()) {
            onSubmit(value)
            setValue('')
        } else {
            Alert.alert('Введите название, пожалуйста')
        }
    }

    return (
        <View style={styles.block}>
            <TextInput
                style={styles.input}
                onChangeText={setValue}
                value={value}
                placeholder='Что нужно сделать?'
                autoCorrect={false}
                autoCapitalize='none'
            />
            <Button title='Add' style={styles.button} onPress={pressHandler}/>
        </View>
    )

}

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15
    },
    input: {
        width: "70%",
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: "#3949",
        padding: 10
    },
    button: {
        width: 140,
        height: 50,
        borderStyle: 'solid',
        borderWidth: 1,
        backgroundColor: "#3949",
    }
})

