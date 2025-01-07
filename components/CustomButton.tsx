import { View, Text, TouchableOpacity, StyleProp } from "react-native";
import React from "react";
interface ButtonProps {
  title?: String;
  handlePress: () => void;
  containerStyles?: String;
  textStyles?: String;
  isLoading?: boolean | undefined;
}
const CustomButton = ({ ...props }: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={props.handlePress}
      activeOpacity={0.7}
      className={`bg-secondary 
        rounded-xl min-h-[62px] 
        justify-center items-center
         ${props.containerStyles} ${props.isLoading ? "opacity-50" : ""}`}
      disabled={props.isLoading}
    >
      <Text
        className={`text-primary font-psemibold text-xl ${props.textStyles}`}
      >
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
