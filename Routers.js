import React, {  useState, useEffect }  from 'react';
import {View , Text } from "react-native";
import DrawerNavigator from "./Navigation/DrawerNavigator";
import AuthStack from "./Navigation/AuthStack";
import FirstTime from "./src/Screens/FirstTime";
import AuthProvider from "./Context/AuthProvider";
import auth from "@react-native-firebase/auth";

const Routers = ()=>{
    const [go, setGo] = useState(false); 
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();
   
    // function onAuthStateChanged(user) {
    //   setUser(user);
    //   if (initializing) setInitializing(false);
    // }
  
    // useEffect(() => {
    //   const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    //   return subscriber; // unsubscribe on unmount
    // }, []);
  
    // if (initializing) {
    //   return null;
    // }
    // if (!user) {
    //   return (
    //     go?<AuthProvider><AuthStack/></AuthProvider>:<FirstTime setGo={setGo}/>
    //   );
    // }
    // else{
      return(
        <AuthProvider>
         <DrawerNavigator/>
        </AuthProvider>
      )
      
    // }
}
export default Routers;