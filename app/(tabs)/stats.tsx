import Ionicons from '@expo/vector-icons/Ionicons';
import { ScrollView, StyleSheet, Text, View } from 'react-native';


function yearGenerator(){
   let startingDate = new Date()
   startingDate.setDate(startingDate.getDate() - 364); // subtract 7 days
    let i = 0
    let j=0
    let calendar = []
    while (i<52){
        let week = []
        while (week.length != 7){
            let randomValue =  Math.random() > 0.5;
            let tempDate = new Date(startingDate)
            tempDate.setDate(tempDate.getDate() + j)
            week.push({date : tempDate.toDateString(), value: randomValue})
            j=j+1
    
        }
        calendar.push(week)
        i=i+1
    }
    return calendar
    }

  


export default function HomeScreen() {
  const calendar = yearGenerator()
  const userStats = 
    {streak: 47, solved: 134, percentage: 2}
  const weakSpots = 
    [{topic: 'Dynamic Programming', percentage: 32},
      {topic: 'Graphs', percentage: 45},
      {topic: 'Trees', percentage: 58},
      {topic: 'Linked Lists', percentage: 62},
      {topic: 'Arrays & hashing', percentage: 88},
    ]
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style = {{marginBottom:30,flexDirection: 'row'}}>
        <Text style = {styles.statsText}>Your Stats</Text>
        <Ionicons name="analytics-sharp" size={24} color="#9E9E9E" />
      </View>
      <View style = {{ flexDirection: 'row',justifyContent: 'center', gap: 7, alignItems: 'center' }}>
        <View style = {styles.streakCard} >
          <Text style = {{color: "#FFFFFF", textAlign: 'center', fontSize: 30}}>{userStats.streak} </Text>
          <Text style = {{color: "#9E9E9E", textAlign: 'center',fontSize: 10}}>Current Streak</Text>
        </View>
        <View style = {styles.streakCard} >
          <Text style = {{color: "#FFFFFF", textAlign: 'center', fontSize: 30}}>{userStats.solved} </Text>
          <Text style = {{color: "#9E9E9E", textAlign: 'center',fontSize: 10}}>Total solved</Text>
        </View>
        <View style = {styles.rankApp} >
          <Text style = {{color: "#FFFFFF", fontSize: 30}}>Top {userStats.percentage}% </Text>
          <Text style = {{color: "#9E9E9E", textAlign: 'center',fontSize: 10}}>Global Rank</Text>
        </View>
      </View>
      <Text style = {{color:'#6B6B6B', fontSize: 12, marginBottom:10,marginTop:30,}}>ACTIVITY</Text>
      <ScrollView horizontal = {true} style = {styles.heatMapContainer} contentContainerStyle = {styles.heatMapContentContainer}>
        {calendar.map((item,index) => (
          <View key = {index} style = {{gap:6, marginRight:6}}>
          {item.map((day,index) => (
            <View  key = {index}style = {[styles.hasSolved, day.value? styles.hasSolved: styles.hasNotSolved]}></View>
          ))}
          </View>
        ))}
      </ScrollView>
      <Text style = {{color:'#6B6B6B', fontSize: 12, marginBottom:10,marginTop:30,}}>WEAK SPOTS</Text>
      <View style = {styles.weakSpotsCard}>
        {weakSpots.map((item,index) => ( 
        <View key = {index} style = {{gap:30}}>
          <View style = {{gap:7}}>
            <View style = {{flexDirection: 'row'}}>
              <Text style = {{flex:1, fontSize: 14,color:'#FFFFFF'}}>{item.topic}</Text>
              <Text style = {{color: "#9E9E9E",}}>{item.percentage}%</Text>
            </View>
            <View>
              <View style = {{backgroundColor:'#0A0A0A', height:5, borderRadius:5, width: '100%'}}></View>
              <View style = {{backgroundColor: "#FF6B35", height: 5, borderRadius:5,width: `${item.percentage}%`, position: 'absolute'}}></View>
            </View>
            </View>
        </View>
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
  text: {
    fontSize: 20,
    fontWeight: '600',
  },

   content: {
    padding: 16,
    paddingTop:50,
  },

  streakCard : {
    backgroundColor: '#1C1C1C',
    borderRadius: 10,
    padding: 16,
    paddingTop: 20,
    paddingLeft: 5,
    paddingRight: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },

  rankApp : {
    backgroundColor: '#1C1C1C',
    borderRadius: 10,
    padding: 16,
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },

  statsText: {
    color: "#FFFFFF",
    fontSize: 24,
    lineHeight: 24,
    flex:1,
  },

  hasSolved :{
    height: 10,
    width: 10,
    borderRadius: 2,
    marginTop: 0,
    marginBottom: 0,
    marginLeft:0,
    marginRight:0,
    backgroundColor: '#22C55E',
  },


  hasNotSolved : {
    height:10,
    width:10,
    borderRadius: 2,
    marginTop: 0,
    marginBottom: 0,
    marginLeft:0,
    marginRight:0,
    backgroundColor: '#333333',


  },

  heatMapContainer:{
    backgroundColor: '#1C1C1C',
    height: 150,
    borderRadius: 10,
  },

  heatMapContentContainer:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 13,
    paddingRight: 13,
  },

  weakSpotsCard:{
    paddingTop:20,
    paddingBottom: 20,
    paddingLeft:15,
    paddingRight:15,
    backgroundColor: '#1C1C1C',
    width: '100%',
    borderRadius: 10,
    gap:30,
    flex:1,
  }


});