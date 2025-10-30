import { Stack } from 'expo-router';

export default function AuthLayout() {
  return (
    <Stack>
        <Stack.Screen name="email-login" options={{ title: '' }} />
        <Stack.Screen name="forgot-password" options={{ title: '' }} />
        <Stack.Screen name="get-started" options={{ title: '' }} />
        <Stack.Screen name="email-signup" options={{ title: '' }} />
        <Stack.Screen name="signup" options={{ title: '' }} />
    </Stack>
  );
}
