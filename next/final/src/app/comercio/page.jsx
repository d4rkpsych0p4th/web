"use client"
import Image from 'next/image';
import React, { useState, useEffect,useRef } from 'react';
import UserCard from '../components/UserCard';

const Usuario = () => {
  
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [storedData, setStoredData] = useState([]);
  const [photoUrl, setPhotoUrl] = useState('');
  useEffect(() => {
    // Obtener datos almacenados al cargar el componente
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('/api/user');
      const data = await response.json();
      //console.log(data.users); // Adjust the property based on your actual response structure
      setStoredData(data.users);
    } catch (error) {
      console.error(error);
    }
  };
  
  const handleSearch = () => {
    // Filtrar los usuarios basados en el término de búsqueda
    const filteredResults = storedData.filter((usuario) =>
      Object.values(usuario).some(
        (value) =>
          typeof value === "string" && value.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  
    setFilteredData(filteredResults);
  };

  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    // Trigger the click event of the file input
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    // Handle the selected file
    const selectedFile = event.target.files[0];
    console.log('Selected File:', selectedFile);
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
    backgroundSize: 'cover', // Adjust as needed
    backgroundPosition: 'bottom', // Adjust as needed
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
              <button onClick={handleSavePhotoUrl} className="bg-blue-500 text-white py-2 px-4 rounded-md ml-2">
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
          filteredData.map((usuario, index) => (
            <UserCard key={index} user={usuario} />
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
