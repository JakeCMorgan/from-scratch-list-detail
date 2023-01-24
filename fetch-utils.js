const SUPABASE_URL = 'https://usheruhymluidrfdhheu.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVzaGVydWh5bWx1aWRyZmRoaGV1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQyNTc1MDksImV4cCI6MTk4OTgzMzUwOX0.QjjqpyfcTdEDXQrrL5etMEt5BZFjp0GeTudUiqwVKV8';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getGames() {
    const { data, error } = await client.from('games').select(`*`);
    if (error) console.error(error);
    return data;
}

function checkError({ data, error }) {
    return error ? console.error(error) : data;
}
