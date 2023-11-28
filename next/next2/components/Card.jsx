import Link from 'next/link';

function Card({ user }) {
  return (
    <div className="card">
      <img src={user.avatar} alt={user.first_name} />
      <div className="card-body">
        <h3>{user.first_name} {user.last_name}</h3>
        <p>{user.email}</p>
      </div>
    </div>
  );
}

export default Card;
