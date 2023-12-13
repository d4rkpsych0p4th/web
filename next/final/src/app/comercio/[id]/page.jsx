// merchant/[id]/page.jsx
import UserCard from '../../components/MerchCard';

async function loadUser(id) {
  const res = await fetch(`http://localhost:3000/api/merchant/${id}`);
  const data = await res.json();
  //console.log('API Response:', data); // Log the response
  return data.user;
}

const backgroundImage = {
  backgroundImage: `url('/assets/green.png')`,
  backgroundSize: 'cover', // Adjust as needed
  backgroundPosition: 'bottom', // Adjust as needed
  width: 'auto',
  height: 'auto',
};

async function Page({ params }) {
  const user = await loadUser(params.id);
  return (
    <div className="min-h-screen flex items-center justify-center" style={backgroundImage}>
        
      <UserCard key={params.id} merchant={user} />
   
  </div>
    
  );
}

export default Page;
