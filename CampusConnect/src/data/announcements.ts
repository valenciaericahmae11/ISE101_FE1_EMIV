export type AnnouncementItem = {
  id: string;
  title: string;
  category: string;
  read: boolean;
};

export const initialAnnouncements: AnnouncementItem[] = [
  { id: 'ANN-001', title: 'Enrollment Reminder', category: 'Academic', read: false },
  { id: 'ANN-002', title: 'Sports Festival Announcement', category: 'Events', read: false },
  { id: 'ANN-003', title: 'Campus Clean-up Drive', category: 'Community', read: true },
  { id: 'ANN-004', title: 'Library Study Hours Extended', category: 'Notice', read: false },
  { id: 'ANN-005', title: 'Student Leadership Applications Open', category: 'Academic', read: false },
  { id: 'ANN-006', title: 'Wellness Week Activities Schedule', category: 'Events', read: true },
];

export function findAnnouncementById(id: string | string[] | undefined) {
  const normalizedId = Array.isArray(id) ? id[0] : id;

  if (!normalizedId) {
    return undefined;
  }

  return initialAnnouncements.find((announcement) => announcement.id === normalizedId);
}
