import React from 'react';
import PropTypes from 'prop-types';
import { styled, TextField } from '@mui/material';

const PrimaryTextfieldStyled = styled(TextField)({
  marginTop: '12px',
  minWidth: '300px',
  '& .MuiInputBase-root': {
    color: 'white',
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
  value, name, onChange, required, label, maxLength, type, sx, multiline,
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
};

PrimaryTextfield.defaultProps = {
  required: false,
  maxLength: 999,
  type: 'text',
  sx: {},
  multiline: false,
};

export default PrimaryTextfield;
