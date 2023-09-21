import React ,{useState,useEffect}from 'react';
import { Modal, View, Image, Button,Text,StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';
import Colors from '../Colors';
import Ionicons from '@expo/vector-icons/Ionicons';

const Results = ({route}) => {

    const {front} = route.params;
    const [result, setResult] = useState(null);
    const [box, setbox] = useState(null);

    console.log(front);
    

    const handleUpload = async () => {
       
        const formData = new FormData();
        formData.append('file', {
          uri: front,
          type: 'image/jpeg',
          name: 'image.jpg',
        });
    
        try {
          const response = await axios.post('http://172.16.4.23:8000/detect/', formData, {
            headers: {
                'Accept': 'application/json',
              'Content-Type': 'multipart/form-data',
            },
           //responseType: 'blob', 
          });

          //console.log(response.data,'--,');
    
          // const imageBlob = new Blob([response.data], { type: 'image/jpeg' });
          // const imageUrl = URL.createObjectURL(imageBlob);
          // console.log(imageUrl)
          // setResult(imageUrl);
          //console.log(response,'--->');
          //console.log(response,'&*&&*^&^*&^&*');
          setResult(`data:image/jpeg;base64,${response.data.uri}`);
          setbox(response.data.data);
        } catch (error) {
          console.error('Error detecting objects:', error);
        }
      };

      console.log(box);


    // const handleUpload= async () => {
    //       const formData = new FormData();
    //     formData.append('file', {
    //       uri: front,
    //       type: 'image/jpeg',
    //       name: 'image.jpg',
    //     });
    //   try {
    //     const response = await axios.post('http://192.168.0.102:8000/detect/', formData, {
    //       headers: {
    //         'Content-Type': 'multipart/form-data',
    //       },
    //       responseType: 'blob', // To receive binary data
    //     });
  
    //     const imageBlob = new Blob([response.data], { type: 'image/jpeg' });
    //     const imageUrl = URL.createObjectURL(imageBlob);
    //     setResult(imageUrl);
    //   } catch (error) {
    //     console.error('Error detecting objects:', error);
    //   }
    // };
      //console.log(result,'99999');
 
    
 
  return (
    <View style={styles.container}>
      <Text
        style={{ fontSize: 22, fontWeight: "bold", color: "black", margin: 5 }}
      >
        Results
      </Text>

      <View
        style={{
          width: "100%",
          height: 300,
          borderRadius: 10,
          backgroundColor: "black",
          marginTop: 5,
        }}
      ></View>

      <ScrollView  horizontal   
      showsHorizontalScrollIndicator={true}
      pagingEnabled={true} >


     <View style={{flexDirection:"row"}}>


     <View
        style={{
          width: 380,
          height: 420,
          borderRadius: 10,
          backgroundColor: Colors.primary,
          marginTop: 30,
          padding: 15,
          elevation:30, 
          shadowColor:Colors.primary,
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
   
  );
};

export default Results;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop:45,
    width:"100%", 
    padding:20

  
  },
  
});

{/* <Button title="Upload and Detect" onPress={handleUpload} />
{result && <Image source={{ uri: result }} style={{ width: 300, height: 200 }} />} */}
