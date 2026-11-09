
import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Campus Connect</Text>
      <Text>One campus. Connected students.</Text>
      <Text>Welcome to the Week 1 project foundation.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#F4F7FB',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 12,
  },
});
