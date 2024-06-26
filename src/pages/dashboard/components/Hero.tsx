import Typography from '@mui/material/Typography';

export default function Hero() {
  return (
    <>
      <Typography
        variant="h1"
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignSelf: 'center',
          textAlign: 'center',
          fontSize: 'clamp(3.5rem, 10vw, 4rem)',
        }}
      >
        Our latest&nbsp;
        <Typography
          component="span"
          variant="h1"
          sx={{
            fontSize: 'clamp(3rem, 10vw, 4rem)',
            color: (theme) =>
              theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
          }}
        >
          products
        </Typography>
      </Typography>
      <Typography
        textAlign="center"
        color="text.secondary"
        sx={{ alignSelf: 'center', width: { sm: '100%', md: '80%' } }}
      >
        Explore our cutting-edge electronic store, delivering high-quality product
        tailored to your needs. 
      </Typography>
    </>
  );
}