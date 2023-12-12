"use client"
// src/components/Login.js
import React, { useEffect, useState } from 'react';
import styles from './styles.css';


const Login = () => {
 


  const backgroundImageStyle = {
    backgroundImage: `url('/assets/hamburguer.jpg')`,
    backgroundSize: 'cover', // Adjust as needed
    backgroundPosition: 'center', // Adjust as needed
    width: '100vw',
    height: '100vh',
  };
  return (
  
    <div className={`flex h-screen items-center justify-end p-4 ${styles.loginContainer}`}>
      <img src="/assets/logo.png" alt="Logo" style={{ position: 'absolute',top: '10px', left: '10px', width: '500px', height: 'auto',}}/>
  
      <div className="bg-gray-200 opacity-90 p-8 rounded-md shadow-md items-center"style={{ width: '500px', height: '420px' }}>
        <h2 className="text-2xl font-bold mb-4 opacity-100 ">BIENVENIDO A</h2>
        <h3 className="text-2xl font-bold mb-4 opacity-100">GOURMET EXPLORER</h3>
        <div className="mb-4">
          <label>Email:</label>
          <input type="email" className="block w-full p-2 border rounded-md" />
        </div>
        <div className="mb-4">
          <label>Password:</label>
          <input type="password" className="block w-full p-2 border rounded-md" />
        </div>
         <button className="bg-blue-500 text-white py-2 px-4 rounded-md font-bold">Login</button>



        <div className="py-4">
               <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white space-x-4 bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" >
              <span className="mr-1 font-bold">Selecciona</span>
              <svg className="w-2.5 h-2.5 ms-3" aria-hidden="false" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
               <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"></path>
               
              </svg>
             </button>
              <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
              <li>
                <a href="/admin" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Admin</a>
              </li>
              <li>
                <a href="/comercio" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Comercio</a>
              </li>
              <li>
                <a href="/usuario" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Usuario</a>
              </li>
              <li>
                <a href="/anon" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Anon</a>
              </li>
            </ul>
        </div>
        </div>
       

        
      </div>
    </div>
  );
};

export default Login;
