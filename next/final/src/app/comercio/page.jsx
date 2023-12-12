"use client"
import React, { useState, useEffect,useRef } from 'react';

const Usuario = () => {
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
  
  const handleSubmit = async () => {
    try {
      const response = await fetch('/merchant', {  // Assuming your serverless function is in the '/merchant' path
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
    // Filtrar los comercios basados en el término de búsqueda
    
    const filteredResults = storedData.filter(
      (Usuario) =>
        Usuario.ciudad.toLowerCase().includes(searchTerm.toLowerCase()) ||
        Usuario.intereses.toLowerCase().includes(searchTerm.toLowerCase()) 
        
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


  

  
  

  return (
    
    <div>
    <div className="flex items-center justify-begin p-48"  style={{ backgroundImage: `url('/assets/green.png')`, backgroundSize: 'cover', backgroundPosition: 'bottom', width: '100vw', height: '100vh' }}>
    <img src="/assets/logo.png" alt="Logo" style={{ position: 'absolute',top: '10px', left: '10px', width: '500px', height: 'auto',}}/>
    <div className="bg-gray-300 p-8 rounded-md shadow-md md:w-96">
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
      <button onClick={handleButtonClick} className="bg-blue-500 text-white py-3 px-8 rounded-md">
        Abrir Explorador
      </button>
      {/* Hidden file input */}
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
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
          <div className="mt-4">
            <h3>Usuarios Guardados:</h3>
            <ul>
            {filteredData.length > 0 ? (
            filteredData.map((comercio, index) => (
              <li key={index}>
                <strong>{Usuario.nombre}</strong>
                <p>Email: {Usuario.email }</p>
                <p>Edad: {Usuario.edad}</p>
                <p>Ciudad: {Usuario.Ciudad }</p>
                <p>Recibir Ofertas: {Usuario.permiteOfertas ? 'Quiere Recibir Ofertas' : 'No Quiere Recibir Ofertas'}</p>
                <p>Intereses: {Usuario.intereses}</p>
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
