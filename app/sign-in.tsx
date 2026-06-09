
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function signInScreen (){
  return (
    <ScrollView  style = {styles.container}contentContainerStyle={styles.content}>
      <View style = {styles.authView}>
        <View style = {{alignItems:'center'}}>
          <FontAwesome6 name="fire-flame-simple" size={32} color="#FF6B35"/>
        </View>
        <View style = {{alignItems: 'center', justifyContent: "center", gap: 20, marginTop: 20}}>
          <Text style = {styles.welcomeText}>Welcome Back</Text>
          <Text  style = {{color:'#6B6B6B', fontSize: 12,}}>Pick up where your streak left off</Text>
        </View>
        <View style = {{gap:10, marginTop: 40}}>
          <TouchableOpacity style={styles.completeButton}>
              <AntDesign name="google" size={20} color="#FFFFFF"  />
              <Text style = {{color: "#FFFFFF"}}>Continue with Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.completeButton}>
              <AntDesign name="github" size={20} color="#FFFFFF" />
              <Text style = {{color: "#FFFFFF"}}>Continue with GitHub</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.completeButton}>
              <AntDesign name="apple" size={20} color="#FFFFFF" />
              <Text style = {{color: "#FFFFFF"}}>Continue with Apple</Text>
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

  welcomeText: {
    color: "#FFFFFF",
    fontSize: 24,
    lineHeight: 24,
  },

  authView: {
    justifyContent: 'center',
  },

  completeButton: {
   backgroundColor: '#1C1C1C',
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 24,
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    width: '100%',
    borderWidth:1,
    borderColor: '#333333',
    marginBottom: 5,

  },

})