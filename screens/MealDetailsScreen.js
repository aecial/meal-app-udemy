import { useEffect } from "react";
import { View, Text, Flatlist, StyleSheet, Image } from "react-native";
import { MEALS } from "../data/dummy-data";
const MealDetailsScreen = ({ route, navigation }) => {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  useEffect(() => {
    const mealTitle = MEALS.find((meal) => meal.id === mealId).title;
    navigation.setOptions({
      title: mealTitle,
    });
  }, []);
  return (
    <View style={styles.screen}>
      <Text>MealDetailsScreen - {mealId}</Text>
      <Text>{selectedMeal.title}</Text>
      <View>
        <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      </View>
      <View>
        {selectedMeal.ingredients.map((ingredient) => (
          <Text key={ingredient}>{ingredient}</Text>
        ))}
      </View>
      <View>
        {selectedMeal.steps.map((step) => (
          <Text key={step}>{step}</Text>
        ))}
      </View>
    </View>
  );
};

export default MealDetailsScreen;
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 8,
  },
  image: {
    width: "100%",
    height: 200,
  },
});
