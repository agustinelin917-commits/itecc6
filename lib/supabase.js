import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://qibbqvshkfwqqbvrqzya.supabase.com'
const supabaseKey = 'sb_publishable_ijY1tOSbdwYTczkWji9Qnw_lbpQ1jtk'
export const supabase = createClient(supabaseUrl, supabaseKey)