
import { useState } from 'react';
import UserList from './UserList.jsx';
import UserForm from './UserForm.jsx';

function App() {
  const [users, setUsers] = useState([]);

  
  const [showForm, setShowForm] = useState(false);


  const addUser = (user) => {
    const newUser = {
      ...user,
      id: crypto.randomUUID()
    };

    setUsers([...users, newUser]);
  };

  return (
    <div>
      <h1>Gestión de Usuarios</h1>
      <p>Bienvenido al sistema de gestión de usuarios.</p>

      
<UserList users={users} />

<button
  type="button"
  onClick={() => setShowForm(!showForm)}
>
  {showForm ? 'Ocultar formulario' : 'Agregar usuario'}
</button>

{showForm && <UserForm addUser={addUser} />}
 
    </div>
  );
}

export default App;
