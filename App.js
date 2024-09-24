import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";
export default function App() {
  const Stack = createStackNavigator();
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#2C5C4F" },
            headerTitleAlign: "center",
            headerTintColor: "#F5E9E0",
            headerTitleStyle: { fontSize: 24 },
            cardStyle: { backgroundColor: "#F5E9E0" },
            headerRight: () => {
              return (
                <Image
                  source={require("./assets/cat.png")}
                  style={styles.Image}
                />
              );
            },
          }}
        >
          <Stack.Screen
            name="Meals Categories"
            component={CategoriesScreen}
            options={{
              title: "PomoCatto",
            }}
          />
          <Stack.Screen name="Meals Overview" component={MealsOverviewScreen} />
          <Stack.Screen name="Meal Details" component={MealDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
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
    width: 48,
    height: 48,
  },
});
