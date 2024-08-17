import { Stack } from 'expo-router'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const AuthLayout = () => {
  return (
    <SafeAreaProvider>
    <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="welcome" />
        <Stack.Screen name="login" />
        <Stack.Screen name="register" />
    </Stack>
    </SafeAreaProvider>
  )
}

export default AuthLayout