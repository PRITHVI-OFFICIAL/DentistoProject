import React, { useState, useEffect, useLayoutEffect } from 'react';
import { View, Text, Button, Image, ScrollView, TouchableOpacity ,ImageBackground,Alert,Modal,Pressable,StyleSheet} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Camera } from 'expo-camera';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import CameraModal from '../components/CameraModal';
import * as ScreenOrientation from 'expo-screen-orientation';
import Colors from '../Colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';
import { manipulateAsync, FlipType, SaveFormat } from 'expo-image-manipulator';


const CameraPage = ({route}) => {
  const imagetype =route.params;
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
  const [capturedPhotos, setCapturedPhotos] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);
  const [flashMode, setFlashMode] = useState(Camera.Constants.FlashMode.off);
  const [imageUri, setImageUri] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const [modalVisible1, setModalVisible1] = useState(false);
  const isFocused = useIsFocused();

  
  const navigation =useNavigation();


  

  useEffect(() => {
    // Reset modalVisible to false when leaving the screen
    return () => {
      setModalVisible1(false);
    };
  }, []);

  // const closeModal = () => {
  //   setModalVisible(false);
  // };

  
  const toggleOrientation=()=>{
    navigation.goBack();

    
    //navigation.navigate('ScanTeeth',{front:imageUri});
    if(imagetype["imagetype"]=='FrontTeeth'){
      navigation.navigate('ScanTeeth', { frontimage: imageUri })
      return;
    }

    if(imagetype["imagetype"]=='LeftSideTeeth'){
      navigation.navigate('ScanTeeth', { leftimage: imageUri })
      return;
    }

    if(imagetype["imagetype"]=='RightSideTeeth'){
      navigation.navigate('ScanTeeth', { rightimage: imageUri })
      return;
    }

    if(imagetype["imagetype"]=='DownSideTeeth'){
      navigation.navigate('ScanTeeth', { downimage: imageUri })
      return;
    }


    //setModalVisible1(true);
    
    
  }

  const storeImageUri = async uri => {
    try {
      await AsyncStorage.setItem(imagetype["imagetype"], uri);
      console.log("Done....")
    } catch (error) {
      console.error('Error storing imageUri:', error);
    }
  };


  

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
  

  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      var desiredWidth;
      var desiredHeight;

    if(cameraType==0){
      desiredWidth = 2200
      desiredHeight = 1200
    }
    else{
    desiredWidth = 1500
    desiredHeight = 900
    }
  ;
    console.log(photo.width,photo.height,cameraType);

    // Calculate the origin (X, Y) to center the crop around the image
    const originX = (photo.width - desiredWidth)/2;
    const originY = (photo.height - desiredHeight)/2;
    const cropData = {
      height: desiredHeight, // Set the desired height
      originX,  // Set the starting X coordinate for the crop
      originY,  // Set the starting Y coordinate for the crop
      width: desiredWidth,  // Set the desired width
    };

      const manipResult = await manipulateAsync(
        photo.uri,
        [{ crop: cropData }],
        { compress: 1, format: SaveFormat.PNG }
      );
      setCapturedPhotos([...capturedPhotos, photo]);
      setImageUri(manipResult.uri);
      console.log(manipResult.uri);
      setModalVisible1(true);
      storeImageUri(manipResult.uri);
      
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

  const cameraRef = React.useRef(null);


  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  //setCapturedPhotos([]);

  const closeModal = () => {
    setModalVisible1(false);
    setImageUri(null);
  };

  return (

    
    
    <View style={{backgroundColor:"white",flex:1,width:"100%",}} >
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible1}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible1(false);
        }}
      
        >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>

            <View style={{}}>

            </View>
            {/* transform: [{ rotate: '90deg' }] */}
            <Image  
        style={{width:250,height:250,backgroundColor:"#0466CB",marginTop:10,marginLeft:15,borderRadius:15,   }}
        source={{
          // uri: 'https://shorturl.at/myJK5',
          uri: imageUri
        }}
      />

            <View style={{width:300,height:250,marginTop:10,marginLeft:20,padding:30}}>

            <Text style={{fontSize:25,fontWeight:"bold",color:"#0466CB"}}>Captured Image</Text>
            <Text style={{color:Colors.gray,marginTop:20,fontSize:14}}>Tips</Text>
            <Text style={{color:Colors.gray,marginTop:10,fontSize:14}}>1. Take your photo in bright area</Text>
            <Text style={{color:Colors.gray,marginTop:10,fontSize:14}}>2. Click the specific Region</Text>
            {/* <Text style={{color:Colors.gray,marginTop:20,fontSize:14}}>1. Aim your Camera at your mouth</Text>
            <Text style={{color:Colors.gray,marginTop:10,fontSize:14}}>2. Open your mouth wide</Text>
            <Text style={{color:Colors.gray,marginTop:10,fontSize:14}}>3. Press Camera Button to take Picture</Text> */}

            <TouchableOpacity onPress={()=>setModalVisible1(!modalVisible1)}>
        <View style={{height:40,width:200,backgroundColor:"#0466CB",borderRadius:10,justifyContent:"center",marginTop:40}}>
      <Text style={{color:"white",fontWeight:"600",alignSelf:"center",fontSize:17}}>Done</Text>
      {/* <Ionicons name="camera-outline" size={25} color="white"  style={{alignSelf:"center"}}/> */}

        </View>
          </TouchableOpacity>

            </View>
            {/* <Text style={styles.modalText}>Hello World!</Text> */}
            {/* <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible1(!modalVisible1)}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable> */}
          </View>
        </View>
      </Modal>

