import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { ArrowRight } from '@mui/icons-material';

const useStyles = makeStyles({
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    textAlign: 'left',
    marginBottom: '150px',
    flexWrap: 'wrap',
  },
  rootMobile: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: '100px',
  },
  left: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '45%',
    minWidth: '300px',
    paddingLeft: '20px',
  },
  specialities: {
    margin: '10px 0 40px 0',
    paddingLeft: '30px',
  },
  speciality: {
    display: 'flex',
  },
  specialityTypo: {
    fontWeight: 'bold !important',
  },
  img: {
    minWidth: '300px',
    width: '40%',
    height: 'auto',
  },
});

function CEO({ width }) {
  const classes = useStyles();

  return (
    <div className={width < 727 ? classes.rootMobile : classes.root}>
      <div className={classes.left}>
        <div>
          <Typography display="inline">Dirigée par un ouvrier spécialisé dans les métiers du bâtiment, fort de</Typography>
          <Typography display="inline" sx={{ fontWeight: 'bold' }}> 15 ans d&apos;expérience </Typography>
          <Typography display="inline">dans le domaine et diplômé dans plusieurs spécialités :</Typography>
        </div>
        <div className={classes.specialities}>
          <div className={classes.speciality}>
            <ArrowRight />
            <Typography className={classes.specialityTypo}>Maçon</Typography>
          </div>
          <div className={classes.speciality}>
            <ArrowRight />
            <Typography className={classes.specialityTypo}>Carreleur mosaïste</Typography>
          </div>
          <div className={classes.speciality}>
            <ArrowRight />
            <Typography className={classes.specialityTypo}>Platrier plaquiste</Typography>
          </div>
        </div>
        <div>
          <Typography display="inline">MB réno saura répondre à vos besoins de</Typography>
          <Typography display="inline" sx={{ fontWeight: 'bold' }}> rénovation</Typography>
          <Typography display="inline">, d&apos;</Typography>
          <Typography display="inline" sx={{ fontWeight: 'bold' }}>aménagement </Typography>
          <Typography display="inline">ou d&apos;</Typography>
          <Typography display="inline" sx={{ fontWeight: 'bold' }}>entretien </Typography>
          <Typography display="inline">de votre résidence.</Typography>
        </div>
        <div style={width < 727 ? { marginBottom: '30px', marginTop: '20px' } : { marginTop: '20px' }}>
          <Typography display="inline">
            L&apos;entreprise bénéficie de la
          </Typography>
          <Typography display="inline" sx={{ fontWeight: 'bold' }}> garantie décennale</Typography>
          <Typography display="inline">.</Typography>
        </div>
      </div>
      <img className={classes.img} src="./images/presentation/marc.jpg" alt="Marc" />
    </div>
  );
}

CEO.propTypes = {
  width: PropTypes.number.isRequired,
};

export default CEO;
