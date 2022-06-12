import { StatusBar } from 'expo-status-bar';
import St from './comands/st'
import React, {useState} from 'react';
import { Button, StyleSheet, Text, View, FlatList } from 'react-native';
import List from './comands/List'
import Form from './comands/form'


 let ad = "^__^";

function f() {

ad = "^__-^";

}

function gg() {
alert("^__-")
}
  
export default function App() {
 const [list, setList] = useState([
    {text: "Сделать домашку", key: '1'},
    {text: "Доделать приложения", key: '2'},
    {text: "Позвонить в супермаркет", key: '3'},
    {text: "Позвонить в банк", key: '4'},
     

 ]);
 const deletee = (key) => { 
  setList((list) => {
    return list.filter(list => list.key != key); 
  })
 }
 const d = (text) => { 
setList((list) => {
  return [
    {text: text, key: Math.random().toString()},
    ...list
  ]
})
 }
  return (
    
    <View style={styles.container}>
      
    <St />
    <Form d={d}/>
      
      <FlatList data={list} renderItem={({ item }) => (
        <List el={item} deletee={deletee}/>
      )} />

      <StatusBar style="auto" />
      
      
    </View>

  );
}


const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    backgroundColor: "#e0e0e0",
    alignItems: 'center',
    justifyContent: 'center',
  },
 s: {
  top: 120,
  fontSize: 17,
 },
d: {
  fontSize: 17,
  top: -20,
  color: "#000",
}
});
