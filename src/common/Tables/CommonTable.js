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
import Commonbtns from '../Btn/commonBtns';

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  console.log(row);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell scope='row' component='th' align='center'>
          <IconButton
            aria-label='expand row'
            size='small'
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
          <Commonbtns
            variant={'contained'}
            color={'warning'}
            children={'delete'}
            size='small'
            sx={{ margin: 1 }}
          />
          <Commonbtns
            variant={'contained'}
            color={'primary'}
            children={'resolve'}
            size='small'
            sx={{ margin: 1 }}
          />
        </TableCell>
        <TableCell align='right'>{row.title}</TableCell>
        <TableCell align='right'>{row.category}</TableCell>
        <TableCell align='right'>{row.priority}</TableCell>
        <TableCell align='right'>{row.resolved}</TableCell>
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
                    <TableCell width={'25%'}>Assigned By</TableCell>
                    <TableCell width={'25%'}>Assigned To</TableCell>
                    <TableCell width={'25%'}>Due Date</TableCell>
                    <TableCell width={'25%'}>Requirements</TableCell>
                    <TableCell width={'25%'}>description</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.description.map((desc) => (
                    <TableRow key={desc.date}>
                      <TableCell component='th' scope='row'>
                        {desc.assignedBy}
                      </TableCell>
                      <TableCell>{desc.assignedTo}</TableCell>
                      <TableCell>{row.date.days}</TableCell>
                      <TableCell>{desc.requirements}</TableCell>
                      <TableCell>{desc.description}</TableCell>
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
    title: PropTypes.string.isRequired,
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
    resolved: PropTypes.string.isRequired,
  }).isRequired,
};

export default function CommonTable({ topHeaders, rowData }) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label='collapsible table'>
        <TableHead>
          <TableRow>
            <TableCell align='center'>Actions</TableCell>
            <TableCell align='right'>Title</TableCell>
            <TableCell align='right'>Category</TableCell>
            <TableCell align='right'>Priority</TableCell>
          </TableRow>
        </TableHead>
        {rowData.length !== 0 ? 
          <TableBody>
            {rowData.map((row) => <Row key={row.id} row={row} />)}
          </TableBody>
         : 
          <Typography
            variant='h4'
            color={'error'}
            textAlign='center'
            width='100%'
          >
            No issues here yet, check back later :(
          </Typography>
        }
      </Table>
    </TableContainer>
  );
}
