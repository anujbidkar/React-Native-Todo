import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  ScrollView,
  TextInput,
  Alert,
} from "react-native";
import Todo from "./Todo";

const TodoList = () => {
  const [title, setTitle] = useState("To Do List");
  const [text, setText] = useState();
  const [list, setList] = useState(["hello world"]);

  // add item
  const addItem = () => {
    {
      if (text === "") {
        Alert.alert("Please Enter Text First ");
      } else {
        const updateList = list;
        updateList.push(text);
        setList(updateList);
        setText("");
      }
    }
  };

  // delete item
  const deleteItem = (index) => {
    {
      const updateList = list.filter((todo) => todo !== index);
      setList(updateList);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.algin, styles.font]}>{title}</Text>
      <ScrollView>
        {list &&
          list.map((x, index) => (
            <Todo key={index} item={x} index={index} delete={deleteItem} />
          ))}
      </ScrollView>

      <View>
        <TextInput
          value={text}
          style={[styles.input]}
          onChangeText={(text) => setText(text)}
        />
        <Button title='Add Item' onPress={addItem} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "80%",
    marginBottom: 60,
  },
  algin: {
    alignSelf: "center",
  },
  font: {
    fontSize: 40,
    fontWeight: "bold",
  },
  input: {
    borderRadius: 5,
    borderWidth: 1,
    marginBottom: 8,
    padding: 8,
  },
});

export default TodoList;
