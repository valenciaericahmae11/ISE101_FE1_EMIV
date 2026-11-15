
import { StyleSheet, Text, View } from 'react-native';

import AnnouncementPanel from '../components/AnnouncementPanel';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Campus Connect</Text>
      <Text style={styles.subtitle}>One campus. Connected students.</Text>
      <AnnouncementPanel />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    padding: 24,
    backgroundColor: '#F4F7FB',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 8,
    color: '#1F2937',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#4B5563',
    marginBottom: 4,
    textAlign: 'center',
  },
});
