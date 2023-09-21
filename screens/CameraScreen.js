import React, { useState, useEffect } from 'react';
import { View, Text, Button, Image, ScrollView, TouchableOpacity ,ImageBackground} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Camera } from 'expo-camera';

const CameraScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
  const [capturedPhotos, setCapturedPhotos] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);

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
      setCapturedPhotos([...capturedPhotos, photo]);
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
      quality: 1,
    });

    if (!result.cancelled) {
      setSelectedImages([...selectedImages, result.uri]);
    }
  };

  const cameraRef = React.useRef(null);


  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  //setCapturedPhotos([]);

  return (
    <View style={{backgroundColor:"#53A1EF",flex:1,width:"100%",padding:45}} >
        {/* <Text>Hii</Text> */}


       

       <View style={{flexDirection:"row",justifyContent:"space-between"}}>

       <View style={{backgroundColor:"white",width:"50%",borderRadius:20,elevation:6}}>
            {/* <Text>Hii</Text> */}


        <Camera style={{ height:"90%",width:"100%"}} type={cameraType} ref={cameraRef}>

        </Camera>

        <Button
    title="Flip Camera"
    onPress={() => {
      setCameraType(
        cameraType === Camera.Constants.Type.back
          ? Camera.Constants.Type.front
          : Camera.Constants.Type.back
      );
      
    }}
    style={{width:"10%",backgroundColor:"blue"}}
  />

  <View style={{flexDirection:"row",justifyContent:"space-evenly",margin:10}}>
  <TouchableOpacity onPress={takePicture}>
    <View style={{height:50,width:130,backgroundColor:"#0466CB",borderRadius:10,justifyContent:"center"}}>
      <Text style={{color:"white",fontWeight:"bold",alignSelf:"center",fontSize:17}}>Take Picture</Text>

    </View>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => {
      setCameraType(
        cameraType === Camera.Constants.Type.back
          ? Camera.Constants.Type.front
          : Camera.Constants.Type.back
      );
      
    }}>
    <View style={{height:50,width:130,backgroundColor:"#0466CB",borderRadius:10,justifyContent:"center"}}>
      <Text style={{color:"white",fontWeight:"bold",alignSelf:"center",fontSize:17}}>Flip Camera</Text>

    </View>
    </TouchableOpacity>
  </View>




      </View>


    <View style={{backgroundColor:"white",width:"45%",padding:20,borderRadius:20}}>


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





        </View>


       
     
       </View>

       

        
        

    </View>
  );
};

export default CameraScreen;


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
