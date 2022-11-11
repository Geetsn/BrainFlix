import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Upload from './uploads/Upload/Upload';

function App() {
  return (
    <BrowserRouter>
        <Header/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/upload' element={<Upload />} />
        <Route path='/video/:id' element={<Home />}/>
      </Routes>
   </BrowserRouter>
  );
}

export default App;
