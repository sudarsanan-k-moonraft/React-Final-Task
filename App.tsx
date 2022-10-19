import React from 'react';
import './App.css';
import FirstPage from './components/dashboard/firstPage/firstPage';
import { Route, Routes } from 'react-router-dom';
import SearchDrugPage from './components/dashboard/searchDrugPage/searchDrugPage';
import SearchPharmacyPage from './components/dashboard/searchPharmacy/searchPharmacy';
import SearchProviderPage from './components/dashboard/searchProvider/searchProviderPage';
import DisplayPharmacy from './components/common/displayPharmacy/displayPharmacy';

function App() {
  return (
    <>
      
      <Routes>
        <Route path='' element={<FirstPage />}/>
        <Route path="/SearchDrug" element={<SearchDrugPage />} />
        <Route path="/SearchPharmacy" element={<SearchPharmacyPage />} />
        <Route path="/SearchProvider" element={<SearchProviderPage />} />
        <Route path="/PharmacyContent" element={<DisplayPharmacy />} />
      </Routes>

    </>
  );
}

export default App;
