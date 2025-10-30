
import { ThemedText } from '@/components/themed-text'
import { Link } from 'expo-router'
import React from 'react'
import { StyleSheet, View } from 'react-native'

const GetStarted = () => {
  return (
    <View>
        <View style={styles.titleContainer}>
            <ThemedText type="title">Welcome!</ThemedText>
            </View>
            <View style={styles.stepContainer}>
            <Link href="/forgot-password">
                <ThemedText>Forgot Password</ThemedText>
            </Link>
            <Link href="/email-login">
                <ThemedText>Email Login</ThemedText>
            </Link>
            <Link href="/email-signup">
                <ThemedText>Email signup</ThemedText>
            </Link>
            <Link href="/signup">
                <ThemedText>Signup</ThemedText>
            </Link>
        </View>
    </View>
  )
}

export default GetStarted

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});