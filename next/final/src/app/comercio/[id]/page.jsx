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
    email: '',
    cif: '',
    ciudad: '',
    telefono: '',
    photoUrl: '',
    // Agrega más propiedades si es necesario
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

  return (
    <div className="min-h-screen flex items-center justify-center" style={backgroundImage}>
      {merchant && (
        <div>
          <UserCard key={params.id} merchant={merchant} />
         
       
        </div>
      )}
    </div>
  );
}

export default Page;
