export type AnnouncementCategory = 'Academic' | 'Events' | 'Notice';

export interface Announcement {
  id: string;
  title: string;
  category: AnnouncementCategory;
  read: boolean;
}

export interface ApiAnnouncement {
  id: string;
  title: string;
}
