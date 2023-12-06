"use client"
import React, { useState, useEffect } from 'react';

const Usuario = () => {
  const [formData, setFormData] = useState({
    email: '',
    nombre: '',
    password: '',
    edad: '',
    ciudad: '',
    intereses: '',
    permiteofertas: '',
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [storedData, setStoredData] = useState([]);
  const [storedData1, setStoredData1] = useState([]);


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
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value, // Manejar el checkbox de manera diferente
    }));
  };
  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/user', {  // Assuming your serverless function is in the '/merchant' path
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
          nombre: '',
          password: '',
          edad: '',
          ciudad: '',
          intereses: '',
          permiteoferatas: false,
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
    backgroundImage: `url('/assets/santorini.jpg')`,
    backgroundSize: 'cover', // Adjust as needed
    backgroundPosition: 'bottom', // Adjust as needed
    width: '100vw',
    height: '100vh',
  };
  return (
    
    <div>
    <div className="flex items-center justify-begin p-48"  style={backgroundImageStyle}>
    <img src="/assets/logo.png" alt="Logo" style={{ position: 'absolute',top: '10px', right: '10px', width: '500px', height: 'auto',}}/>

        <div className="bg-gray-200 p-8 rounded-md shadow-md">
          <h2 className="text-2xl font-bold mb-4">Registro Usuario</h2>
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
            <label>Nombre</label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              className="block w-full p-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label>password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="block w-full p-2 border rounded-md"
            />
          </div><div className="mb-4">
            <label>Edad</label>
            <input
              type="text"
              name="edad"
              value={formData.edad}
              onChange={handleChange}
              className="block w-full p-2 border rounded-md"
            />
          </div><div className="mb-4">
            <label>ciudad</label>
            <input
              type="text"
              name="ciudad"
              value={formData.ciudad}
              onChange={handleChange}
              className="block w-full p-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label>Intereses</label>
            <input
              type="text"
              name="intereses"
              value={formData.intereses}
              onChange={handleChange}
              className="block w-full p-2 border rounded-md"
            />
          </div>
          <div>
      <label>
        <input type="checkbox" id="default-checkbox" name="permiteofertas" onChange={handleChange}
          className="w-4 h-4 text-blue-500 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
        ¿Permitir ofertas?
      </label>
    </div>
    
          <button onClick={handleSubmit} className="bg-blue-500 text-white py-2 px-4 rounded-md">
            Submit
          </button>
          </div>
          



          <div className="flex h-screen items-center justify-end p-8">
        <div className="bg-gray-200 p-8 rounded-md shadow-md">
          <h2 className="text-2xl font-bold mb-4">Busqueda de Comerciante</h2>
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
          <div className="mt-4">
            <h3>Comercios Guardados:</h3>
            <ul>
                          {filteredData.length > 0 ? (
                filteredData.map((comercio, index) => (
                  <li key={index}>
                    {comercio.nombreComerciante && <p>Nombre: {comercio.nombreComerciante}</p>}
                    {comercio.direccion && <p>Dirección: {comercio.direccion}</p>}
                    {comercio.telefono && <p>Teléfono: {comercio.telefono}</p>}
                    {comercio.puntuacion !== undefined && <p>Puntuacion: {comercio.puntuacion}</p>}
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

export default Usuario;
