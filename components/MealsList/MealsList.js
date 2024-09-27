import { Text, View, FlatList, StyleSheet } from "react-native";
import MealItem from "./MealItem";
function MealsList({ displayedMeals }) {
  function renderMealItem(itemData) {
    const item = itemData.item;
    const mealItemProps = {
      mealId: item.id,
      title: item.title,
      imageURL: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };
    return <MealItem {...mealItemProps} />;
  }
  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}
export default MealsList;
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 16,
  },
});
