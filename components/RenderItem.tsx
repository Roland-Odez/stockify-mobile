import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface RenderItemOptions {
  rounded?: boolean;
}

export const RenderItem =
  (options: RenderItemOptions = {}) =>
  ({ item, index }: { item: string; index: number }) => {
    return (
      <View
        key={index}
        style={{
          paddingVertical: 20,
          paddingRight: 40
        }}
      >
        <View className="" 
        style={[
          styles.container,
          {
            backgroundColor: item,
            borderRadius: 20,
            padding: 10
          },
        ]}
        >
          <View className="bg-[#0000007e] w-[35px] h-[35px] items-center justify-center rounded-full absolute top-2 right-2">
            <FontAwesome name="star" size={18} color="#ccc" />
          </View>
          <Text className="mt-8 text-white text-2xl font-semibold">Top Gainers Today</Text>
          <Text className="mt-10 text-white text-lg font-medium" numberOfLines={2}>These stocks have recently increased in price and could be great investments if they keep their stocks safe is going to be an up time high</Text>
          <Text className="mt-3 text-white text-sm bg-[#ffffff58] rounded-full px-3 py-1 self-start">50 opportunities</Text>
          <View className="flex-row gap-3 mt-4">
            <View className="items-center py-2 bg-[#ffffff58] rounded-xl flex-1">
              <Image source={require('@/assets/images/penny.jpg')} className="w-[40px] h-[40px] rounded-full"/>
              <Text className="text-base mt-2 text-white">RHLD</Text>
              <Text className="text-nemo-green text-base mt-1">+0.46%</Text>
              <Text className="text-white text-base">$230.30</Text>
            </View>
            <View className="items-center py-2 bg-[#ffffff58] rounded-xl flex-1">
              <Image source={require('@/assets/images/penny.jpg')} className="w-[40px] h-[40px] rounded-full"/>
              <Text className="text-base mt-2 text-white">TERN</Text>
              <Text className="text-nemo-green text-base mt-1">+0.46%</Text>
              <Text className="text-white text-base">$230.30</Text>
            </View>
            <View className="items-center py-2 bg-[#ffffff58] rounded-xl flex-1">
              <Image source={require('@/assets/images/penny.jpg')} className="w-[40px] h-[40px] rounded-full"/>
              <Text className="text-base mt-2 text-white">MD</Text>
              <Text className="text-nemo-green text-base mt-1">+0.46%</Text>
              <Text className="text-white text-base">$230.30</Text>
            </View>
          </View>
          <TouchableOpacity 
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 20,
              paddingVertical: 9,
              marginVertical: 11
            }}
            className="bg-nemo-bluePurple"
          >
            <Link href={'/(auth)/get-started'}><Text className="text-white text-lg">View all</Text></Link>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
});
