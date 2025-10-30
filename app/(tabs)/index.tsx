
import { ThemedText } from '@/components/themed-text';
import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.view}>
      <View style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
      </View>
      <View style={styles.stepContainer}>
        <Link href="/learn">
          <ThemedText className='text-2xl'>Learn
            <Text className='text-xl text-blue-400'>Love</Text>
          </ThemedText>
        </Link>
        <Link href="/faq">
          <ThemedText>Faq</ThemedText>
        </Link>
        <Link href="/notifications">
          <ThemedText>Notifications</ThemedText>
        </Link>
        <Link href="/privacy">
          <ThemedText>Privacy</ThemedText>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
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
