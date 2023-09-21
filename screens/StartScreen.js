import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { View, Text, Button, Image, ScrollView, TouchableOpacity ,ImageBackground} from 'react-native';

const StartScreen = () => {



  return (
    <View style={styles.container}>
        {/* <Text>Start Screen</Text> */}

        <View style={styles.imagebox}>
        <Image
    
    source={require('../assets/teeth2.png')}
    style={{ width: 280, height: 350 }}
    />

        </View>

        <TouchableOpacity>
        <View style={styles.button}>
        <Text style={{textAlign:"center",fontWeight:"bold",color:"white"}}>GET STARTED</Text>

        </View>
        </TouchableOpacity>

        <TouchableOpacity>
        <View style={styles.button1}>
        <Text style={{textAlign:"center",fontWeight:"bold",color:"white"}}>SIGN IN</Text>
        </View>
        </TouchableOpacity>
 
    </View>
  );
};

export default StartScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#D7DFE8',
      marginTop:50,
      width:"100%"
    },
    imagebox:{
        justifyContent:"center",
        alignItems:"center",
        heigth:300, 
        //backgroundColor:"red",
        marginTop:140
    }, 
    button:{
        width:"90%",
        height:50,
        backgroundColor:"#0466CB",
        alignSelf:"center",
        marginTop:230, 
        borderRadius:50, 
        padding:16, 
        
    },
    button1:{
        width:"90%",
        height:50,
        backgroundColor:"#0466CB",
        alignSelf:"center",
        marginTop:20, 
        borderRadius:50, 
        padding:16
    }
  });



