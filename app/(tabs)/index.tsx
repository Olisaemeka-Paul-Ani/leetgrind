import { ScrollView, StyleSheet, Text, View } from 'react-native';


export default function HomeScreen() {
  const weekData = [
    { day: 'M', isComplete: true },
    { day: 'T', isComplete: true },
    { day: 'W', isComplete: true },
    { day: 'T', isComplete: true },
    { day: 'F', isComplete: false },
    { day: 'S', isComplete: false },
    { day: 'S', isComplete: false },
  ];
  return (
    <ScrollView 
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      <Text style ={styles.greeting}>Good Evening,</Text>
      <Text style ={styles.name}>Olisaemeka</Text>

      <View style={styles.streakCard}>
        <Text style={styles.flameIcon}>🔥</Text>
        <Text style={styles.streakNumber}>47</Text>
        <Text style={styles.streakLabel}>day streak</Text>
      </View>

       <View style={styles.calendarRow}>
          {weekData.map((item, index) => (
            <View 
              key={index}
              style={[
                styles.calendarDot,
                item.isComplete ? styles.dotComplete : styles.dotIncomplete
              ]}
            />
          ))}
      </View>
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
    marginBottom: 40,
  }, 

  streakCard: {
    marginTop: 16,
    alignItems: 'center',
    padding: 24,
    marginBottom: 16,
  },


  flameIcon: {
    fontSize: 30,
    marginBottom: 0,
    marginLeft: 5,
    lineHeight:30,
  },

  streakNumber: {
    color: "#FF6B35",
    fontSize: 140,
    marginTop: 5,
    lineHeight: 140,
  },

  streakLabel: {
  color: "#9E9E9E",
  fontSize: 14,
  lineHeight: 14,
  marginTop: -10,  // Negative margin pulls it closer to the number above
  marginBottom: 4,
},

  calendarRow: {
    flexDirection: 'row',
    gap: 10, 
  },

  dotIncomplete: {
    backgroundColor: '#FF6B35',
    borderColor: '#FF6B35',
  },

  dotComplete: {
  backgroundColor: 'transparent',
  borderColor: '#6B6B6B',
  },

  calendarDot: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 2,
  }




});