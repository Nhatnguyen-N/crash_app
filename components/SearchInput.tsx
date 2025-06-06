import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { icons } from "@/constants";
import { router, usePathname } from "expo-router";
interface FornFielProps {
  title?: String;
  value?: string;
  placeholder?: string;
  handleChangeText: (e: any) => void;
  otherStyles?: String;
  keyboardType?: string;
}
const SearchInput = ({ initialQuery }: any) => {
  const pathname = usePathname();
  const [query, setQuery] = useState(initialQuery || "");
  return (
    <View
      className={`border-2 border-black-200 focus:border-secondary
      w-full h-16 px-4 bg-black-100 rounded-2xl
      items-center flex-row space-x-4`}
    >
      <TextInput
        className="flex-1 text-white text-base font-pregular mt-0.5"
        value={query}
        placeholder={"Search for a video topic"}
        placeholderTextColor={"#CDCDE)"}
        onChangeText={(e) => setQuery(e)}
      />
      <TouchableOpacity
        onPress={() => {
          if (!query) {
            return Alert.alert(
              "Missing query",
              "Please input something to search results across database"
            );
          }
          if (pathname.startsWith(`/search`)) router.setParams({ query });
          else router.push(`/search/${query}`);
        }}
      >
        <Image source={icons.search} className="w-5 h-5" resizeMode="contain" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
