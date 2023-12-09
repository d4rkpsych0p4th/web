// Card.jsx
import React from 'react';

const Card = ({ merchant, onDelete }) => (
    <div className="flex items-center">
  <div className="bg-gray-200 p-8 rounded-md shadow-md mb-4">
    <div className="card">
      <strong>{merchant.nombreComerciante}</strong>
      <div className="card-body">
        <p>Email: {merchant.email}</p>
        <p>CIF: {merchant.cif}</p>
        <p>Ciudad: {merchant.ciudad}</p>
        <p>Teléfono: {merchant.telefono}</p>
        <div>
        <button onClick={() => onDelete(merchant.email)} className="bg-red-500 text-white py-2 px-4 rounded-md mt-2">
  Eliminar
</button>
</div>
      </div>
    </div>
  </div>
  </div>
);

export default Card;
