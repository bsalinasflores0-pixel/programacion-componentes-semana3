import { useState } from 'react';
import SimpleReactValidator from 'simple-react-validator';


function UserForm({ addUser }) {
  const [form, setForm] = useState({
    name: '',
    email: ''
  });

  const [validator] = useState(() => new SimpleReactValidator());

  
  const [, setValidationVersion] = useState(0);

  
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value  
    });
  };

  

const handleSubmit = (e) => {
  e.preventDefault();

  if (validator.allValid()) {
    addUser(form);
    setForm({ name: '', email: '' });
    validator.hideMessages();
  } else {
    validator.showMessages();
    setValidationVersion((version) => version + 1);
  }
};



  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          />
          {validator.message('name', form.name, 'required|alpha')}
        </div>

        <div>
          <label htmlFor="email">Correo eletrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            />
            {validator.message('email', form.email, 'required|email')}
        </div>

        <button type="submit">Agregar usuario</button>  
    </form>
  );
}

export default UserForm;