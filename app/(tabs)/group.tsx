import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function GroupScreen() {
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
        <Text style = {{color:"#DC2626", fontSize:11}}>STREAK AT RISk • 3 PENDING</Text>
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
  }
});