import React,{useState} from 'react';
import { StyleSheet, View, Text} from 'react-native';
import api from './src/Components/api';

export default function App() {
  const [pets,setPets]=useState([]);

  React.useEffect( ()=>{
    api.get("/pets").then((response)=>{
    setPets(response.data);
  });
},[]);
return (
  <View style={styles.container}>
    <Text>Type:  {pets[0]?.type} price: {pets[0]?.price} id: {pets[0]?.id}</Text>
    <Text>Type:  {pets[1]?.type} price: {pets[1]?.price} id: {pets[1]?.id}</Text>
    <Text>Type:  {pets[2]?.type} price: {pets[2]?.price} id: {pets[2]?.id}</Text>
  </View>
);
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff8",
    alignItens: "center",
    justifyContent: "center",
  },
});