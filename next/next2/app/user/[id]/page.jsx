import Card from '@/components/Card';
import { Suspense } from 'react';

async function loadUser(id) {
  const res = await fetch(`https://reqres.in/api/users/${id}`);
  const data = await res.json();
  return data.data; // El objeto de usuario está en data.data
}

async function Page({ params }) {
  const user = await loadUser(params.id);
  return (
    <div>
    
      <h1>Usuario:{user.first_name} id: {params.id}</h1>
        <Card user={user} />
        
    </div>
  );
}

export default Page;