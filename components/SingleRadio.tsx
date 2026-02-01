import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

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
        <View
          className="w-4 h-4 rounded-full items-center justify-center border border-zinc-500"
          style={{ borderColor: selected ? "#4b6cd7" : "#71717a" }}
        >
          <View
            className="w-2 rounded-xl h-2"
            style={{
              backgroundColor: selected ? "#4b6cd7" : "",
            }}
          ></View>
        </View>
        <View>
          <Text className="text-base text-zinc-500">{text}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default SingleRadio;

const styles = StyleSheet.create({});
