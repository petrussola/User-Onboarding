import React from 'react';
import './App.css';
import UserForm from './Form';
import * as yup from 'yup';

function App() {

  const initialUser = {
    name: '',
    email: '',
    password: '',
    tos: false,
  }

  const addUser = () => {

  }

  const validationSchema = yup.object().shape({
    name: yup.string().required("I need a name"),
    email: yup.string().email("This is not an email").required("I need an email"),
    password: yup.string().min(7, "This password is too short")
  });

  return (
    <div className="App">
      <UserForm initialUser={initialUser} addUser={addUser} validationSchema={validationSchema} />
    </div>
  );
}

export default App;
