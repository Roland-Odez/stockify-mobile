import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link } from 'expo-router';
import React from 'react';
import { FlatList, ImageBackground, StyleSheet, Text, View } from 'react-native';


interface MarketStockCardTypes<T> {
    title: string,
    data: T[],
}

  const Item2 = ({ name, img, opp }: Item2Props) => (
    <View className="w-[130px] h-fit justify-end rounded-lg overflow-hidden gap-2 bg-nemo-lightPurple">
      <View className="gap-1.5 flex-1">
        <View className="flex-row justify-between">
          <ImageBackground className="w-full h-[150px] bg-white" source={img}>
            <View className="bg-[#0000007e] w-[30px] h-[30px] items-center justify-center rounded-full absolute top-2 right-2">
              <FontAwesome name="star" size={16} color="#ccc" />
            </View>
          </ImageBackground>
        </View>
      </View>

      <View className="gap-1.5 px-2">
        <Text className="text-white text-base font-semibold">{name}</Text>
      </View>
      <View className="items-center flex-row justify-between px-2 pb-2">
        <Text className="text-[#878585e8] text-sm font-semibold">{opp} opportunities</Text>
        <Feather name="chevron-right" size={12} color="white" />
      </View>
    </View>
  );

const MarketStockCard = ({data, title}: MarketStockCardTypes<Item2Props>) => {
  return (
    <View className="mb-4">
        <View>
            <View className="pb-6 pt-8 flex-row justify-between items-end">
                <Text className="text-white font-bold text-2xl ">
                    {title}
                </Text>
                <Link href={'..'}><Text className="underline text-white text-base">See all</Text></Link>
            </View>
            <FlatList
            data={data}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => <Item2 name={item.name} opp={item.opp} img={item.img} />}
            keyExtractor={(item) => item.name}
            contentContainerStyle={{
                gap: 15
            }}
            />
        </View>
    </View>
  )
}

export default MarketStockCard

const styles = StyleSheet.create({})