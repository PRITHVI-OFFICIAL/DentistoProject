import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import Colors from '../Colors';

const ResultBox = ({ disease }) => {
  // Define your content data
  const content = {
    'Caries': {
      'what': 'Cavities are permanently damaged areas in the hard surface of your teeth that develop into tiny openings or holes.',
      'cause': 'Cavities are caused by factors like bacteria in your mouth, snacking, sugary drinks, and poor teeth cleaning.',
    },
    'Tooth Discoloration': {
      'what': 'Tooth discoloration is when your teeth change color, often due to factors like tobacco use, trauma, poor oral hygiene, and certain foods, drinks, and medications.',
      'cause': 'Consuming dark-colored beverages like coffee, tea, or red wine can lead to tooth discoloration due to staining compounds they contain.',
    },
    'Ulcer': {
        'what': 'An ulcer is a sore that forms in the lining of the digestive tract, often caused by infection with Helicobacter pylori bacteria, prolonged use of NSAIDs, or excessive stomach acid production.',
        'cause': 'Ulcers are often caused by the erosion of the protective lining in the stomach or duodenum, commonly due to factors like infection with H. pylori bacteria or the extended use of medications such as aspirin or ibuprofen.',
      },
  };

  // Get the content for the specified disease
  const diseaseContent = content[disease];

  if (!diseaseContent) {
    return null; // Handle the case where the disease is not found in the content
  }

  return (
    
    <View style={{ backgroundColor: Colors.primary, padding: 15, borderRadius: 10, marginTop: 30,width:380,marginRight:8,height:400 }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold', color: 'white', margin: 5 }}>
        Results
      </Text>

      {/* Display a tick icon and disease detection information */}
      {/* ... Other content ... */}

      {/* Display information about the disease and its causes */}
      <View
    style={{
      width: '100%',
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
        
      </View>
    </View>

    <View style={{ margin: 10 }}>
      <Text style={{ fontSize: 17, fontWeight: "bold" }}>
        {disease} Detected
      </Text>
      <Text style={{ color: Colors.gray }}>
      Detected By our AI
      </Text>
    </View>



    
  </View>
 
    




      <View>
        <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white', marginTop: 25 }}>
          What is {disease}?
        </Text>
        <Text style={{ color: 'white', marginTop: 10 }}>{diseaseContent.what}</Text>
      </View>

      <View>
        <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white', marginTop: 10 }}>
          Causes and Effects
        </Text>
        <Text style={{ color: 'white', marginTop: 10 }}>{diseaseContent.cause}</Text>
      </View>
    </View>
  );
};

export default ResultBox;