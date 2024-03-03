import React, { useState, useEffect,useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { View, Text, Button, Image, ScrollView, TouchableOpacity ,ImageBackground} from 'react-native';
import { useNavigation ,useFocusEffect} from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import { Camera } from 'expo-camera';
import Colors from '../Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import * as ScreenOrientation from 'expo-screen-orientation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRoute } from '@react-navigation/native';



const ScanTeeth = () => {
  const route = useRoute();
  // const { newText } = route.params || {};
  // const [front,setfront]=useState('h');
  //const [left,setleft]=useState('h');

  const [isclicked,setclicked]=useState(false);

  const { frontimage } = route.params || {};
  const { leftimage } = route.params || {};
  const { rightimage } = route.params || {};
  const { downimage } = route.params || {};

  // const [images, setImages] = useState({ front: '', left: '' });

  const [front, setfront] = useState('h');
  const [left,setleft]=useState('h');
  const [right,setright]=useState('h');
  const [down,setdown]=useState('h');
  


  useEffect(() => {
    if(frontimage!=undefined){
      setfront(frontimage);
    }
  }, [frontimage]);

  useEffect(() => {
    if(leftimage!=undefined){
      setleft(leftimage);
    }
   
   
  }, [leftimage]);

  useEffect(() => {
    if(rightimage!=undefined){
      setright(rightimage);
    }
   
   
  }, [rightimage]);

  useEffect(() => {
    if(downimage!=undefined){
      setdown(downimage);
    }
   
   
  }, [downimage]);

  console.log(rightimage);

  const resetState = () => {
    setfront('h');
    setleft('h');
    setright('h');
    setdown('h');
  };

  useFocusEffect(
    useCallback(() => {
      if (isclicked) {
        resetState();
        setclicked(false); // Reset clicked status
      }
    }, [isclicked])
  );



  function result(){

    setclicked(true);
    navigation.navigate('Results',{front:front,left:left,right:right,down:down})


  }
  const navigation = useNavigation();
  ScreenOrientation.OrientationLock.PORTRAIT;

  //cconsole.log(front["uri"],"------------->");
  // useEffect(() => {
  //   // Retrieve stored imageUri when the component mounts
  //   clearAll()
  //   retrieveFrontTeeth('FrontTeeth')
  //   retrieveLeftTeeth('LeftSideTeeth')
  //   retrieveRightTeeth('RightSideTeeth')
  //   retrieveDownTeeth('DownSideTeeth')
  // }, []);

  // clearAll = async () => {
  //   try {
  //     await AsyncStorage.clear()
  //   } catch(e) {
  //     // clear error
  //   }
  
  //   console.log('Done Clear.')
  // }


  // const retrieveFrontTeeth = async (text) => {
  //   try {
  //     const storedUri = await AsyncStorage.getItem(text);
  //     if (storedUri) {
  //       setfront(storedUri);
  //     }
  //   } catch (error) {
  //     console.error('Error retrieving imageUri:', error);
  //   }
  // };

  // const retrieveLeftTeeth= async (text) => {
  //   try {
  //     const storedUri = await AsyncStorage.getItem(text);
  //     if (storedUri) {
  //       setleft(storedUri);
  //     }
  //   } catch (error) {
  //     console.error('Error retrieving imageUri:', error);
  //   }
  // };

  // const retrieveRightTeeth= async (text) => {
  //   try {
  //     const storedUri = await AsyncStorage.getItem(text);
  //     if (storedUri) {
  //       setright(storedUri);
  //     }
  //   } catch (error) {
  //     console.error('Error retrieving imageUri:', error);
  //   }
  // };

  // const retrieveDownTeeth= async (text) => {
  //   try {
  //     const storedUri = await AsyncStorage.getItem(text);
  //     if (storedUri) {
  //       setdown(storedUri);
  //     }
  //   } catch (error) {
  //     console.error('Error retrieving imageUri:', error);
  //   }
  // };
 
  // console.log(front,"$$");
  // console.log(left,"--)");
  // console.log(frontimage,"&(*&*");


  return (
    
    <View style={styles.container}>

<View style={{height:260}}>

<TouchableOpacity onPress={()=> navigation.navigate('Home')}>
<Ionicons name="md-arrow-back" size={30} color="#230A94"  style={{marginLeft:20}}/>
</TouchableOpacity>
<ScrollView horizontal style={{paddingRight:20}}  pagingEnabled={true} >

{/* <View style={{height:200,backgroundColor:Colors.black,borderRadius:15,width:385,margin:20}}>

<Image 
   source={require('../assets/scanpage2.png')}
   style={{width:"100%",height:"100%",borderRadius:15}}
/>





</View>  */}

<View style={{height:200,backgroundColor:'yellow',borderRadius:15,width:385,margin:20}}>


  <Image 
   source={require('../assets/scanpage1.png')}
   style={{width:"100%",height:"100%",borderRadius:15}}
  />



</View> 


</ScrollView>

</View>

    



<ScrollView style={{marginBottom:10}}>

<View style={{padding:15}}>
    <View style={{height:600,backgroundColor:Colors.primary,elevation:30,shadowColor:Colors.primary,padding:15,borderRadius:10}}>

<Text style={{fontSize:22,fontWeight:"bold",color:"white"}}>Input Images</Text>

{/* <Image 
   source={{uri:imguri["uri"]}}
   style={{width:100,height:100,borderRadius:15}}
  /> */}



<ScrollView>

<TouchableOpacity onPress={()=>navigation.navigate('CameraPage',{imagetype:'FrontTeeth'})}>
<View style={{width:"100%",height:80,backgroundColor:"white",borderRadius:10,marginTop:20,padding:10,flexDirection:"row"}}>

<View>
<View style={{width:60,height:60,backgroundColor:Colors.lightblue,borderRadius:16,justifyContent:"center",alignItems:"center"}}>

{/* {front && <Image

source={{ uri: front }}
style={{ width: 25, height: 25 ,}}
/>} */}

{
  front[0]!='h' ?
   <Image
  source={require('../assets/tick.png')}
  style={{ width: 25, height: 25 ,}}
  /> : 
  <Image
  source={require('../assets/cross.png')}
  style={{ width: 25, height: 25 ,}}
  />

}

</View>
</View>

<View style={{margin:10}}>
<Text style={{fontSize:17,fontWeight:"bold"}}>Front Teeth</Text>
<Text style={{color:Colors.gray}}>Scan your Front Teeth Clearly</Text>
</View>

<View style={{marginTop:15}}>
<Ionicons name="arrow-forward-sharp" size={30} color="#230A94"  style={{marginLeft:50}}/>

</View>

</View>
</TouchableOpacity>








<TouchableOpacity onPress={()=>navigation.navigate('CameraPage',{imagetype:'LeftSideTeeth'})}>
<View style={{width:"100%",height:80,backgroundColor:"white",borderRadius:10,marginTop:20,padding:10,flexDirection:"row"}}>

<View>
<View style={{width:60,height:60,backgroundColor:Colors.lightblue,borderRadius:16,justifyContent:"center",alignItems:"center"}}>

{/* <Image

source={{uri:left}}
style={{ width: 25, height: 25 ,}}
/> */}

{/* {left && <Image

source={{ uri: left }}
style={{ width: 25, height: 25 ,}}
/>} */}

{
  left[0]!='h' ?
   <Image
  source={require('../assets/tick.png')}
  style={{ width: 25, height: 25 ,}}
  /> : 
  <Image
  source={require('../assets/cross.png')}
  style={{ width: 25, height: 25 ,}}
  />

}


</View>
</View>

<View style={{margin:10}}>
<Text style={{fontSize:17,fontWeight:"bold"}}>Left Side Teeth</Text>
<Text style={{color:Colors.gray}}>Scan your Left Side Teeth Clearly</Text>
</View>

<View style={{marginTop:15}}>
<Ionicons name="arrow-forward-sharp" size={30} color="#230A94"  style={{marginLeft:30}}/>

</View>

</View>

</TouchableOpacity>







<TouchableOpacity onPress={()=>navigation.navigate('CameraPage',{imagetype:'RightSideTeeth'})}>

<View style={{width:"100%",height:80,backgroundColor:"white",borderRadius:10,marginTop:20,padding:10,flexDirection:"row"}}>

<View>
<View style={{width:60,height:60,backgroundColor:Colors.lightblue,borderRadius:16,justifyContent:"center",alignItems:"center"}}>

{/* <Image
source={{uri:right}}
style={{ width: 25, height: 25 ,}}
/> */}

{
  right[0]!='h' ?
   <Image
  source={require('../assets/tick.png')}
  style={{ width: 25, height: 25 ,}}
  /> : 
  <Image
  source={require('../assets/cross.png')}
  style={{ width: 25, height: 25 ,}}
  />

}

</View>
</View>

<View style={{margin:10}}>
<Text style={{fontSize:17,fontWeight:"bold"}}>Right Side Teeth</Text>
<Text style={{color:Colors.gray}}>Scan your Right Side Teeth Clearly</Text>
</View>

<View style={{marginTop:15}}>
<Ionicons name="arrow-forward-sharp" size={30} color="#230A94"  style={{marginLeft:20}}/>

</View>

</View>
  
</TouchableOpacity>








<TouchableOpacity onPress={()=>navigation.navigate('CameraPage',{imagetype:'DownSideTeeth'})}>

<View style={{width:"100%",height:80,backgroundColor:"white",borderRadius:10,marginTop:10,padding:10,flexDirection:"row"}}>

<View>
<View style={{width:60,height:60,backgroundColor:Colors.lightblue,borderRadius:16,justifyContent:"center",alignItems:"center"}}>

{/* <Image

source={{uri:down}}
style={{ width: 25, height: 25}}
/> */}

{
  down[0]!='h' ?
   <Image
  source={require('../assets/tick.png')}
  style={{ width: 25, height: 25 ,}}
  /> : 
  <Image
  source={require('../assets/cross.png')}
  style={{ width: 25, height: 25 ,}}
  />

}

</View>
</View>

<View style={{margin:10}}>
<Text style={{fontSize:17,fontWeight:"bold"}}>Down Side Teeth</Text>
<Text style={{color:Colors.gray}}>Scan your Down Side Teeth Clearly</Text>
</View>

<View style={{marginTop:15}}>
<Ionicons name="arrow-forward-sharp" size={30} color="#230A94"  style={{marginLeft:20}}/>

</View>

</View>
</TouchableOpacity>



<TouchableOpacity onPress={()=> result()}>
<View style={{width:150,height:60,backgroundColor:"#230A94",borderRadius:10,margin:20,alignSelf:"center",justifyContent:"center",alignItems:"center",marginTop:20}}>

<Text style={{fontSize:15,fontWeight:"bold",color:"white"}}>Scan Now</Text>

</View>
</TouchableOpacity>


  







</ScrollView>





</View>

    </View>


</ScrollView>

        

 
    </View>
  );
};

export default ScanTeeth;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      paddingTop:45,
      width:"100%", 

    
    },
    
  });

{/* <Camera style={{ height:"90%",width:"100%"}} type={cameraType} ref={cameraRef}>

</Camera> */}
{/* <Button
    title="Flip Camera"
    onPress={() => {
      setCameraType(
        cameraType === Camera.Constants.Type.back
          ? Camera.Constants.Type.front
          : Camera.Constants.Type.back
      );
      
    }}
    style={{width:"10%",backgroundColor:"blue"}}
  /> */}