import Feather from "@expo/vector-icons/Feather";
import {
  BottomSheetFlatList,
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetTextInput,
} from "@gorhom/bottom-sheet";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Image, Pressable, Text, View } from "react-native";

const CountryListSheet = ({
  country,
  setCountry,
  setShow,
}: {
  country: string;
  setCountry: (param: string) => void;
  setShow: (param: boolean) => void;
}) => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const flatListRef = useRef<any>(null);

  const snapPoints = useMemo(() => ["50%", "90%"], []);

  const [allCountries, setAllCountries] = useState<any[]>([]);
  const [filteredCountries, setFilteredCountries] = useState<any[]>([]);

  // Open modal
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  // Handle close
  const handleSheetChanges = useCallback((index: number) => {
    setShow(index < 0);
  }, []);

  // Select country
  const handleSelectCountry = (arg: string) => {
    setCountry(arg);
    bottomSheetModalRef.current?.close();
  };

  // Fetch countries
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name,flags,cca2")
      .then((res) => res.json())
      .then((data) => {
        const sorted = data.sort((a: any, b: any) =>
          a.name.common.localeCompare(b.name.common),
        );

        setAllCountries(sorted);
        setFilteredCountries(sorted);
      });
  }, []);

  // Search handler (production ready)
  const handleSearchCountry = (text: string) => {
    if (!text) {
      setFilteredCountries(allCountries);
      return;
    }

    const filtered = allCountries.filter((c: any) =>
      c.name.common.toLowerCase().includes(text.toLowerCase()),
    );

    setFilteredCountries(filtered);

    // scroll to top after search
    flatListRef.current?.scrollToOffset({
      offset: 0,
      animated: true,
    });
  };

  return (
    <BottomSheetModalProvider>
      {/* Select Button */}
      <View className="mt-4 gap-2">
        <Text className="text-[#ccc] text-lg">Nationality</Text>

        <Pressable
          onPress={handlePresentModalPress}
          className="py-4 px-4 bg-[#5d4d7082] justify-between flex-row rounded-sm"
        >
          <Text className="text-lg text-gray-200">{country}</Text>
          <Feather name="chevron-down" size={20} color={"#eee"} />
        </Pressable>
      </View>

      {/* Bottom Sheet */}
      <BottomSheetModal
        ref={bottomSheetModalRef}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        enableDynamicSizing={false}
        keyboardBehavior="interactive"
        keyboardBlurBehavior="none"
        backgroundStyle={{ backgroundColor: "#5d4d70" }}
        handleIndicatorStyle={{ backgroundColor: "white" }}
      >
        <View style={{ flex: 1 }} className="p-6 gap-4">
          {/* Search */}
          <View className="w-full px-4 bg-[#372a47] border border-gray-400 rounded-lg">
            <BottomSheetTextInput
              placeholder="Search country"
              placeholderTextColor={"#eee"}
              onChangeText={handleSearchCountry}
              className="text-lg text-gray-200 py-3"
            />
          </View>

          {/* List */}
          <BottomSheetFlatList
            ref={flatListRef}
            style={{ flex: 1 }}
            data={filteredCountries}
            keyboardShouldPersistTaps="handled"
            keyExtractor={(item: any) => item.cca2}
            renderItem={({ item }: any) => (
              <Pressable
                style={{
                  flexDirection: "row",
                  padding: 12,
                  alignItems: "center",
                }}
                onPress={() => handleSelectCountry(item.name.common)}
              >
                <Image
                  source={{ uri: item.flags.png }}
                  style={{
                    width: 25,
                    height: 25,
                    marginRight: 12,
                    borderRadius: 999,
                  }}
                />

                <Text className="text-white text-lg">{item.name.common}</Text>
              </Pressable>
            )}
          />
        </View>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
};

export default CountryListSheet;
