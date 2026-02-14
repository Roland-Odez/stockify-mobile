import { Stack, useRouter } from "expo-router";

export default function AuthLayout() {
  const router = useRouter();
  return (
    <Stack>
      <Stack.Screen
        name="email-login"
        options={{
          headerShown: false,
          title: "",
          headerTransparent: true,
        }}
      />
      <Stack.Screen name="forgot-password" options={{ headerShown: false }} />
      <Stack.Screen
        name="get-started"
        options={{
          headerShown: false,
          title: "",
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="email-signup"
        options={{
          headerShown: false,
          title: "",
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="create-profile"
        options={{
          headerShown: false,
          title: "",
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="signup"
        options={{
          headerShown: false,
          title: "",
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="auth-complete"
        options={{
          headerShown: false,
          title: "",
          headerTransparent: true,
        }}
      />
    </Stack>
  );
}
