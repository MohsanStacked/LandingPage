import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://gclutuoecujhtwhvpnza.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdjbHV0dW9lY3VqaHR3aHZwbnphIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY4NTY5MzAsImV4cCI6MjA1MjQzMjkzMH0.t1T7ywP6kY9XdYN6-w7XtGMiQPLj68OmczjT1XY5EDg"
);

export default supabase;
