
import { ThemedText } from '@/components/themed-text'
import { Link } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'

const EmailLogin = () => {
  return (
    <View>
      <Text>EmailLogin</Text>
      <Link href="/forgot-password">
          <ThemedText>Forgot Password</ThemedText>
      </Link>
    </View>
  )
}

export default EmailLogin

const styles = StyleSheet.create({})