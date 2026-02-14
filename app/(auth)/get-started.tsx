import Footer from "@/components/Footer";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Link, useRouter } from "expo-router";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";

const GetStarted = () => {
  const router = useRouter();

  return (
    <View className="pt-16 bg-[#130b1d] flex-1 justify-between p-safe-offset-4">
      <Pressable onPress={() => router.back()} className="mt-2">
        <View className="w-14 h-14 border border-white rounded-full items-center justify-center">
          <Ionicons name="arrow-back-sharp" size={24} color="white" />
        </View>
      </Pressable>
      <View className="gap-2.5">
        <View className="items-center mb-10">
          <Image
            source={require("../../assets/images/logo.png")}
            className="w-40 h-40 block"
            resizeMode="cover"
          />
        </View>
        <Text className="text-3xl text-white mb-2">
          Let's get you into Stockify!
        </Text>
        <Text className="text-mediumGrey text-lg">Log in now with...</Text>
        <Link href={"/(auth)/email-login"} className="mt-4">
          <View className="flex-row flex justify-between items-center p-3 rounded-full w-full bg-[#51485c49] pr-6">
            <View className="flex-row gap-5 items-center">
              <View className="bg-nemo-bluePurple w-11 h-11 items-center justify-center rounded-full">
                <FontAwesome name="envelope" size={20} color="white" />
              </View>
              <Text className="text-white text-lg">Email</Text>
            </View>
            <View>
              <Entypo name="chevron-right" size={20} color="white" />
            </View>
          </View>
        </Link>
        <Pressable className="mt-4">
          <View className="flex-row flex justify-between items-center p-3 rounded-full w-full bg-[#51485c49] pr-6">
            <View className="flex-row gap-5 items-center">
              <View className=" w-11 h-11 items-center justify-center rounded-full">
                <Image
                  source={require("../../assets/images/tr-google.png")}
                  className="w-10 h-10 block"
                  resizeMode="cover"
                />
              </View>
              <Text className="text-white text-lg">Google</Text>
            </View>
            <View>
              <Entypo name="chevron-right" size={20} color="white" />
            </View>
          </View>
        </Pressable>

        <View className="flex-row gap-4 items-center justify-center my-3">
          <View className="flex-1 flex-row items-center justify-center gap-0.5">
            {Array.from({ length: 45 }).map((_, i) => (
              <View
                key={i}
                className="w-0.5 h-0.5 bg-[#ffffff47] rounded-full"
              ></View>
            ))}
          </View>
          <Text className="text-mediumGrey text-lg">or</Text>
          <View className="flex-1 flex-row items-center justify-center gap-0.5">
            {Array.from({ length: 45 }).map((_, i) => (
              <View
                key={i}
                className="w-0.5 h-0.5 bg-[#ffffff47] rounded-full"
              ></View>
            ))}
          </View>
        </View>

        <Link
          href={"/(auth)/signup"}
          className="border border-white rounded-full items-center justify-center py-4"
        >
          <Text className="text-white text-lg text-center">Create account</Text>
        </Link>
      </View>

      <Footer />
    </View>
  );
};

export default GetStarted;
