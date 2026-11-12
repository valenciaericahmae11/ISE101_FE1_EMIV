
import { StyleSheet, Text, View } from 'react-native';

import type { Announcement } from '../types/announcement';
import { getUnreadAnnouncements } from '../services/announcementUtils';

const sampleAnnouncements: Announcement[] = [
  { id: 'a1', title: 'Enrollment reminders', category: 'Academic', read: false },
  { id: 'a2', title: 'Campus orientation', category: 'Events', read: true },
  { id: 'a3', title: 'Library schedule update', category: 'Notice', read: false },
];

export default function HomeScreen() {
  const unreadAnnouncements = getUnreadAnnouncements(sampleAnnouncements);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Campus Connect</Text>
      <Text style={styles.subtitle}>One campus. Connected students.</Text>
      <Text style={styles.count}>Unread announcements: {unreadAnnouncements.length}</Text>

      {sampleAnnouncements.map((item) => (
        <Text key={item.id} style={styles.item}>
          {item.title}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    marginBottom: 16,
    textAlign: 'center',
  },
  count: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
    color: '#0F172A',
    textAlign: 'center',
  },
  item: {
    fontSize: 15,
    marginVertical: 4,
    color: '#1E293B',
    textAlign: 'center',
  },
});
