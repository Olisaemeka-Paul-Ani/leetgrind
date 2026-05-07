import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useState } from 'react';
import { ScrollView, StyleSheet, Switch, Text, View } from 'react-native';


export default function SettingsScreen() {
  const [reminderEnabled, setReminderEnabled] = useState(false);
  return (
    <ScrollView style = {styles.container}contentContainerStyle={styles.content}>
      <View style = {{gap:40}}>
        <View>
          <Text style = {styles.settingsText}>Settings</Text>
        </View>
        <View style = {{gap:15}}>
          <View>
            <Text style = {{color:'#6B6B6B', fontSize: 12,}}>ACCOUNT</Text>
          </View>
          <View style = {styles.accountCard} >
            <View style = {{flexDirection: 'row', alignItems: 'center', gap: 10}}>
              <View style = {styles.profilepic}>
                <Text style={{color: "#FFFFFF"}}>OE</Text>
              </View>
              <View style = {{ flexDirection: 'column', gap: 3,  flex: 1}}>
                <Text style = {styles.displayName}>Olisaemeka</Text>
                <Text style = {{color: "#9E9E9E",}}>oliemeka@gmail.com</Text>
              </View>
              <View style = {{justifyContent: 'space-between', }}>
                <MaterialIcons name="edit" size={20} color="#9E9E9E" />
              </View>
            </View>
            <View style = {{backgroundColor: "#333333", width: '100%', height:1, marginTop: 15, marginBottom: 15}}>
            </View>
            <View style = {{ flexDirection: 'row',justifyContent: 'center', alignItems: 'center'}}>
              <View style = {{ flexDirection: 'column', gap: 3,  flex: 1}}>
                <Text style = {styles.displayName}>LeetCode UserName</Text>
                <Text style = {{color: "#9E9E9E"}}>Subtitle</Text>
              </View>
              <View style = {{flexDirection: 'row', justifyContent:'center', alignItems: 'center'}}>
                <Text style = {{fontSize: 14, color: "#FF6B35",marginRight: 8}}>@olisaemeka</Text>
                <AntDesign name="star" size={12} color="#9E9E9E" />
              </View>
            </View>
          </View>
          <View>
            <Text style = {{color:'#6B6B6B', fontSize: 12,marginTop: 13,marginBottom: 0,}}>NOTIFICATIONS</Text>
          </View>
          <View style = {styles.accountCard} >
            <View style = {{flexDirection: 'row', alignItems: 'center', gap: 10}}>
              <View style = {{ flexDirection: 'column', gap: 3,  flex: 1}}>
                <Text style = {styles.displayName}>Daily Reminder</Text>
                <Text style = {{color: "#9E9E9E", fontSize: 12,}}>Get notified to keep your streak</Text>
              </View>
              <View style = {{flexDirection: 'row', alignItems: 'center', gap:7}}>
                <AntDesign name="star" size={12} color="#9E9E9E"/>
                <Switch
                    value={reminderEnabled}
                    onValueChange={setReminderEnabled}
                    trackColor={{ false: '#333333', true: '#FF6B35' }}
                    thumbColor="#FFFFFF"
                />
              </View> 
            </View>
            <View style = {{backgroundColor: "#333333", width: '100%', height:1, marginTop: 15, marginBottom: 15}}></View>
            <View style = {{ flexDirection: 'row',justifyContent: 'center', alignItems: 'center'}}>
              <View style = {{ flexDirection: 'column', gap: 3,  flex: 1}}>
                <Text style = {styles.displayName}>Reminder Time</Text>
                <Text style = {{color: "#9E9E9E"}}>Subtitle</Text>
              </View>
              <View style = {{flexDirection: 'row', justifyContent:'center', alignItems: 'center'}}>
                <Text style = {{fontSize: 14, color: "#FF6B35",marginRight: 8}}>9:00PM</Text>
                <AntDesign name="arrow-right" size={14} color="#FF6B35" />
              </View>
            </View>
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

  settingsText: {
    color: "#FFFFFF",
    fontSize: 24,
    lineHeight: 24,
  },

  accountCard: {
    backgroundColor: '#1C1C1C',
    borderRadius: 10,
    borderColor: '#333333',
    borderWidth: 1,
    padding: 16,
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },

  profilepic: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#333333',
    borderColor: '#333333',
    marginTop: 0,
    marginLeft: 0,
  },

  displayName :{
    fontSize: 14,
    color: "#FFFFFF",
  },

  
  
});