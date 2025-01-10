import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import * as Animatable from "react-native-animatable";
import { icons } from "@/constants";
import { useVideoPlayer, VideoView } from "expo-video";
import { ResizeMode, Video } from "expo-av";
interface TrendingProps {
  posts: Array<any>;
}

const zoomIn = {
  0: { scale: 0.9 },
  1: { scale: 1.1 },
};
const zoomOut = {
  0: { scale: 1 },
  1: { scale: 0.9 },
};

const TrendingItem = ({ activeItem, item }) => {
  const [play, setPlay] = useState(false);

  const handlePress = () => {
    console.log("Item pressed:", item.$id); // Debugging line
    setPlay(true);
  };

  return (
    <Animatable.View
      className="mr-5"
      animation={activeItem === item.$id ? zoomIn : zoomOut}
      duration={500}
    >
      {play ? (
        // <VideoView
        //   player={player}
        //   // className="w-52 h-72  rounded-[35px] mt-3 bg-white"

        //   allowsFullscreen
        //   allowsPictureInPicture
        // />
        <Video
          source={{ uri: item.video }}
          className="w-full h-60 rounded-xl mt-3"
          style={{ width: 208, height: 288 }}
          resizeMode={ResizeMode.CONTAIN}
          useNativeControls
          shouldPlay
          onPlaybackStatusUpdate={(status) => {
            if (status.didJustFinish) {
              setPlay(false);
            }
          }}
        />
      ) : (
        // <Text className="text-white text-2xl">abcasdksadasljd</Text>
        <TouchableOpacity
          className="relative flex justify-center items-center"
          activeOpacity={0.7}
          onPress={() => {
            handlePress();
          }}
        >
          <ImageBackground
            source={{
              uri: item.thumbnail,
            }}
            className="w-52 h-72 rounded-[33px] my-5 overflow-hidden shadow-lg shadow-black/40"
            resizeMode="cover"
          />

          <Image
            source={icons.play}
            className="w-12 h-12 absolute"
            resizeMode="contain"
          />
        </TouchableOpacity>
      )}
    </Animatable.View>
  );
};
const Trending = ({ ...props }: TrendingProps) => {
  const [activeItem, setAtiveItem] = useState(props.posts[0]);
  const viewableItemChanged = ({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setAtiveItem(viewableItems[0].key);
    }
  };
  useEffect(() => {});
  return (
    <FlatList
      data={props.posts}
      keyExtractor={(item) => item.$id}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <TrendingItem activeItem={activeItem} item={item} />
      )}
      onViewableItemsChanged={viewableItemChanged}
      viewabilityConfig={{
        itemVisiblePercentThreshold: 70,
      }}
      contentOffset={{
        x: 170,
        y: 0,
      }}
      horizontal
    />
  );
};

export default Trending;
