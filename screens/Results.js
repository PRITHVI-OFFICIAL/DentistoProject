import React, { useState, useEffect,useLayoutEffect } from 'react';
import { View, Image, Text, StyleSheet, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native';
import axios from 'axios';
import Colors from '../Colors';
import * as Print from 'expo-print';
import { shareAsync } from 'expo-sharing';
import { getAuth,signOut} from "firebase/auth";
import { auth, database } from '../config/firebase'
import {collection,addDoc,orderBy,query,onSnapshot,setDoc,doc,getDoc,where, updateDoc} from 'firebase/firestore';
import { getStorage, ref, uploadBytesResumable, getDownloadURL ,uploadString,uploadBytes} from "firebase/storage";
import ResultBox from '../components/ResultBox';

const Results = ({ route }) => {
  const { front } = route.params;
  const {left} = route.params; 
  const {right} = route.params; 
  const {down} = route.params;

  const [mail,setmail] = useState('');
  const [details,setdetails] = useState('');
  const [phone,setphone] = useState('');
  const [name,setname] = useState("Logeshwar SB");
  const [blood,setblood] = useState(''); 
  const [habits,sethabits]=useState('');
  const [age,setage]=useState("");
  const [gender,setgender]=useState(0);
  const[behave,setbehave] = useState('')

  const [label, setLabel] = useState('');
  const [label1, setLabel1] = useState('');
  const [label2, setLabel2] = useState('');
  const [label3, setLabel3] = useState('');

  const [imageUri, setImageUri] = useState('');
  const [imageUri1, setImageUri1] = useState('');
  const [imageUri2, setImageUri2] = useState('');
  const [imageUri3, setImageUri3] = useState('');

  const labels=[label,label1,label2,label3];

  const imageUris=[imageUri,imageUri1,imageUri2,imageUri3]

  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    handleUpload(front,left,right,down);

  }, []);
  

  const currentmail=getAuth()?.currentUser.email;
  useLayoutEffect(() => {
    const collectionRef = collection(database, 'Users');
      const q = query(collectionRef, where("mail", "==", currentmail));
      const unsubscribe = onSnapshot(q, querySnapshot => {
        setdetails(
          querySnapshot.docs.map(doc => 
            (
            {
            mail:doc.data().mail,
            phone: doc.data().mobile,
            name:doc.data().name, 
            age:doc.data().age, 
            habits:doc.data().habits, 
            blood:doc.data().blood, 
            gender:doc.data().gender
          
          }))
        );
      });        
      setname(details[0]?.name);
      setmail(details[0]?.mail);
      setphone(details[0]?.phone);
      sethabits(details[0]?.habits);
      setage(details[0]?.age);
      setgender(details[0]?.gender);
      setblood(details[0]?.blood);
    
    return unsubscribe;
    }, 
    
    []); 
    console.log(name);




  function countdisease(){
    var count=0;
    if(label!='Your Teeth is Good'){
      count+=1
    }
    if(label1!='Your Teeth is Good'){
      count+=1
    }
    if(label2!='Your Teeth is Good'){
      count+=1
    }
    if(label3!='Your Teeth is Good'){
      count+=1
    }
    return  count;
  }

  const loc="file:///data/user/0/host.exp.exponent/cache/Print/b64d1c7b-4e7a-43e7-b453-54dfdbb43010.pdf"

    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth(); //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds
    var gendate=monthNames[month]+" "+date+", "+year;
    //console.log(gendate);
  const printToFile = async () => {
    // On iOS/android prints the given html. On web prints the HTML from the current page.
    const { uri } = await Print.printToFileAsync({
     html : createPdf(),
    });
    console.log('File has been saved to:', uri);
    await shareAsync(uri, { UTI: '.pdf', mimeType: 'application/pdf' });


              const storage = getStorage();
              const stringContent = createPdf();


              const fileName=`Report_${date}-${month}-${year}_${hours}-${min}-${sec}`;
              const folderName=`${currentmail?.split("@")[0]}`;
              const storageRef = ref(storage, `${folderName}/${fileName}`);
              // Convert the string content into a Blob

              const blob = new Blob([stringContent], { type: 'text/plain' });
              // Generate a unique filename or use a specific one
              uploadBytes(storageRef,blob).then((snapshot) => {
                console.log('Uploaded a blob or file!');
              });
             
          
        





  }

  var date = new Date().getDate(); //Current Date
  var month = new Date().getMonth() + 1; //Current Month
  var year = new Date().getFullYear(); //Current Year
  var hours = new Date().getHours(); //Current Hours
  var min = new Date().getMinutes(); //Current Minutes
  var sec = new Date().getSeconds(); //Current Seconds

  const createPdf = () => {

    //var CurrentTime = date + '/' + month + '/' + year+ ' ' + hours + ':' + min + ':' + sec;
   
  
    var image = '';
    var imagebox = '';
    var count = 1;

    for (let i = 0; i < imageUris.length; i++) {
        image += `
        <div style="display: flex; justify-content: space-between;">
            <div>
                <img src="${imageUris[i]}" style="width: 250px;">
                <h3 style="font-weight: normal;">Image ID : IMG ${count}</h3>
                <h3 style="font-weight: normal;">Result: ${labels[i]} Found</h3>
            </div>
        </div>
        `;

        count += 1;
        if (count % 2 === 1 || i === imageUris.length - 1) {
            imagebox += `<div style="display: flex; justify-content: space-between; flex-wrap: wrap;">${image}</div>`;
            image = '';
        }
    }

      
      //console.log(table);
      const html = `
      <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>dentiso</title>
        </head>
        <style>
            *{
        font-family : arial
        
          }
        </style>
        <body>
            <div style="padding: 30px">
                <div style="display: flex;justify-content: space-between;">
                <img  src="./logo.png"/>
                <h1 style="color:#53A1EF;font-size: 25px;">PATIENT  REPORT</h2>
            </div>
            <h1 style="font-size: 25px;margin-top: 20px;text-decoration: underline;">PATIENT DETAILS</h1>
            <div style="display: flex;justify-content: space-between; flex-wrap:wrap">
              <div>
                    <h3 style="font-weight: normal;">Patient name : ${name}</h1>
                    <h3 style= "font-weight: normal;">Email : ${mail}</h1>
                    <h3 style="font-weight: normal;">Age : ${age}</h1>
                </div>
                <div >
                    <h3 style="font-weight: normal;">Phone Number : ${phone}</h1>
                    <h3 style="font-weight: normal;">Gender : ${gender}</h1>
                    <h3 style="font-weight: normal;">Other Habits : None</h1>
                </div>
            </div>
            <hr>
            <h1 style="font-size: 25px;margin-top: 20px;text-decoration: underline;">REPORT RESULTS</h1>
            ${imagebox}
            <hr>
            <h1 style="font-size: 25px;margin-top: 20px;text-decoration: underline;">RESULTS SUMMARY</h1>
            <div>
                <ul>
                    <li style="font-size:larger;">Gingivity Occured in Front Teeth</li>
                    <li style="font-size:larger;">Tooth Decay occured in Molar Teeth Left Side</li>
                </ul>
            </div>
            <div style="text-align: center;">
                <table style="width: 400px; height: 100px; margin: 0 auto;padding-top: 50px;">
                    <tr>
                        <th style="border: 1px solid black;">Accuracy Score: 97%</th>
                        <th style="width: 200px; border: 1px solid black;">Images Count: 2</th>
                    </tr>
                </table>
            </div>
            </div>
            
        </body>
        </html>
        `;
      
      return html;
    }
  const handleUpload = async (front,left,right,down) => {
    const formData = new FormData();
    formData.append('file', {
      uri: front,
      type: 'image/jpeg',
      name: 'image.jpg',
    });

    try {
      const response = await axios.post(
        'https://dentiso-api2.onrender.com/detect/',
        formData,
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'multipart/form-data',
          },
          responseType: 'json',
        }
      );

      const data = response.data;

      if (data.labels && data.labels.length > 0) {
        const detectedLabel = data.labels[0].label;
        const imageBase64 = data.image_base64;

        setLabel(detectedLabel);
        setImageUri(`data:image/jpeg;base64,${imageBase64}`);
        console.log(imageUri);
      } else {
        const imageBase64 = data.image_base64;

        setLabel("Your Teeth is Good");
        setImageUri(`data:image/jpeg;base64,${imageBase64}`);
        // Handle the case where no label was detected.
      }
    } catch (error) {
      console.error('Error detecting objects:', error);
    } finally {
      //setLoading(false); // Set loading to false when done
    }


    const formData1 = new FormData();
    formData1.append('file', {
      uri: left,
      type: 'image/jpeg',
      name: 'image.jpg',
    });

    try {
      const response = await axios.post(
        'https://dentiso-api2.onrender.com/detect/',
        formData1,
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'multipart/form-data',
          },
          responseType: 'json',
        }
      );

      const data = response.data;

      if (data.labels && data.labels.length > 0) {
        const detectedLabel = data.labels[0].label;
        const imageBase64 = data.image_base64;

        setLabel1(detectedLabel);
        setImageUri1(`data:image/jpeg;base64,${imageBase64}`);
        console.log(imageUri);
      } else {
        const imageBase64 = data.image_base64;

        setLabel1("Your Teeth is Good");
        setImageUri1(`data:image/jpeg;base64,${imageBase64}`);
        // Handle the case where no label was detected.
      }
    } catch (error) {
      console.error('Error detecting objects:', error);
    } finally {
      //setLoading(false); // Set loading to false when done
    }

    const formData2 = new FormData();
    formData2.append('file', {
      uri: right,
      type: 'image/jpeg',
      name: 'image.jpg',
    });

    try {
      const response = await axios.post(
        'https://dentiso-api2.onrender.com/detect/',
        formData2,
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'multipart/form-data',
          },
          responseType: 'json',
        }
      );

      const data = response.data;

      if (data.labels && data.labels.length > 0) {
        const detectedLabel = data.labels[0].label;
        const imageBase64 = data.image_base64;

        setLabel2(detectedLabel);
        setImageUri2(`data:image/jpeg;base64,${imageBase64}`);
        console.log(imageUri);
      } else {
        const imageBase64 = data.image_base64;

        setLabel2("Your Teeth is Good");
        setImageUri2(`data:image/jpeg;base64,${imageBase64}`);
        // Handle the case where no label was detected.
      }
    } catch (error) {
      console.error('Error detecting objects:', error);
    } finally {
      //setLoading(false); // Set loading to false when done
    }

     const formData3 = new FormData();
    formData3.append('file', {
      uri: down,
      type: 'image/jpeg',
      name: 'image.jpg',
    });

    try {
      const response = await axios.post(
        'https://dentiso-api2.onrender.com/detect/',
        formData3,
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'multipart/form-data',
          },
          responseType: 'json',
        }
      );

      const data = response.data;

      if (data.labels && data.labels.length > 0) {
        const detectedLabel = data.labels[0].label;
        const imageBase64 = data.image_base64;

        setLabel3(detectedLabel);
        setImageUri3(`data:image/jpeg;base64,${imageBase64}`);
        console.log(imageUri);
      } else {
        const imageBase64 = data.image_base64;

        setLabel3("Your Teeth is Good");
        setImageUri3(`data:image/jpeg;base64,${imageBase64}`);
        // Handle the case where no label was detected.
      }
    } catch (error) {
      console.error('Error detecting objects:', error);
    } finally {
      setLoading(false); 
    }
  };


