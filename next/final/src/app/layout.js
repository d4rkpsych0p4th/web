import './globals.css'
import React from 'react';
import Script from 'next/script'


export const metadata = {
  title: 'Gourmet Explorer',
  description: 'App developed by Alvaro',
}

export default function RootLayout({ children }) {
  return (
    
    <html>
      <head><link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.0/flowbite.min.css" rel="stylesheet"/>
      </head>
      <body>
        <div>
      {children}
      </div>   
      </body>
  </html>

     
  );
};