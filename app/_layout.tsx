import { Stack } from "expo-router";
import {Drawer} from "expo-router/drawer";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="signUp" />
      <Stack.Screen name="forgetPassword1" />
      <Stack.Screen name="forgetPassword2" />
      <Stack.Screen name="newPassword" />
    </Stack>
  )

}



