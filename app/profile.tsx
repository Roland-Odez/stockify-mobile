import { useAuth } from "@/hooks/useAuthContext";
import { supabase } from "@/utils/supabase";
import Feather from "@expo/vector-icons/Feather";
import { Link } from "expo-router";
import { MotiView } from "moti";
import { Skeleton } from "moti/skeleton";
import React, { useEffect, useState } from "react";
import { Switch, Text, TextInput, View } from "react-native";

const Spacer = ({ height, display }: { height?: number; display: boolean }) => (
  <MotiView style={{ height, display: display ? "none" : "flex" }} />
);

const Profile = () => {
  const [isEnabled, setIsEnabled] = useState(true);
  const [user, setUser] = useState<ProfileType | null>(null);
  const { session } = useAuth();

  useEffect(() => {
    async function getUSerProfile() {
      const { data } = await supabase
        .from("profiles")
        .select("first_name, last_name, phone, city, nationality, phone")
        .eq("user_id", session?.user.id);

      if (data) {
        setUser(data[0]);
        // setUser(null);
      }
    }

    getUSerProfile();
  }, [session]);
  const toggleSwitch = () => setIsEnabled((prev) => !prev);

  return (
    <View className="px-4 gap-2">
      <Skeleton width={"70%"} radius={"square"} height={30}>
        {user && (
          <Text className="text-white text-3xl">
            {user?.first_name} {user?.last_name}
          </Text>
        )}
      </Skeleton>
      <Spacer height={0} display={!!user} />
      <Skeleton width={"50%"} radius={"square"} height={30}>
        {user && (
          <Text className="text-[#b7b3b3] text-2xl">{session?.user.email}</Text>
        )}
      </Skeleton>
      <Spacer height={10} display={!!user} />
      <Skeleton width={"100%"} radius={"square"} height={50}>
        {user && (
          <View className="mt-8 gap-2">
            <Text className="text-[#8a8989] text-lg">Phone number</Text>
            <View className="py-1 px-4 border border-[#d4d2d27a] rounded-lg">
              <TextInput
                value={user?.phone}
                readOnly
                className="text-lg text-[#8a8989]"
              />
            </View>
          </View>
        )}
      </Skeleton>
      <Spacer height={10} display={!!user} />
      <Skeleton width={"100%"} radius={"square"} height={50}>
        {user && (
          <View className="mt-8 gap-2">
            <Text className="text-[#8a8989] text-lg">Location</Text>
            <View className="py-1 px-4 border border-[#d4d2d27a] rounded-lg">
              <TextInput
                value={`${user?.city}, ${user?.nationality}`}
                readOnly
                className="text-lg text-[#8a8989]"
              />
            </View>
          </View>
        )}
      </Skeleton>
      <Spacer height={10} display={!!user} />
      <Skeleton width={"100%"} radius={"square"} height={70}>
        {user && (
          <View className="mt-8 gap-2">
            <Text className="text-[#8a8989] text-lg uppercase">Security</Text>
            <Link href="/(auth)/forgot-password" className="mt-3">
              <View className="flex-row justify-between items-center w-full">
                <Text className="text-white text-xl">Change password</Text>
                <Feather name="chevron-right" size={18} color="white" />
              </View>
            </Link>
          </View>
        )}
      </Skeleton>
      <Spacer height={10} display={!!user} />
      <Skeleton width={"100%"} radius={"square"} height={70}>
        {user && (
          <View className="mt-8 gap-2">
            <Text className="text-[#8a8989] text-lg uppercase">
              Notifications
            </Text>
            <View className="flex-row items-center justify-between">
              <Text className="text-xl text-white">Market alerts</Text>
              <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isEnabled ? "#1974cf" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
          </View>
        )}
      </Skeleton>
      <Spacer height={10} display={!!user} />
      <Skeleton width={"100%"} radius={"square"} height={70}>
        {user && (
          <View className="mt-8 gap-2">
            <Text className="text-[#8a8989] text-lg uppercase">other</Text>
            <Link href="/privacy" className="mt-3">
              <View className="flex-row justify-between items-center w-full">
                <Text className="text-white text-xl">Privacy Policy</Text>
                <Feather name="chevron-right" size={18} color="white" />
              </View>
            </Link>
          </View>
        )}
      </Skeleton>
    </View>
  );
};

export default Profile;
