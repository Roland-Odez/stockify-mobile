import React, { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

interface WrapperProps {
  children: ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.inner}>{children}</View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Wrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 4
  },
  inner: {
    flex: 1,
    backgroundColor: '#000', // optional background
  },
});
