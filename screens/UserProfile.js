import React, { Component,useLayoutEffect, useState,useEffect } from 'react';
import {StyleSheet,Text,View,Image,Button,TouchableOpacity,TextInput} from 'react-native';
import RadioForm from 'react-native-simple-radio-button';
import { useNavigation } from '@react-navigation/native';
import { getAuth,signOut} from "firebase/auth";
import { FontAwesome } from '@expo/vector-icons';
import colors from '../Colors';
import { auth, database } from '../config/firebase'
import {collection,addDoc,orderBy,query,onSnapshot,setDoc,doc,getDoc,where, updateDoc} from 'firebase/firestore';


export default function UserProfile() {
  const [details,setdetails]=useState('');
  const [mail,setmail] = useState('');
  const [phone,setphone] = useState('');
  const [pass,setpass] = useState('');
  const [name,setname] = useState("Logeshwar SB");
  const [edit,setedit] = useState(false);
  const [blood,setblood] = useState(''); 
  const [habits,sethabits]=useState('');
  const [age,setage]=useState("");
  const [gender,setgender]=useState(0);
  const[behave,setbehave] = useState('')
  const [showtext,setshowtext] = useState('');

  var radio_props = [
    {label: 'Smoker', value: 0 },
    {label: 'Non-Smoker', value: 1 },
    {label: 'Others', value: 2 }
  ];
  const currentmail=getAuth()?.currentUser.email;

  useLayoutEffect(() => {
    const collectionRef = collection(database, 'Users');
    const q = query(collectionRef, where("mail", "==", currentmail));
    const unsubscribe = onSnapshot(q, querySnapshot => {
      const userDetails = querySnapshot.docs.map(doc => ({
        mail: doc.data().mail,
        phone: doc.data().mobile,
        name: doc.data().name,
        age: doc.data().age,
        habits: doc.data().habits,
        blood: doc.data().blood,
        gender: doc.data().gender
      }));
      setdetails(userDetails);
      // Move the state setting logic inside the onSnapshot callback
      if (userDetails.length > 0) {
        setname(userDetails[0].name);
        setmail(userDetails[0].mail);
        setphone(userDetails[0].phone);
        sethabits(userDetails[0].habits);
        setage(userDetails[0].age);
        setgender(userDetails[0].gender);
        setblood(userDetails[0].blood);
      }
    });
  
    return unsubscribe;
  }, []);
// console.log(details[0].name,'----');
//console.log(name,"0000");
//console.log(details,"---<");
console.log(name);
console.log(mail);
console.log(phone);




function editsubmit() {
  useEffect(() => {
    const collectionRef = collection(database, 'Users');

    setDoc(doc(collectionRef, currentmail.split('@')[0]), {
      mail: mail,
      phone: phone,
      name: name,
      age: age,
      habits: habits,
      blood: blood,
      gender: gender,
    });

    console.log('Data Uploaded Successfully');
  }, []); // Empty dependency array means this effect runs once after the initial render
}


  return (
    <View style={styles.container}>
      
      <View style={styles.navbar}>
        <Image source={{uri:'https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm328-366-tong-08_1.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=6a37204762fdd64612ec2ca289977b5e'}} style={styles.image} />
      </View>

      
      <View style={{padding:20}}>
      <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:30}} >
     <Text style={styles.usertext}>User Information</Text>
     {  !edit && 
        (<TouchableOpacity onPress={()=>setedit(!edit)} >
        <View style={{backgroundColor:'#53A1EF',width:50,height:25,borderRadius:10}}>
        <Text style={{textAlign:'center',color:'white',fontWeight:'bold',marginTop:2}}>{'Edit'}</Text>
        </View>   
        </TouchableOpacity>)
    }

    {edit && 
     (<TouchableOpacity onPress={editsubmit} >
     <View style={{backgroundColor:'#53A1EF',width:50,height:25,borderRadius:10}}>
     <Text style={{textAlign:'center',color:'white',fontWeight:'bold',marginTop:2}}>{'Save'}</Text>
     </View>
       
   </TouchableOpacity>)

    }
     
      
      </View>
      <View style={{}}>
        <View>
        <View style={styles.usercontainer}> 
            <View style={{flexDirection:'row'}}>
              <Text style={{marginTop:10}}>Name :</Text>

              <View style={[styles.loginbox,{marginLeft:10}]}>
          <TextInput
           placeholder='Enter your Name'
           autoCapitalize="none"
           value={name}
           editable={edit}
           style={{marginLeft:3}}
           onChangeText={(value)=>setname(value)}
          
           />
      </View>
            
            </View>
        </View>
        <View style={styles.usercontainer}> 
        {/* <View style={{flexDirection:'row'}}>
              <Text style={{marginTop:4}}>Email :</Text>
              <TextInput 
              placeholder="Edit your Name"
              autoCapitalize="none"
              value="logeshwarsec@gmail.com"
              editable={edit}
              style={{marginLeft:3}}
              />
            </View> */}
             <View style={{flexDirection:'row'}}>
              <Text style={{marginTop:10}}>Email :</Text>

              <View style={[styles.loginbox,{marginLeft:10}]}>
          <TextInput
           placeholder='Enter your Email'
           autoCapitalize="none"
           value={mail}
           editable={edit}
           style={{marginLeft:3}}
           onChangeText={(value)=>setmail(value)}
          
           />
      </View>
            
            </View>
        </View>
        </View>
        
        </View>
        
      
      <View style={styles.personalcontainer}>
        <Text style={{ fontWeight: 'bold',fontSize:20}}>Personal Information</Text>
      </View>
      <View style={styles.usercontainer}>
      {/* <View style={{flexDirection:'row'}}>
              <Text style={{marginTop:4}}>Mobile :</Text>
              <TextInput 
              placeholder="Edit your Name"
              autoCapitalize="none"
              value="8667075377"
              inputMode='numeric'
              editable={edit}
              style={{marginLeft:3}}
              />
            </View> */}

