import cookieParser from 'cookie-parser'
import express from 'express'
import { createClient } from '@supabase/supabase-js'

const app = express()

const URL = 'https://zwtegtromhqhnevjockw.supabase.co'
const KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNjYzNzczNSwiZXhwIjoxOTUyMjEzNzM1fQ.CoXj5I-_5UHeJw_7Z67h_a4FYmEeC-jJfKQZfWjyndQ'

const supabase = createClient(URL, KEY)

app.use(express.json())
app.use(cookieParser())

app.post('/auth', async (req, res) => {
  await supabase.auth.api.setAuthCookie(req, res)
})

app.post('/user', async (req, res) => {
  try {
    const user = await supabase.auth.api.getUserByCookie(req)
    res.json(user)
  } catch (error) {
    res.status(500).send('Failed to get user')
  }
})

module.exports = app
