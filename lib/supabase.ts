import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://pjmktfeqxofulrutajff.supabase.co/rest/v1/'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBqbWt0ZmVxeG9mdWxydXRhamZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk5MTQ1MDEsImV4cCI6MjA5NTQ5MDUwMX0.FzcuDlds8PIBIPWhSM8qpOI5Zn-YZ0YiISGnkhM8VNQ'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})