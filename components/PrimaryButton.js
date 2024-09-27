import { View, Text, Pressable, StyleSheet } from "react-native";
const PrimaryButton = ({ title, onPress }) => {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <View>
        <Text style={styles.text}>{title}</Text>
      </View>
    </Pressable>
  );
};

export default PrimaryButton;
const styles = StyleSheet.create({
  button: {
    width: 120,
    height: 35,
    borderRadius: 5,
    backgroundColor: "#2C5C4F",
  },
  text: {
    fontSize: 24,
    color: "#F5E9E0",
    textAlign: "center",
  },
});
