import { BlurView } from "expo-blur";
import { Text, View, StyleSheet, ScrollView } from "react-native";

export default function Index() {
  return (
      <View style={styles.container}>
        <ScrollView>
          {new Array(50).fill("Item").map((v, i) => (
            <Text key={v + i} style={styles.item}>
              {v} - {i}
            </Text>
          ))}
        </ScrollView>
        <BlurView intensity={90} tint="dark" style={styles.blurContainer}>
          <Text style={styles.text}>
            {"Hello, my container is blurring contents underneath"}
          </Text>
        </BlurView>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gold"
  },
  blurContainer: {
    padding: 20,
    margin: 16,
    textAlign: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    borderRadius: 20,
  },
  item: {
    margin: 8,
    padding: 16,
    backgroundColor: "orangered"
  },
  boxEven: {
    backgroundColor: 'orangered',
  },
  boxOdd: {
    backgroundColor: 'gold',
  },
  text: {
    fontSize: 24,
    fontWeight: '600',
    color: "#fff"
  },
});