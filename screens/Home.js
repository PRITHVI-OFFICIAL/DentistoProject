import React from 'react';
import { Modal, View, Image, Button,Text,StyleSheet, TouchableOpacity , Dimensions } from 'react-native';
import Colors from '../Colors';
import { ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';


const { width } = Dimensions.get('window');


const Home = () => {
  const navigation = useNavigation();
  
  return (
    <ScrollView style={styles.container}>
      <View
      style={{
        height: 113,
        backgroundColor: Colors.primary,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        paddingTop: 50
      }}
    >
      <View style={{ justifyContent: 'center' }}>
        <Text
          style={{
            fontSize: 16,
            color: 'white',
            fontWeight: '300',
          }}
        >
          Hello!
        </Text>
        <Text
          style={{
            fontSize: 26,
            color: 'white',
            fontWeight: '500',
          }}
        >
          Prithvi PK
        </Text>
      </View>

      <View>
        <Image
          source={require('../assets/teethHome.png')}
          style={{ width: 80, height: 80 }}
        />
      </View>
    </View>

        {/* <Text style={styles.heading}>Products</Text> */}

        <View>
        <ScrollView
      horizontal
      pagingEnabled={true}
    >
      <View
        style={{
          height: 200,
          backgroundColor: 'black',
          borderRadius: 15,
          width: width - 40, // Adjust the width according to the screen size
          margin: 20,
        }}
      >
        <Image
          source={{
            uri:
              'https://media.istockphoto.com/id/636069054/vector/electric-toothbrush-ads.jpg?s=612x612&w=0&k=20&c=gJE2IvrvDiJcmsCaZmG1WAQbUw0UZO3OkWjVBrdNsIw=',
          }}
          style={{ width: '100%', height: '100%', borderRadius: 15 }}
        />
      </View>

      <View
        style={{
          height: 200,
          backgroundColor: 'yellow',
          borderRadius: 15,
          width: width - 40, // Adjust the width according to the screen size
          margin: 20,
        }}
      >
        <Image
          source={{
            uri:
              'https://img.freepik.com/free-vector/realistic-fresh-toothpaste-poster-ad_52683-11904.jpg?w=996&t=st=1692805015~exp=1692805615~hmac=c4969b8f910c4efdab2399eb6c2128c83abdbb1e28b18b706ff9da5c440952a1',
          }}
          style={{ width: '100%', height: '100%', borderRadius: 15 }}
        />
      </View>

      <View
        style={{
          height: 200,
          backgroundColor: 'yellow',
          borderRadius: 15,
          width: width - 40, // Adjust the width according to the screen size
          margin: 20,
        }}
      >
        <Image
          source={{
            uri:
              'https://img.freepik.com/premium-photo/composition-with-tools-dental-care-blue-surface_185193-15015.jpg?w=996',
          }}
          style={{ width: '100%', height: '100%', borderRadius: 15 }}
        />
      </View>
    </ScrollView>
        </View>

        {/* <View>
        <ScrollView horizontal pagingEnabled={true} style={{padding:5,margin:5}} >

<View style={{marginTop:5,height:200,backgroundColor:"red",margin:10,borderRadius:10,backgroundColor:Colors.primary,width:385}}>

<Image
      source={{uri:'https://img.freepik.com/free-photo/vials-medical-tools-arrangement-flat-lay_23-2149341598.jpg?w=996&t=st=1692805387~exp=1692805987~hmac=ca037805f07fa6df9eefebfa86b3494f4c477e68b03c0331644452352b5a2949'}}
      style={{ width: "100%", height: "100%",borderRadius:10}}
     />


</View>


<View style={{marginTop:10,height:200,backgroundColor:"red",margin:10,borderRadius:10,backgroundColor:Colors.primary,width:380,marginLeft:30}}>

<Image
      source={{uri:'https://img.freepik.com/free-vector/realistic-fresh-toothpaste-poster-ad_52683-11904.jpg?w=996&t=st=1692805015~exp=1692805615~hmac=c4969b8f910c4efdab2399eb6c2128c83abdbb1e28b18b706ff9da5c440952a1'}}
      style={{ width: "100%", height: "100%",borderRadius:10}}
     />
</View>

<View style={{marginTop:10,height:200,backgroundColor:"red",margin:10,borderRadius:10,backgroundColor:Colors.primary,width:400,}}>
<Image
      source={{uri:'https://img.freepik.com/premium-photo/composition-with-tools-dental-care-blue-surface_185193-15015.jpg?w=996'}}
      style={{ width: "100%", height: "100%",borderRadius:10}}
     />

</View>
      </ScrollView>
        </View> */}

       <View style={{margin:5,flex:1,padding:10,bottom:10}}>

     



       <Text style={{fontSize:20,fontWeight:"500",marginLeft:5,marginBottom:10}}>Features</Text>

       <View style={{height:130,backgroundColor:Colors.primary,borderRadius:10,flexDirection:"row",padding:10,elevation:30,shadowColor:Colors.primary,justifyContent:"space-around"}}>


        {/* <View style={{height:"100%",backgroundColor:Colors.primary,width:90,justifyContent:"center",alignItems:"center",}}>

          
       <View style={{width:60,height:60,backgroundColor:Colors.lightblue,borderRadius:16,justifyContent:"center",alignItems:"center"}}>

        <Image
            source={require('../assets/checkup.png')}
            style={{ width: 25, height: 25 ,}}
            /> 
        </View>

      <Text style={{marginTop:10,fontSize:12,color:"white"}}>Check Up</Text>
    </View> */}

    <TouchableOpacity>
    <View style={{height:"100%",backgroundColor:Colors.primary,width:90,justifyContent:"center",alignItems:"center",}}>

          
<View style={{width:60,height:60,backgroundColor:Colors.lightblue,borderRadius:16,justifyContent:"center",alignItems:"center"}}>

     <Image
     source={require('../assets/challenges.png')}
     style={{ width: 25, height: 25 ,}}
     /> 
 </View>

<Text style={{marginTop:10,fontSize:12,color:"white"}}>Challenges</Text>
</View>
    </TouchableOpacity>

    <TouchableOpacity onPress={()=> navigation.navigate('ScanTeeth')}>

    <View style={{height:"100%",backgroundColor:Colors.primary,width:90,justifyContent:"center",alignItems:"center",}}>

          
       <View style={{width:60,height:60,backgroundColor:Colors.lightblue,borderRadius:16,justifyContent:"center",alignItems:"center"}}>

            <Image
            source={require('../assets/clean.png')}
            style={{ width: 25, height: 25 ,}}
            /> 

     
        </View>

      <Text style={{marginTop:10,fontSize:12,color:"white"}}>Scan Teeth</Text>
    </View>
    </TouchableOpacity>


   <TouchableOpacity>
   <View style={{height:"100%",backgroundColor:Colors.primary,width:90,justifyContent:"center",alignItems:"center",}}>

          
<View style={{width:60,height:60,backgroundColor:Colors.lightblue,borderRadius:16,justifyContent:"center",alignItems:"center"}}>

     <Image
     source={require('../assets/appointment.png')}
     style={{ width: 25, height: 25 ,}}
     /> 
 </View>

<Text style={{marginTop:10,fontSize:12,color:"white",textAlign:"center"}}>Appointment</Text>
</View>
   </TouchableOpacity>


       </View> 
       <Text style={{fontSize:20,fontWeight:"500",marginLeft:5,marginTop:15,marginBottom:10}}>Discover</Text>

       <ScrollView horizontal pagingEnabled={true}  >
        <View>
        <View style={{width:180,height:130,backgroundColor:Colors.primary,margin:5,borderRadius:10,marginRight:15}}>
          <Image
          source={{uri:"https://lh3.googleusercontent.com/fife/AKsag4PlRm2875zPbQ0CDzYkrJiblEmVSyCaf3PdeNEzQ30TftHWEvkzdkZc016qcHCs9lq5iQMmFcwE0znr8NWF8XnJYpAzQUMWFpzAlfTc2M-gbbYyeqEya9NZjK8EUucpFb4ATKuyq1XCCZJJNSdJIaE99KhAhinO-RNIu6yeOZhy0DlrQspQJexoCvrT65nNx9F6uTShgYBmxW86gY35j3BF-EC1HeYhL1_sNVrTGGz8vSvsFUvB9Hf0TDqOY7HmkS4QKNU1wMRvF_9oI46pRqa7YDGXVydC7Gch5y7G9W--xXSnPEpSdv6Gwurb6N-GHlWR4fAlNuRj7xhPy-IotToiIQxHm59vuWfqIphiItyFcc31Ay1LDAI2lboXO1sPIcZQFcNvxgu1i9GJIyZ5xhMmBk6CUs9jxSnsr2n_U-NJQQKkJHqxVuDpzeGyfwGAyjUynzBbvvXJ76ple9JAZKZ_CITf-HFHFIzMXGPp8CSk6pQkb0t-Yt-rXw76Hhb_XlVo5lKed8ZhJcClt61PHYng55H_ZlnYbHI9rr3cvJGnfHO2wHdfofioXZrBtZ2E2jqkts1UQ06xq0MYVmSqm0lZth3fxiCH8MC7zlZZInyW7FHw6rM-Cq-kNBLZGG8pRJlVpsedyCGoFfohLb32IvD-sJpHE03xa5J-ioJPgFgMJM8R39AkjQwY8SI-i9T0avlZSfKfc5U8SfWTFq35gVoZgzp7FBa-jZHSqGknUDURtp0A9gHSrtGOcq2IOYQl-JnB73IjQr5vDUxKCF9yDeKXB2qleR5WDsP-FHs-6j5IzN4Cl4dhroPTSm3Ub0xHEL5NhlFPJke8RrDfojw0cHsFMWyiywFPhJLa70bFAET895SmQVI59hRhuS4Sa3QiI4Hw96R3U-JgGtGn-bb4S6R0mm-npHW0gt84cj1QQOvVbH7v29cTwz2iHBVYYLdxrYO6piFzXuWmSu9m7Zrp0WpvZQREsZL1oyyDr0-SIjmPiYKtSIIYoRCjUT-9uTWrfTmhutNIej-3shQJKfWSYN-QBJqjpnOrbXztKaDi5oBw00DJmI8-EEuEqk-izWOOZL0kT__ZHKTxq4nvJHmntsz0oCJVON98e3g0oeCiGvB6FWA6nR9Djg4gmeDqSdB3O57kZraruv-L9LdHjKjb8FSmIsa6Cv2YpyYp2RJpdhdtJoHIr4EpDDZt1sWHTUVhk8YWOnhcWZTiLDoI4lE_FWbxGJGWNNxqeP7BO79Cw9-92TUyR4BsxHDVqISU055tOve1hrJH3DG5y53CojV4CHCSWEZVpcQESujzj1ymOZIQgcvjWzWlEeitTcYsNQ9ZdZn7H7SZA7sal2pXS8_6nVMulSMASOOIf06afIVFbKEhyrYr78lnzTbjS4MBxX7b6ONhPpIfRyh7zOpOwVX0kchn5Qlou0x2I-Q1KFEuP-OGDhmwg-r4vqEoCR435xHOVSH5yaTVMVBSv8C8zlvd7CzITr9AOpGPNcaBaQTQyvDUGxXLB8LHlzGorejVaBqBxvcrMCBBe0c_Jv8btDDGTFi0z0vNpQ_ah7Hx4fTFWr38irx1Wh7O54BiBPUj0xwX81bgOzT_Y6k1fwsVZc4jfDIZmzUMLhfQtLJqkWv7eTY7mrNbVFnCAgAjXUatkV2jkTuv1bCaCFzWQVxVNoY-TTKgQnGR2E9Ig6vyZQ=w1920-h883"}}
          style={{height:"100%",width:"100%",borderRadius:10}}
          />

        </View>
        <Text style={{marginTop:5,fontWeight:"500",marginLeft:10}}>Prevent Dental Caries</Text>
        </View>

        <View>
        <View style={{width:180,height:130,backgroundColor:Colors.primary,margin:5,borderRadius:10,marginRight:15}}>
          <Image
          source={{uri:"https://lh3.googleusercontent.com/fife/AKsag4PTQ06EuaZMRKKIb3Zg61SWShJU9b5hISkr10n2JFUqM8lj0M6PWQdnOB6AtJrqLpt6trLQ9F6QeR8FilzIkAevFIm7nDChWA0m8QbHjkBzsjqHDKt3p4KREHza8c01OF6fuytaritaPhuRWKrjV-ybd4FQ4lYWlZ0yQyxA11R1p2EOHi7yMNtU1SurrcYKULuw2qE-F2yVip1uGQpP-5ih192JWsIhLTW7LJjUYzCHs005UuxKLWnX3fLwC_dHAH78SqZ2SG9Bt1RgZBB8sS_toI1PVfYl_W1_2sCiKJQaj1URN1BHKQUF2Xk__xECb5AS_Y8_GX-tlYjNoJpTLOThpEGco5qxJP8a_hWwRhpy4e7ww36TvhvREc6h3dK9KvsPibFOnOs5LuC8MD1uLzeh4cr1YFtivzRL_8JvWTb2G6JgwCNrDFGAtQtc-mCnnMRVmIeEtdJ6C49wReiujhgRQ0US4C1hwztk2S5cVRPNVht0igoM6uHeDJUfOH601sWugl0ifhpAIg41UU7CyqfPIjprQf-FNfs8C8m4tGxi_CK9DX0ahX15ZeU6biQnC6Xqwcm7jLrkRn-LBn-JdIK00tKGdvortv8lX3v3_a9fLRiv7feOF9TARb4fw9dJHXuZnrLn3-n7vuSVnzQ6xcOXL23XjjDuYx_Ru0rjDw3lYV9WHc0EZVUCK9yeS6S4EOLuxPzhwsUk2bZbHZ7PvJoohioXhEUcHSMvefBeRwTOPIzp7fNvRKTBupgNvecQA3UxRncnPOzlFLPbRCsBK-LYdnkJWSL396LqJTQ69gKI0EmXaiiFmnRQUQHQQ5yG8GLWIDG2DAvpbIKw0woO6Gdo2FARwM8a3jvH3vJCa3gP5M3SVXS5Nqrh8bNmm4_tRheurMLzhNOmdL4k1t_2ahI0y4lxXVe-4_VyLkq6HpBWqpjdkBdLq072dck_wO1AO1iz-8eA9RfDj30222MhsA2NHBI7AN2r1dlDcDPg6K1c-wkxynnHRlZwVhO-vlqG3vDvVXNwQUGvgAmNuaInHmIU-3NR4Z5rsoYsVK5nSsmyrN-bVkoAE3gOpA0k6L9DCPyqskZa-3_qI0CjdETGHrkrpokSMuu25so_ln12GyP4bO8lG4dORCn6PA4WMhB_iFL7bHUHDWLErYdoS0gxPj7SouIOprGNwY8O_wTIQ--KMZnywqHXF7zELAPenP0DaNJuDpLApUPoBt9oeAOOLYfSvZAJL5zrVhwRj_KCQwpVP_EKKjeI0pE1juZBr5AW86IFvFYhut29HckK5QNFVKxFmGL7fCkU7653kHtf8SMdvruFTvYZQ197ZoQlrkNEiNIPIrVgL8NQuitS_H9hsDVyFuhvs8fKgwxa1HqyLU5LEcKNFrQIrkHYNXxgO4B2EBuh5PWIAXrVo_SjEG5jczJ8fxC9TlxfwfGRM5adRZOQbCWvH1pQ4LmHYCB-XmRCL6x--kqKHUQ-JsGIVU2QRNXumdmZYuQHYIIxIbQrGvnGXadUinAGrxf2B3RcHlVI9EAPH8fo0xgv7p7K-Go5PXrosS2MZrh6lLzKcniQs1q2t8u62Yoe8XqRit18IMdleXurDSf7Ukp7blU9sxKIME0HDhLvUm0vAvtxJSvsp4HPexAln9WsQLKrUIFdulmw72KF8yUn0ZdZwmnwVDJ3BRM7DlbC_8PcP5zXBw=w1920-h883"}}
          style={{height:"100%",width:"100%",borderRadius:10}}
          />

        </View>
        <Text style={{marginTop:5,fontWeight:"500",marginLeft:10}}>Maintain Good Teeth</Text>
        </View>

        

        <View>
        <View style={{width:180,height:130,backgroundColor:Colors.primary,margin:5,borderRadius:10,marginRight:15}}>
          <Image
          source={{uri:"https://lh3.googleusercontent.com/fife/AKsag4PlRm2875zPbQ0CDzYkrJiblEmVSyCaf3PdeNEzQ30TftHWEvkzdkZc016qcHCs9lq5iQMmFcwE0znr8NWF8XnJYpAzQUMWFpzAlfTc2M-gbbYyeqEya9NZjK8EUucpFb4ATKuyq1XCCZJJNSdJIaE99KhAhinO-RNIu6yeOZhy0DlrQspQJexoCvrT65nNx9F6uTShgYBmxW86gY35j3BF-EC1HeYhL1_sNVrTGGz8vSvsFUvB9Hf0TDqOY7HmkS4QKNU1wMRvF_9oI46pRqa7YDGXVydC7Gch5y7G9W--xXSnPEpSdv6Gwurb6N-GHlWR4fAlNuRj7xhPy-IotToiIQxHm59vuWfqIphiItyFcc31Ay1LDAI2lboXO1sPIcZQFcNvxgu1i9GJIyZ5xhMmBk6CUs9jxSnsr2n_U-NJQQKkJHqxVuDpzeGyfwGAyjUynzBbvvXJ76ple9JAZKZ_CITf-HFHFIzMXGPp8CSk6pQkb0t-Yt-rXw76Hhb_XlVo5lKed8ZhJcClt61PHYng55H_ZlnYbHI9rr3cvJGnfHO2wHdfofioXZrBtZ2E2jqkts1UQ06xq0MYVmSqm0lZth3fxiCH8MC7zlZZInyW7FHw6rM-Cq-kNBLZGG8pRJlVpsedyCGoFfohLb32IvD-sJpHE03xa5J-ioJPgFgMJM8R39AkjQwY8SI-i9T0avlZSfKfc5U8SfWTFq35gVoZgzp7FBa-jZHSqGknUDURtp0A9gHSrtGOcq2IOYQl-JnB73IjQr5vDUxKCF9yDeKXB2qleR5WDsP-FHs-6j5IzN4Cl4dhroPTSm3Ub0xHEL5NhlFPJke8RrDfojw0cHsFMWyiywFPhJLa70bFAET895SmQVI59hRhuS4Sa3QiI4Hw96R3U-JgGtGn-bb4S6R0mm-npHW0gt84cj1QQOvVbH7v29cTwz2iHBVYYLdxrYO6piFzXuWmSu9m7Zrp0WpvZQREsZL1oyyDr0-SIjmPiYKtSIIYoRCjUT-9uTWrfTmhutNIej-3shQJKfWSYN-QBJqjpnOrbXztKaDi5oBw00DJmI8-EEuEqk-izWOOZL0kT__ZHKTxq4nvJHmntsz0oCJVON98e3g0oeCiGvB6FWA6nR9Djg4gmeDqSdB3O57kZraruv-L9LdHjKjb8FSmIsa6Cv2YpyYp2RJpdhdtJoHIr4EpDDZt1sWHTUVhk8YWOnhcWZTiLDoI4lE_FWbxGJGWNNxqeP7BO79Cw9-92TUyR4BsxHDVqISU055tOve1hrJH3DG5y53CojV4CHCSWEZVpcQESujzj1ymOZIQgcvjWzWlEeitTcYsNQ9ZdZn7H7SZA7sal2pXS8_6nVMulSMASOOIf06afIVFbKEhyrYr78lnzTbjS4MBxX7b6ONhPpIfRyh7zOpOwVX0kchn5Qlou0x2I-Q1KFEuP-OGDhmwg-r4vqEoCR435xHOVSH5yaTVMVBSv8C8zlvd7CzITr9AOpGPNcaBaQTQyvDUGxXLB8LHlzGorejVaBqBxvcrMCBBe0c_Jv8btDDGTFi0z0vNpQ_ah7Hx4fTFWr38irx1Wh7O54BiBPUj0xwX81bgOzT_Y6k1fwsVZc4jfDIZmzUMLhfQtLJqkWv7eTY7mrNbVFnCAgAjXUatkV2jkTuv1bCaCFzWQVxVNoY-TTKgQnGR2E9Ig6vyZQ=w1920-h883"}}
          style={{height:"100%",width:"100%",borderRadius:10}}
          />

        </View>
        <Text style={{marginTop:5,fontWeight:"500",marginLeft:10}}>Prevent Dental Caries</Text>
        </View>

        <View>
        <View style={{width:180,height:130,backgroundColor:Colors.primary,margin:5,borderRadius:10,marginRight:15}}>
          <Image
          source={{uri:"https://lh3.googleusercontent.com/fife/AKsag4PTQ06EuaZMRKKIb3Zg61SWShJU9b5hISkr10n2JFUqM8lj0M6PWQdnOB6AtJrqLpt6trLQ9F6QeR8FilzIkAevFIm7nDChWA0m8QbHjkBzsjqHDKt3p4KREHza8c01OF6fuytaritaPhuRWKrjV-ybd4FQ4lYWlZ0yQyxA11R1p2EOHi7yMNtU1SurrcYKULuw2qE-F2yVip1uGQpP-5ih192JWsIhLTW7LJjUYzCHs005UuxKLWnX3fLwC_dHAH78SqZ2SG9Bt1RgZBB8sS_toI1PVfYl_W1_2sCiKJQaj1URN1BHKQUF2Xk__xECb5AS_Y8_GX-tlYjNoJpTLOThpEGco5qxJP8a_hWwRhpy4e7ww36TvhvREc6h3dK9KvsPibFOnOs5LuC8MD1uLzeh4cr1YFtivzRL_8JvWTb2G6JgwCNrDFGAtQtc-mCnnMRVmIeEtdJ6C49wReiujhgRQ0US4C1hwztk2S5cVRPNVht0igoM6uHeDJUfOH601sWugl0ifhpAIg41UU7CyqfPIjprQf-FNfs8C8m4tGxi_CK9DX0ahX15ZeU6biQnC6Xqwcm7jLrkRn-LBn-JdIK00tKGdvortv8lX3v3_a9fLRiv7feOF9TARb4fw9dJHXuZnrLn3-n7vuSVnzQ6xcOXL23XjjDuYx_Ru0rjDw3lYV9WHc0EZVUCK9yeS6S4EOLuxPzhwsUk2bZbHZ7PvJoohioXhEUcHSMvefBeRwTOPIzp7fNvRKTBupgNvecQA3UxRncnPOzlFLPbRCsBK-LYdnkJWSL396LqJTQ69gKI0EmXaiiFmnRQUQHQQ5yG8GLWIDG2DAvpbIKw0woO6Gdo2FARwM8a3jvH3vJCa3gP5M3SVXS5Nqrh8bNmm4_tRheurMLzhNOmdL4k1t_2ahI0y4lxXVe-4_VyLkq6HpBWqpjdkBdLq072dck_wO1AO1iz-8eA9RfDj30222MhsA2NHBI7AN2r1dlDcDPg6K1c-wkxynnHRlZwVhO-vlqG3vDvVXNwQUGvgAmNuaInHmIU-3NR4Z5rsoYsVK5nSsmyrN-bVkoAE3gOpA0k6L9DCPyqskZa-3_qI0CjdETGHrkrpokSMuu25so_ln12GyP4bO8lG4dORCn6PA4WMhB_iFL7bHUHDWLErYdoS0gxPj7SouIOprGNwY8O_wTIQ--KMZnywqHXF7zELAPenP0DaNJuDpLApUPoBt9oeAOOLYfSvZAJL5zrVhwRj_KCQwpVP_EKKjeI0pE1juZBr5AW86IFvFYhut29HckK5QNFVKxFmGL7fCkU7653kHtf8SMdvruFTvYZQ197ZoQlrkNEiNIPIrVgL8NQuitS_H9hsDVyFuhvs8fKgwxa1HqyLU5LEcKNFrQIrkHYNXxgO4B2EBuh5PWIAXrVo_SjEG5jczJ8fxC9TlxfwfGRM5adRZOQbCWvH1pQ4LmHYCB-XmRCL6x--kqKHUQ-JsGIVU2QRNXumdmZYuQHYIIxIbQrGvnGXadUinAGrxf2B3RcHlVI9EAPH8fo0xgv7p7K-Go5PXrosS2MZrh6lLzKcniQs1q2t8u62Yoe8XqRit18IMdleXurDSf7Ukp7blU9sxKIME0HDhLvUm0vAvtxJSvsp4HPexAln9WsQLKrUIFdulmw72KF8yUn0ZdZwmnwVDJ3BRM7DlbC_8PcP5zXBw=w1920-h883"}}
          style={{height:"100%",width:"100%",borderRadius:10}}
          />

        </View>
        <Text style={{marginTop:5,fontWeight:"500",marginLeft:10}}>Maintain Good Teeth</Text>
        </View>
       </ScrollView>

       

       </View>

       {/* <Text style={{fontSize:22,fontWeight:"500",marginTop:15,marginLeft:5}}>Scan Now</Text>

<View style={{height:100,backgroundColor:Colors.primary,marginTop:10,borderRadius:10}}>


</View> */}

      
        

    

        
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    width:"100%", 
  },
  
  heading:{
  textAlign:"center",
  fontSize:22,
  marginTop:15,
  fontWeight:"500"  
}
});