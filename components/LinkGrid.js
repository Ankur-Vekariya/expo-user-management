import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

const LinkGrid = ({ searchData }) => {
  console.log(searchData?.organic);
  const Item = ({ item }) => (
    <View style={styles.item}>
      <TouchableOpacity style={{ flexDirection: "row", gap: 10 }}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: item?.image,
          }}
        />
        <View>
          <Text style={{ fontSize: 16, fontWeight: 500, color: "black" }}>
            {item.title}
          </Text>
          <Text style={{ fontSize: 14, fontWeight: 300 }}>
            {item.display_link}
          </Text>
        </View>
      </TouchableOpacity>
      <View>
        <Text style={{ fontSize: 16 }}>{item.description}</Text>
      </View>
    </View>
  );
  return (
    <FlatList
      data={searchData?.organic}
      renderItem={({ item }) => <Item item={item} />}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default LinkGrid;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "white",
    paddingVertical: 10,
    gap: 10,
    borderTopWidth: 3,
    borderBottomWidth: 3,
    borderTopColor: "#cccccc",
    borderBottomColor: "#cccccc",
  },
  title: {
    fontSize: 12,
  },
  tinyLogo: {
    width: 25,
    height: 25,
    borderRadius: 50,
    alignSelf: "center",
    // alignContent: "center",
  },
});
