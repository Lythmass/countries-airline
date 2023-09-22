import { CountryPage } from '@/pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/asdf' element={<CountryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