<View style={{flexDirection:'row',marginTop:10}}>
              <Text style={{marginTop:10}}>Mobile :</Text>

              <View style={[styles.loginbox,{marginLeft:10}]}>
          <TextInput
           placeholder='Enter your Mobile'
           autoCapitalize="none"
           value={phone}
           editable={edit}
           style={{marginLeft:3}}
           onChangeText={(value)=>setphone(value)}
          
           />
      </View>
            
            </View>
      </View>
     <View style={{flexDirection:'row',marginTop:10}}>
      <View> 
      {/* <View style={{flexDirection:'row'}}>
              <Text style={{marginTop:4}}>Age :</Text>
              <TextInput 
              placeholder="Edit your Name"
              autoCapitalize="none"
              value="20"
              inputMode='numeric'
              editable={edit}
              style={{marginLeft:3}}
              />
            </View> */}

          <View style={{flexDirection:'row',marginTop:10}}>
              <Text style={{marginTop:10}}>Age :</Text>

              <View style={[styles.loginbox1,{marginLeft:25}]}>
          <TextInput
            placeholder="Age"
            autoCapitalize="none"
            value={age}
            inputMode='numeric'
            editable={edit}
            style={{marginLeft:3}}
            onChangeText={(value)=>setage(value)}
          
           />
      </View>
            
            </View> 
        </View>
      <View > 
      {/* <View style={{flexDirection:'row'}}>
              <Text style={{marginTop:4}}>Gender :</Text>
              <TextInput 
              placeholder="Edit your Male"
              autoCapitalize="none"
              value="male"
              editable={edit}
              style={{marginLeft:3}}
              />
            </View> */}

<View style={{flexDirection:'row',marginTop:10}}>
              <Text style={{marginTop:10}}>Gender :</Text>

              <View style={[styles.loginbox1,{marginLeft:5}]}>
          <TextInput
           placeholder="Edit your Gender"
           autoCapitalize="none"
           value={gender}
           editable={edit}
           style={{marginLeft:3}}
           onChangeText={(value)=>setgender(value)}
          
           />
      </View>
            
            </View> 
        </View>
    </View>

<View style={{flexDirection:'row',marginTop:20}}>
              <Text style={{marginTop:10}}>Blood Group:</Text>

              <View style={[styles.loginbox1,{marginLeft:5}]}>
          <TextInput
           placeholder="Edit your Blood Group"
           autoCapitalize="none"
           value={blood}
           editable={edit}
           style={{marginLeft:3}}
           onChangeText={(value)=>setblood(value)}
           />
      </View>
            
            </View> 
      <Text style={{fontSize:20,marginTop:20,fontWeight:'bold'}}>Personal Habits</Text>
      <View style={{marginTop:20}}>
      <RadioForm
          radio_props={radio_props}
          onPress={(value) => {
            setbehave(value);
            if (value === 2) {
              setshowtext(true); 
            } else {
              setshowtext(false); 
            }
          }}
          labelStyle={styles.radioLabel}
          formHorizontal={true}
          animation={true}
          buttonSize={10}
        />
      </View>
      {showtext && (
        <View style={[styles.loginbox, { marginTop: 20 }]}>
          <TextInput
            placeholder="Please Specify Other Habits"
            
            onChangeText={(value) => sethabits(value)} 
          />
        </View>
      )}
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  navbar: {
    backgroundColor: '#53A1EF',
    
    height: '23%',
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  image: {
    alignSelf: 'center',
    marginTop:170,
    width:100,
    height:100, 
    marginBottom:10
  },
  usertext: {
    //alignContent:'flex-start',
    //marginTop: '10%',
    fontSize: 20,
    //marginLeft:20,
    fontWeight: 'bold',
  },
  usercontainer: {
    //backgroundColor: 'grey',
    justifyContent: 'space-evenly',  
    alignItems: 'flex-start',
    marginTop:20,
    
  },
  personalcontainer :{
    backgroundColor: 'white',
    justifyContent: 'space-evenly',  
    alignItems: 'flex-start',
    marginTop:30,
    //marginLeft:20,
  },
  loginbox: {
    width: '70%', 
    backgroundColor: '#EFEFEF',
    height: 40,  
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  loginbox1: {
    width: '40%', 
    backgroundColor: '#EFEFEF',
    height: 40,  
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  radioLabel : {
    paddingRight:20,
  }
});
