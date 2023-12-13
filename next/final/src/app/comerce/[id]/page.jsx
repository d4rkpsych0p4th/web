// comercio/[id]/page.jsx
"use client"
import React, { useState, useEffect } from 'react';
import UserCard from '../../components/MerchCard';

async function loadUser(id) {
  const res = await fetch(`http://localhost:3000/api/merchant/${id}`);
  const data = await res.json();
  return data.user;
}

const updateMerchant = async (id, updatedData) => {
  try {
    const response = await fetch(`http://localhost:3000/api/merchant/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    });

    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error('Error updating merchant:', error);
  }
};

const backgroundImage = {
  backgroundImage: `url('/assets/green.png')`,
  backgroundSize: 'cover',
  backgroundPosition: 'bottom',
  width: 'auto',
  height: 'auto',
};

function Page({ params }) {
  const [merchant, setMerchant] = useState(null);
  const [newData, setNewData] = useState({
          id:'',
          email: '',
          nombreComerciante: '',
          cif: '',
          ciudad: '',
          telefono: '',
          puntuacion: 0,
          comentario: [],
          photoUrl: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      const user = await loadUser(params.id);
      setMerchant(user);
    };

    fetchData();
  }, [params.id]);

  const handleUpdateMerchant = async () => {
    // Obtén los datos actuales del comercio
    const currentMerchant = await loadUser(params.id);

    // Combina los datos actuales con los nuevos datos introducidos por el usuario
    const updatedData = {
      ...currentMerchant,
      ...newData,
    };

    // Filtra los campos que no se han proporcionado (es decir, aquellos que están vacíos)
    const filteredData = Object.keys(updatedData).reduce((acc, key) => {
      if (newData[key] !== '') {
        acc[key] = updatedData[key];
      }
      return acc;
    }, {});

    // Actualiza el comercio
    await updateMerchant(params.id, filteredData);

    // Recarga los datos después de la actualización
    const updatedUser = await loadUser(params.id);
    setMerchant(updatedUser);
  };

  const handleInputChange = (e) => {
    // Actualiza el estado con los nuevos datos introducidos por el usuario
    setNewData({
      ...newData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePhotoUrlChange = (e) => {
    // Actualiza el estado con la nueva URL de la foto
    setNewData({
      ...newData,
      photoUrl: e.target.value,
    });
  };
  return (
    <div className="min-h-screen flex items-center justify-center" style={backgroundImage}>
      {merchant && (
         <div className="flex flex-col bg-gray-200 bg-opacity-50 p-8 ml-20 rounded-md shadow-md">
         <h2 className="text-2xl font-bold mb-4">Editar Datos</h2>
        <div>
          <UserCard key={params.id} merchant={merchant} />
          
          {/* Formulario para introducir nuevos datos */}
          <form >
            <label>Email:</label>
            <input
              type="text"  className="mb-4 border rounded-md"
              name="email"
              value={newData.email}
              onChange={handleInputChange}
            />

            <label>CIF:</label>
            <input
              type="text"  className="mb-4 border rounded-md"
              name="cif"
              value={newData.cif}
              onChange={handleInputChange}
            />

            <label>Ciudad:</label>
            <input
              type="text"  className="mb-4 border rounded-md"
              name="ciudad"
              value={newData.ciudad}
              onChange={handleInputChange}
            />

            <label>Teléfono:</label>
            <input
              type="text"  className="mb-4 border rounded-md"
              name="telefono"
              value={newData.telefono}
              onChange={handleInputChange}
            />
         <div className="mb-4 px-4 py-4">
                <label>Subir Foto:</label>
                <div>
                  <input
                    type="text"
                    value={newData.photoUrl}
                    onChange={handlePhotoUrlChange}
                    placeholder="Ingrese la URL de la foto"
                    className="block w-full p-2 border rounded-md"
                  />
                  <button onClick={handleUpdateMerchant} className="mt-4 bg-blue-700 text-white py-2 px-4 rounded-md">
                    Guardar Cambios
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
