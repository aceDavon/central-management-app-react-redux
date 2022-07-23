import * as React from 'react';
import CommonSelectionInput from '../../common/FormElements/CommonSelectInput';
import CommonTextInput from '../../common/FormElements/CommonTextInput';
import Commonbtns from '../../common/Btn/commonBtns';
import { Box } from '@mui/system';
import { Grid, Typography } from '@mui/material';
import { CommonForm, useForm } from '../../common/FormElements/CommonForm';
import GridWrapper from '../../common/GridWrapper/GridWrapper';
import { issuesFormStyles } from './IssuesStyle';
import { useDispatch, useSelector } from 'react-redux';
import { addIssue, catchErr, selectAllIssues } from './issueSlice';
import SpringModal from '../../common/Modal/CommonModal';
import { useNavigate } from 'react-router-dom';

const CreateIssues = () => {
  const dispatch = useDispatch();
  const { reports } = useSelector(selectAllIssues);
  const [modal, setModal] = React.useState(false);
  const navigate = useNavigate();
  const initialValues = {
    category: 0,
    title: '',
    description: '',
    excerpt: '',
  };
  const modalData = () => {
    return (
      <>
        <Typography
          variant='h6'
          sx={{ textAlign: 'start', color: 'rebeccapurple' }}
        >
          Message:
        </Typography>
        <Typography variant='body2'>
          Issue added Successfully, please proceed to your dashboard
        </Typography>
        <Box>
          <Commonbtns
            variant='outlined'
            color='secondary'
            children='proceed'
            sx={issuesFormStyles.formBtns}
            onclick={handleNavigate}
          />
        </Box>
      </>
    );
  };
  const { values, handleChange, err, setErr } = useForm(initialValues);

  const { title, description, excerpt, category, priority, deadline } = values;

  const validate = () => {
    let temp = {};
    temp.title = title ? '' : 'Please enter a title for the issue';
    temp.excerpt = excerpt
      ? ''
      : 'Please enter a short description for the issue';
    temp.description =
      description && !values.description.length < 200
        ? ''
        : 'Please write at least 200 characters describing the issue';
    temp.category = category ? '' : 'Select a category from the dropdown list';
    temp.priority = priority ? '' : 'Select a priority from the dropdown list';
    temp.deadline = deadline ? '' : 'Enter a deadline for resolving the issue';
    setErr({ ...temp });

    return Object.values(temp).every((x) => x === '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isoDate = new Date(deadline);

    validate()
      ? dispatch(
          addIssue(title, description, excerpt, category, priority, isoDate)
        )
      : dispatch(catchErr(err));
    reports.issueAdd === '' ? setModal(!modal) : setModal(false);
  };

  const handleNavigate = (e) => {
    e.preventDefault();

    return navigate('/users/dashboard');
  };

  const group = [
    {
      id: 0,
      label: 'personal',
    },
    {
      id: 1,
      label: 'work',
    },
  ];

  const importance = [
    {
      id: 0,
      label: 'high',
    },
    {
      id: 1,
      label: 'medium',
    },
    {
      id: 2,
      label: 'default',
    },
  ];

  return (
    <CommonForm sx={{ position: 'relative' }}>
      <Box>
        <Typography variant='h3' fontWeight='bold' textAlign='center'>
          Add Issues for Review
        </Typography>
      </Box>
      <GridWrapper>
        <Grid item xs={12} md={12}>
          <CommonTextInput
            name='title'
            type='text'
            sx={issuesFormStyles.formInputs}
            variant='outlined'
            label='Issue Title'
            onchange={handleChange}
            error={err.title}
          />
          <CommonTextInput
            name='excerpt'
            type='text'
            sx={issuesFormStyles.formInputs}
            variant='outlined'
            label='Excerpt'
            onchange={handleChange}
            error={err.excerpt}
          />
          <CommonTextInput
            name='description'
            type='text'
            sx={issuesFormStyles.formInputs}
            variant='outlined'
            label='Describe Issue'
            onchange={handleChange}
            error={err.description}
          />
          <CommonSelectionInput
            name='category'
            variant='outlined'
            label='Category'
            sx={issuesFormStyles.formInputs}
            options={group}
            error={err.category}
            onchange={handleChange}
          />
          <CommonTextInput
            name='deadline'
            type='date'
            sx={issuesFormStyles.formInputs}
            variant='outlined'
            label='Due Date'
            onchange={handleChange}
            error={err.deadline}
          />
          <CommonSelectionInput
            name='priority'
            variant='outlined'
            label='priority'
            sx={issuesFormStyles.formInputs}
            options={importance}
            error={err.priority}
            onchange={handleChange}
          />
          <Commonbtns
            variant='contained'
            color='primary'
            children='Submit'
            sx={issuesFormStyles.formBtns}
            onclick={handleSubmit}
          />
        </Grid>
      </GridWrapper>
      {reports.issueAdd === '' ? <SpringModal data={modalData()} /> : ''}
    </CommonForm>
  );
};

export default CreateIssues;
