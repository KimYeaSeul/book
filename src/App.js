import React from 'react';
import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header.js';
import Detail from './pages/book/Detail.js';
import Home from './pages/book/Home.js';
import SaveForm from './pages/book/SaveForm.js';
import UpdateForm from './pages/book/UpdateForm.js';
import JoinForm from './pages/user/JoinForm.js';
import LoginForm from './pages/user/LoginForm.js';

import axios from 'axios';

function App() {
  // const handleClick = () => {
  //   const TEMPLATE_BASE_URL = 'http://3.34.47.86:8080/api/posts';

  //   axios({
  //     method: 'get',
  //     url: TEMPLATE_BASE_URL,
  //   })
  //     .then((res) => {
  //       alert('res success');
  //       console.log(res.data);
  //     })
  //     .catch((err) => {
  //       alert('ERROR : ' + err.data);
  //     });
  // };

  // return (
  //   <>
  //     <button onClick={handleClick}>button</button>
  //   </>
  // );
  return (
    <div>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/saveForm" element={<SaveForm />} />
          <Route path="/book/:id" element={<Detail />} />
          <Route path="/loginForm" element={<LoginForm />} />
          <Route path="/joinForm" element={<JoinForm />} />
          <Route path="/updateForm/:id" element={<UpdateForm />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
