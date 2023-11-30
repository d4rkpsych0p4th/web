import Link from 'next/link';

function Card({ user }) {
  return (
    <Link href={`/user/${user.id}`} key={user.id}>
    <div className="card">
      <img src={user.avatar} alt={user.first_name} />
      <div className="card-body">
        <h3>{user.first_name} {user.last_name}</h3>
        <p>{user.email}</p>
      </div>
    </div>
    </Link>
  );
}

export default Card;
