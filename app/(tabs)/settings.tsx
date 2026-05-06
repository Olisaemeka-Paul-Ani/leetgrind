import { ScrollView, StyleSheet, Text } from 'react-native';


export default function SettingsScreen() {
  return (
    <ScrollView style = {styles.container}contentContainerStyle={styles.content}>
      <Text style = {styles.settingsText}>Settings</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0A0A',
  },

  content: {
    padding: 16,
    paddingTop:50,
  },

  settingsText: {
    color: "#FFFFFF",
    fontSize: 24,
    lineHeight: 24,
  }
  
});