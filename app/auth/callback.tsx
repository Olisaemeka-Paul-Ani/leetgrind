import * as Linking from 'expo-linking'
import { useRouter } from 'expo-router'
import { useEffect } from 'react'
import { ActivityIndicator, View } from 'react-native'
import { supabase } from '../../lib/supabase'

export default function AuthCallback() {
  const router = useRouter()
  const url = Linking.useURL()

  useEffect(() => {
    if (url) {
      console.log('full url:', url)
      // tokens come after the # in the URL
      const params = new URLSearchParams(url.split('#')[1])
      const access_token = params.get('access_token')
      const refresh_token = params.get('refresh_token')
      console.log('access token found:', !!access_token)

      if (access_token && refresh_token) {
        supabase.auth.setSession({ access_token, refresh_token }).then(({ error }) => {
          if (!error) {
            router.replace('/(tabs)')
          }
        })
      }
    }
  }, [url])

  return (
    <View style={{ flex: 1, backgroundColor: '#0A0A0A', justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator color="#FF6B35" />
    </View>
  )
}