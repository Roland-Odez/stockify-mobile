import { useMenuAnimation } from '@/context/MenuAnimationContext';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import { Href, Link, useLocalSearchParams, usePathname } from 'expo-router';
import React from 'react';
import { Pressable, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

interface MenuLink {
  name: string;
  path?: Href;
  icon: (color: string)=> React.ReactElement;
  innerLink?: { name: string; path: Href }[];
}

const menuLinks: MenuLink[] = [
  {
    name: 'Portfolio',
    path: '/(tabs)/portfolio',
    icon: (color) => <SimpleLineIcons name="bag" size={22} color={color} />,
  },
  {
    name: 'Discover',
    icon: (color) => <FontAwesome6 name="earth-americas" size={22} color={color} />,
    innerLink: [
      { name: 'Stocks & ETFs', path: '/(tabs)/discovery?tab=stocks' },
      { name: 'Crypto', path: '/(tabs)/discovery?tab=crypto' },
      { name: 'Boost', path: '/(tabs)/discovery?tab=boost' },
    ],
  },
  {
    name: 'Invest',
    path: '/(tabs)/invest',
    icon: (color) => <AntDesign name="dollar" size={22} color={color} />,
  },
  {
    name: 'Stockify AI',
    path: '/(tabs)/stockify-ai',
    icon: (color) => <FontAwesome6 name="microchip" size={22} color={color} />,
  },
];

const pagesLinks: MenuLink[] = [
  {
    name: 'Notifications',
    path: '/notifications',
    icon: (color) => <MaterialCommunityIcons name="bell-outline" size={22} color={color} />
  },
  {
    name: 'learn with Nemo',
    path: '/learn',
    icon: (color) => <MaterialCommunityIcons name="chat-question" size={22} color={color} />
  },
  {
    name: 'FAQs',
    path: '/faq',
    icon: (color) => <MaterialCommunityIcons name="chat-question" size={22} color={color} />
  },
  {
    name: 'Privacy Policy',
    path: '/privacy',
    icon: (color) => <MaterialIcons name="gpp-good" size={24} color={color} />
  },
  {
    name: 'Log in',
    path: '/(auth)/get-started',
    icon: (color) => <MaterialCommunityIcons name="login" size={24} color={color} />
  }
]



const Menu = () => {
  const pathname = usePathname();
  const {menuOpen} = useMenuAnimation()
  const dropDownLink = useSharedValue(0);
  const params = useLocalSearchParams()

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: withTiming(menuOpen.value ? 0 : -400, { duration: 500 }) }],
    opacity: withTiming(menuOpen.value ? 1 : 0.5),
  }));

  const dropdownStyle = useAnimatedStyle(() => ({
    height: withTiming(dropDownLink.value ? 120 : 0, { duration: 300 }),
    opacity: withTiming(dropDownLink.value ? 1 : 0, { duration: 300 }),
    overflow: 'hidden',
  }));

 


  return (
    <Animated.View className="justify-between h-screen w-[100%] absolute top-0 left-0 z-10" style={animatedStyle}>
      <TouchableWithoutFeedback onPress={() => {
          'worklet';
          menuOpen.value = menuOpen.value ? 0 : 1;
      }}>
        <View style={{ position: "absolute", top: 0, left: 0, zIndex: 10, width: "97%", height: "100%"}} />
      </TouchableWithoutFeedback>
      <View className='bg-nemo-lightPurple w-[85%] h-full z-20 pt-20 px-4 pb-10'>
        <View className="flex-1 ">
          {menuLinks.map((link) => {
            const isActiveInner =
              link.innerLink?.some((p) =>
                // pathname.startsWith(String(p.path).split('?')[0])
                params.tab === p.path.toString().split('=')[1]
              ) ?? false;
            // const isActiveInner = params.tab === p.path.toString().split('=')[1]
            return (
              <View key={link.name} className="mb-4">
                {link.path ? (
                  <Link href={link.path} onPress={() => {
                    menuOpen.value = menuOpen.value ? 0 : 1
                  }}>
                    <View className="flex-row items-center h-14 px-4 gap-3">
                      {link.icon(pathname.startsWith(`/${String(link.path).split('/')[2]}`) ? 'white' : '#878585e8')}
                      <Text
                        className="text-lg inline-block"
                        style={{
                          color: pathname.startsWith(`/${String(link.path).split('/')[2]}`) ? 'white' : '#878585e8',
                        }}
                      >
                        {link.name}
                      </Text>
                    </View>
                  </Link>
                ) : (
                  <View className='bg-nemo-lighterPurple rounded-lg py-6 px-4' >
                    <Pressable onPress={() => { 
                        dropDownLink.value = dropDownLink.value ? 0 : 1
                    }}>
                      <View className="flex-row justify-between">
                        <View className="flex-row items-center gap-3">
                          {link.icon(isActiveInner ? 'white' : '#878585e8')}
                          <Text
                            className="text-base"
                            style={{
                              color: isActiveInner ? 'white' : '#878585e8',
                            }}
                          >
                            {link.name}
                          </Text>
                        </View>
                        <Feather
                          name="chevron-down"
                          size={20}
                          color={isActiveInner ? 'white' : '#999'}
                        />
                      </View>
                    </Pressable>
                    <Animated.View
                    style={dropdownStyle}
                    >
                      <View className="gap-6 pl-10 pt-6">
                      {
                        link.innerLink?.map((l) => (
                          <Link
                            href={l.path}
                            key={l.name}
                          >
                            <Text className="text-base text-[#878585e8]">{l.name}</Text>
                          </Link>
                        ))
                      }
                      </View>
                    </Animated.View>
                  </View>

                )}
              </View>
            );
          })}
        </View>
        <View className="flex-1 justify-end gap-1">
          {pagesLinks.map((link) => {
            return (
              <View key={link.name} className="py-4">
                {link.path && (
                  <Link href={link.path} onPress={() => {
                    menuOpen.value = menuOpen.value ? 0 : 1
                  }}>
                    <View className="flex-row items-center gap-3 px-4">
                      {link.icon(pathname.startsWith(`/${String(link.path).split('/')[1]}`) ? 'white' : '#878585e8')}
                      <Text
                        className="text-lg"
                        style={{
                          color: pathname.startsWith(`/${String(link.path).split('/')[1]}`) ? 'white' : '#878585e8',
                        }}
                      >
                        {link.name}
                      </Text>
                    </View>
                  </Link>
                )}
              </View>
            );
          })}
        </View>
      </View>
    </Animated.View>
  );
};

export default Menu;

const styles = StyleSheet.create({});
