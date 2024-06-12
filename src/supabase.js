import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://fuioyaaffivtbstirlld.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ1aW95YWFmZml2dGJzdGlybGxkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc5ODQzNDUsImV4cCI6MjAzMzU2MDM0NX0.sNG6lZ4s2GFzYuZHTWlvWmkCH2vdSQ8w8vEYZDwG9dg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
