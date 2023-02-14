import * as React from 'react';
import Box from '@mui/material/Box';
import './App.css';
import ResponsiveAppBar from './static/Navbar/Navbar';
import BasicTextFields from './Common/Inputs/CommonTextInput';

function App() {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector(selectAllUsers);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <Box>
      <ResponsiveAppBar />
      <Box mt={2}>
        <BasicTextFields variant='outlined' label='Name' />
        <BasicTextFields variant='outlined' label='description' />
        <BasicTextFields variant='outlined' label='excerpt' />
        <BasicTextFields variant='outlined' label='Email' type='email' />
      </Box>
    </Box>
  );
}

export default App;
