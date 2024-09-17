import { View, Text, StyleSheet } from "react-native";

const MealsOverviewScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>MealsOverviewScreen</Text>
    </View>
  );
};

export default MealsOverviewScreen;
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 16,
  },
});
