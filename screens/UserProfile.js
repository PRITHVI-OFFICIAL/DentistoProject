import React,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import RadioForm from 'react-native-simple-radio-button';

export default function UserProfile() {
  const [mail,setmail] = useState('');
  const [phone,setphone] = useState('');
  const [pass,setpass] = useState('');
  const [name,setname] = useState("Logeshwar SB")
  const [edit,setedit] = useState(false);
  const [blood,setblood] = useState('')
  const[behave,setbehave] = useState('')
  const [showtext,setshowtext] = useState('');

  var radio_props = [
    {label: 'Smoker', value: 0 },
    {label: 'Non-Smoker', value: 1 },
    {label: 'Others', value: 2 }
  ];
  function findLabelByValue(value) {
    for (var i = 0; i < radio_props.length; i++) {
      if(radio_props[i].value==2){
        return behave;
      }
      if (radio_props[i].value === value) {
        return radio_props[i].label;
      }
    }
    return null;
  }

  //console.log(findLabelByValue(behave)); 
  // <TouchableOpacity onPress={()=>setedit(!edit)} style={{marginLeft:55,backgroundColor:'#53A1EF',width:50,height:25,borderRadius:10}}>
  //         <Text style={{textAlign:'center',color:'white',fontWeight:'bold',marginTop:2}}>{edit ? 'Save' : 'Edit'}</Text>
  //         </TouchableOpacity>

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.navbar}>
        <Image source={{uri:'https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm328-366-tong-08_1.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=6a37204762fdd64612ec2ca289977b5e'}} style={styles.image} />
      </View>

      
      <View style={{padding:20}}>
      <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:30}} >
     <Text style={styles.usertext}>User Information</Text>
      <TouchableOpacity onPress={()=>setedit(!edit)} >
        <View style={{backgroundColor:'#53A1EF',width:50,height:25,borderRadius:10}}>
        <Text style={{textAlign:'center',color:'white',fontWeight:'bold',marginTop:2}}>{edit ? 'Save' : 'Edit'}</Text>
        </View>
          
          </TouchableOpacity>
     
      
      </View>
      <View style={{}}>
        <View>
        <View style={styles.usercontainer}> 
            <View style={{flexDirection:'row'}}>
              <Text style={{marginTop:10}}>Name :</Text>

              <View style={[styles.loginbox,{marginLeft:10}]}>
          <TextInput
           placeholder='Enter your Blood Group'
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
           value="logeshwarsec@gmail.com"
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
           value="8667075377"
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
            placeholder="Edit your Name"
            autoCapitalize="none"
            value="20"
            inputMode='numeric'
            editable={edit}
            style={{marginLeft:3}}
          
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
           value="male"
           editable={edit}
           style={{marginLeft:3}}
          
           />
      </View>
            
            </View> 
        </View>
    </View>
    {/* <View style={[styles.loginbox,{marginTop:20,}]}>
          <TextInput
           placeholder='Enter your Blood Group'
           style={{}}
           onChange={(value)=>setblood(value)}
           />
      </View> */}

<View style={{flexDirection:'row',marginTop:20}}>
              <Text style={{marginTop:10}}>Blood Group:</Text>

              <View style={[styles.loginbox1,{marginLeft:5}]}>
          <TextInput
           placeholder="Edit your Blood Group"
           autoCapitalize="none"
           value="male"
           editable={edit}
           style={{marginLeft:3}}
          
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
            
            onChangeText={(value) => setbehave(value)} 
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