{/* <Pressable
        style={[styles.button, styles.buttonOpen,]}
        onPress={() => setModalVisible1(true)}>
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable> */}
        {/* <Text>Hii</Text> */}



        {/* style={{ height:"92%",width:"150%"}} */}
        {isFocused && 
        <Camera
          style={{ flex: 1 }}
          type={cameraType}
          //ratio="1:1" // Set the aspect ratio to 1:1
          ref={cameraRef}
          flashMode={flashMode}
        >
           <View style={{height:100,backgroundColor:"white",justifyContent:"center"}}>

<TouchableOpacity onPress={toggleOrientation}>
<Ionicons name="arrow-back-outline" size={30} color="black"  style={{marginTop:40,marginLeft:20}}/>
</TouchableOpacity>


     

 </View>
          <View style={{ flex: 1, backgroundColor: 'transparent' }}>
            {/* Overlay boundary box */}
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <View style={{ width: 300, height: 200, borderColor: Colors.primary, borderWidth: 2, borderRadius: 10, }} />
            </View>
          </View>
        </Camera>
      }
{/* 
{imageUri && (
        <Image
          style={{
           
            width: 500,
            height: 200,
            // Set cropping based on the boundary box position
            overflow: 'hidden',
          
          }}
          source={{ uri: imageUri }}
        />
      )} */}
        {/* {isFocused && <Camera style={{ height:"92%",width:"150%"}} type={cameraType} ref={cameraRef} flashMode={flashMode} ratio="2:1">
        
        <View style={{height:100,backgroundColor:"white",justifyContent:"center"}}>

       <TouchableOpacity onPress={toggleOrientation}>
       <Ionicons name="arrow-back-outline" size={30} color="black"  style={{marginTop:40,marginLeft:20}}/>
       </TouchableOpacity>

       
            

        </View>
        
      




        

        </Camera>} */}
        <CameraModal visible={modalVisible} imageUri={imageUri} onClose={closeModal} />


  
  <View style={{flexDirection:"row-reverse",justifyContent:"space-evenly",margin:10,backgroundColor:"white"}}>
  <TouchableOpacity onPress={toggleFlashMode}>
    <View style={{height:50,width:50,backgroundColor:"#0466CB",borderRadius:100,justifyContent:"center",margin:2}}>
    <Ionicons name="flashlight-sharp" size={25} color="white"  style={{alignSelf:"center",transform: [{ rotate: '90deg' }]}}/>
     
    </View>
    </TouchableOpacity>
  

    <TouchableOpacity onPress={takePicture}>
    <View style={{height:50,width:50,backgroundColor:"#0466CB",borderRadius:100,justifyContent:"center",margin:2}}>
      {/* <Text style={{color:"white",fontWeight:"bold",alignSelf:"center",fontSize:17}}>Take Picture</Text> */}
      <Ionicons name="camera-outline" size={25} color="white"  style={{alignSelf:"center",transform: [{ rotate: '90deg' }]}}/>


    </View>
    </TouchableOpacity>


    <TouchableOpacity onPress={() => {
      setCameraType(
        cameraType === Camera.Constants.Type.back
          ? Camera.Constants.Type.front
          : Camera.Constants.Type.back
      );
      
    }}>
    <View style={{height:50,width:50,backgroundColor:"#0466CB",borderRadius:100,justifyContent:"center",margin:2}}>
    
      <Ionicons name="arrow-undo-outline" size={25} color="white"  style={{alignSelf:"center",transform: [{ rotate: '90deg' }]}}/>

    </View>
    </TouchableOpacity>

    

   
  </View>

 




  


    {/* <View style={{backgroundColor:"white",width:"45%",padding:20,borderRadius:20}}>


    <Text style={{fontSize:20,fontWeight:"bold",marginLeft:10}}>Tutorial</Text>

    <View style={{flexDirection:"row",justifyContent:"space-around"}}>
    <Image
    
    source={require('../assets/Do.png')}
    style={{ width: 270, height: 225, margin: 5,borderRadius:10 }}
  />

<Image
    
    source={require('../assets/Dont.png')}
    style={{ width: 200, height: 210, margin: 5,borderRadius:10 }}
  />
    </View>



      <View style={{flexDirection:"row",justifyContent:"space-between"}}>  
      <Text style={{fontSize:20,fontWeight:"bold",marginLeft:10}}>Input Images</Text>
      
      <TouchableOpacity onPress={{}}>
      <Text style={{fontSize:16,fontWeight:"bold",marginLeft:10,color:"red"}}>Delete All</Text>
      </TouchableOpacity>

      </View>
  <ScrollView horizontal>


{capturedPhotos.map((photo, index) => (
  <Image
    key={index}
    source={{ uri: photo.uri }}
    style={{ width: 200, height: 200, margin: 5,borderRadius:10 }}
  />

  
))}
</ScrollView>

<TouchableOpacity onPress={takePicture} style={{flexDirection:"row-reverse"}}>
    <View style={{height:50,width:130,backgroundColor:"#0466CB",borderRadius:10,justifyContent:"center"}}>
      <Text style={{color:"white",fontWeight:"bold",alignSelf:"center",fontSize:17}}>Show Results</Text>

    </View>
    </TouchableOpacity>





        </View> */}


       
     
   

       

        
        

    </View>
  );
};

