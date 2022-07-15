import * as React from 'react';
import Box from '@mui/material/Box';
import './App.css';
import ResponsiveAppBar from './static/Navbar/Navbar';
import BasicTextFields from './common/Inputs/CommonTextInput';
import { useDispatch } from 'react-redux';
import { addUser, fetchUsers } from './features/users/userSlice';

function App() {
  React.useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  const data = {
    name: 'David',
    username: 'Davon',
    email: 'makojidavid@gmail.com',
    password: 'ghost',
    phone: '+2348051698758',
  };
  const dispatch = useDispatch();
  const onclick = (e) => {
    e.preventDefault();
    dispatch(addUser(data));
    console.log('hey');
  };
  return (
    <Box>
      <ResponsiveAppBar />
      <Box mt={2}>
        {/* <BasicTextFields variant='outlined' label='Name' />
        <BasicTextFields variant='outlined' label='description' />
        <BasicTextFields variant='outlined' label='excerpt' /> */}
        <BasicTextFields variant='outlined' label='Email' type='email' />
        <button type='subnit' onClick={(e) => onclick(e)}>
          create
        </button>
      </Box>
    </Box>
  );
}

export default App;
