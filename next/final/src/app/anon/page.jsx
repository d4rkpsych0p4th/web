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
    width: 'auto',
    height: 'auto',
  };

  return (
    <div className="min-h-screen flex flex-col items-center" style={backgroundImageStyle}>
    <div className="flex justify-end px-20 mt-4 ">
      <Link href="/usuario" className="sticky top-0 bg-green-500 text-white py-4 px-8 rounded-md text-xl font-bold">
        Regístrate
      </Link>
    </div>
    <div className="bg-gray-200 p-8 rounded-md shadow-md mt-8">
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
     

    {/* Card list outside the search box container */}
    <div className="flex flex-col flex-fil card-list mt-4">
        {filteredData.length > 0 ? (
          filteredData.map((comercio) => (
            <Link href={`/comercio/${comercio.id}`} key={comercio.id}>
              
                <UserCard merchant={comercio} />
              
            </Link>
          ))
        ) : (
          <div className="bg-gray-200 hidden rounded-md shadow-md">
            <p>No hay resultados</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Anon;
