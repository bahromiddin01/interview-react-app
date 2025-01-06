import { supabase } from "../supabase/supabase"

export const getUser = async () =>( await supabase.auth.getUser()).data