import React from 'react';
import { Modal, View, Image, Button,Text,StyleSheet } from 'react-native';
import Colors from '../Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native';

const AppointmentCard = ({name,role,location,image}) => {
  return (
    <TouchableOpacity>

<View style={{height:130,flexDirection:"row",backgroundColor:"white",borderRadius:10,borderWidth:1,margin:5,marginBottom:10,borderColor:Colors.gray}}>

<View style={{width:150,backgroundColor:Colors.primary,borderRadius:10,justifyContent:"center",alignItems:"center"}}>
<Image
  source={{uri:image}}
  style={{height:"100%",width:"100%",borderRadius:10}}
  />
</View>


  <View style={{marginLeft:20,justifyContent:"space-around",padding:20,}}>
    <Text style={{fontSize:20,fontWeight:"500"}}>{name}</Text>
    <Text style={{color:Colors.gray}}>{role}</Text>
    <View style={{flexDirection:"row"}}>
    <Ionicons name="location-sharp" size={20} color="grey"  style={{marginRight:5}}/>
    <Text>{location}</Text>
    </View>

  </View>


</View>

    </TouchableOpacity>
  );
};


const styles=StyleSheet.create({

  container:{
    flex:1,
    //marginTop:40, 
    backgroundColor:"white"
  }, 
  header:{
    height:100, 
    backgroundColor:Colors.primary, 
    padding:10, 
    flexDirection:"row", 
    justifyContent:"space-between", 
    paddingTop:40
  }, 
  subcontainer:{
    padding:15
  

  }

})


export default AppointmentCard;








{/*  */}