//     const storage = getStorage();

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


  

  return (
    <View style={styles.container}>
      
      {loading ? ( 
        // Show ActivityIndicator while loading
       <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
         <ActivityIndicator size="large" color={Colors.primary} style={styles.loader} />
         <Text >Kindly Please wait your Result is Loading....</Text>
       </View>
      ) : (

        
        <View>
          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
          <View>
          <Text
        style={{ fontSize: 22, fontWeight: 'bold', color: 'black', margin: 5 }}
      >
        Results
      </Text>
          <Text style={{ fontSize: 15, marginLeft: 5, marginBottom: 5 }}>
            {gendate}
          </Text>
          </View>

          <TouchableOpacity onPress={printToFile}>
          <View style={{width:110,height:35,backgroundColor:'blue',borderRadius:5,justifyContent:'center',marginTop:10}}>
            <Text style={{fontSize:13,fontWeight:'bold',color:'white',textAlign:'center',}}>Generate Report</Text>
          </View>
          </TouchableOpacity>
          </View>

          <ScrollView  horizontal style={{paddingRight:20}}  pagingEnabled={true}>




<View
            style={{
              //width: '100%',
              height: 300,
              borderRadius: 10,
              //backgroundColor: 'black',
              marginTop: 5,
              flexDirection:'row', 
              
            }}
          >
<Image
              source={{ uri: imageUri }}
              style={{ width: 380, height: 300, borderRadius: 10 ,marginRight: 10,}}
            />
<Image
              source={{ uri: imageUri1 }}
              style={{ width: 380, height: 300, borderRadius: 10,marginRight: 5, }}
            /> 

<Image
              source={{ uri: imageUri2 }}
              style={{ width: 380, height: 300, borderRadius: 10,marginRight: 5, }}
            />

<Image
              source={{ uri: imageUri3 }}
              style={{ width: 380, height: 300, borderRadius: 10,marginRight: 5, }}
            />




            
          </View>

</ScrollView>


     
                      

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={true}
           pagingEnabled={true}
           overScrollMode="never"
          >

<View
  style={{
    width: 380,
    height: 400,
    borderRadius: 10,
    backgroundColor: Colors.primary, // Use your color here
    marginTop: 30,
    padding: 15,
    elevation: 30,
    shadowColor: Colors.primary, // Use your color here
    marginRight: 10,
    //marginLeft:5
  }}
>
  <Text
    style={{
      fontSize: 22,
      fontWeight: 'bold',
      color: 'white',
      margin: 5,
    }}
  >
           Overall Results
</Text>





  <View
    style={{
      width: "100%",
      height: 95,
      backgroundColor: "white",
      borderRadius: 10,
      marginTop: 15,
      padding: 15,
      flexDirection: "row",
    }}
  >
    <View>
      <View
        style={{
          width: 60,
          height: 60,
          backgroundColor: Colors.lightblue,
          borderRadius: 16,
          justifyContent: "center",
          alignItems: "center",
          
        }}
      >
        {/* <Image
            source={require("../assets/tick.png")}
            style={{ width: 25, height: 25 }}
          /> */}
          <Text style={{fontSize:30,fontWeight:"bold"}}>{countdisease()}</Text>
      </View>
    </View>

    <View style={{ margin: 10 }}>
      <Text style={{ fontSize: 17, fontWeight: "bold" }}>
        Total Issues Found
      </Text>
      <Text style={{ color: Colors.gray }}>
      Detected By our AI
      </Text>
    </View>


    
  </View>
  <Text style={{fontSize: 20 ,fontWeight: "bold", color: "white",marginTop:15,marginLeft:5}}>Issues Addressed</Text>

  <View style={{flexDirection:"row",marginTop:20,flexWrap:'wrap'}}>

  <View style={{width:100,height:30,backgroundColor:"#87bdf4",borderRadius:20,justifyContent:"center",alignItems:"center",marginRight:10,marginBottom:10}}>

    <Text style={{color:"white"}}>Stains</Text>

  </View>

  <View style={{width:100,height:30,backgroundColor:"#87bdf4",borderRadius:20,justifyContent:"center",alignItems:"center",marginRight:10,marginBottom:10}}>

        <Text style={{color:"white"}}>Gingivities</Text>

  </View>

  <View style={{width:100,height:30,backgroundColor:"#87bdf4",borderRadius:20,justifyContent:"center",alignItems:"center",marginRight:10,marginBottom:10}}>

  <Text style={{color:"white"}}>Teeth Caries</Text>

  </View>

  <View style={{width:100,height:30,backgroundColor:"#87bdf4",borderRadius:20,justifyContent:"center",alignItems:"center",marginRight:10,marginBottom:10}}>

  <Text style={{color:"white"}}>Discoloration</Text>

  </View>

  <View style={{width:100,height:30,backgroundColor:"#87bdf4",borderRadius:20,justifyContent:"center",alignItems:"center",marginRight:10,marginBottom:10}}>

  <Text style={{color:"white"}}>Ulcer</Text>

  </View> 

  <View style={{width:100,height:30,backgroundColor:"#87bdf4",borderRadius:20,justifyContent:"center",alignItems:"center",marginRight:10,marginBottom:10}}>

<Text style={{color:"white"}}>Plaque</Text>

  </View>

  {/* <Text>{label}</Text>

  <Text>{label1}</Text>
  <Text>{label2}</Text>
  <Text>{label3}</Text>
  <Text>{label1}</Text> */}
  
  


  </View>

</View>


<ResultBox disease={label}/>
<ResultBox disease={label1}/>
<ResultBox disease={label2}/>
<ResultBox disease={label3}/>
           
           

           
         







          </ScrollView>
      


        </View>
      )}
    </View>
  );
};

export default Results;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 45,
    width: '100%',
    padding: 20,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});




















