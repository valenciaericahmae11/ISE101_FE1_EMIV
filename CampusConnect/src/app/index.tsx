
import { Alert, Image, StyleSheet, Text, View, useWindowDimensions } from 'react-native';

import ActionButton from '../components/ActionButton';
import AnnouncementPanel from '../components/AnnouncementPanel';
import SectionHeading from '../components/SectionHeading';

const bannerImage = {
  uri: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
};

export default function HomeScreen() {
  const { width } = useWindowDimensions();
  const compact = width < 380;

  return (
    <View style={styles.screen}>
      <View style={styles.content}>
        <SectionHeading title="Campus Connect" subtitle="One campus. Connected students." />

        <Text style={[styles.intro, compact && styles.compactIntro]}>
          Keep up with important notices, event highlights, and student life updates in one place.
        </Text>

        <Image
          source={bannerImage}
          style={[styles.banner, compact && styles.compactBanner]}
          accessibilityLabel="Campus Connect banner"
        />

        <ActionButton
          label="View all events"
          onPress={() => Alert.alert('Events', 'The full campus calendar is ready to open.')}
        />

        <AnnouncementPanel />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F4F7FB',
  },
  content: {
    width: '100%',
    maxWidth: 640,
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingTop: 28,
    paddingBottom: 32,
  },
  intro: {
    fontSize: 15,
    lineHeight: 22,
    color: '#4B5563',
    marginBottom: 18,
  },
  compactIntro: {
    fontSize: 14,
  },
  banner: {
    width: '100%',
    height: 170,
    borderRadius: 18,
    marginBottom: 8,
    backgroundColor: '#DBEAFE',
  },
  compactBanner: {
    height: 140,
  },
});
