import * as React from 'react';
import { Box, Container, PaletteMode, Stack} from '@mui/material';
import { alpha } from '@mui/material';

// components
import AppAppBar from '../../components/AppAppBar';

export default function MainLayout({ children }: React.PropsWithChildren) {
  const [mode, setMode] = React.useState<PaletteMode>('light');
  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <>
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
      <Box
        id="hero"
        sx={(theme) => ({
          width: '100%',
          backgroundImage:
            theme.palette.mode === 'light'
              ? 'linear-gradient(180deg, #CEE5FD, #FFF)'
              : `linear-gradient(#02294F, ${alpha('#090E10', 0.0)})`,
          backgroundSize: '100% 20%',
          backgroundRepeat: 'no-repeat',
        })}
      >
        <Container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            pt: { xs: 14, sm: 20 },
            pb: { xs: 8, sm: 8 },
          }}
        >
          <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '70%' } }}>
            {children}
          </Stack>
        </Container>
      </Box>
    </>
  );
}