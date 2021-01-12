import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {Navbar} from "./Components/Navbar";
import {AddTodo} from "./Components/AddTodo";
import {Todo} from "./Components/Todo";
import {AsyncStorage} from 'react-native'

export default function App() {
    const [todos, setTodos] = useState([])

    const addTodo = (title) => {

        setTodos(prev => [
            ...prev,
            {
                id: Date.now().toString(),
                title
            }
        ])
    }
    const remove = id => {
        setTodos(prev => prev.filter(todo => todo.id !== id))
    }



    return (
        <View>
            <Navbar title='Todo App'/>
            <View style={styles.container}>
                <AddTodo onSubmit={addTodo}/>
                <FlatList
                    keyExtractor={item => item.id.toString()}
                    data={todos}
                    renderItem={({ item }) => <Todo todo={item} onRemove={remove}/>}
                />

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingVertical: 20
    },
});
