
import { Text, View, StyleSheet, Image, TextInput, ScrollView, Button, Alert, TouchableOpacity, Pressable, ActivityIndicator, FlatList } from "react-native";

import { useEffect, useState } from "react";

import Employee from "../components/Employee"

const Item = ({data}) => {
  return(
    <View>
      <Text>{data.title}</Text>
    </View>
  )
}




export default function Index() {

  const [count, setCount] = useState(0);
  const myData = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '68694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Fourth Item',
  },
  {
    id: '78694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Fifth Item',
  },
  {
    id: '88694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Last Item',
  },
];

useEffect(() => {
  console.log(count)

})
  return (

    
    // <ScrollView>
    // <View style={styles.header1}>
    //   <Text style={{backgroundColor: 'green', fontSize: 40, fontWeight: 900, color: 'black'}}>Welcome.</Text>
    //   <Image source={{uri: 'https://reactnative.dev/docs/assets/p_cat2.png'}}/>
    //   <Image style={{width:200, height:200}} source={require("@/assets/images/icon.png")}/>
    //   <TextInput style={{borderWidth: 2, borderColor: 'blue', marginTop: 10}} placeholder="Enter Name"/>
    //   <View style={styles.box}></View>
    //   <View className="bg-blue-500 w-[200] h-[200]"></View>
    //   <View className="bg-amber-500 w-32 h-32"></View>
    //   <View style={styles.box2}></View>

    //   <View style={[styles.box3, {backgroundColor: 'red'}]}></View>
    //   <View style={[styles.box3, {backgroundColor: 'black'}]}></View>
    // </View>


    //  <View className="flex-1 items-center justify-center bg-white">
    //   <Text className="text-xl font-bold text-blue-500">
    //     Welcome to Nativewind!
    //   </Text>
    // </View>

    // </ScrollView>
    <View style={{width: '100%', height: '50%', backgroundColor:'beige'}}>
      {/* <View style={{flex:1, backgroundColor: 'yellow'}}>
        <Text style={{color: 'green'}}>Up</Text>
      </View>
      <View style={{flex:2, backgroundColor: 'pink'}}></View>
      <View style={{flex:3, backgroundColor: 'brown'}}>
        <Text style={{color: 'white'}}>Down</Text>
      </View> */}

      <Button title="Login" color="yellow" onPress={() => (Alert.alert("hello"))}/>

        <TouchableOpacity className="rounded-lg bg-red-300 w-[80] p-2 h-[30] " onPress={() => (Alert.alert("hello"))}>
          <Text className="text-white">Signup</Text>
        </TouchableOpacity>

        <Pressable className="rounded-lg bg-green-500 w-32 p-2 m-2" onPress={() => (Alert.alert("Pressable"))}>
          <Text className="text-white">Go to home</Text>
        </Pressable>

        <FlatList 
          data={myData}
          renderItem={({item}) => (<Item data={item}/>)}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => (<Text>-------</Text>)}
          ListEmptyComponent={() => (<Text>List is empty, add data</Text>)}
          ListHeaderComponent={() => (<Text style={{color: 'white'}}>My Todo List</Text>)}
          ListFooterComponent={() => (<Text style={{color: 'white'}}>Footer List</Text>)}
          ListHeaderComponentStyle={{fontSize: 30, backgroundColor: 'blue', color: 'white'}}
          ListFooterComponentStyle={{fontSize: 30, backgroundColor: 'blue', color: 'white'}}
          // horizontal
          numColumns={3}
          columnWrapperStyle={{gap: 10}}
        />


        <Employee name="John" dept="" age="32" />
        <Employee name="Dan" dept="" age="22" />
        <Employee name="Jude" dept="" age="44" />


        <View>
          <TouchableOpacity onPress={() => {setCount(count + 1)}}><Text>Button</Text></TouchableOpacity>
        </View>

        <View>
          <Text>{count}</Text>
        </View>



        {/* <ActivityIndicator size='large' color='red'/> */}

        {/* <Image style={{width:200, height:200}} source={require("@/assets/images/icon.png")} alt="Cat" /> */}
        

    </View>



  );
}

const styles = StyleSheet.create({
  header1:{
    backgroundColor: "beige",
    fontSize: 40,
    fontWeight: 900,
    color: 'blue'
  },
  box:{
    width: 200,
    height: 200,
    backgroundColor: 'yellow'
  },
  box2:{
    width: 100,
    height: 100,
    backgroundColor: 'green'
  },
  box3:{
    width: 100,
    height: 100,
    borderRadius: 20
  }
})
