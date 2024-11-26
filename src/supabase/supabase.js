import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://wrzogfjtbbvqtcwwtswe.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indyem9nZmp0YmJ2cXRjd3d0c3dlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIyOTI4OTgsImV4cCI6MjA0Nzg2ODg5OH0.mNiCmIRaE_Pj6Hq3W7zb77gTsBoCetAqN5e6e3ZC36Y'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
