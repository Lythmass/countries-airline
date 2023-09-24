import { CurrencyPage, AirportPage } from '@/pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import { QueryClient, QueryClientProvider } from 'react-query';
import { StoreProvider } from './store';

function App() {
  const queryClient = new QueryClient();

  return (
    <main className='w-full h-screen'>
      <StoreProvider>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Layout />} />
              <Route path=':countryCode' element={<Layout />}>
                <Route path='' element={<CurrencyPage />} />
                <Route path='airport' element={<AirportPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </QueryClientProvider>
      </StoreProvider>
    </main>
  );
}

export default App;
