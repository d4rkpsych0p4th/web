// pages/index.js
"use client"
import { useState } from 'react';
import { useRouter } from 'next/router';

const Home = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('admin'); // Valor predeterminado: 'admin'
  const router = useRouter();

  const handleLogin = () => {
    // Aquí puedes implementar la lógica de inicio de sesión
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Role:', role);

    // Agrega tu lógica de autenticación aquí
    // En este ejemplo, simplemente redirigimos al usuario a la página correspondiente
    switch (role) {
      case 'admin':
        router.push('/admin');
        break;
      case 'usuario':
        router.push('/usuario');
        break;
      case 'comercio':
        router.push('/comercio');
        break;
      case 'anon':
        router.push('/anon');
        break;
      default:
        // Manejo por defecto o error si el rol no coincide
        break;
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <div>
        <label htmlFor="username">Usuario:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="role">Rol:</label>
        <select id="role" value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="admin">Admin</option>
          <option value="usuario">Usuario</option>
          <option value="comercio">Comercio</option>
          <option value="anon">Anon</option>
        </select>
      </div>
      <button onClick={handleLogin}>Iniciar sesión</button>
    </div>
  );
};

export default Home;
