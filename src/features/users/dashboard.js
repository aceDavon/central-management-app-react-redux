import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ReviewCard from '../../common/CardElements/CommonCard';
import { Avatar, Typography } from '@mui/material';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import {
  AddBusinessOutlined,
  AddTaskSharp,
  BugReportSharp,
  TaskSharp,
  ViewAgendaOutlined,
  ViewArraySharp,
} from '@mui/icons-material';
import CommonTable from '../../common/Tables/CommonTable';
import { useDispatch, useSelector } from 'react-redux';
import { handleModal, selectAllIssues } from '../issues/issueSlice';
import { useNavigate } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  margin: 'auto',
}));

const cardData = [
  {
    cardImage:
      'https://web-static.wrike.com/blog/content/uploads/2020/07/Common-Project-Management-Issues-You-Can-Solve-With-the-Right-Tools-1-896x518.jpg?av=24fb349d7691c6ee5c17ebd25a1cedb5',
    cardHeader: 'Issues',
    color: '#000',
  },
  {
    cardImage:
      'https://www.orangescrum.com/blog/wp-content/uploads/2019/09/Google-Tasks-%E2%80%93-Your-Personal-Task-Manager.png',
    cardHeader: 'Tasks',
    color: 'orange',
  },
];

const menuItems = [
  {
    id: 2,
    label: 'issues',
    labelIcon: <BugReportSharp color='primary' />,
    list: [
      {
        label: 'Add Issue',
        labelIcon: <AddBusinessOutlined color='primary' />,
        link: '/issues',
      },
      {
        label: 'See All Issues',
        labelIcon: <ViewAgendaOutlined color='primary' />,
        link: '/issues/all',
      },
    ],
  },
  {
    id: 2,
    label: 'Tasks',
    labelIcon: <TaskSharp color='primary' />,
    list: [
      {
        label: 'Add Tasks',
        labelIcon: <AddTaskSharp color='primary' />,
        link: '/tasks',
      },
      {
        label: 'See All Tasks',
        labelIcon: <ViewArraySharp color='primary' />,
        link: '/tasks/all',
      },
    ],
  },
];

export default function BasicGrid() {
  const [open, setOpen] = React.useState(true);
  const { issues, reports } = useSelector(selectAllIssues);
  const dispatch = useDispatch()
  const [path, setPath] = React.useState('');
  const navigate = useNavigate();
  console.log(issues);

  const handleClick = () => {
    setOpen(!open);
  };

  const onclick = (target) => {
    setPath(target.link);
  };

  React.useEffect(() => {
    navigate(path, { replace: true });
    dispatch(handleModal())
  }, [path, navigate, reports]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={2}
        direction={{
          xs: 'column-reverse',
          sm: 'column-reverse',
          md: 'column-reverse',
          lg: 'row',
        }}
        columnSpacing={{ md: 1 }}
        paddingX={1}
      >
        <Grid item xs={12} lg={4}>
          <Box>
            <Avatar
              alt='Remy Sharp'
              src='https://mui.com/static/images/avatar/1.jpg'
              sx={{ width: 220, height: 220, margin: 'auto' }}
            />
            <Typography variant='h4' align='center'>
              Admin
            </Typography>
          </Box>
          <Item>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            deserunt quo iste explicabo, odit minus aspernatur obcaecati nemo
            voluptas aliquam ratione repellendus ipsa quae quod modi adipisci id
            optio.
          </Item>
          <Item>
            <List
              sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
              component='nav'
              aria-labelledby='nested-list-subheader'
              subheader={
                <ListSubheader component='div' id='nested-list-subheader'>
                  User Links
                </ListSubheader>
              }
            >
              {menuItems.map((x) => {
                return (
                  <>
                    <ListItemButton key={x.id} onClick={handleClick}>
                      <ListItemIcon>{x.labelIcon}</ListItemIcon>
                      <ListItemText primary={x.label} />
                      {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    {x.list.map((y) => {
                      return (
                        <Collapse in={open} timeout='auto' unmountOnExit>
                          <List component='div' disablePadding>
                            <ListItemButton sx={{ pl: 4 }}>
                              <ListItemIcon>{y.labelIcon}</ListItemIcon>
                              <ListItemText
                                primary={y.label}
                                onClick={() => onclick(y)}
                              />
                            </ListItemButton>
                          </List>
                        </Collapse>
                      );
                    })}
                  </>
                );
              })}
            </List>
          </Item>
        </Grid>
        <Grid item xs={12} lg={8}>
          <Item>
            <Grid
              container
              spacing={2}
              sx={{ marginX: { lg: 'auto', md: 'auto', sm: 'auto' } }}
            >
              <Grid item xs={12} md={12} lg={6} sx={{ marginX: 'auto' }}>
                <ReviewCard
                  cardHeader={cardData[0].cardHeader}
                  bgcolor={cardData[0].color}
                  cardMedia={cardData[0].cardImage}
                />
              </Grid>
              <Grid item xs={12} md={12} lg={6} sx={{ marginX: 'auto' }}>
                <ReviewCard
                  cardHeader={cardData[1].cardHeader}
                  bgcolor={cardData[1].color}
                  cardMedia={cardData[1].cardImage}
                />
              </Grid>
            </Grid>
            <CommonTable rowData={issues} topHeaders='Issues' />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
