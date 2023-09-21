import React, { useState, useEffect } from 'react';
import { View, Text, Button, Image, ScrollView, TouchableOpacity ,ImageBackground} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Camera } from 'expo-camera';

const Login = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
  const [capturedPhotos, setCapturedPhotos] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);


  return (
    <View style={{backgroundColor:"#53A1EF",flex:1,width:"100%",padding:45}} >
        <Text>Hii</Text>
 
    </View>
  );
};

export default Login;



