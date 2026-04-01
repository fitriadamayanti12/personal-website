import { supabase } from '@/lib/supabase';

export default async function TestDB() {
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .limit(1);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Database Connected!</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}