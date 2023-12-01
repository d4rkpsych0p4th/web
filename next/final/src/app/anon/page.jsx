"use client"

import React, { useState, useEffect } from 'react';

const Anon = () => {
  const [formData, setFormData] = useState({
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

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [storedData, setStoredData] = useState([]);
  const [storedData1, setStoredData1] = useState([]);

  useEffect(() => {
    // Obtene datos almacenados al cargar el componente
    const storedData = JSON.parse(localStorage.getItem('usuarioData')) || [];
    setStoredData(storedData);
  }, []);
  useEffect(() => {
    const adminData = JSON.parse(localStorage.getItem('adminData')) || [];
    
    setStoredData1(adminData);
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value, // Manejar el checkbox de manera diferente
    }));
  };

  const handleSubmit = () => {
    // Aquí guardamos los datos del usuario en localStorage o en un archivo JSON
    const updatedData = [...storedData, formData];
    localStorage.setItem('usuarioData', JSON.stringify(updatedData));
  
    // Actualizar el estado de los datos almacenados y limpiar el formulario
    setStoredData(updatedData);
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
  
    alert('Datos de usuario guardados exitosamente');
  };
    const handleSubmit1 = () => {
      // Aquí guardamos los datos del administrador en localStorage o en un archivo JSON
      const updatedData1 = [...storedData1, formData];
      localStorage.setItem('adminData', JSON.stringify(updatedData1));
    
      // Actualizar el estado de los datos almacenados y limpiar el formulario
      setStoredData1(updatedData1);
      setFormData({
        puntuacion: 0,
        comentario: [],
      });
    
      alert('Datos de administrador guardados exitosamente');
    };

  const handleSearch = () => {
    // Filtrar los comercios basados en el término de búsqueda
    
    const filteredResults = storedData1.filter(
      (comercio) =>
        comercio.nombreComerciante.toLowerCase().includes(searchTerm.toLowerCase()) ||
        comercio.direccion.toLowerCase().includes(searchTerm.toLowerCase()) 
        
    );

    setFilteredData(filteredResults);
  };

  
  const handlePuntuacionChange = (e, index) => {
    const newPuntuacion = parseInt(e.target.value, 10);
    setStoredData1((prevData) => {
      const updatedData1 = [...prevData];
      updatedData1[index].puntuacion = newPuntuacion;
      return updatedData1;
    });
  };

  const handleGuardarPuntuacion = (index) => {
    setStoredData1((prevData) => {
      const updatedData1 = [...prevData];
      updatedData1[index].puntuacion = updatedData1[index].nuevaPuntuacion;
      return updatedData1;
    });
  };

  const handleComentarioChange = (e, index) => {
    const nuevoComentario = e.target.value;
    setStoredData1((prevData) => {
      const updatedData1 = [...prevData];
      updatedData1[index].comentario = nuevoComentario;
      return updatedData1;
    });
  };

  const handleGuardarComentario = (index) => {
    setStoredData1((prevData) => {
      const updatedData1 = [...prevData];
      const nuevoComentario = updatedData1[index].nuevoComentario || [];
      nuevoComentario.push(updatedData1[index].comentario);
      updatedData1[index].nuevoComentario = nuevoComentario;
      return updatedData1;
    });
  };
  

  return (
    
    <div>
    <div className="flex items-center justify-begin p-48"  style={{ backgroundImage: `url('/assets/copas.jpg')`, backgroundSize: 'cover', backgroundPosition: 'bottom', width: '100vw', height: '100vh' }}>
    <img src="/assets/logo.png" alt="Logo" style={{ position: 'absolute',top: '10px', left: '10px', width: '500px', height: 'auto',}}/>

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
               
                <strong>{comercio.nombreComerciante}</strong>
                <p>Email: {comercio.email }</p>
                <p>Direccion: {comercio.direccion}</p>
                <p>Telefono: {comercio.telefono }</p>
                <p>Puntuacion: {comercio.puntuacion ? comercio.puntuacion.join(', ') : 'Sin Puntuacion'}</p>
                <p>Comentarios: {comercio.comentario ? comercio.comentario.join(', ') : 'Sin comentarios'}</p>
                
                
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

export default Anon;
