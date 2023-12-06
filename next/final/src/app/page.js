"use client"
import React, { useEffect } from 'react';

import Login from '../app/components/Login';
import Script from 'next/script'


export default function Home(){

  useEffect(() => {
    // Initialize scripts here
    const babelScript = document.createElement('script');
    babelScript.src = 'https://unpkg.com/babel-standalone@6/babel.min.js';
    document.head.appendChild(babelScript);

    const flowbiteScript = document.createElement('script');
    flowbiteScript.src = 'https://unpkg.com/flowbite@1.5.1/dist/flowbite.js';
    document.head.appendChild(flowbiteScript);

    // Add more scripts as needed
  }, []);

  return (
    <div className="container">

        <Script src="https://unpkg.com/react@18/umd/react.development.js" ></Script>
        <Script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></Script>        
      <Login />
      
      </div>
  );
}
