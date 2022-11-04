import './App.css';
import {  Route, Routes } from 'react-router-dom';
import SingleMovie from './SingleMovie';
import Error from './Error';
import Home from './Home';

function App() {
  return (
    <>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<SingleMovie />} />
          <Route path="*" element={<Error />} />
        </Routes>
     


    </>
  );
}

export default App;
