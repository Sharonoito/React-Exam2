import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Register,Contact,Home,Nav } from './OnePager';
import PersonComponent from './PropValidation';
import { StyledDiv } from './StyledComponent';


function App() {
  return (
    <BrowserRouter>
      <Nav />
      <PersonComponent/>
      <StyledDiv/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;