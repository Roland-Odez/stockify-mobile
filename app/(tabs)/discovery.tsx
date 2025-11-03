
import Header from '@/components/Header';
import Wrapper from '@/components/Wrapper';
import { ScrollView, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <>
    <Wrapper>
      <Header />
      <ScrollView
      >
        
      </ScrollView>
    </Wrapper>
    </>
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
