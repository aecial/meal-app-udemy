import { FavoritesContext } from "../store/context/favorites-context";
import { useContext } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import MealsList from "../components/MealsList/MealsList";
import { MEALS } from "../data/dummy-data";
import PrimaryButton from "../components/PrimaryButton";
const FavoritesScreen = ({ navigation }) => {
  const addNow = () => {
    navigation.navigate("Meals Categories");
  };
  const FavoritesCtx = useContext(FavoritesContext);
  const favMeals = MEALS.filter((meal) => FavoritesCtx.ids.includes(meal.id));
  if (favMeals.length === 0) {
    return (
      <View style={styles.screen}>
        <Text style={styles.text}>You have no Favorite Meals Yet.</Text>
        {/* <Button title={"Add Now"} onPress={addNow}/> */}
        <PrimaryButton title={"Add Now"} onPress={addNow} />
      </View>
    );
  }
  return <MealsList displayedMeals={favMeals} />;
};

export default FavoritesScreen;
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
  },
});
