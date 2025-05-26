import "@/global.css";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Link, Stack, Tabs, useSegments } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { HeartIcon, HomeIcon, SearchIcon, ShoppingCartIcon, User } from "lucide-react-native";

import { useColorScheme } from "@/components/useColorScheme";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { Icon, Pressable } from "@/components/ui";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "index",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <GluestackUIProvider>
      <RootLayoutNav />
    </GluestackUIProvider>
  );
}

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof FontAwesome>["name"]; icon: any; color: string }) {
  return <Icon size="xl" style={{ color: props.color }} as={props.icon} />;
}

function RootLayoutNav() {
  const segment = useSegments();
  const page = segment[segment.length - 1];
  // create an array of list pages you want to hide the tab bar in
  const pagesToHideTabBar = ["onboarding", "add-device"];
  return (
    <ThemeProvider value={DefaultTheme}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "gray",
          headerShown: useClientOnlyValue(false, true),
          tabBarStyle: {
            display: pagesToHideTabBar.includes(page) ? "none" : "flex",
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ color }) => <TabBarIcon icon={HomeIcon} name="code" color={color} />,
            headerRight: () => (
              <Link href="/shop" asChild>
                <Pressable>
                  {({ pressed }) => (
                    <FontAwesome
                      name="info-circle"
                      size={25}
                      color={"#000"}
                      style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                    />
                  )}
                </Pressable>
              </Link>
            ),
          }}
        />
        <Tabs.Screen
          name="shop"
          options={{
            headerShown: false,
            title: "Shop",
            tabBarIcon: ({ color }) => <TabBarIcon icon={SearchIcon} name="code" color={color} />,
          }}
        />
        <Tabs.Screen
          name="favorite"
          options={{
            title: "Favorite",
            headerShown: false,
            tabBarIcon: ({ color }) => <TabBarIcon icon={HeartIcon} name="code" color={color} />,
          }}
        />
        <Tabs.Screen
          name="cart"
          options={{
            title: "Cart",
            headerShown: false,
            tabBarIcon: ({ color }) => <TabBarIcon icon={ShoppingCartIcon} name="code" color={color} />,
          }}
        />
        <Tabs.Screen
          name="+not-found"
          options={{
            href: null,
          }}
        />

        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            tabBarIcon: ({ color }) => <TabBarIcon icon={User} name="code" color={color} />,
          }}
        />

        <Tabs.Screen
          name="onboarding"
          options={{
            headerShown: false,
            href: null,
            tabBarShowLabel: false,
          }}
        />
      </Tabs>
    </ThemeProvider>
  );
}
