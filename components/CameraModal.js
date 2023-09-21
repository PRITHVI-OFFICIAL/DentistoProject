import React from 'react';
import { Modal, View, Image, Button ,Text} from 'react-native';

const CameraModal = ({ visible, imageUri, onClose }) => {

 

  return (
   <View style={{}}>
     <Modal visible={visible} animationType="fade" style={{}}>
      <Text>Hii</Text>
      
      <View style={{ width:400,height:400,backgroundColor:"red" }}>
        {imageUri && <Image source={{ uri: imageUri }} style={{ width: 400, height: 400 }} />}
        <Button title="Close" onPress={onClose} />
       
      </View>
    </Modal>
    
   </View>
  );
};

export default CameraModal;
