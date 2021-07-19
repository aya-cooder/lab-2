import React, { useState } from 'react';
import { ImageBackground, Alert, TextInput, TouchableOpacity, StyleSheet, Text, View, ScrollView } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { stls } from './style';


const image = { uri: "https://i.pinimg.com/564x/e9/29/1c/e9291cc39e820cd4afc6e58618dfc9e0.jpg" };
export default function Login({ navigation }) {
  const [text1, setText1] = useState(null);
  const [inputVal, setText2] = useState('');
  const [text, setText] = useState(null);
  const [password, setPassword] = useState(null);
  function validatePhoneNumber(enteredPhoneNumber) {
    if (enteredPhoneNumber.length != 11) {
      return false;
    }
    return /^[0-9]+$/.test(enteredPhoneNumber)
  }
  const validateSubmitHandler = () => {
    if (!validatePhoneNumber(inputVal)) {
      alert('Wronge Number please Enter your number agin!')
      return
    }
    alert('Successfuly Number: ' + inputVal)
  }
  const handleSubmit = () => {
    Alert.alert('Successfuly Signed up');
  }
  const handleSubmit1 = () => {
    Alert.alert('Hello this is Google');
  }
  const handleSubmit2 = () => {
    Alert.alert('Hello this is Apple');
  }



  return (
    <ScrollView>
      <View>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <View style={{
            flexDirection: 'row'
          }}>
            <TouchableOpacity
              style={{
                backgroundColor: '#101010',
                width: "12%",
                height: "45%",
                marginLeft: '5%',
                marginRight: '3%',
                marginTop: '10%',
                borderRadius: 15,
                borderWidth: 2,
                borderColor: '#1e1e1e',
                alignItems: 'center'
              }}
            >
              <FontAwesome5 name={'angle-left'} size={25} color="white" style={{ marginTop: 10 }} />
            </TouchableOpacity>
            <Text style={styles.text}>Log in</Text>
          </View>
          <Text style={styles.text1}>
            Log in with one of the following options.
          </Text>
          <View style={{
            flexDirection: 'row',
            padding: '5%',
            marginBottom: '10%'
          }}>
            <TouchableOpacity
              style={{
                backgroundColor: '#171717',
                width: "47%",
                height: "100%",
                marginLeft: '1%',
                marginTop: '5%',
                borderRadius: 15,
                borderWidth: 2,
                borderColor: '#202020',
                alignItems: 'center'
              }}
              onPress={handleSubmit1}
            >
              <FontAwesome5 name={'google'} size={30} color="white" style={{ marginTop: 15 }} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: '#171717',
                width: "47%",
                height: "100%",
                marginLeft: '5%',
                marginTop: '5%',
                borderRadius: 15,
                borderWidth: 2,
                borderColor: '#202020',
                alignItems: 'center'
              }}
              onPress={handleSubmit2}
            >
              <FontAwesome5 name={'apple'} size={30} color="white" style={{ marginTop: 15 }} />
            </TouchableOpacity>
          </View>
          <Text style={styles.text2}>Name</Text>
          <TextInput
            style={stls.Input}
            placeholder={'Name'}
            onChangeText={setText1}
            keyboardType="default"
            placeholderTextColor='white'
          />
          <Text style={styles.text2}>Phone Number</Text>
          <TextInput
            style={stls.Input}
            placeholder={'Phone number'}
            onChangeText={setText2}
            keyboardType="numeric"
            placeholderTextColor='white'
          />
          <Text style={styles.text2}>Email</Text>
          <TextInput
            style={stls.Input}
            placeholder={'tim@apple.com'}
            onChangeText={setText}
            keyboardType="email-address"
            placeholderTextColor='white'


          />
          <Text style={styles.text2}>Password</Text>
          <View style={{ flexDirection: 'row', }}>
            <TextInput
              style={stls.Input}
              placeholder={'Pick a strong password'}
              onChangeText={setPassword}
              keyboardType="numeric"
              secureTextEntry={true}
              placeholderTextColor='white'
            />
            <FontAwesome5 style={stls.ic} name={'eye'} size={15} color="white" />
          </View>
          <TouchableOpacity
            style={stls.btn1}
            
            onPress={() => { navigation.navigate("Home") }}
          >
            <Text style={styles.text3}> Log in </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={stls.btn2}
       
            onPress={validateSubmitHandler}

          >
            <Text style={styles.text3}> Validate Phone Number</Text>
          </TouchableOpacity>

          <Text style={{ color: 'gray', marginLeft: '22%', marginTop: '5%', marginBottom: '5%' }}>Don't have an account? <Text style={{ color: 'white', fontWeight: 'bold', marginBottom: '5%' }}>  Sign up</Text></Text>
        </ImageBackground>
      </View >
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 35,
    lineHeight: 84,
    fontWeight: 'bold',
    marginLeft: '2%',
    marginTop: '5%',
  },
  text1: {
    color: 'white',
    fontSize: 20,
    marginLeft: '5%',
    marginTop: '10%',
  },
  text2: {
    color: 'white',
    fontSize: 15,
    marginLeft: '10%',


  },
  text3: {
    color: 'white',
    fontWeight: 'bold',
    marginTop: 8
  },
 
  image: {
    flex: 1,
  },

});

