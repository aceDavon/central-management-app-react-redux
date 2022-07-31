import { Box, Typography } from '@mui/material';
import * as React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import ResponsiveAppBar from './static/Navbar/Navbar';

function App() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2}}>
      <ResponsiveAppBar />
      <Outlet />
      <Typography align='center' mt={5} fontSize='15'>&#169; Hevons 2022, All rights reserved</Typography>
    </Box>
  );
}

export default App;
