import React, { useState} from 'react';
import './App.css';
import UserForm from './Form';
import * as yup from 'yup';
import axios from 'axios';

const userApi = 'https://reqres.in/api/users';

function App() {

  // STATE

  const [userList, setUserList] = useState([]);

  const initialUser = {
    name: '',
    email: '',
    password: '',
    tos: false,
  }

  const addUser = (formValues, actions) => {
    debugger
    const {email, name, password, tos} = formValues;
    
    axios.post(userApi, {email, name, password, tos})
    .then(res => {
      setUserList(userList.concat(res.data))
      actions.resetForm()
      debugger
    })
    .catch(data => {
      debugger
    })
  }

  const validationSchema = yup.object().shape({
    name: yup.string().required("I need a name"),
    email: yup.string().email("This is not an email").required("I need an email"),
    password: yup.string().min(7, "This password is too short"),
    tos: yup.boolean().oneOf([true], 'You need to accept ToS before submitting'),
  });

  return (
    <div className="App">
      <UserForm initialUser={initialUser} addUser={addUser} validationSchema={validationSchema} />
    </div>
  );
}

export default App;
