import { CurrencyPage } from '@/pages';
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
              <Route element={<Layout />}>
                <Route path='/:countryCode' element={<CurrencyPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </QueryClientProvider>
      </StoreProvider>
    </main>
  );
}

export default App;
