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
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import HomeHeader from "./components/HomeHeader";
import SearchHeader from "./components/SearchHeader";
import LinkGrid from "./components/LinkGrid";
import Videos from "./components/Videos";

export default function App() {
  const [searchData, setSearchData] = useState<null>(null);
  const [search, setSearch] = useState<string>("india");
  const [loading, setLoading] = useState<boolean>(false);

  const searchNewThing = () => {
    setLoading(true);
    var myHeaders = new Headers();
    myHeaders.append("apikey", "WGckjfKC06DawOgZHQfyHEuIyrOH2fG8");

    var requestOptions = {
      method: "GET",
      redirect: "follow",
      headers: myHeaders,
    };

    fetch(`https://api.apilayer.com/google_search?q=${search}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log("------------------------------", result);
        setSearchData(result);
        setLoading(false);
      })
      .catch((error) => {
        console.log("error", error);
        setLoading(false);
      });
  };

  console.log("loading========", loading);

  return (
    <View
      style={{
        paddingTop: 40,
        paddingHorizontal: 15,
        gap: 15,
      }}
    >
      {loading ? (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            height: "100%",
            alignContent: "center",
            alignItems: "center",
            alignSelf: "center",
          }}
        >
          <ActivityIndicator size="large" />
        </View>
      ) : searchData === null || !searchData ? (
        <HomeHeader
          searchNewThing={searchNewThing}
          search={search}
          setSearch={setSearch}
        />
      ) : (
        <ScrollView style={{ gap: 10 }} showsVerticalScrollIndicator={false}>
          <SearchHeader
            searchNewThing={searchNewThing}
            search={search}
            setSearch={setSearch}
          />
          <LinkGrid searchData={searchData} />
          <Videos videos={searchData.videos} />
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({});
