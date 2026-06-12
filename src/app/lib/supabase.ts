/// <reference types="vite/client" />
import { createClient } from "@supabase/supabase-js";

// Public anon keys — safe to include in frontend code (Row Level Security enforces access)
// For production hosting, set these as environment variables instead
const SUPA_URL = import.meta.env.VITE_SUPABASE_URL
const SUPA_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY 

export const db = createClient(SUPA_URL, SUPA_KEY);

export const COURSES: Record<string, { name: string; price: string; badge: string }> = {
  esl: { name: "ESL Online Teaching", price: "$70", badge: "Enrolling Now" },
  voiceover: { name: "Professional Voiceover", price: "TBA", badge: "Coming Soon" },
  pm: { name: "Project Management for Beginners", price: "TBA", badge: "Coming Soon" },
};
