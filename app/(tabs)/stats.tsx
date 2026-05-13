import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  const userStats = 
    {streak: 47, solved: 134, percentage: 2}
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style = {styles.statsText}>Your Stats</Text>
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
          <Text style = {{color: "#FFFFFF", textAlign: 'center', fontSize: 30}}>Top {userStats.percentage}% </Text>
          <Text style = {{color: "#9E9E9E", textAlign: 'center',fontSize: 10}}>Global Rank</Text>
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
  },


});