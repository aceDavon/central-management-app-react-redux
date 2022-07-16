import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextFields({
  label,
  value,
  onchange,
  variant,
  type,
  error = null,
}) {
  return (
    <Box
      component='form'
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
    >
      <TextField
        type={type}
        id={variant}
        label={label}
        variant={variant}
        value={value}
        onChange={onchange}
      />
    </Box>
  );
}
