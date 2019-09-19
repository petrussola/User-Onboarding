import React from 'react';
import './App.css';
import UserForm from './Form';

function App() {

  const initialUser = {
    name: '',
    email: '',
    password: '',
    tos: false,
  }

  const addUser = () => {

  }
  return (
    <div className="App">
      <UserForm initialUser={initialUser} addUser={addUser} />
    </div>
  );
}

export default App;
