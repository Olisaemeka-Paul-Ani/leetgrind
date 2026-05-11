import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function GroupScreen() {
  const groupData = [
    {initials: 'OE', name: 'Olisaemeka', streak: 47, isOnline: true, doneToday: false},
    {initials: 'SN', name: 'Satoshi_N', streak: 124, isOnline: true, doneToday: true},
    {initials: 'DS', name: 'Dev_Sarah', streak: 12, isOnline: false, doneToday: false},
    {initials: 'AW', name: 'AlgoWhiz', streak: 89, isOnline: true, doneToday: false},
    {initials: 'CR', name: 'CodeRunner', streak: 5, isOnline: false, doneToday: false},
    {initials: 'LM', name: 'LeetMaster', streak: 231, isOnline: true, doneToday: false},
    {initials: 'NO', name: 'NigthOwl', streak: 0, isOnline: true, doneToday: false},
  ]
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.headerText}>Study Group</Text>
        <TouchableOpacity style = {styles.copyView}>
          <Text style = {{color: "#FF6B35",}}>#A3F9</Text>
          <MaterialIcons name="content-copy" size={12} color= "#FF6B35" />
        </TouchableOpacity>
      </View>
      <View style = {{justifyContent: 'center', alignItems: 'center', marginTop: 30, gap:10, flexDirection: 'column',marginBottom:0,}}>
       <Text style = {styles.groupStreak}>12</Text>
       <Text style = {{color: "#9E9E9E", fontSize:14,}}>GROUP STREAK</Text>
       <View style = {styles.groupStats}>
        <View style = {{height: 5, width: 5, borderRadius: 5, backgroundColor:'#22C55E'}}></View>
        <Text style = {{color:"#DC2626", fontSize:11}}>STREAK AT RISK • 3 PENDING</Text>
       </View>
      </View>
      <Text style = {{color:'#6B6B6B', fontSize: 12,}} >CONTRIBUTORS</Text>
      {groupData.map((item,index) => (
        <View key = {index} style = {styles.groupView}>
          <View style = {styles.profilepic}>
            <Text style={{color: "#FFFFFF"}}>{item.initials}</Text>
            {item.isOnline && <View style = {{position: 'absolute', bottom: -1, right: -1, width: 8, height: 8, borderRadius: 4,  backgroundColor: '#22C55E',}}></View>}
          </View>
          <View style = {{flexDirection: 'column', flex:1}}>
            <Text style = {{fontSize: 14, color: "#FFFFFF"}}>{item.name}</Text>
            <Text style = {{color: "#FF6B35"}}>🔥 {item.streak} day streak</Text>
          </View>
          <View style = {[styles.calendarDot, item.doneToday? styles.dayComplete: styles.dayIncomplete]}>
            {item.doneToday && <Text style={styles.checkmark}>✓</Text>}
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0A0A',
   
  },
  headerText: {
    color: "#FFFFFF",
    fontSize: 24,
    lineHeight: 24
  },

  copyView: {
    backgroundColor: '#1C1C1C',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    height:20,
    width: 80,
    borderRadius: 10,
    flexDirection : 'row',
    gap: 5
    
  },


  content: {
    padding: 16,
    paddingTop:50,
  },

  groupStreak: {
    color: "#FF6B35",
    fontSize: 110,
    marginTop: 5,
    lineHeight: 125,
    marginBottom: 0,
    includeFontPadding: false,
    textAlignVertical: 'center',
  },

  groupStats :{
    backgroundColor: '#1C1C1C',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 10,
    height:30,
    width: 210,
    borderRadius: 10,
    flexDirection : 'row',
    gap: 5,
    marginTop: 20,
    borderWidth:1,
    borderColor:"#333333",
    marginBottom:30,
  },

  groupView: {
    backgroundColor: '#1C1C1C',
    height: 60,
    borderRadius: 10,
    borderWidth: 1,
    padding: 16,
    marginTop: 9,
    width: "100%",
    flexDirection: 'row',
    gap:10,

  },

   profilepic: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0A0A0A',
  },


  calendarDot: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  

  },

  dayComplete: {
    backgroundColor: '#22C55E',
    borderColor: '#22C55E',
    
  },

   dayIncomplete: {
    backgroundColor: 'transparent',
    borderColor: '#6B6B6B',
  },

  checkmark: {
    color: '#0A0A0A',
    fontSize: 8,
  },

});