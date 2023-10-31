import React, { useState, useEffect } from 'react';

function App() {
  const [titulo, setTitulo] = useState('');
  const [contenido, setContenido] = useState('');
  const [notas, setNotas] = useState([]);

  // Cargar notas desde el almacenamiento local al cargar la página
  useEffect(() => {
    const notasGuardadas = JSON.parse(localStorage.getItem('notas'));
    if (notasGuardadas) {
      setNotas(notasGuardadas);
    }
  }, []);

  // Guardar notas en el almacenamiento local cuando cambie la lista de notas
  useEffect(() => {
    localStorage.setItem('notas', JSON.stringify(notas));
  }, [notas]);

  const agregarNota = () => {
    if (titulo && contenido) {
      const nuevaNota = { titulo, contenido };
      setNotas([...notas, nuevaNota]);
      setTitulo('');
      setContenido('');
    }
  };

  return (
    <div className="App">
      <h1>Lista de Notas</h1>
      <div>
        <input
          type="text"
          placeholder="Título"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
        <p><input
          type="text"
          placeholder="Contenido"
          value={contenido}
          onChange={(e) => setContenido(e.target.value)}
        /></p>
        <button onClick={agregarNota}>Guardar</button>
      </div>
      <div>
        <h2>Tus Notas</h2>
        <ul>
          {notas.map((nota, index) => (
            <li key={index}>
              <h3>{nota.titulo}</h3>
              <p>{nota.contenido}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
