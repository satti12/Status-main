import React, { useEffect, useState } from "react";
import {
  Alert,
  LogBox,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  FlatList,
} from "react-native";
import { colors } from "../../../utils/colors";
import { appStyles } from "../../../utils/AppStyles";
import { Spacer } from "../../../components/Spacer";
import TopHeader from "../../../components/TopHeader";
import TopBar from "../../../components/TopBar";
import FriendList from "./FriendList";
import { images } from "../../../assets/images";

interface ChatItem {
  img: any; // Replace 'any' with the actual type of your image source
  name: string;
  message: string;
  time: string;
  count?: string;
  update?: boolean;
}

const HomeScreen = () => {
  const [activeBar, setActiveBar] = useState("Friends");

  const chatList: ChatItem[] = [
    {
      img: images.man9,
      name: "Lauren Connors",
      message: "Hey everyone! Statuss is great. Here’s a photo of my view...",
      time: "8:34 AM",
      count: "2",
      update: true,
    },
    {
      img: images.man2,
      name: "Joe Rogan",
      message: "I’m doing stand-up tonight at the Comedy Club. Come on...",
      time: "7:01 AM",
      count: "10",
    },
    {
      img: images.man3,
      name: "Lexi Reegan",
      message: "Any good movies on Netflix or Amazon Prime?",
      time: "JAN 12",
      count: "14",
    },
    {
      img: images.man4,
      name: "Jenny",
      message:
        "I think that people should be more kind to one another. Just saying...",
      time: "JAN 12",
      //   count: "2",
    },
    // Add the rest of your chatList items here
  ];

  const renderChatList = ({ item, index }: { item: ChatItem; index: number }) => {
    console.log("Item Index:", index);

    return <FriendList item={item} />;
  };

  return (
    <SafeAreaView style={appStyles.main}>
      <Spacer height={7} />
      <View style={{ paddingHorizontal: 20 }}>
        <TopHeader />
        <Spacer height={20} />

        <TopBar activeBar={activeBar} setActiveBar={setActiveBar} />
      </View>
      <Spacer height={10} />
      <View>
        <FlatList
          data={activeBar === "My Updates" ? chatList.filter(item => item.update) : chatList}
          contentContainerStyle={{
            gap: 5,
          }}
          renderItem={renderChatList}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
