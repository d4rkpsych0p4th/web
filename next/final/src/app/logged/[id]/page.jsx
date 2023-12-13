"use client"
import Card from '../../components/UserCard';


async function loadUser(id) {
  const res = await fetch(`http://localhost:3000/api/user/${id}`);
  const data = await res.json();
  console.log('API Response LOADUSER:', data); // Log the response
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
  console.log('params.id:', params.id);
  const users = await loadUser(params.id);
  console.log('API Response USERS:', users);
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value, // Manejar el checkbox de manera diferente
    }));
  };

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


  <div className="flex items-start mt-4">
  <div className="flex-col mt-4 mr-20 bg-gray-300 p-8 ml-20 rounded-md shadow-md">
  <h2 className="text-2xl font-bold mb-4">Editar Usuario</h2>
  <div className="mb-4">
    <label>Ciudad:</label>
    <button
      onClick={() => console.log("Botón de Ciudad")}
      className="block w-full p-2 border rounded-md bg-blue-500 text-white"
    >
      Editar Ciudad
    </button>
  </div>
  <div className="mb-4">
    <label>Intereses</label>
    <button
      onClick={() => console.log("Botón de INTERESES")}
      className="block w-full p-2 border rounded-md bg-blue-500 text-white"
    >
      Editar Intereses
    </button>
  </div>
  <div>
      <label>
        <input type="checkbox" id="default-checkbox" name="permiteofertas" onChange={handleChange}
          className="w-4 h-4 text-blue-500 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
        ¿Permitir ofertas?
      </label>
    </div>
    </div>
    <div className='mt-4'>
  <Card key={params.id} user={users} />
</div>
</div>


  </div>
);
};

export default Page;
