import { createClient } from '@supabase/supabase-js'

export const client=createClient(
    prcess.env.REACT_APP_SUPABASE_URL, 
    process.env.REACT_APP_SUPABASE_ANON_KEY)