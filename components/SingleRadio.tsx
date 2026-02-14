import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import React from "react";
import { Pressable, Text, View } from "react-native";

const SingleRadio = ({
  text,
  selected,
}: {
  text: string;
  selected: boolean;
}) => {
  return (
    <View>
      <Pressable className="flex-row gap-2 items-center">
        <SimpleLineIcons
          name="check"
          size={12}
          color={selected ? "#75faa7" : "#71717a"}
          className="text-center my-2"
        />
        <View>
          <Text className="text-base text-zinc-500">{text}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default SingleRadio;
