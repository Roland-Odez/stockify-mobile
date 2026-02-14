import { supabase } from "@/utils/supabase";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Image,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";
import { ALERT_TYPE, Dialog, Toast } from "react-native-alert-notification";
import Otp from "./Otp";

type Form = {
  step: number;
  email: string;
  phone: string;
};

interface SignUpStepThreeProps {
  form: Form;
  clearForm: () => void;
}

const SignUpStepThree = ({ form, clearForm }: SignUpStepThreeProps) => {
  const [disabled, setDisabled] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const [code, setCode] = useState<string>("");

  const router = useRouter();

  const handlePress = async () => {
    setLoading(true);
    const { error } = await supabase.auth.verifyOtp({
      email: form.email,
      token: code,
      type: "email",
    });
    setLoading(false);
    if (error) {
      Toast.show({
        type: ALERT_TYPE.WARNING,
        title: "Error",
        textBody: error.message,
      });
    }
    if (!error) {
      Dialog.show({
        type: ALERT_TYPE.SUCCESS,
        title: "Success",
        textBody: "successfully created account, continue to create profile",
        button: "continue",
        onPressButton() {
          router.push("/(tabs)/discovery");
          Dialog.hide();
        },
      });
    }
  };

  const handleTextChange = (text: string) => {
    setCode(text);
    if (/^\d{6}$/.test(text)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
    <View className="flex-1">
      <View className="items-center mt-8 mb-5">
        <Image
          source={require("../assets/images/logo.png")}
          className="w-40 h-40 block"
          resizeMode="cover"
        />
      </View>
      <Text className="text-4xl text-white mb-2 mt-10">Check your email</Text>
      <Text className="text-gray-400 text-lg">
        We've sent a verification code to: {form?.email}
      </Text>
      <View className="mt-4 gap-2">
        <Text className="text-[#ccc] text-lg">Code</Text>
        <View className="py-1 px-4 bg-[#f9f9f928]">
          <TextInput
            placeholder="Enter code"
            keyboardType="phone-pad"
            placeholderTextColor={"#eee"}
            onChangeText={handleTextChange}
            maxLength={6}
            value={code}
            className="text-lg text-gray-200"
          />
        </View>
        <Otp email={form.email} />
      </View>
      <View className="flex-1 justify-end">
        <Pressable
          onPress={handlePress}
          disabled={disabled}
          style={{ opacity: disabled ? 0.5 : 1 }}
          className="bg-nemo-bluePurple rounded-full items-center justify-center py-4"
        >
          {loading ? (
            <ActivityIndicator size={"small"} color={"#ddd"} />
          ) : (
            <Text className="text-white text-lg text-center">Continue</Text>
          )}
        </Pressable>
      </View>
    </View>
  );
};

export default SignUpStepThree;
