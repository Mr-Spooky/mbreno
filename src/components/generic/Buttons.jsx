import { styled, Button } from '@mui/material';

const PrimaryButton = styled(Button)({
  backgroundColor: '#F39200',
  textTransform: 'none',
  fontSize: '16px',
  color: 'white',
  borderRadius: '5px',
  '&:hover': {
    backgroundColor: '#F3920090',
  },
});

export const DarkPrimaryButton = styled(Button)({
  backgroundColor: 'black',
  textTransform: 'none',
  fontSize: '16px',
  color: '#F39200',
  borderRadius: '5px',
  '&:hover': {
    backgroundColor: '#242624',
  },
});

export const SecondaryButton = styled(Button)({
  color: 'lightgrey',
  textTransform: 'none',
  fontSize: '16px',
  margin: '0px 10px',
  '&:hover': {
    backgroundColor: '#FFFFFF00',
    color: 'white',
  },
});

export const MobileNavButton = styled(Button)({
  display: 'flex',
  justifyContent: 'flex-start',
  padding: '10px 15px',
  color: 'lightgrey',
  textTransform: 'none',
  fontSize: '16px',
  marginBottom: '10px',
  width: '100%',
  borderRadius: '30px',
  '&:hover': {
    backgroundColor: '#F3920020',
  },
});

export default PrimaryButton;
