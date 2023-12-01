"use client"
// src/components/Login.js
import React from 'react';

const Login = () => {
  return (
  
    <div className="flex h-screen items-center justify-end p-4"  style={{ backgroundImage: `url('/assets/hamburguer.jpg')`, backgroundSize: 'contain', backgroundPosition: 'bottom', width: '100vw', height: '100vh' }}>    
      <img src="/assets/logo.png" alt="Logo" style={{ position: 'absolute',top: '10px', left: '10px', width: '500px', height: 'auto',}}/>
  
      <div className="bg-gray-200 p-8 rounded-md shadow-md"style={{ width: '500px', height: '420px' }}>
        <h2 className="text-2xl font-bold mb-4">BIENVENIDO A</h2>
        <h3 className="text-2xl font-bold mb-4">GOURMET EXPLORER</h3>
        <div className="mb-4">
          <label>Email:</label>
          <input type="email" className="block w-full p-2 border rounded-md" />
        </div>
        <div className="mb-4">
          <label>Password:</label>
          <input type="password" className="block w-full p-2 border rounded-md" />
        </div>
         <button className="bg-blue-700 text-white py-2 px-4 rounded-md">Login</button>



        <div className="py-4">
               <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="text-white space-x-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" >
              <span class="mr-1 font-bold">Selecciona</span>
              <svg class="w-2.5 h-2.5 ms-3" aria-hidden="false" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
               <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"></path>
               
              </svg>
             </button>
              <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
              <li>
                <a href="/admin" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Admin</a>
              </li>
              <li>
                <a href="/comerciante" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Comerciante</a>
              </li>
              <li>
                <a href="/usuario" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Usuario</a>
              </li>
              <li>
                <a href="/anon" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Anon</a>
              </li>
            </ul>
        </div>
        </div>
       

        
      </div>
    </div>
  );
};

export default Login;
