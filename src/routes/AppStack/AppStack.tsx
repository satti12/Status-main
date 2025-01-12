import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
// import Tabs from "../BottomTabs/Tabs";
import HomeScreen from "../../screens/main/HomeScreen";
import MessageScreen from "../../screens/main/MessageScreen";
import ProfileScreen from "../../screens/main/ProfileScreen";
import SearchScreen from "../../screens/main/SearchScreen";
import AddScreen from "../../screens/main/AddScreen";
import BottomTab from "../BottomTabs";
import SplashScreen from "../../screens/main/SplashScreen";


const AppStack = () => {
  const Stack = createStackNavigator();
  const [splashState,setSplashState]=useState(true)

  // useEffect(() => {
  //   let timeState = setTimeout(() => {
  //     // navigation.push('Onboarding01')
  //     setSplashState(false);
  //   }, 2000);
  //   return () => {
  //     clearTimeout(timeState);
  //   };
  // }, []);
  

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
            

            {/* <Stack.Screen name={strings.login} component={Login} /> */}
      <Stack.Screen name={"SplashScreen"} component={SplashScreen} />    
      <Stack.Screen name={"Tabs"} component={BottomTab} />
      <Stack.Screen name={"HomeScreen"} component={HomeScreen} />
      <Stack.Screen name={"MessageScreen"} component={MessageScreen} />
      <Stack.Screen name={"ProfileScreen"} component={ProfileScreen} />
      <Stack.Screen name={"SearchScreen"} component={SearchScreen} />
      <Stack.Screen name={"AddScreen"} component={AddScreen} />



      



      
      




      




    </Stack.Navigator>
  );
};
export default AppStack;
