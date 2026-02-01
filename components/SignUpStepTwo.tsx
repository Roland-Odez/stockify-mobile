import { supabase } from "@/utils/supabase";
import { validatePassword } from "@/utils/validatePassword";
import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Image,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";
import { ALERT_TYPE, Toast } from "react-native-alert-notification";
import SingleRadio from "./SingleRadio";

type Form = {
  step: number;
  email: string;
  phone: string;
};

interface SignUpStepTwoProps {
  form: Form;
  next: () => void;
}

const SignUpStepTwo = ({ form, next }: SignUpStepTwoProps) => {
  const [disabled, setDisabled] = useState<boolean>(false);
  const [minChar, setMinChar] = useState<boolean>(false);
  const [conLetNum, setConLetNum] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(true);

  async function signUpWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email: form.email,
      password: password,
      phone: form.phone,
      options: {
        emailRedirectTo: undefined,
      },
    });
    if (error) {
      Toast.show({
        type: ALERT_TYPE.WARNING,
        title: "Error",
        textBody: error.message,
      });
    }
    setLoading(false);
    if (!error) {
      next();
    }
  }

  const handleChangeText = (text: string) => {
    setPassword(text);
    const { hasLetterAndNumber, hasMinLength, isValid } =
      validatePassword(text);
    setConLetNum(hasLetterAndNumber);
    setMinChar(hasMinLength);
    setDisabled(!isValid);
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
      <Text className="text-4xl text-white mb-2 mt-10">
        Please choose a password
      </Text>
      <View className="mt-4 gap-2">
        <Text className="text-[#ccc] text-lg">Password</Text>
        <View className="py-1 px-4 bg-[#f9f9f928] flex-row">
          <TextInput
            placeholder="Enter password"
            placeholderTextColor={"#eee"}
            secureTextEntry={showPassword}
            onChangeText={handleChangeText}
            value={password}
            className="text-lg text-gray-200 flex-1 items-center"
          />

          <Pressable
            onPress={() => setShowPassword((val) => !val)}
            className="justify-center px-2"
          >
            {showPassword ? (
              <Ionicons name="eye" size={24} color="#eee" />
            ) : (
              <Ionicons name="eye-off-sharp" size={24} color="#eee" />
            )}
          </Pressable>
        </View>
      </View>

      <View className="mt-4">
        <SingleRadio selected={conLetNum} text="Contains letters and numbers" />
        <SingleRadio selected={minChar} text="At least 12 characters" />
      </View>
      <View className="flex-1 justify-end">
        <Pressable
          onPress={signUpWithEmail}
          disabled={disabled}
          style={{ opacity: disabled ? 0.5 : 1 }}
          className="bg-nemo-bluePurple rounded-full items-center justify-center py-4 relative"
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

export default SignUpStepTwo;
