function UserList({ users }) {
  return (
    <div>
      <h2>Lista de usuarios</h2>

      {users.length > 0 ? ( 
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} - {user.email}  
            </li>
          ))}
        </ul>
  ) : (
    <p>La lista de usuarios está vacía</p>
  )}  
    </div>
  );  
}

export default UserList;