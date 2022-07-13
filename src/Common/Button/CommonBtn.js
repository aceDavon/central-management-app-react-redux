import * as React from 'react';
import Button from '@mui/material/Button';


export default function IconLabelButtons({children, sx, icon, type}) {
  return (
      <Button variant={type} startIcon={icon} sx={sx}>
        {children}
      </Button>
  );
}
