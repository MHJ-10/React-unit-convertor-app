import React from 'react';
import { Route , Routes , Navigate } from 'react-router-dom';
import Navbar from './components/navbar';
import Length from './components/length';
import Weight from './components/weight';
import Volume from './components/volume';
import Data from './components/data';
import Speed from './components/speed';
import Time from './components/time';
import NotFound from './components/notFound';


function App() {

  return (
    <div>
      <Navbar />
      <Routes>
           <Route path='/length' element={<Length />} />
           <Route path='/volume' element={<Volume />} />
           <Route path='/weight' element={<Weight />} />
           <Route path='/data' element={<Data />} />
           <Route path='/speed' element={<Speed />} />
           <Route path='/time' element={<Time />} />
           <Route path='/not-found' element={<NotFound />} />
           <Route path='/' element={<Navigate to={"/length"} replace/>} />
           <Route path='*' element={<Navigate to='/not-found' replace/>} />
      </Routes>
     </div>
  )
}

export default App
