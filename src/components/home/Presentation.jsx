import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import PrimaryButton, { DarkPrimaryButton } from '../generic/Buttons';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    textAlign: 'left',
    paddingLeft: '10px',
    paddingTop: '75px',
    marginBottom: '200px',
  },
  rootMobile: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '30px',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleDiv: {
    width: '40%',
    minWidth: '300px',
    justifySelf: 'flex-start',
  },
  titleBlack: {
    fontSize: '40px !important',
    fontWeight: 'bold !important',
  },
  titleOrange: {
    color: '#F39200',
    fontSize: '40px !important',
    fontWeight: 'bold !important',
  },
  desc: {
    marginTop: '10px !important',
  },
  buttons: {
    marginTop: '20px',
  },
  lottieDiv: {
    width: '40%',
    minWidth: '300px',
  },
  img: {
    width: '100%',
    height: 'auto',
    marginTop: '20px',
  },
});

function Presentation({ width }) {
  const classes = useStyles();

  return (
    <div className={width < 727 ? classes.rootMobile : classes.root}>
      <div className={classes.titleDiv}>
        <Typography className={classes.titleBlack}>Construction</Typography>
        <Typography className={classes.titleOrange}>Rénovation</Typography>
        <Typography className={classes.titleBlack}>Aménagement</Typography>
        <Typography className={classes.desc}>
          Découvrez MB réno, une entreprise spécialisée dans la maçonnerie, ainsi que l&apos;aménagement
          intérieur et extérieur de votre habitation.
        </Typography>
        <div className={classes.buttons}>
          <PrimaryButton component={Link} to="/prestations" variant="filled">Prestations</PrimaryButton>
          <DarkPrimaryButton component={Link} to="/contact" sx={{ marginLeft: '5px' }} variant="filled">Contactez-nous</DarkPrimaryButton>
        </div>
      </div>
      <div className={classes.lottieDiv}>
        <img className={classes.img} src="./images/presentation/card.png" alt="MB Réno carte de visite" />
      </div>
    </div>
  );
}

Presentation.propTypes = {
  width: PropTypes.number.isRequired,
};

export default Presentation;
