import 'react-native-url-polyfill/auto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://mwdfbajgrsxcdnyngugy.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im13ZGZiYWpncnN4Y2RueW5ndWd5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIwNjk1MjksImV4cCI6MjAyNzY0NTUyOX0.fa5O4crpwZLtBNR7dHiP2dQ_mP9XLsjIMAZ40t-fVRE"

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})