import React from 'react';

const Card = ({ user }) => (
  <div className="flex items-center">
    {user ? (
      <div className="bg-gray-200 p-8 rounded-md shadow-md mb-4">
        <div className="card">
          <strong>{user.nombre}</strong>
          <div className="card-body">
            <p>id: {user.id}</p>
            <p>Email: {user.email}</p>
            <p>Ciudad: {user.ciudad}</p>
            <p>intereses: {user.intereses}</p>
            <p>ofertas: {user.permiteofertas ? 'true' : 'false'}</p>
          </div>
        </div>
      </div>
    ) : (
      <p>User not found</p>
    )}
  </div>
);


export default Card;
