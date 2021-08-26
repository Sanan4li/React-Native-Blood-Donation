import React, { useState, Component } from 'react';
import {View, Text, TouchableOpacity,StyleSheet, Image, ScrollView, TextInput , ActivityIndicator, Alert} from "react-native";
const AdminOptions = ({navigation})=>{

    
        return (
         <View style={styles.main}>
        <ScrollView>
            <View style={styles.requests}>
                <View style={styles.requestsImageContainer}>
                     <Image style={styles.requestsImage} source={require("../../assets/images/post.png")}/>
                </View>
                <View style={styles.requestsTextContainer}>
                    <View style={styles.requestsDetails}>
                         <Text style={styles.numberText}>12</Text>
                         <Text style={styles.requestText}>New Requests</Text>
                    </View>
                    <View style={styles.donationButtonContainer}>
                           <TouchableOpacity style={styles.donationButton} onPress={()=>{
                               navigation.navigate("RequestBlood");
                           }}>
                               <Text style={styles.donationButtonText}>See All Requests</Text>
                           </TouchableOpacity>
                    </View>
                </View> 
            </View>
            <View style={styles.requests}>
                <View style={styles.requestsImageContainer}>
                     <Image style={styles.requestsImage} source={require("../../assets/images/donateblood.png")}/>
                </View>
                <View style={styles.requestsTextContainer}>
                    <View style={styles.requestsDetails}>
                         <Text style={styles.numberText}>234</Text>
                         <Text style={styles.requestText}>Total Donors</Text>
                    </View>
                    <View style={styles.donationButtonContainer}>
                           <TouchableOpacity style={styles.donationButton} onPress={()=>{
                               navigation.navigate("BloodDonors");
                           }}>
                               <Text style={styles.donationButtonText}>See All Donors</Text>
                           </TouchableOpacity>
                    </View>
                </View> 
            </View>
            <View style={styles.requests}>
                <View style={styles.requestsImageContainer}>
                     <Image style={styles.requestsImage} source={require("../../assets/images/addCity.png")}/>
                </View>
                <View style={styles.requestsTextContainer}>
                    <View style={styles.requestsDetails}>
                         <Text style={styles.numberText}>23</Text>
                         <Text style={styles.requestText}>Total Cities</Text>
                    </View>
                    <View style={styles.donationButtonContainer}>
                           <TouchableOpacity style={styles.donationButton} onPress={()=>{
                               navigation.navigate("AddCity");
                           }}>
                               <Text style={styles.donationButtonText}>Add New City</Text>
                           </TouchableOpacity>
                    </View>
                </View> 
            </View>
            <View style={styles.requests}>
                <View style={styles.requestsImageContainer}>
                     <Image style={styles.requestsImage} source={require("../../assets/images/addDonor.png")}/>
                </View>
                <View style={styles.requestsTextContainer}>
                    <View style={styles.requestsDetails}>
                         <Text style={styles.numberText}>234</Text>
                         <Text style={styles.requestText}>Total Donors</Text>
                    </View>
                    <View style={styles.donationButtonContainer}>
                           <TouchableOpacity style={styles.donationButton} onPress={()=>{
                               navigation.navigate("BecomeDonor");
                           }}>
                               <Text style={styles.donationButtonText}>Add New Donor</Text>
                           </TouchableOpacity>
                    </View>
                </View> 
            </View>
            
            </ScrollView>
        </View>
     
        );
    }
const styles = StyleSheet.create({
    main:{
        flex:1, 
        alignItems  :"center",
        backgroundColor:"#fe6e58",
        
    },
    requests:{
        elevation: 5,
        borderRadius: 10,
        width:"97%",
        flexDirection:"row",
        backgroundColor:"white",
        padding:7,
        marginBottom:10,
    },
    requestsImageContainer:{
        width:"40%",
        // backgroundColor:"green",
        justifyContent : "center",
        alignItems : "center",
    },
    requestsImage:{
        width:100,
        height:100
    },
    requestsTextContainer:{
        // backgroundColor:"gray",
        width:"60%",
        alignItems: "center",
    },
    requestsDetails:{
        flexDirection:"row", 
        padding:5, 
        justifyContent:"center", 
        alignItems:"center", 
        width:"100%",
    },
    numberText:{
        textAlign:"center",
        fontFamily : "Helvetica-Bold-Font",
        fontSize:25,
        marginRight:5,
        fontWeight:"bold",
    },
    requestText:{
        marginLeft:2,
        textAlign:"center",
        fontFamily:"AvenirLTStd-Roman",
        fontSize:17,
    },
    donationButtonContainer:{
        alignItems:"center",
        // backgroundColor:"blue",
        width:"72%",
        padding:2,
        justifyContent : "center",
    },
    
    donationButton:{
       backgroundColor:"red",
       padding:10,
       justifyContent : "center",
       width:"100%",
       marginLeft:"5%",
       alignItems : "center",
       borderRadius:5,
    },
    donationButtonText:{
        color: "#fff",
        fontFamily : "Helvetica-Bold-Font",
    },
})

export default AdminOptions;