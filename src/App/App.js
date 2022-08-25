import './App.css';
import React from 'react';
import Home from '../components/home/home';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Map from '../components/home/map/map';
import Layout from '../layout/layout';
const App = () => {
  return (
      <BrowserRouter>
      <Layout></Layout>
        <Routes>
          <Route  path="/snapp"  element={<Map/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;