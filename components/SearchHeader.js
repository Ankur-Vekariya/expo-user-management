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

const SearchHeader = ({ searchNewThing, search, setSearch }) => {
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <Fontisto name="laboratory" size={26} color="gray" />
        </TouchableOpacity>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={[styles.text, { color: "#4285F4" }]}>T</Text>
          <Text style={[styles.text, { color: "#DB4437" }]}>o</Text>
          <Text style={[styles.text, { color: "#F4B400" }]}>o</Text>
          <Text style={[styles.text, { color: "#4285F4" }]}>g</Text>
          <Text style={[styles.text, { color: "#0F9D58" }]}>l</Text>
          <Text style={[styles.text, { color: "#DB4437" }]}>e</Text>
        </View>
        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <FontAwesome name="user-circle-o" size={26} color="gray" />
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: "row",
          borderRadius: 50,
          padding: 10,
          alignContent: "center",
          alignItems: "center",
          gap: 10,
          borderWidth: 1,
          borderColor: "gray",
        }}
      >
        <TouchableOpacity onPress={searchNewThing}>
          <Fontisto name="search" size={22} color="gray" />
        </TouchableOpacity>
        <TextInput
          placeholder="Search"
          style={styles.input}
          onBlur={searchNewThing}
          onChangeText={(text) => setSearch(text)}
          value={search}
        />
        <TouchableOpacity>
          <MaterialIcons name="mic" size={22} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialCommunityIcons name="google-lens" size={22} color="gray" />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default SearchHeader;

const styles = StyleSheet.create({
  text: { fontSize: 30, fontWeight: 800 },
  input: { width: "65%", height: 30, fontSize: 20 },
  button: {
    flexDirection: "row",
    backgroundColor: "#D3D3D3",
    borderRadius: 50,
    padding: 12,
    justifyContent: "center",
    width: "22.5%",
  },
});
