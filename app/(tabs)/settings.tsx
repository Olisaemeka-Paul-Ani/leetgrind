import AntDesign from '@expo/vector-icons/AntDesign';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Fontisto from '@expo/vector-icons/Fontisto';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useState } from 'react';
import { ScrollView, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';


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
          <View>
            <Text style = {{color:'#6B6B6B', fontSize: 12,}}>PREMIUM</Text>
          </View>
          <View style = {styles.premiumCard} >
            <View style = {{flexDirection: 'row', flex:1}}>
              <View style = {{flex:1,}}>
                <View style = {{flexDirection: 'row', alignItems: 'center', gap: 10}}>
                  <View style = {{ flexDirection: 'column', gap: 3,}}>
                    <Text style = {{fontSize: 22, color: "#FFFFFF"}}>LeetGrind Pro</Text>
                  </View>
                  <View style = {styles.question}>
                    <Text style={{color: '#1C1C1C', fontSize: 10}}>?</Text>
                  </View> 
                </View>
                <View style ={{marginTop: 5}}>
                  <Text style = {{color: "#9E9E9E"}}>Level up your accountability</Text>
                </View>
              </View>
              <View style ={styles.activeView}><Text style = {{color:"#FFFFFF", fontSize:10, fontWeight: 'bold',}}>ACTIVE</Text></View>
            </View>
            <View style = {{marginTop: 10, gap:5, marginBottom: 30,}}>
              <View style ={{ flexDirection: 'row', gap: 3, alignItems: 'center',flex:1}}><Ionicons name="checkmark-circle-outline" size={18} color='#FF6B35' /><Text style = {styles.displayName}>Unlimited Study Groups</Text></View>
              <View style ={{ flexDirection: 'row', gap: 3, alignItems: 'center',flex:1}}><Ionicons name="checkmark-circle-outline" size={18} color='#FF6B35' /><Text style = {styles.displayName}>Advanced Streak Analytics</Text></View>
              <View style ={{ flexDirection: 'row', gap: 3, alignItems: 'center',flex:1}}><Ionicons name="checkmark-circle-outline" size={18} color='#FF6B35' /><Text style = {styles.displayName}>Custom Reminder Sounds</Text></View>
            </View>
            <TouchableOpacity style = {{justifyContent: 'center',alignItems: 'center', marginBottom: 20,}}>
              <Text style = {{fontSize: 16, color: "#FFFFFF"}}>Manage Subscription</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style = {{color:'#6B6B6B', fontSize: 12,}}>ACCOUNT</Text>
          </View>
          <View style = {styles.accountCard} >
            <View style = {{ flexDirection: 'row',justifyContent: 'center', alignItems: 'center'}}>
              <View style = {{ flexDirection: 'column', gap: 3,  flex: 1}}>
                <Text style = {styles.displayName}>Appearance</Text>
                <Text style = {{color: "#9E9E9E"}}>Subtitle</Text>
              </View>
              <View style = {{flexDirection: 'row', justifyContent:'center', alignItems: 'center'}}>
                <Text style = {{fontSize: 14, color: "#FF6B35",marginRight: 8}}>Dark Mode</Text>
              </View>
            </View>
            <View style = {{backgroundColor: "#333333", width: '100%', height:1, marginTop: 15, marginBottom: 15}}></View>
              <View style = {{ flexDirection: 'row',justifyContent: 'center', alignItems: 'center'}}>
                <View style = {{ flexDirection: 'column', gap: 3,  flex: 1}}>
                  <Text style = {styles.displayName}>Privacy Policy</Text>
                  <Text style = {{color: "#9E9E9E"}}>Subtitle</Text>
                </View>
                <View style = {{flexDirection: 'row', justifyContent:'center', alignItems: 'center'}}>
                  <EvilIcons name="external-link" size={24} color="#9E9E9E" />
                </View>
              </View>
            <View style = {{backgroundColor: "#333333", width: '100%', height:1, marginTop: 15, marginBottom: 15}}></View>
            <View style = {{ flexDirection: 'row',justifyContent: 'center', alignItems: 'center'}}>
              <View style = {{ flexDirection: 'column', gap: 3,  flex: 1}}>
                <Text style = {styles.displayName}>Help & Support</Text>
                <Text style = {{color: "#9E9E9E"}}>Subtitle</Text>
              </View>
              <View style = {{flexDirection: 'row', justifyContent:'center', alignItems: 'center'}}>
                <Fontisto name="email" size={19} color="#9E9E9E" />
              </View>
            </View>
          </View>
          <TouchableOpacity style ={{justifyContent: 'center',alignItems: 'center', marginTop: 20,}}>
            <Text style = {{fontSize: 14, color: "#FF6B35"}}>Sign Out</Text>
          </TouchableOpacity>
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

  premiumCard: {
    backgroundColor: '#1C1C1C',
    borderRadius: 10,
    borderColor: "#FF6B35",
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
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#333333',
    marginTop: 0,
    marginLeft: 0,
  },

  question: {
    width: 13,
    height: 13,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#FF6B35",
    marginTop: 0,
    marginLeft: 0,
  },

  displayName :{
    fontSize: 14,
    color: "#FFFFFF",
  },

  activeView: {
    backgroundColor: "#2A1A0E",
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    height: 30,
    borderRadius:10,
  }

  
  
});