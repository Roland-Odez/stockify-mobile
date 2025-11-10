import FontAwesome from '@expo/vector-icons/FontAwesome'
import { Link } from 'expo-router'
import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const MarketStockTableCard = () => {
  return (
    <View
        style={{
            paddingVertical: 20,
        }}
        >
        <View 
        style={[,
            {
            borderRadius: 20,
            padding: 10
            },
        ]}
        >
            <ImageBackground
            source={require("@/assets/images/skyscrapper.png")}
            className="justify-start items-start overflow-hidden rounded-xl"
            imageStyle={{
                alignItems: 'flex-start', 
                resizeMode: 'stretch',
                opacity: 0.6
            }}
            >
            <View className="w-screen absolute bottom-0 left-0 h-[52%] bg-[#000000e1]"
            style={{
                boxShadow: '0px -35px 60px 15px #000000ec'
            }}
            />
            <View className="bg-[#0000007e] w-[35px] h-[35px] items-center justify-center rounded-full absolute top-2 right-2">
            <FontAwesome name="star" size={18} color="#ccc" />
            </View>
            <Text className="mt-[180px] text-white text-2xl font-semibold ml-2">Bigger Bank Dividends</Text>
            <Text className="mt-4 text-white text-lg font-medium ml-2" numberOfLines={2}>Invest in Well Street's biggest banks - they've just raised their cash payouts to shareholders!</Text>
            <Text className="mt-3 text-white text-sm bg-[#ffffff58] rounded-full px-3 py-1 self-start ml-2">50 opportunities</Text>
            <View className="gap-1 mt-8 w-full">
            {Array.from({length: 5}).map((_, id) => (
            <View className="items-center flex-row w-full pr-2 bg-[#1a1a1a]" key={`monrore${id}`}>
                <View className="bg-[#ffffff58] items-center justify-center w-6 h-12 px-2"><Text className="text-white font-semibold">{id+1}</Text></View>
                <View className="flex-row items-center justify-between ml-3 py-1 flex-1">
                <Image source={require('@/assets/images/jpmorgan.png')} className="w-[35px] h-[35px] rounded-full"/>
                <Text className="text-base mt-2 text-white w-[150px]" numberOfLines={1}>JPMorgan Chase & jack Mayor </Text>
                <Text className="text-white text-base text-center">$230.30</Text>
                <Text className="text-nemo-green text-base mt-1 text-center">+0.46%</Text>
                </View>
            </View>
            ))}
            </View>
            </ImageBackground>
            <TouchableOpacity
            style={{
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 20,
                paddingVertical: 12,
                marginVertical: 12
            }}
            className="bg-nemo-bluePurple"
            >
            <Link href={'/(auth)/get-started'}><Text className="text-white text-lg">View more</Text></Link>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default MarketStockTableCard

const styles = StyleSheet.create({})