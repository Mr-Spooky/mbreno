import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Presentation from '../components/home/Presentation';
import StyledDivider from '../components/generic/MuiComponents';
import CEO from '../components/home/CEO';
import Advantages from '../components/home/Advantages';

const useStyles = makeStyles({
  content: {
    display: 'flex',
    minHeight: '75vh',
    maxWidth: '1200px',
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

function Home({ width }) {
  const classes = useStyles();

  return (
    <div className={classes.content}>
      <Presentation width={width} />
      <Typography sx={{ alignSelf: 'flex-start', margin: '75px 0 -10px 10px', fontWeight: 'bold' }}>Un ouvrier qualifié</Typography>
      <StyledDivider flexItem />
      <CEO width={width} />
      <Typography sx={{ alignSelf: 'flex-start', margin: '0 0 -10px 10px', fontWeight: 'bold' }}>Un avantage incontournable</Typography>
      <StyledDivider flexItem />
      <Advantages width={width} />
    </div>
  );
}

Home.propTypes = {
  width: PropTypes.number.isRequired,
};

export default Home;
