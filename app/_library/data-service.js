import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://qvimrligfqvjxvesfpcb.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF2aW1ybGlnZnF2anh2ZXNmcGNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTczMDg4MjYsImV4cCI6MjAzMjg4NDgyNn0.TvXhvXDiSKhRPL-Q2CgUrL64WaphmLrQdrZMJHkjW8A'
export const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase