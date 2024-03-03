import React,{useState,useEffect,useLayoutEffect} from 'react';
import { Modal, View, Image, Button,Text,ScrollView, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import Colors from '../Colors';
import { getStorage, ref, listAll, getMetadata, getDownloadURL } from "firebase/storage";
import { auth, database } from '../config/firebase';
import { getAuth,signOut} from "firebase/auth";
import * as Print from 'expo-print';
import { shareAsync } from 'expo-sharing';
import { AntDesign } from '@expo/vector-icons';


const Articles = () => {

  const [data,setdata]=useState([]);
    const folderName=getAuth()?.currentUser.email.split("@")[0];


    useEffect(() => {
   
        // Get a reference to the folder
       fetchFilesMetadata(folderName);
   
    }, 
    
    [data]); 
 
//   const storage = getStorage();

//   // Function to upload PDF file to Firebase Storage
//   async function uploadPDF(pdfFile, folderName, fileName) {
//     try {
//         // Construct the full path including folder
//         const fullPath = folderName ? `${folderName}/${fileName}` : fileName;

//         // Create a reference to the storage path
//         const storageRef = ref(storage, fullPath);

//         // Upload the file to the specified path
//         const uploadTask = uploadBytesResumable(storageRef, pdfFile);

//         // Listen for state changes, errors, and completion of the upload.
//         uploadTask.on('state_changed',
//             (snapshot) => {
//                 // Get upload progress
//                 const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//                 console.log('Upload is ' + progress + '% done');
//             },
//             (error) => {
//                 // Handle unsuccessful uploads
//                 console.error('Error uploading PDF:', error);
//             },
//             async () => {
//                 // Handle successful uploads on complete
//                 console.log('PDF uploaded successfully');
//                 // Get download URL of the uploaded file
//                 const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
//                 console.log('File available at', downloadURL);
//             }
//         );
//     } catch (error) {
//         console.error('Error uploading PDF:', error);
//     }
// }
// const pdfFile = "/workspaces/DentistoProject/329dd4db-cb10-4762-ac62-efb4309a7649.pdf";
// const fileName = 'example.pdf'; // Change this to the desired file name
// const foldername="test";
// uploadPDF(pdfFile, foldername,fileName);
const storage = getStorage();

// Function to fetch download links, timestamps, and file names from Firebase Storage
async function fetchFilesMetadata(folderName) {
  try {
      // Get a reference to the folder
      const folderRef = ref(storage, folderName);

      // List all items (files) in the folder
      const { items } = await listAll(folderRef);

      // Iterate through the list of items
      const filesMetadata = await Promise.all(items.map(async (itemRef) => {
          // Get metadata for each item (file)
          const metadata = await getMetadata(itemRef);
          
          // Get download URL for the file
          const downloadURL = await getDownloadURL(itemRef);

          const response = await fetch(downloadURL);
          const text = await response.text();
          // Extract the file name from the full path
          const fileName = metadata.name.split('/').pop();

          return {
              fileName,
              downloadURL,
              timeCreated: metadata.timeCreated,
              text:text
          };
      }));

      // Log or process the metadata
      //console.log('Files metadata:', filesMetadata);
      setdata(filesMetadata);
      return filesMetadata;
  } catch (error) {
      console.error('Error fetching files metadata:', error);
      return [];
  }
}

const printToFile = async (html) => {
  // On iOS/android prints the given html. On web prints the HTML from the current page.
  const { uri } = await Print.printToFileAsync({
   html : html,
  });
  console.log('File has been saved to:', uri);
  await shareAsync(uri, { UTI: '.pdf', mimeType: 'application/pdf' });



}




  return (
    <View style={{paddingTop:30,flex:1,margin:30}}>
        <Text style={styles.usertext}>Reports</Text>



        {data.length === 0 ? (
    <Text style={{ textAlign: 'center' }}>No reports Generated</Text>
  ) : (
    <>
      {data.map((item, index) => (
        <TouchableOpacity key={index} onPress={() => { printToFile(item.text) }}>
          <View style={{ height: 90, backgroundColor: Colors.primary, borderRadius: 10, padding: 20, marginBottom: 10, flexDirection: 'row' }}>
            <View style={{ padding: 10, marginRight: 10 }}>
              <AntDesign name="pdffile1" size={30} color="white" />
            </View>
            <View>
              <Text style={{ marginBottom: 10 }}>
                <Text style={{ fontWeight: 'bold', color: 'white' }}>File Name: </Text> {item.fileName}.pdf
              </Text>
              <Text style={{ color: 'white' }}>
                <Text style={{ fontWeight: 'bold', color: 'white' }}>Report Generated On: </Text>{item.timeCreated}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </>
  )}
    
    </View>
  );
};

export default Articles;
const styles=StyleSheet.create(
  {
    usertext: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom:20
    },
  }
)
