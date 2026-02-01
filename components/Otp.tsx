import { supabase } from "@/utils/supabase";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Alert, Pressable, Text, View } from "react-native";

const Otp = ({ email }: { email: string }) => {
  const [countDown, setCountDown] = useState<number>(180);
  const [loading, setLoading] = useState<boolean>(false);

  const handlePress = async () => {
    setLoading(true);
    const { error } = await supabase.auth.resend({
      email,
      type: "signup",
    });
    if (error) {
      Alert.alert(error.message);
    } else {
      setCountDown(180);
    }
    setLoading(false);
  };

  useEffect(() => {
    const code = setInterval(() => {
      if (countDown > 0) {
        setCountDown((val) => val - 1);
      }
    }, 1000);

    return () => clearInterval(code);
  }, [countDown]);

  return (
    <View>
      {countDown > 0 && (
        <Text className="text-[#ccc] text-base font-semibold">
          Code expires in {Math.floor(countDown / 60)}:
          {(countDown % 60).toString().padStart(2, "0")}
        </Text>
      )}

      {countDown <= 0 && (
        <Pressable
          onPress={handlePress}
          disabled={loading ? true : false}
          style={{ opacity: loading ? 0.5 : 1 }}
          className="border-nemo-bluePurple border-2 rounded-full items-center justify-center py-4 mt-10"
        >
          {loading ? (
            <ActivityIndicator size={"small"} color={"#ddd"} />
          ) : (
            <Text className="text-white text-lg text-center">Resend OTP</Text>
          )}
        </Pressable>
      )}
    </View>
  );
};

export default Otp;
