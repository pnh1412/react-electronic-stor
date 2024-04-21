import * as React from 'react';
import { Container, PaletteMode, Tab, Tabs } from '@mui/material';
import Box from '@mui/material/Box';

// components
import AppAppBar from '../../components/AppAppBar';
import Hero from './components/Hero';
import All from './components/All';

export default function Dashboard() {
  const [mode, setMode] = React.useState<PaletteMode>('light');
  const [tab, setTab] = React.useState('All');

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const changeTab = (_: React.SyntheticEvent, newTab: string) => {
    setTab(newTab)
  }

  return (
    <>
      <Hero />
      <Box sx={{ bgcolor: 'background.default' }}>
        <Tabs 
          aria-label="disabled tabs example" 
          centered
          value={tab}
          onChange={changeTab} 
        >
          <Tab value="All" label="All" />
          <Tab value="Laptop" label="Laptop" />
          <Tab value="Smartphone" label="Smartphone"  />
          <Tab value="Fragranes" label="Fragranes"  />
        </Tabs>
      </Box>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: { xs: 2, sm: 4 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <All />
      </Container>

    </>
  );
}