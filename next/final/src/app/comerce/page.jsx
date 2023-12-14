"use client"

import React, { useState, useEffect } from 'react';
import UserCard from '../components/UserCard';
import Link from 'next/link';

const Usuario = () => {
  const [id, setId] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [storedData, setStoredData] = useState([]);

  
  async function loadUser(id) {
    const res = await fetch(`http://localhost:3000/api/merchant/${id}`);
    const data = await res.json();
    return data.user;
  }


  // const handleUpdateMerchant = async () => {
  //   // Obtén los datos actuales del comercio
  //   const currentMerchant = await loadUser();

  //   // Combina los datos actuales con los nuevos datos introducidos por el usuario
  //   const updatedData = {
  //     ...currentMerchant,
  //     ...newData,
  //   };

  //   // Filtra los campos que no se han proporcionado (es decir, aquellos que están vacíos)
  //   const filteredData = Object.keys(updatedData).reduce((acc, key) => {
  //     if (newData[key] !== '') {
  //       acc[key] = updatedData[key];
  //     }
  //     return acc;
  //   }, {});

  //   // Actualiza el comercio
  //   await updateMerchant(params.id, filteredData);

  //   // Recarga los datos después de la actualización
  //   const updatedUser = await loadUser(params.id);
  //   setMerchant(updatedUser);
  // };

  const fetchData = async () => {
    try {
      //const response = JSON.parse(readFileSync("data/user.txt"))
      const response = await fetch('http://localhost:3000/api/user');
      const data = await response.json();
      console.log("fetchdatea:",data)
      setStoredData(data);
      console.log("fetchdatea2:",setStoredData)
    } catch (error) {
      console.error(error);
    }
  };
  
  useEffect(() => {
    // Obtener datos almacenados al cargar el componente
    fetchData();
  }, []);


    //console.log('Stored Data:', storedData);
    //console.log('Search Term:', searchTerm);
  
    // Check if storedData is an array before applying filter
    const handleSearch = () => {
      const filteredResults = Array.isArray(storedData.user)
        ? storedData.user.filter(
            (user) =>
              (user.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
              user.ciudad.toLowerCase().includes(searchTerm.toLowerCase())) &&
              (user.permiteofertas ? true : false)
          )
        : [];
  
      setFilteredData(filteredResults);
    };
    
  const backgroundImageStyle = {
    backgroundImage: `url('/assets/green.png')`,
    backgroundSize: 'cover', 
    backgroundPosition: 'bottom',
    width: 'auto',
    height: 'auto',
  };

  const handleUserIdChange = (e) => {
    setId(e.target.value);
  };
  

  return (
    
    
    <div className="flex items-center justify-begin" style={backgroundImageStyle} >
          
    <div className="flex flex-col bg-gray-300 p-8 ml-20 rounded-md shadow-md">
  <h2 className="text-2xl font-bold mb-4">Editar Comercio</h2>
  <div>
          {/* ... código restante del componente */}
          <form>
            {/* Otros campos del formulario */}
            <label>ID del comercio:</label>
            <input
              type="text"
              value={id}
              onChange={handleUserIdChange}
              className="block w-full p-2 border rounded-md"
            />
          </form>

          <Link href={`/comerce/${id}`} key={id}>
            <button  className="mt-4 bg-blue-700 text-white py-2 px-4 rounded-md">
              EDITAR CUENTA
            </button>
          </Link>
        </div>
</div>;
          

<div className="flex h-screen items-center justify-end p-8 ">
        <div className="bg-gray-300 p-8 rounded-md shadow-md md:w-96">
          <h2 className="text-2xl font-bold mb-4">Busqueda de Usuario</h2>
          <div className="mt-4">
            <label>Buscar Usuario:</label>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full p-2 border rounded-md"
            />
            <button onClick={handleSearch} className="bg-blue-500 text-white py-2 px-4 rounded-md mt-2">
              Buscar
            </button>
          </div>
        </div>
      </div>

      {/* Card list outside the search box container */}
      <div className="flex flex-col flex-fil card-list">
        {filteredData.length > 0 ? (
          filteredData.map((user, index) => (
            <UserCard key={index} user={user} />
          ))
        ) : (
          <div className="bg-gray-200 p-8 hidden rounded-md shadow-md md:w-96">
          <p>No hay resultados</p>
          </div>
        )}
      </div>
    </div>
  );
};


export default Usuario;