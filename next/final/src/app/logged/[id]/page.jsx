"use client"
import Card from '../../components/UserCard';


async function loadUser(id) {
  const res = await fetch(`http://localhost:3000/api/user/${id}`);
  const data = await res.json();
  console.log('API Response:', data); // Log the response
  if (res.status === 404) {
    return null; // Devuelve null si el usuario no se encuentra
  }

  return data.user;
}

const backgroundImage = {
  backgroundImage: `url('/assets/santorini.jpg')`,
  backgroundSize: 'cover', // Adjust as needed
  backgroundPosition: 'bottom', // Adjust as needed
  width: 'auto',
  height: 'auto',
};


async function Page({ params }) {

  const user = await loadUser(params.id);

  return (
    <div className="min-h-screen flex flex-col items-center" style={backgroundImage}>
    <div className="flex justify-end px-20 mt-8 mb-4 w-full">
    
   
        <button className="sticky top-0 bg-red-500 text-white py-4 px-8 rounded-md text-xl font-bold"
      onClick={async () => {
        try {
          await fetch(`http://localhost:3000/api/user/${params.id}`, {
            method: 'DELETE',
          });
          router.push('/anon');
        } catch (error) {
          console.error('Error deleting user:', error);
          // Puedes mostrar un mensaje de error o manejar la situación de otra manera
        }
      }}
    >
      Borrar Cuenta
    </button>
    
  </div>
  <Card key={params.id} user={user} />
  </div>
);
}

export default Page;
