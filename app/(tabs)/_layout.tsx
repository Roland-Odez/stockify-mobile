import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Ionicons from '@expo/vector-icons/Ionicons';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import { Tabs, useRouter } from 'expo-router';
import { Pressable } from 'react-native';


export default function TabLayout() {
  const colorScheme = useColorScheme();
  const router = useRouter()

  return (
    <>
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#000',
        },
        tabBarInactiveTintColor: '#878585e8',
      }}>
      <Tabs.Screen
        name="index"
        options={{ href: null }}
      />
      <Tabs.Screen
        name="portfolio"
        options={{
          title: 'Portfolio',
          tabBarIcon: ({ focused }) => <SimpleLineIcons name="bag" size={22} color={focused ? 'white': '#878585e8'} />,
        }}
      />
      <Tabs.Screen
        name="discovery"
        options={{
          title: 'Discovery',
          tabBarIcon: ({ focused }) => <FontAwesome6 name="earth-americas" size={22} color={focused ? 'white': '#878585e8'} />,
        }}
      />
      <Tabs.Screen
        name="invest"
        options={{
          title: 'Invest',
          tabBarIcon: ({ focused }) => <AntDesign name="dollar" size={22} color={focused ? 'white': '#878585e8'} />,
        }}
      />
      <Tabs.Screen
        name="stockify-ai"
        options={{
          title: 'Stockify AI',
          headerShown: true,
          headerStyle: {
            backgroundColor: 'black',
          },
          headerLeftContainerStyle: {
            flex: 1,
            paddingLeft: 10
          },
          headerRightContainerStyle: {
            flex: 1,
            paddingRight: 10
          },
          headerTitleContainerStyle: {
            flex: 1,
            alignItems: 'center',
          },
          headerLeft: () => 
            <Pressable onPress={() => router.back()} >
              <Ionicons name="arrow-back-sharp" size={24} color="white" />
            </Pressable>,
          headerRight: () => (
            <Entypo name="dots-three-horizontal" size={24} color="white" />
          ),
          tabBarIcon: ({ focused }) => <FontAwesome6 name="microchip" size={22} color={focused ? 'white': '#878585e8'} />,
        }}
      />
    </Tabs>
    </>
  );
}
