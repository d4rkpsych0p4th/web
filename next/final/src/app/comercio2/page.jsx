"use client"
import React, { useState, useEffect } from 'react';
import UserCard from '../components/MerchCard';

const commerce = () => {
  
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [storedData, setStoredData] = useState([]);

  useEffect(() => {
    // Obtener datos almacenados al cargar el componente
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('/api/merchant');
      const data = await response.json();
      //console.log(data.users); // Adjust the property based on your actual response structure
      setStoredData(data.users);
    } catch (error) {
      console.error(error);
    }
  };
  
  const handleSearch = () => {
    // Filtrar los usuarios basados en el término de búsqueda
    const filteredResults = storedData.filter((comercio) =>
      Object.values(comercio).some(
        (value) =>
          typeof value === "string" && value.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  
    setFilteredData(filteredResults);
  };

  const backgroundImageStyle = {
    backgroundImage: `url('/assets/green.png')`,
    backgroundSize: 'cover', // Adjust as needed
    backgroundPosition: 'bottom', // Adjust as needed
    width: '100vw',
    height: '100vh',
  };

  return (
    
    
    <div className="flex items-center justify-begin p-48" style={backgroundImageStyle} >
    <img src="/assets/logo.png" alt="Logo" style={{ position: 'absolute',top: '10px', right: '10px', width: '500px', height: 'auto',}}/>
          

<div className="flex h-screen items-center justify-end p-8 ">
        <div className="bg-gray-200 p-8 rounded-md shadow-md md:w-96">
          <h2 className="text-2xl font-bold mb-4">Busqueda de Comercio</h2>
          <div className="mt-4">
            <label>Buscar Comercio:</label>
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
      <div className="card-list">
        {filteredData.length > 0 ? (
          filteredData.map((comercio, index) => (
            <UserCard key={index} merchant={comercio} />
          ))
        ) : (
          <div className="bg-gray-200 p-8 rounded-md shadow-md md:w-96">
          <p>No hay resultados</p>
          </div>
        )}
      </div>
    </div>
  );
};


export default commerce;
