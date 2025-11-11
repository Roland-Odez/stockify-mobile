import Footer from "@/components/Footer";
import Header from "@/components/Header";
import InvestmentList from "@/components/InvestmentList";
import Wrapper from "@/components/Wrapper";
import Feather from "@expo/vector-icons/Feather";
import {
  ScrollView,
  StyleSheet,
  Text,
  View
} from "react-native";

const Invest = () => {

  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "Amazon.com Inc",
      comp: "AMZN",
      img: require(`@/assets/images/amazon.jpg`)
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "INVIDIA Corporation",
      comp: "NVDA",
      img: require(`@/assets/images/invidia.png`)
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Apple, Inc",
      comp: "AAPL",
      img: require(`@/assets/images/apple.png`)
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba1",
      title: "Microsoft Copration",
      comp: "MSFT",
      img: require(`@/assets/images/microsoft.png`)
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f632",
      title: "Alphabet IN (Google)",
      comp: "GOOGL",
      img: require(`@/assets/images/google.png`)
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d723",
      title: "Meta Platform Inc (Facebook)",
      comp: "META",
      img: require(`@/assets/images/meta.jpg`)
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba4",
      title: "Tesla, Inc.",
      comp: 'TESLA',
      img: require(`@/assets/images/tesla.png`)
    }
  ];

  return (
    <>
      <Wrapper>
        <Header />
        <ScrollView className="px-4 pt-6"
          contentContainerStyle={{
            paddingBottom: 40
          }}
        >
          {/* banner */}
          <View className="bg-nemo-bluePurple rounded-lg p-3 overflow-hidden flex-row justify-between items-center">
            <Text className="text-lg font-bold text-white">
              How to read stock cards 👇
            </Text>
            <View className="p-1.5 bg-[#5472d7] rounded-full">
              <Feather name="chevron-right" size={20} color="white" />
            </View>
          </View>
          {/* section 1 */}
          <View className="mb-10">
            <Text className="pt-6 pb-4 text-sm text-white">POPULAR</Text>
            <View className="gap-3">
              {
                DATA.map((data) => (
                  <InvestmentList {...data}key={`${data.title}--${data.id}`} />
                ))
              }
            </View>
          </View>
          <Footer />
        </ScrollView>
      </Wrapper>
    </>
  );
}

export default Invest

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
