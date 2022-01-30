import React from 'react';
import { makeStyles } from '@mui/styles';
import Presentation from '../components/home/Presentation';
import StyledDivider from '../components/generic/MuiComponents';

const useStyles = makeStyles({
  content: {
    display: 'flex',
    minHeight: '75vh',
    maxWidth: '1000px',
    minWidth: '300px',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    textAlign: 'center',
  },
  title: {
    margin: '20px 0 10px 0 !important',
    fontWeight: 'bold !important',
    fontSize: '40px !important',
  },
});

function Home() {
  const classes = useStyles();

  return (
    <div className={classes.content}>
      <Presentation />
      <StyledDivider flexItem />
    </div>
  );
}

export default Home;
