import FontAwesome from "@expo/vector-icons/FontAwesome";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const InvestmentList = ({ title, comp, img, id }: InvestProps) => {
  return (
    <View
      className="h-[60px] flex-row items-center pl-3 justify-between rounded-lg gap-6 bg-nemo-lightPurple"
    >
      <View className="flex-row items-center gap-4 flex-1">
        <Image
        className="w-[35px] h-[35px] rounded-full bg-white"
        source={img}
        />
        <View>
            <Text className="text-white text-sm">{title}</Text>
            <Text className="text-[#928f8f] text-sm">{comp}</Text>
        </View>
      </View>

      <View className="flex-row h-full">
        <View className="gap-1.5 justify-center pr-3">
          <Text className="text-white text-base">$230.30</Text>
          <Text className="text-nemo-green text-sm text-right">+0.46%</Text>
        </View>
        <View className="border-l-[0.5px] border-[#474747] h-fit px-1.5 items-center justify-center">
            <FontAwesome name="star" size={14} color="#474747" />
        </View>
      </View>
    </View>
  );
};

export default InvestmentList;

const styles = StyleSheet.create({});
