import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://rnzumycaangvwbbavjvw.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJuenVteWNhYW5ndndiYmF2anZ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE3MTA1MDksImV4cCI6MjAyNzI4NjUwOX0.B5HZlWtbIOZTx3-4jcQ9SlOqrZ8SQgaU6RmrJY0NeiE";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
