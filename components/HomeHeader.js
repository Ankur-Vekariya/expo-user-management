import {
  Entypo,
  FontAwesome,
  Fontisto,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const HomeHeader = ({
  searchNewThing,
  search,
  setSearch,
}) => {
  return (
    <>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <TouchableOpacity>
          <Fontisto name="laboratory" size={30} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="user-circle-o" size={30} color="gray" />
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <Text style={[styles.text, { color: "#4285F4" }]}>T</Text>
        <Text style={[styles.text, { color: "#DB4437" }]}>o</Text>
        <Text style={[styles.text, { color: "#F4B400" }]}>o</Text>
        <Text style={[styles.text, { color: "#4285F4" }]}>g</Text>
        <Text style={[styles.text, { color: "#0F9D58" }]}>l</Text>
        <Text style={[styles.text, { color: "#DB4437" }]}>e</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "#D3D3D3",
          borderRadius: 50,
          padding: 10,
          alignContent: "center",
          alignItems: "center",
          gap: 10,
        }}
      >
        <TouchableOpacity onPress={searchNewThing}>
          <Fontisto name="search" size={26} color="gray" />
        </TouchableOpacity>
        <TextInput
          placeholder="Search"
          style={styles.input}
          onBlur={searchNewThing}
          onChangeText={(text) => setSearch(text)}
          value={search}
        />
        <TouchableOpacity>
          <MaterialIcons name="mic" size={26} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialCommunityIcons name="google-lens" size={26} color="gray" />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignContent: "center",
          alignItems: "center",
          gap: 10,
        }}
      >
        <TouchableOpacity style={styles.button}>
          <MaterialCommunityIcons
            name="image-search-outline"
            size={24}
            color="black"
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Ionicons name="language-outline" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Entypo name="graduation-cap" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <MaterialIcons name="music-note" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  text: { fontSize: 40, fontWeight: 800 },
  input: { width: "60%", height: 50, fontSize: 20 },
  button: {
    flexDirection: "row",
    backgroundColor: "#D3D3D3",
    borderRadius: 50,
    padding: 12,
    justifyContent: "center",
    width: "22.5%",
  },
});
