import { router, useLocalSearchParams } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import { findAnnouncementById } from '@/data/announcements';

export default function AnnouncementDetailScreen() {
  const { id } = useLocalSearchParams<{ id?: string | string[] }>();
  const announcement = findAnnouncementById(id);

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <View style={styles.card}>
        {announcement ? (
          <>
            <Text style={styles.eyebrow}>Announcement</Text>
            <Text style={styles.title}>{announcement.title}</Text>

            <View style={styles.metaRow}>
              <Text style={styles.metaLabel}>ID</Text>
              <Text style={styles.metaValue}>{announcement.id}</Text>
            </View>

            <View style={styles.metaRow}>
              <Text style={styles.metaLabel}>Category</Text>
              <Text style={styles.metaValue}>{announcement.category}</Text>
            </View>

            <View style={styles.metaRow}>
              <Text style={styles.metaLabel}>Status</Text>
              <Text style={styles.metaValue}>{announcement.read ? 'Read' : 'Unread'}</Text>
            </View>
          </>
        ) : (
          <>
            <Text style={styles.title}>Announcement not found</Text>
            <Text style={styles.message}>
              {typeof id === 'string' && id
                ? `We couldn’t find an announcement with ID ${id}.`
                : 'No announcement ID was provided in the route.'}
            </Text>
          </>
        )}

        <View style={styles.buttonRow}>
          <Pressable style={styles.primaryButton} onPress={() => router.back()}>
            <Text style={styles.primaryButtonText}>Go back</Text>
          </Pressable>

          <Pressable
            style={styles.secondaryButton}
            onPress={() => router.push('/')}>
            <Text style={styles.secondaryButtonText}>Home</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F4F7FB',
  },
  content: {
    padding: 20,
    paddingTop: 28,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#D9E2EF',
    padding: 20,
    gap: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 2,
  },
  eyebrow: {
    fontSize: 12,
    fontWeight: '700',
    color: '#2563EB',
    textTransform: 'uppercase',
    letterSpacing: 0.6,
  },
  title: {
    fontSize: 26,
    lineHeight: 32,
    fontWeight: '800',
    color: '#111827',
  },
  metaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },
  metaLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#4B5563',
  },
  metaValue: {
    fontSize: 14,
    fontWeight: '700',
    color: '#111827',
  },
  message: {
    fontSize: 15,
    lineHeight: 22,
    color: '#4B5563',
  },
  buttonRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginTop: 12,
  },
  primaryButton: {
    backgroundColor: '#2563EB',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 14,
  },
  secondaryButton: {
    backgroundColor: '#E5E7EB',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  secondaryButtonText: {
    color: '#111827',
    fontWeight: '700',
    fontSize: 14,
  },
});
