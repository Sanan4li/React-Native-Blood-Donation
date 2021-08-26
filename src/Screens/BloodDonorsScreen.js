import React, { useState, useEffect  } from 'react';
import { StyleSheet, View, ScrollView, Picker, Text, TouchableOpacity } from 'react-native';
import { Table, Row, Rows, Cell, TableWrapper } from 'react-native-table-component';
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import call from 'react-native-phone-call';
import database from '@react-native-firebase/database';
  BloodDonorsScreen = ()=>{
    const [data , setData] = useState({
    tableHead: ['Donor Name', 'City', 'Blood Group', 'Mobile Number'],
    allDonors: [],
    tableData: [],
    widthArr: [120, 120, 120, 120,  ],
    });
    let [loading, setLoading] = useState(true);
    const [selectedValue, setSelectedValue] = useState("All");
    const [selectedCityValue, setSelectedCityValue] = useState("All");
    useEffect(()=>{
        const newData = [];
        const allDonorsFromFirebase = [];
        var donors = database().ref('donors/');
        donors.on('value', (snapshot) => {
          const donorsData = snapshot.val();
          const keys = Object.keys(donorsData);
          keys.forEach((key)=>{
            newData.push(donorsData[key]);
          });
          newData.forEach((data)=>{
            const {donorName, city, bloodGroup, mobileNo} = data;
            allDonorsFromFirebase.push([donorName, city, bloodGroup, mobileNo]);
          });
              setData({...data,  tableData:allDonorsFromFirebase, allDonors:allDonorsFromFirebase});
              setLoading(false);
        });
    },[]);
  
    // function to filter results by blood group
    const filterByGroup = (itemValue)=>{
    if(selectedCityValue=="All"){
      if(itemValue=="All"){
        data.tableData =  data.allDonors;
      }
      else{
        data.tableData =  data.allDonors.filter((d)=>{
          return d[2]==itemValue;
        });
      }
    }
    else{
      if(itemValue=="All"){
        data.tableData =  data.allDonors.filter((d)=>{
          return (d[1]==selectedCityValue);
        });
      }
      else{
        data.tableData =  data.allDonors.filter((d)=>{
          return (d[2]==itemValue && d[1]==selectedCityValue);
        });
      }
    }
  setSelectedValue(itemValue)
}

    const filterByCity = (itemValue)=>{
      if(itemValue=="All"){
        data.tableData = data.allDonors;
      }
      else{
        data.tableData =  data.allDonors.filter((d)=>{
          return d[1]==itemValue;
        });
      }
        setSelectedCityValue(itemValue);
    }



    const element = (data, index) => (
        <TouchableOpacity style={{justifyContent:"center", alignItems:"center"}} onPress={() => {
          const args = {
            number: data, // String value with the number to call
          }
          call(args).catch(console.error);
        }}>
          <View style={styles.callBtn}>
            <Text style={styles.callBtnText}>{data}</Text>
          </View>
        </TouchableOpacity>
      );

      
     
    return (
   
    loading?
    <SkeletonPlaceholder backgroundColor="#e6e6e6">
      <View style={{ margin:10 }}>
      <View style={{ width: "100%", height: 40, borderRadius: 4, marginTop:10 }} />
      <View style={{ width: "100%", height: 40, borderRadius: 4, marginTop:10 }} />
      <View style={{ width: "100%", height: 40, borderRadius: 4, marginTop:10 }} />
      <View style={{ width: "100%", height: 40, borderRadius: 4, marginTop:10 }} />
      <View style={{ width: "100%", height: 40, borderRadius: 4, marginTop:10 }} />
      <View style={{ width: "100%", height: 40, borderRadius: 4, marginTop:10 }} />
      <View style={{ width: "100%", height: 40, borderRadius: 4, marginTop:10 }} />
      <View style={{ width: "100%", height: 40, borderRadius: 4, marginTop:10 }} />
      <View style={{ width: "100%", height: 40, borderRadius: 4, marginTop:10 }} />
      <View style={{ width: "100%", height: 40, borderRadius: 4, marginTop:10 }} />
      </View>
  </SkeletonPlaceholder>:
  <View style={{backgroundColor:"#fff", padding:5}}>
        <View style={styles.filters}>
            <View style={styles.inputConatiner}>
        <Text style={styles.labelText}> City  </Text>
        <View style={styles.selectBox}>
        <Picker
            selectedValue={selectedCityValue}
            style={styles.picker}
            onValueChange={
              (itemValue, itemIndex) => {
                filterByCity(itemValue);
            }}
            >
            <Picker.Item label="All" value="All" />
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
            onValueChange={(itemValue, itemIndex) => {
              filterByGroup(itemValue);    
            }}
            >
            <Picker.Item label="All" value="All" />
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
        </View>
      <ScrollView  horizontal={true}>
      <View style={styles.container}>
      <Table borderStyle={{borderWidth: 1, borderColor: '#a6a6a6',}}>
          <Row data={data.tableHead} widthArr={data.widthArr} style={styles.head} textStyle={styles.headText}/>
          {
            data.tableData.map((rowData, index) => (
              <TableWrapper key={index} style={styles.row} >
                {
                  rowData.map((cellData, cellIndex) => (
                    <Cell  key={cellIndex} data={cellIndex === 3 ? element(cellData, index) : cellData} textStyle={styles.text} style={styles.cell}  />
                  ))
                }
              </TableWrapper>
            ))
          }
        </Table>
      </View>
    </ScrollView>
 </View>
      
    )
  }
 
const styles = StyleSheet.create({
cell:{
    width:120
  },
container: { 
    flex: 1, 
    padding: 5, 
    backgroundColor: '#fff' 
},
  head: { 
      backgroundColor: '#cce6ff',
     
},
  text: { 
      margin: 6 
},
headText:{
margin:6,
color: 'black',
},
  inputConatiner:{
    width:"44%",
    // backgroundColor:"red",
    padding:1,
},
row: { 
    flexDirection: 'row', 
    backgroundColor: '#fff' 
},
callBtn: { 
     
      padding:5, 
      alignItems : "center",
      justifyContent : "center",
      backgroundColor: '#80ffaa',  
      borderRadius: 2 ,
},
callBtnText: { 
      textAlign: 'center', 
      color: '#000',
     
},
picker:{  
    width: "100%", 
    marginLeft:10, 
    height:30,
    padding:5,
    color:"#666666", 
},
filters:{
    // backgroundColor: '#fe6e58',
    width: "100%", 
    margin:2,
    justifyContent : "space-around",
    alignItems : "center",
    flexDirection:"row",
},
labelText:{
    padding:1,
    color:"#4d4d4d"
},

selectBox:{
    width:"100%",
    backgroundColor:"#f2f2f2", 
    borderRadius:6,
    alignItems:"center",
    marginLeft:"auto",
    marginRight:"auto",
    marginTop:5,
},
});
export default BloodDonorsScreen;