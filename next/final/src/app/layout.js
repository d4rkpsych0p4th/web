import './globals.css'
import React from 'react';

export const metadata = {
  title: 'Gourmet Explorer',
  description: 'App developed by Alvaro',
}

export default function RootLayout({ children }) {
  return (
    
    <html>
      <head><link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.0/flowbite.min.css" rel="stylesheet"/></head>
      <body>

      {children}

      <script src="https://unpkg.com/flowbite@1.5.1/dist/flowbite.js" crossOrigin="true"></script>

        <script src="https://unpkg.com/react@18/umd/react.development.js" crossOrigin="true"></script>
         <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossOrigin="true"></script>        
         <script src="https://unpkg.com/babel-standalone@6/babel.min.js" crossOrigin="true"></script>
      </body>
  </html>

     
  );
};