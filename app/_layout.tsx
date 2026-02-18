import Menu from "@/components/Menu";
import { MenuAnimationProvider } from "@/context/MenuAnimationContext";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { AuthProvider } from "@/hooks/useAuthContext";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { AlertNotificationRoot } from "react-native-alert-notification";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "react-native-reanimated";
import "../global.css";

export const unstable_settings = {
  anchor: "(tabs)",
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <GestureHandlerRootView>
      <MenuAnimationProvider>
        <AlertNotificationRoot>
          <AuthProvider>
            <ThemeProvider
              value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
            >
              <View style={{ flex: 1, flexDirection: "row" }}>
                <Menu />
                <Stack
                  screenOptions={{
                    headerTitleAlign: "center",
                    headerStyle: { backgroundColor: "black" },
                    headerTitleStyle: {
                      fontSize: 18,
                      fontWeight: "bold",
                      color: "white",
                    },
                  }}
                >
                  <Stack.Screen
                    name="(tabs)"
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="(auth)"
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen name="faq" options={{ title: "FAQs" }} />
                  <Stack.Screen
                    name="learn"
                    options={{ title: "Learn with Stockify" }}
                  />
                  <Stack.Screen
                    name="notifications"
                    options={{ title: "Notifications" }}
                  />
                  <Stack.Screen
                    name="privacy"
                    options={{ title: "Privacy Policy" }}
                  />
                  <Stack.Screen name="profile" options={{ title: "Profile" }} />
                </Stack>
              </View>
              <StatusBar style="auto" />
            </ThemeProvider>
          </AuthProvider>
        </AlertNotificationRoot>
      </MenuAnimationProvider>
    </GestureHandlerRootView>
  );
}
