import React, { useState } from "react";
import { View, Text, FlatList, SafeAreaView,TouchableOpacity } from "react-native";
import api from "../../services/api";
import styles from './styles';

export default function HomeScreen() {
  const [pets, setPets] = useState([]);
  const [ordena,setOrdena]=useState('id');
  React.useEffect(() => {
    api.get("/pets").then((response) => {
      setPets(response.data);
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
    <FlatList
      
      data={pets.sort((now,next)=>(now[ordena] > next[ordena]? 1 : -1 ))}
      renderItem={({ item }) => {
        return (
          <View style={styles.renderContainer}>
            <Text>
            id: "{item?.id}", Type: "{item?.type}",  price: "{item?.price}" 
            </Text>
          </View>
        );
      }}
      keyExtractor={(item) => item.id}
    />
    <Text style={styles.title}>Ordenar por:</Text>
    <View stile={styles.btnWrapper}>
      <TouchableOpacity 
      onPress={()=>{setOrdena("type")}}
    style={styles.btnOrdena}> 
    
        <Text style={styles.btnText}>Type</Text>
    
    </TouchableOpacity>
    
    
    <TouchableOpacity 
   onPress={()=>{setOrdena("price")}}
    style={styles.btnOrdena}> 
    
        <Text style={styles.btnText}>Price</Text>
    
    </TouchableOpacity>
    
    
    <TouchableOpacity 
    style={styles.btnOrdena}
    onPress={()=>{setOrdena("id")}}> 
    
    <Text style={styles.btnText}>ID</Text>
    
    </TouchableOpacity>
    </View>
</SafeAreaView>
  );
}