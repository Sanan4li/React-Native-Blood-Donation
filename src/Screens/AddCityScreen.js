import React, { useState, Component } from 'react';
import {View, Text, TouchableOpacity,StyleSheet, Image, TextInput , ActivityIndicator, Alert} from "react-native";
import {styles} from "./Login";
const AddCityScreen = ({navigation})=>{

        const [data, setData] = useState({
            city : "",
            isValidCity : true,
            isLoading : false,
        });
        const isValidInformation = ()=>{
            if(data.city.trim() === ""){
                setData({
                    ...data,
                    isValidCity:false,
                });
            return false;
            }
            else{
                return true;
            }
        }
        const textInputChanged = (val, fieldName)=>{
            if(fieldName=="city"){
                setData({
                    ...data,
                    city : val,
                    isValidCity:true,
                });
            }
        }
        const addCity = ()=>{
            if(isValidInformation()){
                setData({
                    ...data,
                    isLoading:true,
                });
           console.log("added");
          }
        }
    
        return (
            <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Image style={{...styles.headerImage, width:200, height:200,borderRadius:100}} source={require("../../assets/images/addCity.png")} />
            </View>
            <View style={styles.loginContainer}>
               <View style={styles.loginTextContainer}>
               <Text style={styles.loginText}>Add a new city.</Text>
               </View>
                <View style={styles.formContainer}>
                <View style={styles.inputConatiner}>
                        <Text style={styles.labelText}>Please note that this city will be added permanently into database and will be displayed to donors when they register. Make sure this city is not already in the list because there will be no option to delete it.</Text>
                       
                    </View>
                    <View style={styles.inputConatiner}>
                        <Text style={styles.labelText}>City Name</Text>
                        <TextInput style={styles.textInput} autoFocus={true}
                        onChangeText = {(e)=> textInputChanged(e, "city")}
                        />
                        {!data.isValidCity && <Text style={styles.errorMessage}>City is Required </Text>}
                    </View>
                    
                </View>
                <View style={{...styles.signInContainer, marginTop:"5%"}}>
                    <TouchableOpacity style={styles.signInButton} onPress={()=>addCity()}>
                        <Text style={styles.signInText}>Add City</Text>
                    </TouchableOpacity>
                </View>
                <View style={{...styles.signUpContainer, marginTop:"2%"}}>
                    <Text style={styles.newUserText}>Chanded mind? </Text>
                <TouchableOpacity style={styles.signUpButton} onPress={()=>navigation.goBack()}>
                        <Text style={styles.signUpText}>Go Back</Text>
                </TouchableOpacity>
                </View>
            </View>
            
        </View>
     
        );
    }


export default AddCityScreen;