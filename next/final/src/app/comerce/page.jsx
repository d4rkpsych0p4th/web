"use client"

import React, { useState, useEffect } from 'react';
import UserCard from '../components/UserCard';

const Usuario = () => {
  
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [storedData, setStoredData] = useState([]);
  const [photoUrl, setPhotoUrl] = useState('');
  
  

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
 
  const handlePhotoUrlChange = (event) => {
    // Handle the change in the photo URL text input
    setPhotoUrl(event.target.value);
  };
  const handleSavePhotoUrl = () => {
    // Handle saving the photo URL, you can perform additional logic if needed
    console.log('Saved Photo URL:', photoUrl);
    // Reset the input after saving
    setPhotoUrl('');
  };
  const backgroundImageStyle = {
    backgroundImage: `url('/assets/green.png')`,
    backgroundSize: 'cover', 
    backgroundPosition: 'bottom',
    width: 'auto',
    height: 'auto',
  };

  return (
    
    
    <div className="flex items-center justify-begin" style={backgroundImageStyle} >
          
    <div className="flex flex-col bg-gray-300 p-8 ml-20 rounded-md shadow-md">
  <h2 className="text-2xl font-bold mb-4">Editar Comercio</h2>
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
    <label>Actividad</label>
    <button
      onClick={() => console.log("Botón de Actividad")}
      className="block w-full p-2 border rounded-md bg-blue-500 text-white"
    >
      Editar Actividad
    </button>
  </div>
  <div className="mb-4">
    <label>Titulo</label>
    <button
      onClick={() => console.log("Botón de Titulo")}
      className="block w-full p-2 border rounded-md bg-blue-500 text-white"
    >
      Editar Titulo
    </button>
  </div>
  <div className="mb-4">
    <label>Resumen</label>
    <button
      onClick={() => console.log("Botón de Resumen")}
      className="block w-full p-2 border rounded-md bg-blue-500 text-white"
    >
      Editar Resumen
    </button>
  </div>
  <div className="mb-4">
    <label>Texto</label>
    <button
      onClick={() => console.log("Botón de Texto")}
      className="block w-full p-2 border rounded-md bg-blue-500 text-white"
    >
      Editar Texto
    </button>
  </div>
  <div className="mb-4">
          <label>Subir Foto:</label>
          <div>
            {/* Replace file input with text input for photo URL */}
            <input
              type="text"
              value={photoUrl}
              onChange={handlePhotoUrlChange}
              placeholder="Ingrese la URL de la foto"
              className="block w-full p-2 border rounded-md"/>
              <button onClick={handleSavePhotoUrl} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md ml-2">
              Guardar
            </button>
          </div>
        </div>
</div>;
          

<div className="flex h-screen items-center justify-end p-8 ">
        <div className="bg-gray-200 p-8 rounded-md shadow-md md:w-96">
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