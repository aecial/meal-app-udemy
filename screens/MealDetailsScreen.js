import { useEffect, useContext } from "react";
import { View, Text, Flatlist, StyleSheet, Image } from "react-native";
import { MEALS } from "../data/dummy-data";
import { FavoritesContext } from "../store/context/favorites-context";
import Ionicons from "@expo/vector-icons/Ionicons";
const MealDetailsScreen = ({ route, navigation }) => {
  const FavoriteMealsCtx = useContext(FavoritesContext);

  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  const isFavoriteMeal = FavoriteMealsCtx.ids.includes(mealId);
  function changeFavStatus() {
    if (isFavoriteMeal) {
      FavoriteMealsCtx.removeFavorite(mealId);
    } else {
      FavoriteMealsCtx.addFavorite(mealId);
    }
  }
  useEffect(() => {
    const mealTitle = MEALS.find((meal) => meal.id === mealId).title;
    navigation.setOptions({
      title: mealTitle,
      headerRight: () => {
        return (
          // <Image
          //   source={require("./assets/cat.png")}
          //   style={styles.Image}
          // />

          <Ionicons
            style={styles.icon}
            name={isFavoriteMeal ? "star" : "star-outline"}
            color="white"
            size={32}
            onPress={changeFavStatus}
          />
        );
      },
    });
  }, [navigation, changeFavStatus]);
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
  icon: {
    marginRight: 8,
  },
});
