import { Paper } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';
import CommonTable from '../../common/Tables/CommonTable';
import { selectAllIssues } from './issueSlice';

const IssuesContainer = () => {
  const {issues} = useSelector(selectAllIssues)
  return (
    <Paper elevation={3}>
      <CommonTable rowData={issues}/>
    </Paper>
  )
}

export default IssuesContainer;
