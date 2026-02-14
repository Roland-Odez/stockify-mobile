import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

const StockifyAI = () => {
    const [message, setMessage] = useState('')
  return (
    <View style={styles.view} className='bg-[#0c192bf2]'>
      <View className='justify-between flex-1'>
        <View className='flex-row flex-1 p-4 gap-4 items-start'>
          <View className='px-1.5 pt-1.5 w-10 h-10 bg-nemo-green rounded-full'>
            <Image
              source={require('../../assets/images/logo.png')}
              style={styles.img}
              resizeMode='cover'
            />
          </View>
          <View>
            <Text className='text-white text-base pr-12 leading-relaxed mb-6'>
              Hi, i'm Stockify AI. I'm here to
              help you make more informed
              investing decisions. I can provid 
              insights on investments and offer
              analysis on different stocks and
              markets. Here are some ideas of
              what you can ask me:
            </Text>

            <Text className='text-white text-base'>- What's the price of Tesla?</Text>
            <Text className='text-white text-base'>- Tell me about Delta.</Text>
            <Text className='text-white text-base'>- What does Amegen do?</Text>
            <Text className='text-white text-base'>- Compare Ford to Tesla</Text>
            <Text className='text-white text-base'>- Is MSFT a good investment?</Text>
            <Text className='text-white text-base'>- what are dividends?</Text>
            <Text className='text-white text-base'>- what are ETFs?</Text>
          </View>
        </View>

        <View className='border-t border-gray-500 p-4'>
          {/* text input */}
          <View className='border border-gray-500 rounded-lg px-4 flex-row items-center gap-2'>
            <TextInput 
              onChangeText={setMessage}
              placeholder='Your message'
              placeholderTextColor='#6b7280'
              value={message}
              className='text-xl text-[#6b7280] flex-1 py-4'/>
              <Pressable>
                <Ionicons name="paper-plane-sharp" className='rotate-45' size={24} color="white" />
              </Pressable>
          </View>
          <View className='text-center mt-2'>
            <Text className='text-[#6b7280] text-center text-sm'>Stockify AI is an experimental beta service, you agree to use it at your</Text>
            <Text className='text-[#6b7280] text-center text-sm'> own risk, and accept our terms</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default StockifyAI

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignContent: 'space-between'
  },
  text: {
    color: 'white'
  },
  img: {
    width: 25,
    height: 25,
  }
})