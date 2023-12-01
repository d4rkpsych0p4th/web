"use client"
import React, { useState, useEffect } from 'react';

const Admin = () => {
  const [formData, setFormData] = useState({
    email: '',
    nombreComerciante: '',
    cif: '',
    direccion: '',
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
      const response = await fetch('http://localhost:3001/api/adminData');
      const data = await response.json();
      setStoredData(data);
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
      const response = await fetch('http://localhost:3001/api/adminData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const updatedData = await response.json();
      setStoredData(updatedData);
      setFormData({
        email: '',
        nombreComerciante: '',
        cif: '',
        direccion: '',
        telefono: '',
        puntuacion: 0,
        comentario: [],
      });

      alert('Datos guardados exitosamente');
    } catch (error) {
      console.error(error);
      alert('Error al guardar los datos');
    }
  };

  const handleSearch = () => {
    // Filtrar los comercios basados en el término de búsqueda
    const filteredResults = storedData.filter(
      (comercio) =>
        comercio.nombreComerciante.toLowerCase().includes(searchTerm.toLowerCase()) ||
        comercio.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        comercio.cif.toLowerCase().includes(searchTerm.toLowerCase()) ||
        comercio.direccion.toLowerCase().includes(searchTerm.toLowerCase()) ||
        comercio.telefono.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredData(filteredResults);
  };
  return (
    
    <div>
    <div className="flex items-center justify-begin p-48"  style={{ backgroundImage: `url('/assets/fondo-admin.jpg')`, backgroundSize: 'contain', backgroundPosition: 'bottom', width: '100vw', height: '100vh' }}>
        <div className="bg-gray-200 p-8 rounded-md shadow-md">
          <h2 className="text-2xl font-bold mb-4">Registro Comerciante</h2>
          <div className="mb-4">
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
            <label>Direccion</label>
            <input
              type="text"
              name="direccion"
              value={formData.direccion}
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
            <button onClick={handleSearch} className="bg-blue-700 text-white py-2 px-4 rounded-md mt-2">
              Buscar
            </button>
          </div>
          <div className="mt-4">
            <h3>Comercios Guardados:</h3>
            <ul>
                {filteredData.length > 0 ? (
                filteredData.map((comercio, index) => (
                  <li key={index}>
                    Nombre: {comercio.nombreComerciante} Direccion: {comercio.direccion} Telefono: {comercio.telefono}
                    {comercio.puntuacion !== undefined && <p>Puntuación: {comercio.puntuacion}</p>}
                    {comercio.comentario && Array.isArray(comercio.comentario) && (
                      <p>Comentario: {comercio.comentario.join(', ')}</p>
                    )}
                  </li>
                ))
              ) : (
                <p>No hay resultados</p>
              )}  
            </ul>
            </div>
          </div>
        </div>
      </div>  
      </div>
      
  );
};

export default Admin;
