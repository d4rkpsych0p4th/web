

function Card({ comercio }) {
  return (
   
    <div className="card">
    <strong>{comercio.nombreComerciante}</strong>
      <div className="card-body">
      
                <p>Email: {comercio.email }</p>
                <p>Direccion: {comercio.direccion}</p>
                <p>Telefono: {comercio.telefono }</p>
                <p>Puntuacion: {comercio.puntuacion ? comercio.puntuacion.join(', ') : 'Sin Puntuacion'}</p>
                <p>Comentarios: {comercio.comentario ? comercio.comentario.join(', ') : 'Sin comentarios'}</p>
      </div>
    </div>
  );
}

export default Card;
