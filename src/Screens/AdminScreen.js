import React, { useState, Component } from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image, TextInput , ActivityIndicator, Alert} from "react-native";
import {styles} from "./Login";
const AdminScreen = ({navigation})=>{

    // state to hold data.. 
        const [data, setData] = useState({
            email : "",
            password : "",
            isValidEmail : true,
            isValidPassword : true,
            isLoading : false,
        });

        // checking if the email and password is valid 
        const isValidInformation = ()=>{
            if(data.email.trim() === ""){
                setData({
                    ...data,
                    isValidEmail:false,
                });
            return false;
            }
            if(data.password.trim() === "" || data.password.length<6){
                setData({
                    ...data,
                    isValidPassword:false,
                });
                return false;
            }
            else{
                return true;
            }
        }

        // setting email and password to state varaibles
        const textInputChanged = (val, fieldName)=>{
            if(fieldName=="email"){
                setData({
                    ...data,
                    email : val,
                    isValidEmail:true,
                });
            }
            if(fieldName=="password"){
                setData({
                    ...data,
                    password : val,
                    isValidPassword:true,
                });
            }
        }

        // signin function
        const SignInNow = ()=>{
            if(isValidInformation()){
                setData({
                    ...data,
                    isLoading:true,
                });
                // calling the end point
                fetch('http://192.168.10.2:8000/user/login', {
                    method: 'POST',
                    headers: {
                      Accept: 'application/json',
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                      Email: data.email,
                      password: data.password
                    })
                  }).then((response) => response.json())
                .then((json) => {
                  if(json.Email==data.email ){
                      console.log(json);
                    navigation.navigate("AdminOptions");
                  }
                  else{
                    Alert.alert("Wrong Info!", "Please enter correct information. If you are not an admin please go back.");
                  }
                })
                .catch((error) => {
                  console.error(error);
                });
        //    if(data.email==="Test@gmail.com"&& data.password==="Test123"){
        //        navigation.navigate("AdminOptions");
        //    }
        //    else{
        //        Alert.alert("Wrong Info!", "Please enter correct information. If you are not an admin please go back.");
        //    }
          }
        }
    
        return (
            <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Image style={{...styles.headerImage, width:150, height:150,borderRadius:100}} source={require("../../assets/images/admin.png")} />
            </View>
            <View style={styles.loginContainer}>
               <View style={styles.loginTextContainer}>
               <Text style={styles.loginText}>Are you an admin? Sign in.</Text>
               </View>
                <View style={styles.formContainer}>
                    <View style={styles.inputConatiner}>
                        <Text style={styles.labelText}>Email Address</Text>
                        <TextInput style={styles.textInput} autoFocus={true}   textContentType="emailAddress"
                        onChangeText = {(e)=> textInputChanged(e, "email")}
                        />
                        {!data.isValidEmail && <Text style={styles.errorMessage}>Email is Required </Text>}
                    </View>
                    <View style={styles.inputConatiner}>
                        <Text style={styles.labelText}>Password</Text>
                        <TextInput style={styles.textInput}  textContentType="password" maxLength={15} minLength={5} secureTextEntry={true}
                        onChangeText = {(e)=> textInputChanged(e, "password")}
                        />
                        {!data.isValidPassword && <Text style={styles.errorMessage}>Required & must be at least 6 characters</Text>}
                    </View>
                </View>
                <View style={{...styles.signInContainer, marginTop:"5%"}}>
                    <TouchableOpacity style={styles.signInButton} onPress={()=>SignInNow()}>
                        <Text style={styles.signInText}>Sign In</Text>
                    </TouchableOpacity>
                </View>
                <View style={{...styles.signUpContainer, marginTop:"2%"}}>
                    <Text style={styles.newUserText}>Not an admin? </Text>
                <TouchableOpacity style={styles.signUpButton} onPress={()=>navigation.goBack()}>
                        <Text style={styles.signUpText}>Go Back</Text>
                </TouchableOpacity>
                </View>
            </View>
            
        </View>
     
        );
    }


export default AdminScreen;