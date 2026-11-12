import type { Announcement, ApiAnnouncement } from '../types/announcement';

export function getUnreadAnnouncements(items: Announcement[]): Announcement[] {
  return items.filter((item) => !item.read);
}

export function formatStudentName(firstName: string, lastName: string): string {
  return `${firstName} ${lastName}`.trim();
}

export function getAnnouncementTitles(items: Announcement[]): string[] {
  return items.map((item) => item.title);
}

export function sumNumbers(values: number[]): number {
  return values.reduce((total, value) => total + value, 0);
}

export async function loadAnnouncements(): Promise<ApiAnnouncement[]> {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');

    if (!response.ok) {
      throw new Error(`Request failed: ${response.status}`);
    }

    const data: unknown = await response.json();

    if (!Array.isArray(data)) {
      throw new Error('Unexpected API response format');
    }

    return data.map((item) => {
      if (typeof item !== 'object' || item === null) {
        throw new Error('Each item in the API response must be an object');
      }

      const { id, title } = item as { id?: unknown; title?: unknown };

      if (typeof id !== 'string' && typeof id !== 'number') {
        throw new Error('Announcement id must be a string or number');
      }

      if (typeof title !== 'string') {
        throw new Error('Announcement title must be a string');
      }

      return {
        id: String(id),
        title,
      };
    });
  } catch (error) {
    console.error('Unable to load announcements:', error);
    throw error;
  }
}
