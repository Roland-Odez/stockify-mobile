import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Wrapper from '@/components/Wrapper';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Link } from 'expo-router';
import { useCallback, useState } from 'react';
import { RefreshControl, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Portfolio = () => {
    const [refreshing, setRefreshing] = useState(false);
  
    const onRefresh = useCallback(() => {
      setRefreshing(true);
      setTimeout(() => {
        setRefreshing(false);
      }, 2000);
    }, []);
  return (
    <Wrapper>
        <Header />
        <ScrollView className="px-4 pt-6"
          contentContainerStyle={{
            paddingBottom: 40
          }}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          <View className='mb-6'>
            <View className='gap-3 '>
              <Text className='text-white text-4xl'>Hello</Text>
              <Text className='text-white text-lg'>Here's an overview of your account and portfolio</Text>
            </View>
            <View className='mt-5 gap-2'>
              <View className='bg-nemo-lightPurple p-5 gap-5 items-start'>
                <View className='flex-row items-center gap-4'>
                  <FontAwesome6 name="user-large" size={14} color="white" />
                  <Text className='text-white text-xl font-semibold'>1. Create your account</Text>
                </View>
                <View className='px-3 flex-row items-center gap-2 py-1 rounded-full bg-nemo-lighterPurple '>
                  <MaterialCommunityIcons name="timer-outline" size={20} color="#878585e8" />
                  <Text className='text-[#878585e8] text-base'>Usually takes 30 seconds</Text>
                </View>
                <View>
                  <Text className='text-white text-base'>•  6,000+ global stocks and ETFs;</Text>
                  <Text className='text-white text-base'>•  Fractional shares from $1;</Text>
                  <Text className='text-white text-base'>•  0% Commission;</Text>
                  <Text className='text-white text-base'>•  Deposit protection up to $500,000;</Text>
                  <Text className='text-white text-base'>•  ADGM FSRA regulated.</Text>
                </View>
                <View className='gap-4 flex-row mb-2'>
                  <TouchableOpacity
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 20,
                        paddingVertical: 10,
                        paddingHorizontal: 20
                    }}
                    className="bg-nemo-bluePurple"
                    >
                    <Link href={'/(auth)/signup'}><Text className="text-white text-lg">Create account</Text></Link>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 20,
                        paddingVertical: 10,
                        paddingHorizontal: 20
                    }}
                    className="bg-nemo-lighterPurple"
                    >
                    <Link href={'/(auth)/get-started'}><Text className="text-white text-lg">Log in</Text></Link>
                  </TouchableOpacity>
                </View>
              </View>
              <View className='bg-nemo-lightPurple p-5 gap-5 flex-row items-center'>
                <MaterialCommunityIcons name="clipboard-clock-outline" size={24} color="#878585e8" />
                <Text className='text-[#878585e8] text-xl font-semibold'>2. Complete your profile</Text>
              </View>
              <View className='bg-nemo-lightPurple p-5 gap-5 flex-row items-center'>
                <MaterialCommunityIcons name="fingerprint" size={24} color="#878585e8" />
                <Text className='text-[#878585e8] text-xl font-semibold'>2. Verify your identity</Text>
              </View>
              <View className='bg-nemo-lightPurple p-5 gap-5 flex-row items-center'>
                <MaterialIcons name="wallet" size={24} color="#878585e8" />
                <Text className='text-[#878585e8] text-xl font-semibold'>4. Make your first deposit</Text>
              </View>
              <View className='bg-nemo-lightPurple p-5 gap-5 flex-row items-center'>
                <AntDesign name="dollar" size={24} color="#878585e8" />
                <Text className='text-[#878585e8] text-xl font-semibold'>5. Make your first Investment</Text>
              </View>
            </View>
          </View>
          <Footer />
        </ScrollView>
      </Wrapper>
  )
}

export default Portfolio

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: 'white'
  }
})