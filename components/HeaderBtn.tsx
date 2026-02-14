import { supabase } from "@/utils/supabase";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

type ButtonType = "NOT_LOGIN" | "NO_PROFILE" | "LOGIN_PROFILE";

export const HeaderBtn = () => {
  const [type, setType] = useState<ButtonType>("LOGIN_PROFILE");

  useEffect(() => {
    async function checkUserLogin() {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      const userVerified = session?.user?.user_metadata?.email_verified;
      const userExist = session?.user;

      if (!userExist || !userVerified) {
        setType("NOT_LOGIN");
      } else {
        const { data } = await supabase
          .from("profiles")
          .select("signature")
          .eq("user_id", session?.user.id);
        if (data?.length) {
          if (data[0].signature) {
            setType("LOGIN_PROFILE");
          } else {
            setType("NO_PROFILE");
          }
        } else {
          setType("NO_PROFILE");
        }
      }
    }
    checkUserLogin();
  });

  switch (type) {
    case "NOT_LOGIN":
      return (
        <Link href="/(auth)/signup">
          <View style={styles.link}>
            <MaterialIcons name="person-add-alt" size={20} color="black" />
            <Text style={styles.linkText}>Create account</Text>
          </View>
        </Link>
      );

    case "NO_PROFILE":
      return (
        <Link href="/(auth)/create-profile">
          <View style={styles.link}>
            <MaterialCommunityIcons
              name="clipboard-clock-outline"
              size={20}
              color="black"
            />
            <Text style={styles.linkText}>Complete profile</Text>
          </View>
        </Link>
      );

    case "LOGIN_PROFILE":
      return;
  }
};

const styles = StyleSheet.create({
  link: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00FF99",
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 50,
  },
  linkText: {
    marginLeft: 6,
    fontWeight: "600",
  },
});
