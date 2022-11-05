import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useSelector } from "react-redux";
import { selectAllTasks } from "./taskSlice";

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell>{row.title}</TableCell>
        <TableCell align="right">{row.category}</TableCell>
        <TableCell align="right">
          {row.date.years > 0 ? `${row.date.year} year(s)` : ""}
          {row.date.months > 0 ? `${row.date.months} month(s)` : ""}
          {row.date.days > 0 ? `${row.date.days} day(s)` : ""}
        </TableCell>
        <TableCell align="center w-2/4">{row.description}</TableCell>
        <TableCell align="right">{row.status}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Comments
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>User</TableCell>
                    <TableCell align="right">Title</TableCell>
                    <TableCell align="right">Body</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.comments.map((comment, i) => (
                    <TableRow key={i}>
                      <TableCell component="th" scope="row">
                        {comment.author}
                      </TableCell>
                      <TableCell>{comment.title}</TableCell>
                      <TableCell align="right">
                        { comment.body 
                        ? comment.body 
                        : <button className="p-2 bg-purple-700 text-white rounded-lg border-white border">Add Comments</button>
                        }
                      </TableCell>
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

export default function Tasks() {
  const { tasks } = useSelector(selectAllTasks);
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Tasks</TableCell>
            <TableCell align="right">Category</TableCell>
            <TableCell align="right">Deadline</TableCell>
            <TableCell align="center">Description</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tasks.map((row) => (
            <Row key={row.title} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
