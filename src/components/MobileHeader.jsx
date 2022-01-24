import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Dialog, DialogContent, Divider, IconButton, styled,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import {
  Close, Menu, Home, Collections, Construction,
} from '@mui/icons-material';
import PrimaryButton, { MobileNavButton } from './Buttons';

const StyledIconButton = styled(IconButton)({
  backgroundColor: 'white',
  color: 'black',
  '&:hover': {
    backgroundColor: '#FFFFFF90',
  },
});

const StyledDivider = styled(Divider)({
  backgroundColor: '#F39200',
});

const useStyles = makeStyles({
  open: {
    marginRight: '15px !important',
  },
  dialog: {
    margin: '5px !important',
    position: 'absolute !important',
    top: '0 !important',
    left: '0 !important',
    width: 'calc(100% - 10px) !important',
    maxWidth: 'none !important',
    borderRadius: '5px !important',
    border: '1px solid #F39200',
    backgroundColor: 'black !important',
  },
  dialogContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  close: {
    position: 'absolute !important',
    top: '15px',
    right: '15px',
  },
  logo: {
    height: '60px',
    width: 'auto',
  },
  buttons: {
    width: '100%',
    marginTop: '30px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  contactButton: {
    marginTop: '40px !important',
    alignSelf: 'center',
    width: '100%',
  },
});

function MobileHeader() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleButtonClick = () => {
    setOpen(false);
  };

  return (
    <>
      <StyledIconButton className={classes.open} onClick={() => setOpen(true)}>
        <Menu />
      </StyledIconButton>
      <Dialog classes={{ paper: classes.dialog }} open={open} onClose={() => setOpen(false)}>
        <DialogContent className={classes.dialogContent}>
          <StyledIconButton className={classes.close} onClick={handleButtonClick}>
            <Close />
          </StyledIconButton>
          <img className={classes.logo} src="logo.png" alt="logo" />
          <div className={classes.buttons}>
            <MobileNavButton component={Link} to="/home" onClick={handleButtonClick}>
              <Home sx={{ color: '#F39200', marginTop: '-5px' }} />
              &nbsp;&nbsp;&nbsp;Accueil
            </MobileNavButton>
            <MobileNavButton component={Link} to="/services" onClick={handleButtonClick}>
              <Construction sx={{ color: '#F39200', marginTop: '-5px' }} />
              &nbsp;&nbsp;&nbsp;Prestations
            </MobileNavButton>
            <MobileNavButton component={Link} to="/realizations" onClick={handleButtonClick}>
              <Collections sx={{ color: '#F39200', marginTop: '-5px' }} />
              &nbsp;&nbsp;&nbsp;Réalisations
            </MobileNavButton>
          </div>
          <StyledDivider flexItem />
          <PrimaryButton component={Link} to="/contact" className={classes.contactButton} onClick={handleButtonClick}>Contactez-nous</PrimaryButton>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default MobileHeader;
