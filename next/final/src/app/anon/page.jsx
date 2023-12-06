"use client"
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import UserCard from '../components/MerchCard';

const Anon = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [storedData, setStoredData] = useState([]);
  const [loading, setLoading] = useState(true); // Mover la declaración aquí

  useEffect(() => {
    // Obtener datos almacenados al cargar el componente
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('/api/merchant');
      const data = await response.json();
      setStoredData(data.users);
      setLoading(false); // Marcar que los datos se han cargado
    } catch (error) {
      console.error(error);
      setLoading(false); // Marcar que los datos se han cargado incluso en caso de error
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
    backgroundImage: `url('/assets/copas.jpg')`,
    backgroundSize: 'contain', // Ajustar según sea necesario
    backgroundPosition: 'bottom', // Ajustar según sea necesario
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
      <div className="mt-4 justify-begin px-20">
        <Link href="/usuario" className="bg-green-500 text-white py-4 px-8 rounded-md text-xl font-bold">Regístrate
        </Link>
      </div>
    </div>
      
  
      
  );
};

export default Anon;
