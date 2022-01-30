import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';
import realizationsDict from './realizationsDict.json';
import RealizationCard from '../components/RealizationCard';
import PrimaryButton from '../components/generic/Buttons';
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
    margin: '40px 0 -10px 10px !important',
    fontWeight: 'bold !important',
    fontSize: '20px !important',
    alignSelf: 'flex-start',
  },
  cardsDiv: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: '20px',
    marginTop: '10px',
  },
  contactDiv: {
    margin: '0 10px 50px 10px',
  },
});

function Realizations() {
  const classes = useStyles();

  return (
    <div className={classes.content}>
      <Typography className={classes.title}>Nos réalisations</Typography>
      <StyledDivider flexItem />
      <div className={classes.cardsDiv}>
        {
          Object.keys(realizationsDict).map((key) => {
            const real = realizationsDict[key];
            return <RealizationCard key={key} title={real.title} subtitle={real.subtitle} image={real.image} images={real.images} />;
          })
        }
      </div>
      <StyledDivider flexItem />
      <div className={classes.contactDiv}>
        <Typography sx={{ fontWeight: 'bold', marginBottom: '20px', fontSize: '18px' }}>Une question ? Besoin de plus de renseignements ?</Typography>
        <PrimaryButton component={Link} to="/contact" variant="filled">Contactez-nous</PrimaryButton>
      </div>
    </div>
  );
}

export default Realizations;
