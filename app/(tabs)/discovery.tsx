import CarouselAd from "@/components/CarouselAd";
import CompanyStockCard from "@/components/CompanyStockCard";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MarketAlert from "@/components/MarketAlert";
import MarketStockCard from "@/components/MarketStockCard";
import MarketStockTableCard from "@/components/MarketStockTableCard";
import { RenderItem } from "@/components/RenderItem";
import Wrapper from "@/components/Wrapper";
import Feather from "@expo/vector-icons/Feather";
import { Link } from "expo-router";
import { useCallback, useState } from "react";
import {
  Image,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

export default function HomeScreen() {
  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "Amazon.com Inc",
      img: require(`@/assets/images/amazon.jpg`)
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "INVIDIA Corporation",
      img: require(`@/assets/images/invidia.png`)
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Apple, Inc",
      img: require(`@/assets/images/apple.png`)
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba1",
      title: "Microsoft Copration",
      img: require(`@/assets/images/microsoft.png`)
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f632",
      title: "Alphabet IN (Google)",
      img: require(`@/assets/images/google.png`)
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d723",
      title: "Meta Platform Inc (Facebook)",
      img: require(`@/assets/images/meta.jpg`)
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba4",
      title: "Tesla, Inc.",
      img: require(`@/assets/images/tesla.png`)
    }
  ];
  const DATA2 = [
    {
      name: "Penny Stocks to watch",
      opp: 10,
      img: require('@/assets/images/penny.jpg')
    },
    {
      name: "oil & Gas",
      opp: 25,
      img: require('@/assets/images/oilgas.jpeg')
    },
    {
      name: "Crypto Treasuries",
      opp: 20,
      img: require('@/assets/images/crypto-mine.jpg')
    },
    {
      name: "Gold mines",
      opp: 15,
      img: require('@/assets/images/gold.jpg')
    }
  ]
  const DATA3 = [
    {
      name: "Today's analysis rating changes",
      linkText: 'See all',
      img: require('@/assets/images/penny.jpg')
    },
    {
      name: "Now a Buy, FormFactor inc.",
      linkText: 'Find out more',
      img: require('@/assets/images/oilgas.jpeg')
    }
  ]

   const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <>
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
          {/* banner */}
          <View className="flex-row gap-2 bg-nemo-bluePurple rounded-lg p-3 overflow-hidden">
            <Image
              source={require("@/assets/images/banner.avif")}
              className="rounded-xl w-[100px] h-[120px] bg-black object-contain"
            />
            <View className="px-2 gap-2 flex-1">
              <Text className="text-xl font-bold text-white">
                Learn with Stockify
              </Text>
              <Text className="text-lg font-medium text-white text-wrap">
                Explore helpful tips and resources to grow your trading skills
              </Text>
              <View style={styles.link} className="bg-black rounded-full">
                <Link href={"/(tabs)/stockify-ai"} className="py-1.5 gap-3">
                  <View className="gap-1 flex-row items-center justify-center">
                    <Text className="text-white text-lg font-medium">
                      Let's go
                    </Text>
                    <Feather name="arrow-right" size={18} color="white" />
                  </View>
                </Link>
              </View>
            </View>
          </View>
          {/* section 1 */}
          <CompanyStockCard 
            data={DATA} 
            title="The Magnificient Seven"
          />
          {/* section 2 */}
          <CompanyStockCard 
            data={DATA} 
            title="Great Stocks Predicted To Grow"
          />
          {/* adverts */}
          <View className="rounded-lg overflow-hidden my-8">
            <View className="p-3 bg-nemo-green">
              <Text className="text-black font-semibold text-xl">Win a cash reward 💸</Text>
            </View>
            <View className="p-3 bg-nemo-lightGreen">
                <Text className="text-black text-base mt-3 font-semibold">Win a <Text className="text-nemo-bluePurple font-bold">$50 reward</Text> when you make a first deposit of $1000</Text>
                <Text className="text-black text-base mt-4 font-semibold">Or, a deposit $100 to recieve $10.</Text>
                <TouchableOpacity className="items-center justify-center rounded-lg w-full py-4 mt-4 bg-black">
                  <Link href='/(auth)/get-started'><Text className="text-white">Create account</Text></Link>
                </TouchableOpacity>
                <Text className="underline text-black text-sm mt-2">T&C apply*</Text>
            </View>
          </View>
          {/* articles */}
          <MarketStockCard
            data={DATA2}
            title="Want higher risk / reward?"
          />
          {/* Alerts */}
          <MarketAlert
            data={DATA3}
            title="Today's Alerts"
          />
          {/* Analysis Carousel */}
          <View className="mb-4">
            <View>
              <View className="pt-8">
                <Text className="text-white font-bold text-2xl ">
                  Analysis
                </Text>
              </View>
            <CarouselAd RenderItem={RenderItem()} />
            </View>
          </View>
          <MarketStockCard
            data={DATA2}
            title="Want higher risk / reward?"
          />
          <MarketStockTableCard />
          <Footer />
        </ScrollView>
      </Wrapper>
    </>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
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
    position: "absolute",
  },
  link: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 4,
  },
});
