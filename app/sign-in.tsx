import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import * as Linking from 'expo-linking';
import * as WebBrowser from 'expo-web-browser';
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { supabase } from '../lib/supabase';

export default function signInScreen() {
  async function signInWithGitHub() {
    const redirectUrl = Linking.createURL('/auth/callback')
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: { redirectTo: redirectUrl, skipBrowserRedirect: true },
    })
    if (data?.url) {
      const result = await WebBrowser.openAuthSessionAsync(data.url, redirectUrl)
      if (result.type === 'success' && result.url) {
        const params = new URLSearchParams(result.url.split('#')[1])
        const access_token = params.get('access_token')
        const refresh_token = params.get('refresh_token')
        if (access_token && refresh_token) {
          await supabase.auth.setSession({ access_token, refresh_token })
        }
      }
    }
  }

  async function signInWithGoogle() {
    const redirectUrl = Linking.createURL('/auth/callback')
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: redirectUrl, skipBrowserRedirect: true },
    })
    if (data?.url) {
      const result = await WebBrowser.openAuthSessionAsync(data.url, redirectUrl)
      if (result.type === 'success' && result.url) {
        const params = new URLSearchParams(result.url.split('#')[1])
        const access_token = params.get('access_token')
        const refresh_token = params.get('refresh_token')
        if (access_token && refresh_token) {
          await supabase.auth.setSession({ access_token, refresh_token })
        }
      }
    }
  }

  return (
    <KeyboardAvoidingView  behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}
>
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
            <TouchableOpacity onPress={signInWithGoogle} style={styles.completeButton}>
                <AntDesign name="google" size={20} color="#FFFFFF"  />
                <Text style = {{color: "#FFFFFF"}}>Continue with Google</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={signInWithGitHub}  style={styles.completeButton}>
                <AntDesign name="github" size={20} color="#FFFFFF" />
                <Text style = {{color: "#FFFFFF"}}>Continue with GitHub</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.completeButton}>
                <AntDesign name="apple" size={20} color="#FFFFFF" />
                <Text style = {{color: "#FFFFFF"}}>Continue with Apple</Text>
            </TouchableOpacity>
          </View>
          <View style = {{flexDirection:'row',width: '100%',justifyContent: 'center',alignItems: 'center', marginTop: 20, gap:5}}>
            <View style = {{backgroundColor: "#333333", flex:1, height:1, marginTop: 15, marginBottom: 15}}></View>
            <Text style = {{color:"#333333" }}>or</Text>
            <View style = {{backgroundColor: "#333333", flex: 1, height:1, marginTop: 15, marginBottom: 15}}></View>
          </View>
          <View style = {{gap:30}}>
            <View style  ={{gap:5}}>
              <Text style = {{color: "#FFFFFF"}}>Email</Text>
              <TextInput placeholder="olisa@example.com"placeholderTextColor="#6B6B6B" style={{backgroundColor: '#0A0A0A',borderWidth: 1, borderColor:"#6B6B6B",borderRadius: 8, paddingVertical :10, paddingHorizontal:5 , color: "#FFFFFF"}}/>
            </View>
            <View style  ={{gap:5,}}>
              <Text style = {{color: "#FFFFFF"}}>Password</Text>
              <TextInput secureTextEntry={true} placeholderTextColor="#6B6B6B" style={{backgroundColor: '#0A0A0A',borderWidth: 1, borderColor:"#6B6B6B",borderRadius: 8, paddingVertical :10, paddingHorizontal:5, color: "#FFFFFF"}}/>
              <View style = {{alignItems: 'flex-end', marginTop: 12}}>
                <Text style = {{color:"#FF6B35"}}>Forgot Password?</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.signInButton}>
                <Text style = {{color: "#FFFFFF", fontSize: 15}}>Sign In</Text>
            </TouchableOpacity>
            <View style = {{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
              <Text style = {{ color: "#FFFFFF"}}>Don't have an account? </Text>
              <TouchableOpacity>
                <Text style = {{ color: "#FF6B35"}}>Sign Up </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View> 
      </ScrollView>
    </KeyboardAvoidingView>
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

  signInButton : {
    backgroundColor: "#FF6B35",
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
  }

})