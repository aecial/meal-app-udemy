import { useEffect } from "react";
import { View, Text } from "react-native";
import { MEALS } from "../data/dummy-data";
const MealDetailsScreen = ({ route, navigation }) => {
  const mealId = route.params.mealId;
  return (
    <View>
      <Text>MealDetailsScreen - {mealId}</Text>
    </View>
  );
};

export default MealDetailsScreen;
