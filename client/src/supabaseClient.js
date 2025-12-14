import { createClient } from '@supabase/supabase-js'

// Estas variáveis devem estar no ficheiro .env ou no Vercel
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
    console.warn('Supabase URL ou Key falharam. Verifica o teu .env')
}

export const supabase = createClient(supabaseUrl, supabaseKey)
