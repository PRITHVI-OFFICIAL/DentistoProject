import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput, Image, SafeAreaView, TouchableOpacity, StatusBar, Alert,  } from "react-native";
import { signInWithEmailAndPassword,fetchSignInMethodsForEmail,createUserWithEmailAndPassword } from "firebase/auth";
import { auth, database } from "../config/firebase";
import colors from "../Colors";
import { doc, setDoc } from "firebase/firestore"; 
import { useNavigation } from "@react-navigation/native";

export default function Signup() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name,setname]=useState(); 
  const [phone,setphone]=useState();
  const navigation = useNavigation();

 

  const onHandleSignUp = () => {
    if ((email !== "" && password !== "" && phone!=="" && name!=="") ) {

      createUserWithEmailAndPassword(auth, email, password)
            .then(() => setDoc(doc(database, "Users", email.split('@')[0]), {
              name: name,
              mail: email, 
              mobile:phone,
              age:0, 
              gender:'Enter your Gender', 
              habits:'Nil', 
              blood:'-' 

            }))
            .catch((err) => Alert.alert("Login error", err.message));
    }
    else{
      Alert.alert("Enter the Details Correctly");
    }
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Dentisto</Text>
      <View style={styles.subcontainer}>
      <Text style={{fontSize:25,fontWeight:"bold",color:colors.primary,textAlign:"center",paddingTop:10}}>Sign Up</Text>
      <View style={styles.logincontainer}> 
      <TextInput
                style={styles.loginbox}
                placeholder="Enter your Mail Id"
                autoCapitalize="none"
                autoCorrect={false}
                value={email}
                onChangeText={(text) => setEmail(text)}
        />

        <TextInput
                  style={styles.loginbox}
                  placeholder="Enter your Name"
                  autoCapitalize="none"
                  autoCorrect={false}
                  value={name}
                  onChangeText={(text) => setname(text)}
        /> 

      <TextInput
                style={styles.loginbox}
                placeholder="Enter your Mobile Number"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="numeric"
                value={phone}
                maxLength={10}
                onChangeText={(text) => setphone(text)}
       />

      <TextInput
                style={styles.loginbox}
                placeholder="Enter password"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
                textContentType="password"
                value={password}
                onChangeText={(text) => setPassword(text)}
       />

      </View>
      <TouchableOpacity style={{justifyContent:"center",alignItems:"center",bottom:40}} onPress={onHandleSignUp} >
        <View style={{height:60,width:150,backgroundColor:colors.primary,borderRadius:6,justifyContent:"center",alignItems:"center",marginTop:50}}>
            <Text style={{fontSize:15,color:"white",fontWeight:"bold"}}>Sign Up</Text>
        </View>
      </TouchableOpacity>
      <View style={{flexDirection: 'row', alignItems: 'center', alignSelf: 'center',marginBottom:10}}>
        <Text style={{color: 'gray', fontWeight: '600', fontSize: 14}}>Already having an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={{color: colors.primary, fontWeight: '600', fontSize: 14}}>Login</Text>
        </TouchableOpacity>
      </View>

      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    justifyContent:"center", 
    alignItems:"center"
  },
  subcontainer:{
    width:330,
    height: 500,
    backgroundColor:"white",
    borderRadius:15, 
    padding:10
  }, 
  heading:{
    fontSize:40, 
    fontWeight:"bold",
    color:"white", 
    fontStyle:"italic", 
    bottom:20
  },
  logincontainer:{

    height:300, 
    backgroundColor:"white", 
    justifyContent:"space-evenly",  
    alignItems:"center"
  },

  loginbox:{
    borderWidth:1,
    borderColor:colors.primary, 
    width:"90%", 
    height:50,  
    borderRadius:5,
    paddingHorizontal:10
    
  },
});