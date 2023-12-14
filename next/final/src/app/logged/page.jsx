"use client"

import React, { useState, useEffect } from 'react';
import UserCard from '../components/MerchCard';
import Link from 'next/link';

const Logged = () => {

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
    const filteredResults = storedData.filter(
      (comercio) =>
        comercio.nombreComerciante.toLowerCase().includes(searchTerm.toLowerCase()) ||
        comercio.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        comercio.cif.toLowerCase().includes(searchTerm.toLowerCase()) ||
        comercio.ciudad.toLowerCase().includes(searchTerm.toLowerCase()) ||
        comercio.telefono.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredData(filteredResults);
  };
  const backgroundImageStyle = {
    backgroundImage: `url('/assets/santorini.jpg')`,
    backgroundSize: 'cover', // Adjust as needed
    backgroundPosition: 'bottom', // Adjust as needed
    width: 'auto',
    height: 'auto',
  };

  
  return (
  
          <div className="min-h-screen flex flex-col items-center" style={backgroundImageStyle}>
          
        <div className="bg-gray-200 p-8 rounded-md shadow-md mt-8">
          <h2 className="text-2xl font-bold mb-4">Busqueda Comerciante</h2>
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
      
     
      <div>
      {/* Card list outside the search box container */}
      <div className="sticky top-0 ml-3 mt-8  card-list ">
        {filteredData.length > 0 ? (
          filteredData.map((comercio, index) => (
            <Link href={`/comercio/${comercio.id}`} key={comercio.id}>
            <UserCard key={index} merchant={comercio} />
            </Link>
          ))
        ) : (
          <div className="bg-gray-200 hidden rounded-md shadow-md">
            <p>No hay resultados</p>
          </div>
        )}
      </div>
      </div>
    </div>
  
  
  );
};


export default Logged;
