import { supabase } from "@/utils/supabase";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Link, useRouter } from "expo-router";
import { useState } from "react";
import {
  ActivityIndicator,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";
import { ALERT_TYPE, Toast } from "react-native-alert-notification";

const EmailLogin = () => {
  const [show, setShow] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const [loginDetails, setLoginDetails] = useState({ email: "", password: "" });
  const router = useRouter();
  const handleLoginUser = async () => {
    setLoading(true);
    const { email, password } = loginDetails;
    const { error, data } = await supabase.auth.signInWithPassword({
      email,
      password,
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
      Toast.show({
        type: ALERT_TYPE.SUCCESS,
        title: "Success",
        textBody: `Welcome back!`,
        onHide() {
          router.push("/(tabs)/discovery");
        },
      });
    }
  };
  return (
    <View className="pt-16 bg-[#130b1d] flex-1 justify-between p-safe-offset-4">
      <Pressable onPress={() => router.back()} className="mt-6">
        <View className="w-12 h-12 bg-[#31273e88] rounded-full items-center justify-center">
          <Ionicons name="arrow-back-sharp" size={24} color="white" />
        </View>
      </Pressable>
      <View className="mt-24">
        <Text className="text-3xl text-white mb-2">
          Let's log you into Stockify
        </Text>
        <View className="mt-4 gap-2">
          <Text className="text-[#ccc] text-lg">Email</Text>
          <View className="py-1 px-4 border border-[#d4d2d27a] rounded-lg">
            <TextInput
              placeholder="Email address"
              placeholderTextColor={"#d4d2d288"}
              onChangeText={(text) =>
                setLoginDetails((val) => ({ ...val, email: text }))
              }
              value={loginDetails.email}
              className="text-lg text-gray-200"
            />
          </View>
        </View>

        <View className="mt-4 gap-2">
          <Text className="text-[#ccc] text-lg">Password</Text>
          <View className="py-1 px-4 border border-[#d4d2d27a] rounded-lg">
            <TextInput
              placeholder="Your password"
              secureTextEntry={show}
              onChangeText={(text) =>
                setLoginDetails((val) => ({ ...val, password: text }))
              }
              placeholderTextColor={"#d4d2d288"}
              value={loginDetails.password}
              className="text-lg text-gray-200"
            />
            <Pressable
              className="absolute right-8 top-1/3"
              onPress={() => setShow((val) => !val)}
            >
              {show ? (
                <Ionicons name="eye-sharp" size={24} color="#d4d2d288" />
              ) : (
                <Ionicons name="eye-off" size={24} color="#d4d2d288" />
              )}
            </Pressable>
          </View>
        </View>

        <Link href={"/(auth)/forgot-password"} className="mt-3">
          <Text className="underline text-[#ccc] text-lg">
            Forgot password?
          </Text>
        </Link>
      </View>
      <View>
        <Pressable
          onPress={handleLoginUser}
          className="bg-nemo-bluePurple rounded-full items-center justify-center py-4"
        >
          {loading ? (
            <ActivityIndicator size={"small"} color={"#ddd"} />
          ) : (
            <Text className="text-white text-lg text-center">Log in</Text>
          )}
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
          className="items-center justify-center py-4"
        >
          <Text className="text-white text-lg text-center">Create account</Text>
        </Link>
      </View>
    </View>
  );
};

export default EmailLogin;
