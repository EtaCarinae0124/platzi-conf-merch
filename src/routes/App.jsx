import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../containers/Home';
import { Checkout } from '../containers/Checkout';
import { Information } from '../containers/Information';
import { Payment } from '../containers/Payment';
import { Success } from '../containers/Success';
import { NotFound } from '../containers/NotFound';
import { Layout } from '../components/Layout';
import { AppContext } from '../context/AppContext';
import { useInitialState } from '../hooks/useInitialState';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

function App() {
    const initialState = useInitialState();
  return (
    <PayPalScriptProvider
        options={{"client-id": "AeST5YTkxoZlqsjWAGY_uXoirlIZ-78gBWquvVfk3i_aED9jdT4LINA-23808h_EBMtsfHptMQGxgENw"}}
    >
        <AppContext.Provider value={initialState}>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route
                            exact
                            path='/'
                            element={<Home />}
                        />
                        <Route
                            exact
                            path='/checkout'
                            element={<Checkout />}
                        />
                        <Route
                            exact
                            path='/information'
                            element={<Information />}
                        />
                        <Route
                            exact
                            path='/payment'
                            element={<Payment />}
                        />
                        <Route
                            exact
                            path='/success'
                            element={<Success />}
                        />
                        <Route
                            path='*'
                            element={<NotFound />}
                        />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </AppContext.Provider>
    </PayPalScriptProvider>
    )
}

export { App };