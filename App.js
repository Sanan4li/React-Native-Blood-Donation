import React, { useState } from 'react';
import {View, Text, Button} from "react-native";
import DrawerNavigator from "./Navigation/DrawerNavigator";
import AuthStack from "./Navigation/AuthStack";
import FirstTime from "./Screens/FirstTime";
const App: () => React$Node = () => {
  let [go, setGo] = useState(false); 
  return (
    
    go?<AuthStack/>:<FirstTime setGo={setGo}/>
  
    //  <BottomNavigator/>
  //  <DrawerNavigator/>
    //  <TopNavigator/>
  );
};

export default App;