export default CameraPage;

const styles = StyleSheet.create({
  centeredView:{
    transform: [{ rotate: '90deg' }],
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    elevation:100
  
    //backgroundColor:'grey'
  },
  modalView: {
    // margin: 20,
    // backgroundColor: 'white',
    // borderRadius: 20,
    // padding: 35,
    // alignItems: 'center',
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 4,
    // elevation: 5,
    padding:10,
    height:300, 
    width:600, 
    //alignSelf:"center",
    backgroundColor:"white", 
    borderRadius:20, 
    flexDirection:"row",
    elevation:100
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginTop:30
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});


{/* <View
  style={{
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
  }}
>
  <Button
    title="Flip Camera"
    onPress={() => {
      setCameraType(
        cameraType === Camera.Constants.Type.back
          ? Camera.Constants.Type.front
          : Camera.Constants.Type.back
      );
    }}
  />
  <Button title="Take Picture" onPress={takePicture} />
</View>
</Camera>
<ScrollView horizontal>
{capturedPhotos.map((photo, index) => (
  <Image
    key={index}
    source={{ uri: photo.uri }}
    style={{ width: 200, height: 200, margin: 5 }}
  />
))}
{selectedImages.map((image, index) => (
  <Image
    key={index}
    source={{ uri: image }}
    style={{ width: 200, height: 200, margin: 5 }}
  />
))}
</ScrollView>
<Button title="Pick Images" onPress={pickImage} /> */}


