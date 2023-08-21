

import react, {useState} from 'react';
import { View, Text, TextInput, Button, StyleSheet} from "react-native";


const App = () =>{
  const [inputValues, setInputValues] = useState({
     input1: '',  
     input2: '',
     input3: '',  
     input4: '',
     input5: '',
    });


const [sum, setSum] = useState(0);


const handleInputChange = (inputName, value) => {
  setInputValues({...inputValues,[inputName]: value});
};


const handleSum = () =>{
  const {input1,input2} = inputValues;
  const result = parseInt(input1) + parseInt(input2) + parseInt(input3) + parseInt(input4) + parseInt(input5);
  setSum(result);
};


return(
  <View style={styles.container}>
  <Text style={styles.label}>input1: </Text>
  <TextInput
  style={styles.input}
  onChangeText={(value) => handleInputChange('input1', value)}
  value={inputValues.input1}
  keyboardType="numeric"
/>

<Text style={styles.label}>input2: </Text>
  <TextInput
  style={styles.input}
  onChangeText={(value) => handleInputChange('input2', value)}
  value={inputValues.input1}
  keyboardType="numeric"
/>

<Text style={styles.label}>input3: </Text>
  <TextInput
  style={styles.input}
  onChangeText={(value) => handleInputChange('input3', value)}
  value={inputValues.input1}
  keyboardType="numeric"
/>

<Text style={styles.label}>input4: </Text>
  <TextInput
  style={styles.input}
  onChangeText={(value) => handleInputChange('input4', value)}
  value={inputValues.input1}
  keyboardType="numeric"
/>

<Text style={styles.label}>input5: </Text>
  <TextInput
  style={styles.input}
  onChangeText={(value) => handleInputChange('input5', value)}
  value={inputValues.input1}
  keyboardType="numeric"
/>

<Button title="Somar" onPress={handleSum}/>
<Text style={styles.result}>Resultado: {sum}</Text>
  </View>
)
};


const styles = StyleSheet.create ({
   container:{
    flex: 1,
    backgroundColor: '#D79ADF',
    padding: 20,


   },
});


export default App;