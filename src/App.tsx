import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import MainPage from './Pages/MainPage';
import AuraCat from './Pages/AuraCat';
import AuraDog from './Pages/AuraDog';
import AuraBioLab from './Pages/AuraBioLab';
import Fundraising from './Pages/Fundraising';
import JoinUs from './Pages/JoinUs';
import Team from './Pages/Team';


import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/aura-cat-intro" element={<AuraCat />} />
          <Route path="/aura-dog-intro" element={<AuraDog />} />
          <Route path="/aura-biolab-intro" element={<AuraBioLab />} />
          <Route path="/fundraising" element={<Fundraising />} />
          <Route path="/join-us" element={<JoinUs />} />
          <Route path="/team" element={<Team />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
