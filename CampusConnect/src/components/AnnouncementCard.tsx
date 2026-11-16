import { Pressable, StyleSheet, Text, View } from 'react-native';

type AnnouncementCardProps = {
  title: string;
  category: string;
  read: boolean;
  onMarkRead: () => void;
};

export default function AnnouncementCard({
  title,
  category,
  read,
  onMarkRead,
}: AnnouncementCardProps) {
  return (
    <View style={[styles.card, read && styles.cardRead]}>
      <View style={styles.cardHeader}>
        <Text style={[styles.title, read && styles.titleRead]}>{title}</Text>
        <View style={[styles.statusBadge, read && styles.statusBadgeRead]}>
          <Text style={[styles.badgeText, read && styles.badgeTextRead]}>{read ? 'Read' : 'New'}</Text>
        </View>
      </View>

      <Text style={styles.category}>Category: {category}</Text>
      <Text style={styles.status}>Status: {read ? 'Read' : 'Unread'}</Text>

      <Pressable
        accessibilityRole="button"
        accessibilityLabel={read ? `Mark ${title} as unread` : `Mark ${title} as read`}
        onPress={onMarkRead}
        style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
      >
        <Text style={styles.buttonText}>{read ? 'Mark as Unread' : 'Mark as Read'}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#DCE3EC',
    padding: 16,
    gap: 8,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
  },
  cardRead: {
    borderColor: '#B7C7E5',
    backgroundColor: '#F5F7FB',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 12,
  },
  title: {
    flex: 1,
    fontSize: 17,
    lineHeight: 24,
    fontWeight: '700',
    color: '#111827',
  },
  titleRead: {
    color: '#42506A',
  },
  statusBadge: {
    backgroundColor: '#E0F2FE',
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  statusBadgeRead: {
    backgroundColor: '#E5E7EB',
  },
  badgeText: {
    color: '#0F4C81',
    fontSize: 11,
    fontWeight: '700',
  },
  badgeTextRead: {
    color: '#475569',
  },
  category: {
    fontSize: 14,
    lineHeight: 20,
    color: '#4B5563',
  },
  status: {
    fontSize: 14,
    lineHeight: 20,
    color: '#1F2937',
  },
  button: {
    backgroundColor: '#2563EB',
    borderRadius: 10,
    minHeight: 44,
    paddingVertical: 10,
    paddingHorizontal: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonPressed: {
    opacity: 0.8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 14,
  },
});
