import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Routes, Route } from "react-router-dom";
import './assets/scss/App.scss';

import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Container from './components/Container';
import FileDownloader from './components/FileDownloader';

const App = () => {
  return (
    <>
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/files/:id" element={<FileDownloader />} />
        </Routes>
        <Footer />
      </Container>
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default App;
