import React , {useState} from 'react';
import uuid from 'react-uuid';
import database from '@react-native-firebase/database';
import {View, Text, StyleSheet , TextInput, TouchableOpacity , Picker } from "react-native";

 function RequestBlood() {
    const [data, setData] = useState({
        name : "",
        hospital : "",
        mobile : "",
        isValidName : true,
        isValidHospital : true,
        isValidMobile : true,
        isLoading : false,
    });
    const [selectedValue, setSelectedValue] = useState("O+");
    const [selectedCityValue, setSelectedCityValue] = useState("Gujrat");
    const isValidInformation = ()=>{
        if(data.name.trim() === "" || data.name.length<3){
            setData({
                ...data,
                isValidName:false,
            });
        return false;
        }
        if(data.hospital.trim() === "" || data.hospital.length<3){
            setData({
                ...data,
                isValidHospital:false,
            });
            return false;
        }
        if(data.mobile.trim()  === "" || data.mobile.length<11){
            setData({
                ...data,
                isValidMobile:false,
            });
            return false;
        }
        else {
            return true;
        }
    }
    const textInputChanged = (val, fieldName)=>{
        if(fieldName=="name"){
            setData({
                ...data,
                name : val,
                isValidName:true,
            });
        }
        if(fieldName=="hospital"){
            setData({
                ...data,
                hospital : val,
                isValidHospital:true,
            });
        }
        if(fieldName=="mobile"){
            setData({
                ...data,
                mobile : val,
                isValidMobile:true,
            });
        }
    }

    const requestBloodButtonHandler = ()=>{
        if(isValidInformation()){
            let id = uuid();
            console.log("Everthing is Fine", data, selectedCityValue, selectedValue);
            database()
            .ref('/requests/'+id)
            .set({
              patientName: data.name,
              hospitalName: data.hospital,
              mobileNo: data.mobile,
              city: selectedCityValue,
              bloodGroup: selectedValue,
            })
            .then(() => console.log('Data set.'));
        }
        else{
            console.log("Error");
        }
    }


    return (
        <View style={styles.main}>
           <View style={styles.formContainer}>
               <Text style={styles.requestText}>Request Blood</Text>
               <View style={styles.inputConatiner}>
                   <Text style={styles.labelText}> Patient Name  </Text>
                   <TextInput style={styles.textInput} autoFocus={true} 
                    onChangeText = {(e)=> textInputChanged(e, "name")}
                    />
                     {!data.isValidName && <Text style={styles.errorMessage}>Required & must be at least 3 characters </Text>}
               </View>
               <View style={styles.inputConatiner}>
                   <Text style={styles.labelText}> Hospital Name  </Text>
                   <TextInput style={styles.textInput}
                    onChangeText = {(e)=> textInputChanged(e, "hospital")}
                    />
                     {!data.isValidHospital && <Text style={styles.errorMessage}>Required & must be at least 3 characters </Text>}
               </View>
               <View style={styles.inputConatiner}>
                   <Text style={styles.labelText}>  Mobile #   </Text>
                   <TextInput style={styles.textInput} keyboardType="phone-pad"
                    onChangeText = {(e)=> textInputChanged(e, "mobile")}
                    />
                     {!data.isValidMobile && <Text style={styles.errorMessage}>Required & must be at least 11 digits </Text>}
               </View>
               <View style={styles.inputConatiner}>
                   <Text style={styles.labelText}> City  </Text>
                   <View style={styles.selectBox}>
                   <Picker
                        selectedValue={selectedCityValue}
                        style={styles.picker}
                        onValueChange={(itemValue, itemIndex) => setSelectedCityValue(itemValue)}
                        >
                        <Picker.Item label="Gujrat" value="Gujrat" />
                        <Picker.Item label="Kharian" value="Kharian" />
                        <Picker.Item label="Kotla" value="Kotla" />
                        <Picker.Item label="Jalalpur" value="Jalalpur" />
                        <Picker.Item label="Barnala" value="Barnala" />
                    </Picker>
                   </View>
                </View>
                <View style={styles.inputConatiner}>
                   <Text style={styles.labelText}> Blood Group  </Text>
                   <View style={styles.selectBox}>
                    <Picker
                        selectedValue={selectedValue}
                        style={styles.picker}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                        >
                        <Picker.Item label="O+" value="O+" />
                        <Picker.Item label="O-" value="O-" />
                        <Picker.Item label="A+" value="A+" />
                        <Picker.Item label="A-" value="A-" />
                        <Picker.Item label="B+" value="B+" />
                        <Picker.Item label="B-" value="B-" />
                        <Picker.Item label="AB+" value="AB+" />
                        <Picker.Item label="AB-" value="AB-" />
                    </Picker>
                   </View>
               </View>
               <TouchableOpacity style={styles.requestButtonContainer} 
               onPress={()=>requestBloodButtonHandler()}>
                    <Text style={styles.requestButtonText}>Request Blood</Text>
                </TouchableOpacity>
           
           </View>
        </View>
    )
}
const styles = StyleSheet.create({
    main : {
        flex:1, 
        alignItems:"center",
        backgroundColor:"#fe6e58",
    },
    formContainer:{
        backgroundColor:"#fff",
        width:"100%",
        height:"100%",
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        alignItems:"center",
        padding:8,
      
    },
    picker:{
      width: "100%", 
      marginLeft:10, 
      color:"#666666", 
      padding:12
    },
    requestText:{
        fontFamily:"Helvetica-Bold-Font",
        fontSize:18,
        color:"#1a1a1a",
        padding:5,
    },
    inputConatiner:{
        width:"95%",
        padding:1,
    },
    labelText:{
        padding:3,
        color:"#4d4d4d"
    },
    textInput:{
        padding:10,
        borderRadius:6,
        backgroundColor:"#f2f2f2",
        
    },
    selectBox:{
        width:"100%", 
        padding:2,
        backgroundColor:"#f2f2f2", 
        borderRadius:6,
        alignItems:"center",
        marginLeft:"auto",
        marginRight:"auto",
    },
    requestButtonContainer:{
        alignItems: "center",  
        width:"95%",  
        backgroundColor:"#fe6e58",
        borderRadius:7,
        marginTop:"8%",
        padding:12,
    },
    requestButtonText:{
        color:"white",
        fontSize:18
    },
    errorMessage:{
        color:"red",
    },
});

export default RequestBlood;