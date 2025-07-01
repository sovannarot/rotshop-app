import { createClient } from "@supabase/supabase-js";
export const supabase = createClient(
  import.meta.env.PUBLICPUBLIC_SUPABASE_URL,
  import.meta.env.PUBLIC_SUPABASE_ANON_KEY
);

