import { Ionicons } from '@expo/vector-icons';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


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

  const dailyProblem = 
    {question: 'Two Sum', difficulty:'Easy', tags: ["Array", "HashMap"]}
  return (
    <ScrollView 
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      <View style = {styles.topBar}>
        <View>
        <Text style={styles.greeting}>Good Evening,</Text>
        <Text style={styles.name}>Olisaemeka</Text>
        </View>
        <View style = {styles.profilepic}>
          <Text style={{color: "#FFFFFF"}}>OE</Text>
        </View>
      </View>
      

      <View style={styles.streakCard}>
        <Text style={styles.flameIcon}>🔥</Text>
        <Text style={styles.streakNumber}>47</Text>
        <Text style={styles.streakLabel}>day streak</Text>
      </View>

       <View style={styles.calendarRow}>
          {weekData.map((item, index) => (
            <View  key={index} style = {{alignItems: 'center'}}>
              <Text style = {styles.dayLabel}>{item.day}</Text>
              <View
              style={[
                styles.calendarDot,
                item.isComplete ? styles.dotComplete : styles.dotIncomplete
              ]}
              >
                {item.isComplete && <Text style={styles.checkmark}>✓</Text>}
              </View>
            </View>
          ))}
      </View>

      <TouchableOpacity style={styles.completeButton}>
        <Text style={styles.buttonText}>MARK TODAY COMPLETE</Text>
      </TouchableOpacity>


      <View style = {styles.questionCard}>
        <View style = {{flexDirection: 'row',justifyContent: 'space-between', flex: 1}}>
          <View>
            <View style = {{flexDirection: 'row', alignItems: 'center',  gap: 5,}}>
              <View style = {styles.Easydifficulty}>
                <Text style = {{color: '#22C55E', fontSize: 12,}}>{dailyProblem.difficulty}</Text>
              </View>
              <Text style = {{color: "#9E9E9E",}}> Daily Challenge</Text>
            </View>
            <View>
            <Text style = {styles.questionName}>{dailyProblem.question}</Text>
            <Text style = {{color: "#9E9E9E",}}>{dailyProblem.tags.join(' · ')}</Text>
            </View>
          </View>
          <View  style = {{justifyContent: 'space-between', alignItems: 'flex-end',flexDirection: 'column',}}>
            <Ionicons name="bookmark-outline" size={20} color="#6B6B6B"  />
            <Text style = {{justifyContent: 'flex-end', alignItems: 'flex-end', color: "#FF6B35"}}>Solve now →</Text>
          </View>
        </View>
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
    marginBottom: 10,
    lineHeight:24,
  }, 

  streakCard: {
    marginTop: 0,
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
    fontSize: 135,
    marginTop: 5,
    lineHeight: 140,
  },

  streakLabel: {
  color: "#9E9E9E",
  fontSize: 14,
  lineHeight: 14,
  marginTop: -20,  // Negative margin pulls it closer to the number above
  marginBottom: 4,
},

  calendarRow: {
    flexDirection: 'row',
    gap: 10, 
    marginTop: 20,
    marginBottom: 20,
  },

  dayLabel : {
    color: '#6B6B6B',
    alignItems: 'center', 
    marginBottom: 5,
  },

  dotIncomplete: {
    backgroundColor: 'transparent',
    borderColor: '#6B6B6B',
  },

  dotComplete: {
    backgroundColor: '#FF6B35',
    borderColor: '#FF6B35',
    
  },

  checkmark: {
    color: "#FFFFFF",
  },

  calendarDot: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  

  },

  completeButton: {
    backgroundColor: '#FF6B35',
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 24,
    marginTop:20,
    alignItems: 'center',
    marginBottom: 40, 

  },

  buttonText:{
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "600",
    textAlign: 'center',
  },

  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  profilepic: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#333333',
  },

  questionCard: {
    backgroundColor: '#1C1C1C',
    height: 140,
    borderRadius: 10,
    borderColor: '#333333',
    borderWidth: 1,
    padding: 16,

  },

  questionName: {
    color: "#FFFFFF",
    fontSize: 25,
  },

  Easydifficulty: {
    backgroundColor: "#14532D",
    alignItems: 'center',
    justifyContent: 'center',
    height: 22,
    width: 45,
    borderRadius: 10,
    marginBottom: 5,
  }


});