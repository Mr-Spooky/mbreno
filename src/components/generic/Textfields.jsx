import React from 'react';
import PropTypes from 'prop-types';
import { styled, TextField } from '@mui/material';

const PrimaryTextfieldStyled = styled(TextField)({
  marginTop: '12px',
  minWidth: '300px',
  '& :-webkit-autofill': {
    WebkitTransition: 'color 9999s ease-out, background-color 9999s ease-out',
    WebkitTransitionDelay: '9999s',
  },
  '& .MuiInputBase-root': {
    color: '#F39200',
  },
  '& label': {
    color: 'white',
  },
  '& label.Mui-focused': {
    color: '#F39200',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'white',
    },
    '&:hover fieldset': {
      borderColor: '#F39200',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#F39200',
    },
  },
});

function PrimaryTextfield({
  value, name, onChange, required, label, maxLength, type, sx, multiline, minRows,
  error,
}) {
  return (
    <PrimaryTextfieldStyled
      sx={sx}
      value={value}
      name={name}
      type={type}
      onChange={onChange}
      required={required}
      label={label}
      variant="outlined"
      inputProps={{ maxLength }}
      multiline={multiline}
      minRows={minRows}
      error={error}
    />
  );
}

PrimaryTextfield.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  label: PropTypes.string.isRequired,
  maxLength: PropTypes.number,
  type: PropTypes.string,
  sx: PropTypes.instanceOf(Object),
  multiline: PropTypes.bool,
  minRows: PropTypes.number,
  error: PropTypes.bool,
};

PrimaryTextfield.defaultProps = {
  required: false,
  maxLength: 999,
  type: 'text',
  sx: {},
  multiline: false,
  minRows: 0,
  error: false,
};

export default PrimaryTextfield;
