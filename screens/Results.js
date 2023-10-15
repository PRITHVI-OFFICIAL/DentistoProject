import React, { useState, useEffect } from 'react';
import { View, Image, Text, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import axios from 'axios';
import Colors from '../Colors';

const Results = ({ route }) => {
  const { front } = route.params;
  const [label, setLabel] = useState('');
  const [imageUri, setImageUri] = useState('');
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    handleUpload();
  }, []);

  const handleUpload = async () => {
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
      setLoading(false); // Set loading to false when done
    }
  };

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
          <Text
        style={{ fontSize: 22, fontWeight: 'bold', color: 'black', margin: 5 }}
      >
        Results
      </Text>
          <Text style={{ fontSize: 15, marginLeft: 5, marginBottom: 5 }}>
            October 11, 2023
          </Text>
          <View
            style={{
              width: '100%',
              height: 300,
              borderRadius: 10,
              backgroundColor: 'black',
              marginTop: 5,
            }}
          >
            <Image
              source={{ uri: imageUri }}
              style={{ width: '100%', height: '100%', borderRadius: 10 }}
            />
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={true}
            pagingEnabled={true}
          >
           
           <View style={{ flexDirection: 'row' }}>
<View
  style={{
    width: 380,
    height: 420,
    borderRadius: 10,
    backgroundColor: Colors.primary, // Use your color here
    marginTop: 30,
    padding: 15,
    elevation: 30,
    shadowColor: Colors.primary, // Use your color here
    marginRight: 10,
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
          <Text style={{fontSize:30,fontWeight:"bold"}}>1</Text>
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
  <Text style={{fontSize: 20 ,fontWeight: "bold", color: "white",marginTop:25,marginLeft:5}}>Issues Addressed</Text>

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

  <Text style={{color:"white"}}>Teeth Caries</Text>

  </View>

  <View style={{width:100,height:30,backgroundColor:"#87bdf4",borderRadius:20,justifyContent:"center",alignItems:"center",marginRight:10,marginBottom:10}}>

  <Text style={{color:"white"}}>Maloculasion</Text>

  </View>

  <Text>{label}</Text>
  


  </View>

</View>


<View
style={{
width: 375,
height: 420,
borderRadius: 10,
backgroundColor: Colors.primary,
marginTop: 30,
padding: 15,
elevation:30, 
shadowColor:Colors.primary,
//marginLeft:130
marginRight:10
}}
>
<Text
style={{
  fontSize: 22,
  fontWeight: "bold",
  color: "white",
  margin: 5,
}}
>
Results
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
        <Image
            source={require("../assets/tick.png")}
            style={{ width: 25, height: 25 }}
          />
          {/* <Text style={{fontSize:30,fontWeight:"bold"}}>1</Text> */}
      </View>
    </View>

    <View style={{ margin: 10 }}>
      <Text style={{ fontSize: 17, fontWeight: "bold" }}>
        Caries Detected
      </Text>
      <Text style={{ color: Colors.gray }}>
      Detected By our AI
      </Text>
    </View>



    
  </View>
 
 <ScrollView >

 <View>

<Text style={{fontSize: 18 ,fontWeight: "bold", color: "white",marginTop:25}}>What are Caries ?</Text>


<Text style={{textAlign:"auto",color:"white",marginTop:10}}>Cavities are permanently damaged areas in the hard surface of your teeth that develop into tiny openings or holes.</Text>
</View>

<View>

<Text style={{fontSize: 18 ,fontWeight: "bold", color: "white",marginTop:10}}>Causes and Effects</Text>
<Text style={{textAlign:"auto",color:"white",marginTop:10}}>Cavities, also called tooth decay or caries, are caused by a combination of factors, including bacteria in your mouth, frequent snacking, sipping sugary drinks and not cleaning your teeth well</Text>
</View>
 </ScrollView>

</View>



<View
style={{
width: 375,
height: 420,
borderRadius: 10,
backgroundColor: Colors.primary,
marginTop: 30,
padding: 15,
elevation:30, 
shadowColor:Colors.primary,
//marginLeft:130
}}
>
<Text
style={{
  fontSize: 22,
  fontWeight: "bold",
  color: "white",
  margin: 5,
}}
>
Results
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
      marginRight:10
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
        <Image
            source={require("../assets/tick.png")}
            style={{ width: 25, height: 25 }}
          />
          {/* <Text style={{fontSize:30,fontWeight:"bold"}}>1</Text> */}
      </View>
    </View>

    <View style={{ margin: 10 }}>
      <Text style={{ fontSize: 17, fontWeight: "bold" }}>
        Caries Detected
      </Text>
      <Text style={{ color: Colors.gray }}>
      Detected By our AI
      </Text>
    </View>



    
  </View>
 
 <ScrollView >

 <View>

<Text style={{fontSize: 18 ,fontWeight: "bold", color: "white",marginTop:25}}>What are Caries ?</Text>


<Text style={{textAlign:"auto",color:"white",marginTop:10}}>Cavities are permanently damaged areas in the hard surface of your teeth that develop into tiny openings or holes.</Text>
</View>

<View>

<Text style={{fontSize: 18 ,fontWeight: "bold", color: "white",marginTop:10}}>Causes and Effects</Text>
<Text style={{textAlign:"auto",color:"white",marginTop:10}}>Cavities, also called tooth decay or caries, are caused by a combination of factors, including bacteria in your mouth, frequent snacking, sipping sugary drinks and not cleaning your teeth well</Text>
</View>
 </ScrollView>

</View>
</View>

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




















