import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';

interface CompanyStockCardTypes<T> {
    title: string,
    data: T[],
}

  const Item = ({ title, img }: ItemProps) => (
    <View className="p-2 w-[130px] rounded-lg gap-6 bg-nemo-lightPurple">
      <View className="gap-1.5 flex-1">
        <View className="flex-row justify-between">
          <Image className="w-[45px] h-[45px] rounded-full bg-white" source={img} />
          <View className="bg-black w-[30px] h-[30px] items-center justify-center rounded-full">
            <FontAwesome6 name="star" size={16} color="#ccc" />
          </View>
        </View>
        <Text className="text-white text-sm">{title}</Text>
      </View>

      <View className="gap-1.5">
        <Text className="text-white text-base">$230.30</Text>
        <Text className="text-nemo-green text-base">+0.46%</Text>
      </View>
    </View>
  );

const CompanyStockCard = ({data, title}: CompanyStockCardTypes<ItemProps>) => {
  return (
    <View>
        <View>
            <View className="pb-4 pt-8">
            <Text className="text-white font-bold text-2xl ">
                {title}
            </Text>
            </View>
            <FlatList
            data={data}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => <Item title={item.title} img={item.img} id={item.id} />}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{
                gap: 15
            }}
            />
        </View>
    </View>
  )
}

export default CompanyStockCard

const styles = StyleSheet.create({})