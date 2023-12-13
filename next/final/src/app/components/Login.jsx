"use client"
import Link from 'next/link';

const Login = () => {
 
  const backgroundImageStyle = {
    backgroundImage: `url('/assets/hamburguer2.jpg')`,
    backgroundSize: 'contain', // Adjust as needed
    backgroundPosition: 'bottom', // Adjust as needed
    width: '100vw',
    height: '100vh',
  };
  return (
  
    <div className="flex items-center justify-end" style={backgroundImageStyle}>
        
      <div className="bg-gray-200 p-8 rounded-md mr-20 shadow-md items-center w-96 h-200">
        <h2 className="text-2xl font-bold mb-4 ">BIENVENIDO A</h2>
        <h3 className="text-2xl font-bold mb-4">GOURMET EXPLORER</h3>
        <div className="mb-4">
          <label>Email:</label>
          <input type="email" className="block w-full p-2 border rounded-md" />
        </div>
        <div className="mb-4">
          <label>Password:</label>
          <input type="password" className="block w-full p-2 border rounded-md" />
        </div>
         <button   className="bg-blue-500 text-white py-2 px-4 rounded-md font-bold">Login</button>



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
              <Link href="/admin" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Admin</Link>
                </li>
              <li>
              <Link href="/comercio" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Comercio</Link>              
                </li>
                <li>
              <Link href="/logged" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Usuario</Link>              
              </li>
              <li>
              <Link href="/usuario" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Registrate</Link>              
              </li>
              <li>
              <Link href="/anon" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Anon</Link>              
              </li>
            </ul>
        </div>
        </div>
      
      </div>
    

    </div>
  );
};

export default Login;
