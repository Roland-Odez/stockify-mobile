import { supabase } from "@/utils/supabase";
import React, { useEffect, useState } from "react";
import { Alert, Pressable, Text, View } from "react-native";

const Otp = ({ email }: { email: string }) => {
  const [countDown, setCountDown] = useState<number>(180);

  const handlePress = async () => {
    const { error } = await supabase.auth.resend({
      email,
      type: "signup",
    });
    if (error) {
      Alert.alert(error.message);
    } else {
      setCountDown(180);
    }
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
          You can request a new code in {Math.floor(countDown / 60)}:
          {(countDown % 60).toString().padStart(2, "0")}
        </Text>
      )}

      {countDown <= 0 && (
        <Pressable onPress={handlePress}>
          <Text className="text-[#ccc] text-base font-semibold underline">
            Not received a code? Resend
          </Text>
        </Pressable>
      )}
    </View>
  );
};

export default Otp;
