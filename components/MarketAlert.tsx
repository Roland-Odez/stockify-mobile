import Feather from '@expo/vector-icons/Feather';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface MarketAlertTypes<T> {
    title: string,
    data: T[],
}

  const Item3 = ({ name, img, linkText }: Item3Props) => (
    <LinearGradient className="w-[240px] rounded-lg overflow-hidden p-3.5 gap-4 bg-nemo-lightPurple"
      colors={[
        'rgba(25,116,207,1)',  // #1974cf
        'rgba(87,199,133,1)',  // #57c785
      ]}
      start={{ x: 1, y: 0.7 }}
      end={{ x: 1, y: 0 }}
      
    >
      <View className="gap-4 flex-row items-center w-full text-wrap">
        <Image className="w-[40px] h-[40px] bg-white rounded-full p-0.5 border border-white" source={img} />
        <View className="flex-1">
          <Text className="text-white text-base font-semibold">{name}</Text>
        </View>
      </View>

      <TouchableOpacity className="items-center flex-row justify-between p-2.5 px-4 bg-black rounded-full">
        <Text className="text-white text-sm font-bold">{linkText}</Text>
        <Feather name="arrow-right" size={12} color="white" />
      </TouchableOpacity>
    </LinearGradient>
  );

const MarketAlert = ({data, title}: MarketAlertTypes<Item3Props>) => {
  return (
    <View className="mb-4">
        <View>
            <View className="pb-6 pt-8">
            <Text className="text-white font-bold text-2xl ">
                {title}
            </Text>
            </View>
            <FlatList
            data={data}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => <Item3 name={item.name} linkText={item.linkText} img={item.img} />}
            keyExtractor={(item) => item.name}
            contentContainerStyle={{
                gap: 15
            }}
            />
        </View>
    </View>
  )
}

export default MarketAlert

const styles = StyleSheet.create({})