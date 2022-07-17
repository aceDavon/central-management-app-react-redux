import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label='expand row'
            size='small'
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component='th' scope='row'>
          {row.name}
        </TableCell>
        <TableCell align='right'>{row.label}</TableCell>
        <TableCell align='right'>{row.category}</TableCell>
        <TableCell align='right'>{row.priority}</TableCell>
        <TableCell align='right'>{row.status}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout='auto' unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant='h6' gutterBottom component='div'>
                More Details
              </Typography>
              <Table size='small' aria-label='purchases'>
                <TableHead>
                  <TableRow>
                    <TableCell>Assigned By</TableCell>
                    <TableCell>Assigned To</TableCell>
                    <TableCell align='right'>Due Date</TableCell>
                    <TableCell align='right'>Requirements</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.description.map((desc) => (
                    <TableRow key={desc.date}>
                      <TableCell component='th' scope='row'>
                        {desc.assignedBy}
                      </TableCell>
                      <TableCell>{desc.assignedto}</TableCell>
                      <TableCell align='right'>{desc.dueDate}</TableCell>
                      <TableCell align='right'>{desc.requirements}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    label: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    prioriy: PropTypes.string.isRequired,
    description: PropTypes.arrayOf(
      PropTypes.shape({
        assignedBy: PropTypes.string,
        assignedTo: PropTypes.string,
        dueDate: PropTypes.string,
        requirements: PropTypes.string.isRequired,
      })
    ).isRequired,
    date: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
};

export default function CommonTable({ topHeaders, rowData }) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label='collapsible table'>
        <TableHead>
          <TableRow>
            <TableCell />
            {topHeaders.map((x) => x)}
          </TableRow>
        </TableHead>
        <TableBody>
          {rowData.map((row) => (
            <Row key={row.id} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

CommonTable.propTypes = {
  topHeaders: PropTypes.array.isRequired,
  rowData: PropTypes.array,
};
