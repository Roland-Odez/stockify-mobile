import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const AuthComplete = () => {
  return (
    <View className="pt-4 bg-[#0c192bf2] flex-1 justify-between p-safe-offset-4">
      <View>
        <SimpleLineIcons
          name="check"
          size={70}
          color="white"
          className="text-center my-3"
        />
        <Text className="text-3xl text-white mb-4 font-bold text-center">
          Profile Created
        </Text>
        <Text className="text-lg text-white mb-2 font-bold text-center">
          Congratulations, your profile has been successfully created, lets dive
          in and seen what Stockify has for you.
        </Text>
      </View>
      <Link
        href={"/(tabs)/discovery"}
        className="items-center justify-center py-4 bg-nemo-bluePurple rounded-md"
      >
        <Text className="text-white text-lg text-center">Let's go</Text>
      </Link>
    </View>
  );
};

export default AuthComplete;
