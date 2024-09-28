import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Provider } from "react-redux";
import store from "./store/redux/store";
import FavoritesContextProvider from "./store/context/favorites-context";
export default function App() {
  const Stack = createStackNavigator();
  const Drawer = createDrawerNavigator();
  function DrawerNavigator() {
    return (
      <Drawer.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#2C5C4F" },
          headerTitleAlign: "center",
          headerTintColor: "#F5E9E0",
          headerTitleStyle: { fontSize: 24 },
          sceneContainerStyle: { backgroundColor: "#F5E9E0" },
          drawerContentStyle: { backgroundColor: "#2C5C4F" },
          drawerInactiveTintColor: "#F5E9E0",
          drawerActiveTintColor: "#2C5C4F",
          drawerActiveBackgroundColor: "#F5E9E0",
        }}
      >
        <Drawer.Screen
          name="Meals Categories"
          component={CategoriesScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="fast-food-outline" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Favorites"
          component={FavoritesScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="star" size={size} color={color} />
            ),
          }}
        />
      </Drawer.Navigator>
    );
  }

  return (
    <>
      <StatusBar style="light" />
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "#2C5C4F" },
              headerTitleAlign: "center",
              headerTintColor: "#F5E9E0",
              headerTitleStyle: { fontSize: 24 },
              cardStyle: { backgroundColor: "#F5E9E0" },
            }}
          >
            <Stack.Screen
              name="Drawer"
              component={DrawerNavigator}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Meals Overview"
              component={MealsOverviewScreen}
            />
            <Stack.Screen name="Meal Details" component={MealDetailsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  Image: {
    // width: 48,
    // height: 48,
    marginRight: 8,
  },
});
