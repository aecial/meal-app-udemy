import { View, Text, Pressable, StyleSheet } from "react-native";

const CategoryGridTile = ({ title, color }) => {
  return (
    <View style={styles.gridItem}>
      <Pressable
        style={[styles.InnerContainer, , { backgroundColor: color }]}
        android_ripple={{ color: "#ccc" }}
      >
        <View>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTile;
const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    elevation: 1,
    height: 150,
    borderRadius: 8,
    overflow: "hidden",
  },
  InnerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
