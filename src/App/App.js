import './App.css';
import React from 'react';
import Layout from '../layout/layout';
import Home from '../components/home/home';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
const App = () => {
  return (
      <BrowserRouter>
        <Layout>
        </Layout>
      </BrowserRouter>
  );
}

export default App;