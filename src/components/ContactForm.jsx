/* eslint-disable */
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { height } from '@mui/system';
import React, { useState } from 'react';
import PrimaryButton from './Buttons';
import PrimaryTextfield from './Textfields';

const useStyles = makeStyles({
  root: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: '-250px',
  },
  left: {
    padding: '25px',
    background: 'linear-gradient(125deg, rgba(243,146,0,1) 0%, rgba(243,146,0,1) 50%, rgba(157,94,0,0.9808298319327731) 100%)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  contactForm: {
    padding: '25px',
    width: 'calc(75% - 50px)',
    maxWidth: '75%',
    minWidth: '300px',
    backgroundColor: 'black',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  lineDiv: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendButton: {
    marginTop: '20px !important',
    alignSelf: 'flex-end',
  },
});

function ContactForm() {
  const classes = useStyles();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [subject, setSubject] = useState('');
  const [content, setContent] = useState('');
  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  window.addEventListener('resize', handleResize);

  const handleChange = (event) => {
    let value = event.target.value;
    switch (event.target.name) {
      case 'firstName':
        setFirstName(value);
        break;
      case 'lastName':
        setLastName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      case 'address':
        setAddress(value);
        break;
      case 'subject':
        setSubject(value);
        break;
      case 'content':
        setContent(value);
        break;
    }
  };

  return (
    <div className={classes.root}>
      <div className={classes.left} style={width < 1017 ? { width: 'calc(75% - 50px)', minWidth: '300px' } : { width: '20%' }}>
        <Typography>Nous contacter.</Typography>
        <Typography>Laissez-nous vos coordonées et nous vous contacterons.</Typography>
      </div>
      <div className={classes.contactForm}>
        <Typography sx={{ color: 'white' }}>Message</Typography>
        <div className={classes.lineDiv}>
          <PrimaryTextfield
            required
            type="text"
            name="lastName"
            label="Nom"
            value={lastName}
            onChange={handleChange}
            maxLength={40}
            sx={width < 920 ? { width: '100%' } : { width: '48%', marginRight: '25px' }}
          />
          <PrimaryTextfield
            required
            type="text"
            name="firstName"
            label="Prénom"
            value={firstName}
            onChange={handleChange}
            maxLength={30}
            sx={width < 920 ? { width: '100%' } : { width: '48%' }}
          />
        </div>
        <div className={classes.lineDiv}>
          <PrimaryTextfield
              required
              type="email"
              name="email"
              label="E-mail"
              value={email}
              onChange={handleChange}
              maxLength={50}
              sx={width < 920 ? { width: '100%' } : { width: '48%', marginRight: '25px' }}
            />
            <PrimaryTextfield
              required
              type="tel"
              name="phone"
              label="Téléphone"
              value={phone}
              onChange={handleChange}
              maxLength={12}
              sx={width < 920 ? { width: '100%' } : { width: '48%' }}
            />
        </div>
        <PrimaryTextfield
          required
          type="text"
          name="address"
          label="Adresse"
          value={address}
          onChange={handleChange}
          maxLength={100}
          sx={{ width: '100%' }}
        />
        <PrimaryTextfield
          required
          type="text"
          name="subject"
          label="Sujet"
          value={subject}
          onChange={handleChange}
          maxLength={100}
          sx={{ width: '100%' }}
        />
        <PrimaryTextfield
          required
          type="text"
          name="content"
          label="Message"
          value={content}
          onChange={handleChange}
          maxLength={100}
          sx={{ width: '100%' }}
          multiline
        />
        <PrimaryButton className={classes.sendButton} variant="filled">Envoyer</PrimaryButton>
      </div>
    </div>
  );
}

export default ContactForm;
