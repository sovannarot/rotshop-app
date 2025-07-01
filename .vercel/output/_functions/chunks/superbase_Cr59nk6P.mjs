import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  "https://eyjaghweygkwbxwxprnu.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV5amFnaHdleWdrd2J4d3hwcm51Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEyMTI3OTEsImV4cCI6MjA2Njc4ODc5MX0.9AQTz0wEC8HeJ9gnRxEVVV1UefbIe1LCIWpafsd5v7E"
);

export { supabase as s };
