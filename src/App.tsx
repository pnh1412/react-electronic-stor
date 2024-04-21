import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import { PaletteMode } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';

// components
import Dashboard from './pages/dashboard';
import Checkout from './pages/checkout';
import MainLayout from './layouts/main-layout/MainLayout';
import ProductFeature from './pages/product-feature';

export default function LandingPage() {
  const [mode] = React.useState<PaletteMode>('light');
  const defaultTheme = createTheme({ palette: { mode } });

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />

      <Routes>
        <Route path="/" element={<MainLayout><Dashboard /></MainLayout>} />
        <Route path="/product-feature" element={<MainLayout><ProductFeature /></MainLayout>} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>

    </ThemeProvider>
  );
}