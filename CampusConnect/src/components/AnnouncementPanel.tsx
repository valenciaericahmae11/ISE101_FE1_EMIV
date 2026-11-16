import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import AnnouncementCard from './AnnouncementCard';
import { initialAnnouncements, type AnnouncementItem } from '@/data/announcements';
export default function AnnouncementPanel() {
  const [announcements, setAnnouncements] = useState<AnnouncementItem[]>(initialAnnouncements);
  const [statusMessage, setStatusMessage] = useState('System is ready');

  const unreadCount = announcements.filter((announcement) => !announcement.read).length;
  const totalCount = announcements.length;

  useEffect(() => {
    const timerId = setTimeout(() => {
      setStatusMessage(`${unreadCount} unread announcement${unreadCount === 1 ? '' : 's'} waiting`);
    }, 100);

    return () => {
      clearTimeout(timerId);
    };
  }, [unreadCount]);

  const handleMarkRead = (id: string) => {
    setAnnouncements((currentAnnouncements) =>
      currentAnnouncements.map((announcement) =>
        announcement.id === id ? { ...announcement, read: !announcement.read } : announcement,
      ),
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Campus Announcements</Text>
      <Text style={styles.counter}>Unread: {unreadCount} / Total: {totalCount}</Text>
      <Text style={styles.status}>Status: {statusMessage}</Text>

      <FlatList
        data={announcements}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <AnnouncementCard
            id={item.id}
            title={item.title}
            category={item.category}
            read={item.read}
            onMarkRead={() => handleMarkRead(item.id)}
          />
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 24,
    flex: 1,
  },
  heading: {
    fontSize: 22,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 8,
  },
  counter: {
    fontSize: 15,
    fontWeight: '600',
    color: '#2563EB',
    marginBottom: 6,
  },
  status: {
    fontSize: 13,
    color: '#6B7280',
    marginBottom: 12,
  },
  list: {
    paddingBottom: 24,
  },
  separator: {
    height: 12,
  },
});
