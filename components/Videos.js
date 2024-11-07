import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

const Videos = ({ videos }) => {
  console.log("------------------------", videos);
  const Item = ({ item }) => (
    <View style={styles.item}>
      <TouchableOpacity style={{ flexDirection: "row", gap: 10 }}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: item?.image_url,
          }}
        />
        <View>
          <Text style={{ fontSize: 16, fontWeight: 500, color: "black" }}>
            {item.author}
          </Text>
          <Text style={{ fontSize: 14, fontWeight: 300 }}>{item.date}</Text>
        </View>
      </TouchableOpacity>
      {/* <View>
        <Text style={{ fontSize: 16 }}>{item.description}</Text>
      </View> */}
    </View>
  );
  return (
    <View>
      <Text>Videos</Text>
      <FlatList
        data={videos}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Videos;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "white",
    paddingVertical: 10,
    gap: 10,
    borderTopWidth: 2,
    borderTopColor: "#cccccc",
  },
  title: {
    fontSize: 12,
  },
  tinyLogo: {
    width: 150,
    height: 75,
    borderRadius: 10,
    alignSelf: "center",
  },
});
