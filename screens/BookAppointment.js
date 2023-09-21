import React from 'react';
import { Modal, View, Image, Button,Text,StyleSheet } from 'react-native';
import Colors from '../Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import AppointmentCard from '../components/AppointmentCard';
import { ScrollView } from 'react-native';

const BookAppointment = () => {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
          <Text style={{marginTop:10,fontSize:25,color:"white",fontWeight:"500"}}>Appointments</Text>
          <Image
          source={require('../assets/teeth1.png')}
          style={{height:60,width:60,top:8}}
          />
        </View>
        <View style={styles.subcontainer}> 
        <Text style={{padding:10,fontSize:22,fontWeight:"bold"}}>Bookings</Text>

        <ScrollView>
        <AppointmentCard name="Dr Yashwanth K" role="Dental Partitioner" location="Hastinapuram" image="https://i.ppvise.site/search_image_v2/e584b36edf"/>
        <AppointmentCard name="Dr Pravin Kumar P" role="Dental Partitioner" location="Mylapore" image="https://i.ppvise.site/search_image_v2/e584b36edf"/>
        <AppointmentCard name="Dr Logeshwar SB" role="Dental Partitioner" location="Saligramam" image="https://i.ppvise.site/search_image_v2/e584b36edf"/>

        </ScrollView>
      
      


        
        </View>
    </View>
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


export default BookAppointment;
