import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  TextInput,
} from "react-native";
import { appStyles } from "../../../utils/AppStyles";
import { Spacer } from "../../../components/Spacer";
import TopHeader from "../../../components/TopHeader";
import TopBar from "../../../components/TopBar";
import { images } from "../../../assets/images";

interface ChatItem {
  img: any;
  name: string;
  update?: boolean;
 
}

const SearchScreen = () => {
  const [activeBar, setActiveBar] = useState("Friends");
  const [numColumns, setNumColumns] = useState(3);
  const [searchText, setSearchText] = useState('');

  const handleChange = (value: string) => {
    setSearchText(value);
    
  };

  const chatList: ChatItem[] = [
    { img: images.male2, name: "Joe Rogan" },
    { img: images.male3, name: "Lauren Connors "},
    { img: images.male1, name: "Lauren Connors", },
    { img: images.male5, name: "Joe Rogan" },
    { img: images.male6, name: "Lexi Reegan" },
    { img: images.male7, name: "Jenny" },
    { img: images.male8, name: "Jenny" },
    { img: images.male9, name: "Jenny" },
    { img: images.male10, name: "Jenny" },
    { img: images.male11, name: "Jenny" },
    { img: images.male12, name: "Jenny" },
     { img: images.male13, name: "Joe Rogan" },
    
    
  ];

  const renderChatList = ({ item }: { item: ChatItem }) => (
    <View style={styles.chatItemContainer}>
       <Spacer height={2} />
      <Image source={item.img} style={styles.backgroundImage} />
      <Text style={styles.name}>{item.name}</Text>
    </View>
  );

  return (
    <SafeAreaView style={appStyles.main}>
      <Spacer height={7} />
      <View style={{ paddingHorizontal: 20 }}>
        <TopHeader />
        <Spacer height={20} />
        <TopBar activeBar={activeBar} setActiveBar={setActiveBar} />
        <Spacer height={10} />
       
      </View>
      <Spacer height={10} />
      <View style={styles.searchBox}>
          <TextInput
            style={styles.input}
            placeholder="Search Members"
            textAlign="center"
            placeholderTextColor="white"
            value={searchText}
            onChangeText={handleChange}
            returnKeyType="search"
          />
        </View>
      <Spacer height={20} />
      <FlatList
        data={activeBar === "My Updates" ? chatList.filter((item) => item.update) : chatList}
        contentContainerStyle={{ gap: 5 }}
        renderItem={renderChatList}
        keyExtractor={(item, index) => index.toString()}
        key={numColumns.toString()} // Add key prop with numColumns as the key
        horizontal={false}
        numColumns={numColumns}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  chatItemContainer: {
    alignItems: "center",
    position: "relative",
    
  },
  backgroundImage: {
    
    width: 119,
    height: 116,
    resizeMode: "cover",
  },
  name: {
    position: "absolute",
    bottom: 5,
    left: 10,
    right: 0,
    fontSize: 12,
    color: "white",
  },
  searchBox: {
    width:"98%",
    left:2,
    borderRadius: 9,
    borderWidth: 1,
    borderColor: 'white',
   
  },
  
  
  searchIcon: {
    marginRight: 8,
  },
  input: {
    color: "white",
   
  },
});

export default SearchScreen;
