import React, { useEffect, useState } from "react";
import { Pressable, Text, View } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import CountryListSheet from "./CountryListSheet";

interface CreateProfileStepTwoProps {
  form: PersistentData;
  next: () => void;
  updateField: (key: keyof PersistentData, value: string | number) => void;
}

const CreateProfileStepTwo = ({
  form,
  next,
  updateField,
}: CreateProfileStepTwoProps) => {
  const [country, setCountry] = useState("Nigeria");
  const [show, setShow] = useState<boolean>(true);

  const translateY = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: translateY.value,
        },
      ],
    };
  });

  useEffect(() => {
    const newValue = show ? 0 : 200;

    translateY.value = withTiming(newValue, {
      duration: 50,
      easing: Easing.out(Easing.cubic),
    });
  }, [show]);

  useEffect(() => {
    if (form.nationality) {
      updateField("nationality", form.nationality);
    }
  }, [form.nationality]);

  const handleFormSubmit = async () => {
    updateField("nationality", country);
    next();
  };

  return (
    <View className="flex-1 justify-between">
      <View className="flex-1">
        <Text className="text-4xl text-white mb-2 mt-10">
          What's your nationality?
        </Text>
        <CountryListSheet
          country={country}
          setCountry={setCountry}
          setShow={setShow}
        />
      </View>
      <Animated.View style={[animatedStyle]} className="bg-black">
        <Pressable
          onPress={handleFormSubmit}
          className="bg-nemo-bluePurple rounded-full items-center justify-center py-4"
        >
          <Text className="text-white text-lg text-center">Continue</Text>
        </Pressable>
      </Animated.View>
    </View>
  );
};

export default CreateProfileStepTwo;
