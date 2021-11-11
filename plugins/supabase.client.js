import { createClient } from '@supabase/supabase-js'
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNjYzNzczNSwiZXhwIjoxOTUyMjEzNzM1fQ.CoXj5I-_5UHeJw_7Z67h_a4FYmEeC-jJfKQZfWjyndQ'
export default ({ app }, inject) => {
  const supabaseUrl = 'https://zwtegtromhqhnevjockw.supabase.co'
  const supabaseKey = SUPABASE_KEY
  const supabase = createClient(supabaseUrl, supabaseKey)

  inject('supabase', supabase)
}
