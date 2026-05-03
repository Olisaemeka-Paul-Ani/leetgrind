import { ScrollView, StyleSheet, Text } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView 
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      <Text style ={styles.greeting}>Good Evening,</Text>
      <Text style ={styles.name}>Olisaemeka</Text>
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

  greeting: {
    color: "#9E9E9E",
    fontSize: 14,
    marginBottom: 4,
  },

  name: {
    color: "#FFFFFF",
    fontSize: 24,
    marginBottom: 24,
  }


});