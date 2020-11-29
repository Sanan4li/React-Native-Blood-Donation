import React, {useState} from 'react'
import {View, Text, TouchableOpacity,StyleSheet, Image, TextInput} from "react-native";

 function Login({navigation}) {
    const [isFocused, setFocus] = useState(false);
    const handleFocut = ()=>{
        
    }
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Image style={styles.headerImage} source={require("../assets/images/donateblood.png")} />
            </View>
            <View style={styles.loginContainer}>
               <View style={styles.loginTextContainer}>
               <Text style={styles.loginText}>Sign In</Text>
               </View>
                <View style={styles.formContainer}>
                    <View style={styles.inputConatiner}>
                        <Text style={styles.labelText}>Email Address</Text>
                        <TextInput style={styles.textInput} autoFocus={true}  />
                    </View>
                    <View style={styles.inputConatiner}>
                        <Text style={styles.labelText}>Password</Text>
                        <TextInput style={styles.textInput} />
                    </View>
                </View>
                <TouchableOpacity style={styles.forgotConatiner}>
                    <Text style={styles.forgotText}>Forgot Password?</Text>
                </TouchableOpacity>
                <View style={styles.signInContainer}>
                    <TouchableOpacity style={styles.signInButton}>
                        <Text style={styles.signInText}>Sign In</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.signUpContainer}>
                    <Text style={styles.newUserText}>I'm new user. </Text>
                <TouchableOpacity style={styles.signUpButton} onPress={()=>navigation.navigate("Signup")}>
                        <Text style={styles.signUpText}>Sign Up</Text>
                </TouchableOpacity>
                </View>
            </View>
            
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:"#fe6e58",
    },
    headerContainer:{
        height:"35%",
        backgroundColor:"#fe6e58",
        justifyContent : "center",
        alignItems : "center"
    },
    loginContainer:{
        padding:10,
        height:"70%", 
        backgroundColor:"#f2f2f2",
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        marginTop:-10,
    },
    headerImage:{
        width:200,
        height:200,
    },
    loginTextContainer:{
        padding:10,
        alignItems: "center",
    },
    loginText:{
        fontFamily:"Helvetica-Bold-Font",
        fontSize:18
    },
    formContainer:{
        alignItems:"center"
    },
    inputConatiner:{
        width:"93%", 
    },
    labelText:{
        padding:5,
        color:"#666666"
    },
    textInput:{
        padding:10,
        borderRadius:6,
        backgroundColor:"white",
        
    },
    forgotConatiner:{
        padding:10,   
        alignItems: "flex-end"
    },
    forgotText : {
        color:"#fe2301"
    },
    signInButton:{
        backgroundColor:"#fe6e58",
        padding:15,
        width:"93%",
        borderRadius:7,
        alignItems: "center"
    },
    signInContainer:{
        alignItems:"center",
    },
    signInText:{
        color:"white",
        fontSize:18
    },
    signUpContainer:{
        flexDirection:"row",
        padding:10,
        marginTop:"10%",
        justifyContent:"center",
    },
    signUpText:{
        color:"#fe6e58",
        fontFamily:"Helvetica-Bold-Font",
        fontSize:16,
        padding:1,
    },
    newUserText:{
        fontSize:16,
    }


});
export default Login;