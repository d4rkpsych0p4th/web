import React from 'react';

const Card = ({ user }) => (
  <div className="flex items-center">
    <div className="bg-gray-200 p-8 rounded-md shadow-md mb-4">
      <div className="card">
      <strong>{user.nombre}</strong>
        <div className="card-body">
          <p>id: {user.id}</p>
          <p>Email: {user.email}</p>
          <p>Edad: {user.edad}</p>
          <p>Ciudad: {user.ciudad}</p>
          <p>Recibir Ofertas: {user.permiteOfertas ? 'Quiere Recibir Ofertas' : 'No Quiere Recibir Ofertas'}</p>
          <p>Intereses: {user.intereses}</p>
        </div>
      </div>
    </div>
  </div>
);

export default Card;
