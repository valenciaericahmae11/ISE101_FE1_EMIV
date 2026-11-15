import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import AnnouncementCard from './AnnouncementCard';

type AnnouncementItem = {
  id: string;
  title: string;
  category: string;
  read: boolean;
};

const initialAnnouncements: AnnouncementItem[] = [
  { id: 'ANN-001', title: 'Enrollment Reminder', category: 'Academic', read: false },
  { id: 'ANN-002', title: 'Sports Festival Announcement', category: 'Events', read: false },
  { id: 'ANN-003', title: 'Campus Clean-up Drive', category: 'Community', read: true },
  { id: 'ANN-004', title: 'Library Study Hours Extended', category: 'Notice', read: false },
];

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

      <ScrollView contentContainerStyle={styles.list} showsVerticalScrollIndicator={false}>
        {announcements.map((announcement) => (
          <AnnouncementCard
            key={announcement.id}
            title={announcement.title}
            category={announcement.category}
            read={announcement.read}
            onMarkRead={() => handleMarkRead(announcement.id)}
          />
        ))}
      </ScrollView>
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
    paddingBottom: 20,
  },
});
