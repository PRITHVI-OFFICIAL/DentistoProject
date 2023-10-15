import React, { useState, useEffect,useFocusEffect } from 'react';
import { View, Text, Button, Image, ScrollView, TouchableOpacity ,ImageBackground} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Camera } from 'expo-camera';
import { useNavigation } from '@react-navigation/native';
import Colors from '../Colors';
import Ionicons from '@expo/vector-icons/Ionicons';


const CameraDummy = () => {
  const [hasPermission, setHasPermission] = useState('granted');
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
  const [capturedPhotos, setCapturedPhotos] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);
  const [flashMode, setFlashMode] = useState(Camera.Constants.FlashMode.off);
  const navigation =useNavigation();
  const isFocused = useIsFocused();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
      const mediaStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (mediaStatus.status !== 'granted') {
        alert('Sorry, we need media library permissions to make this work.');
      }
    })();
  }, []);

   // Handle camera state and component unmounting
//    useEffect(() => {
//     return () => {
//       setCameraType(Camera.Constants.Type.back);
//       setFlashMode(Camera.Constants.FlashMode.on);
//     };
//   }, []);

  // Handle camera focus event to reset camera state
  const cameraRef = React.useRef(null);

//   useEffect(() => {
   
//       // Reset camera reference on screen unmount
//       cameraRef.current= null;
    
//   }, [isFocused]);

  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      setCapturedPhotos([...capturedPhotos, photo]);
      setImageUri(photo.uri);
      setModalVisible1(true);
      storeImageUri(photo.uri);
      
      //Alert.alert("Photo Taken")
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
      quality: 1,
    });

    if (!result.cancelled) {
      setSelectedImages([result.uri]);
    }
  };
  //setSelectedImages([...selectedImages, result.uri]);

  const toggleFlashMode = () => {
    setFlashMode(
      flashMode === Camera.Constants.FlashMode.off
        ? Camera.Constants.FlashMode.off
        : Camera.Constants.FlashMode.off
    );
  };

  

  if (hasPermission === null) {
    console.log("Has No Permisssion");
    return <View />;
  }
  if (hasPermission === false) {
    console.log("Ok cPermisssion")
    return <Text>No access to camera</Text>;
  }
  //setCapturedPhotos([]);

  const toggleOrientation=()=>{
    cameraRef.current= null;
    navigation.goBack();
    

    
    //navigation.navigate('ScanTeeth');
    //setModalVisible1(true);
    
    
  }


  return (
    <View style={{backgroundColor:"#53A1EF",flex:1,width:"100%",padding:45}} >
        {isFocused &&
    <Camera style={{ height:"92%",width:"150%"}} type={cameraType} ref={cameraRef} flashMode={flashMode}>

        
        {/* <View style={{height:100,backgroundColor:"white",justifyContent:"center"}}>

       <TouchableOpacity onPress={toggleOrientation}>
       <Ionicons name="arrow-back-outline" size={30} color="black"  style={{marginTop:40,marginLeft:20}}/>
       </TouchableOpacity>

       
            

        </View> */}
        
        {/* <View style={{height:500,backgroundColor:"white",width:"70%",opacity: 0.5,borderWidth:100,borderColor:"black"}}>
           

           </View> */}




        

        </Camera>
    }
    
                


 
    </View>
  );
};

export default CameraDummy;



