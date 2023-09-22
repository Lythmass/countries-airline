import { CurrencyPage } from '@/pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';

function App() {
  return (
    <main className='w-full h-screen'>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/:countryCode' element={<CurrencyPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
