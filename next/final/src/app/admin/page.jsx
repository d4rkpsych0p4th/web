"use client"
import React, { useState, useEffect } from 'react';
import UserCard from '../components/MerchCard';

const Admin = () => {
  const [formData, setFormData] = useState({
    email: '',
    nombreComerciante: '',
    cif: '',
    ciudad: '',
    telefono: '',
    puntuacion: 0,
    comentario: [],
  });

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
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/merchant', {  // Assuming your serverless function is in the '/merchant' path
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        alert('Datos guardados exitosamente');
        // Optionally, reset the form data after a successful request
        setFormData({
          email: '',
          nombreComerciante: '',
          cif: '',
          ciudad: '',
          telefono: '',
          puntuacion: 0,
          comentario: [],
        });
        fetchData(); // Refetch data after submission
      } else {
        console.error(`HTTP error! Status: ${response.status}`);
        alert('Error al guardar los datos');
      }
    } catch (error) {
      console.error(error);
      alert('Error al guardar los datos');
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
    backgroundImage: `url('/assets/fondo-admin.jpg')`,
    backgroundSize: 'cover', // Adjust as needed
    backgroundPosition: 'bottom', // Adjust as needed
    width: 'auto',
    height: 'auto',
  };
  return (
    
    <div className="flex items-center justify-begin" style={backgroundImageStyle} >

        <div className="flex flex-col bg-gray-200 ml-20 p-8 rounded-md shadow-md">  
          <h2 className="text-2xl font-bold mb-4">Registro Comerciante</h2>
          <div className="mb-4 ">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="block w-full p-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label>Nombre Comerciante</label>
            <input
              type="text"
              name="nombreComerciante"
              value={formData.nombreComerciante}
              onChange={handleChange}
              className="block w-full p-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label>CIF</label>
            <input
              type="text"
              name="cif"
              value={formData.cif}
              onChange={handleChange}
              className="block w-full p-2 border rounded-md"
            />
          </div><div className="mb-4">
            <label>Ciudad</label>
            <input
              type="text"
              name="ciudad"
              value={formData.ciudad}
              onChange={handleChange}
              className="block w-full p-2 border rounded-md"
            />
          </div><div className="mb-4">
            <label>telefono</label>
            <input
              type="tel"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              className="block w-full p-2 border rounded-md"
            />
            <div  name="puntuacion"value={formData.puntuacion}></div>
            <div  name="comentario"value={formData.comentario}></div>

          </div>
          <button onClick={handleSubmit} className="bg-blue-700 text-white py-2 px-4 rounded-md">
            Submit
          </button>
          </div>


          <div className="flex h-screen items-center justify-end p-8">
        <div className="bg-gray-200 p-8 rounded-md shadow-md">
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
      <div className="sticky top-0 ml-3 card-list ">
        {filteredData.length > 0 ? (
          filteredData.map((comercio, index) => (
            <UserCard key={index} merchant={comercio} />
          ))
        ) : (
          <div className="bg-gray-200 hidden rounded-md shadow-md">
            <p>No hay resultados</p>
          </div>
        )}
      </div>
      </div>
    </div>
    </div>
  
  );
};

export default Admin;
