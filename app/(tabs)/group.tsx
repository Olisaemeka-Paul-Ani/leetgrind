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
    width: 70,
    borderRadius: 10,
    flexDirection : 'row',
    gap: 5
    
  },


  content: {
    padding: 16,
    paddingTop:50,
  },
});