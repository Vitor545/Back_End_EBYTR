const { createClient } = require( '@supabase/supabase-js');


const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im16ZnJ0dXRnamRycnFuaXh5Y3RnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTMwNDQ1MDEsImV4cCI6MTk2ODYyMDUwMX0.JUfoXAV6Oe0zjrtymaYyBB2hFv_GNkfmHKh3uHzZKPI'
const SUPABASE_URL = "https://mzfrtutgjdrrqnixyctg.supabase.co"

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);


module.exports = {
  supabase
};