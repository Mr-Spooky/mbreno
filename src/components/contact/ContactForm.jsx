import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Typography, Link as MuiLink } from '@mui/material';
import { makeStyles } from '@mui/styles';
import {
  Phone, Mail, Facebook, Instagram,
} from '@mui/icons-material';
import Lottie from 'react-lottie-player';
import PrimaryButton from '../generic/Buttons';
import PrimaryTextfield from '../generic/Textfields';
import MailLottie from '../../lotties/mail.json';

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
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  boxText: {
    color: 'black',
    fontWeight: 'bold !important',
  },
  socialDiv: {
    display: 'flex',
    margin: '5px',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  media: {
    margin: '5px',
  },
  icon: {
    color: 'black',
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

function ContactForm({ width }) {
  const classes = useStyles();
  const [firstName, setFirstName] = useState('');
  const [errorFirstName, setErrorFirstName] = useState(false);
  const [lastName, setLastName] = useState('');
  const [errorLastName, setErrorLastName] = useState(false);
  const [email, setEmail] = useState('');
  const [errorEmail, setErrorEmail] = useState(false);
  const [phone, setPhone] = useState('');
  const [errorPhone, setErrorPhone] = useState(false);
  const [address, setAddress] = useState('');
  const [errorAddress, setErrorAddress] = useState(false);
  const [subject, setSubject] = useState('');
  const [errorSubject, setErrorSubject] = useState(false);
  const [content, setContent] = useState('');
  const [errorContent, setErrorContent] = useState(false);

  const handleChange = (event) => {
    const { value } = event.target;
    switch (event.target.name) {
      case 'firstName':
        setErrorFirstName(false);
        setFirstName(value);
        break;
      case 'lastName':
        setErrorLastName(false);
        setLastName(value);
        break;
      case 'email':
        setErrorEmail(false);
        setEmail(value);
        break;
      case 'phone':
        setErrorPhone(false);
        setPhone(value);
        break;
      case 'address':
        setErrorAddress(false);
        setAddress(value);
        break;
      case 'subject':
        setErrorSubject(false);
        setSubject(value);
        break;
      case 'content':
        setErrorContent(false);
        setContent(value);
        break;
      default:
        console.log('Unexpected input');
    }
  };

  const handleSendClick = () => {
    let error = false;
    if (firstName === '') {
      setErrorFirstName(true);
      error = true;
    }
    if (lastName === '') {
      setErrorLastName(true);
      error = true;
    }
    if (email === '') {
      setErrorEmail(true);
      error = true;
    }
    if (phone === '') {
      setErrorPhone(true);
      error = true;
    }
    if (address === '') {
      setErrorAddress(true);
      error = true;
    }
    if (subject === '') {
      setErrorSubject(true);
      error = true;
    }
    if (content === '') {
      setErrorContent(true);
      error = true;
    }
    if (!error) {
      let params = '?';
      params += `subject=${encodeURIComponent(subject)}`;
      params += `&body=${encodeURIComponent(`
        Demande de contact envoyée depuis le site internet\n
        Nom: ${lastName}
        Prénom: ${firstName}
        E-mail: ${email}
        Téléphone: ${phone}
        Adresse: ${address}\n
        ${content}
      `)}`;
      window.location.href = `mailto:mb.reno@orange.fr${params}`;
    }
  };

  return (
    <div className={classes.root}>
      <div className={classes.left} style={width < 1017 ? { width: 'calc(75% - 50px)', minWidth: '300px' } : { width: '20%' }}>
        <div style={width < 1017 ? { display: 'flex', justifyContent: 'space-around', alignItems: 'center' } : { }}>
          <div>
            <div>
              <Typography className={classes.boxText} sx={{ marginBottom: '5px' }}>
                <Phone sx={{ marginBottom: '-7px' }} />
                &nbsp;&nbsp;07 70 73 69 79
              </Typography>
              <Typography className={classes.boxText}>
                <Mail sx={{ marginBottom: '-7px' }} />
                &nbsp;&nbsp;mb.reno@orange.fr
              </Typography>
            </div>
            <div className={classes.socialDiv}>
              <div className={classes.media}>
                <MuiLink href="https://www.facebook.com/MB-r%C3%A9no-108757878227209" target="_blank">
                  <Facebook className={classes.icon} fontSize="large" />
                </MuiLink>
                <Typography className={classes.boxText}>MB réno</Typography>
              </div>
              <div className={classes.media}>
                <MuiLink href="https://www.instagram.com/mb.reno/?hl=fr" target="_blank">
                  <Instagram className={classes.icon} fontSize="large" />
                </MuiLink>
                <Typography className={classes.boxText}>@mb.reno</Typography>
              </div>
            </div>
          </div>
          {
            width >= 700 && (
              <Lottie loop animationData={MailLottie} play style={width < 1017 ? { width: '40%', margin: '-40px -20px' } : { marginTop: '-40px' }} />
            )
          }
        </div>
        {
          width >= 1017 && (
          <Typography sx={{ fontSize: '11px' }}>
            Vos informations seront utilisées uniquement pour répondre à votre demande et vous faire parvenir une proposition commerciale
            si celle-ci est demandée. Vous ne serez pas inscrit à une newsletter et nous ne partagerons jamais vos données.
          </Typography>
          )
        }
      </div>
      <div className={classes.contactForm}>
        <Typography sx={{ color: 'white', alignSelf: 'flex-start' }}>Laissez-nous vos coordonées et nous vous contacterons.</Typography>
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
            error={errorLastName}
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
            error={errorFirstName}
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
            error={errorEmail}
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
            error={errorPhone}
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
          error={errorAddress}
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
          error={errorSubject}
        />
        <PrimaryTextfield
          required
          type="text"
          name="content"
          label="Message"
          value={content}
          onChange={handleChange}
          maxLength={2500}
          sx={{ width: '100%' }}
          multiline
          minRows={3}
          error={errorContent}
        />
        <PrimaryButton className={classes.sendButton} variant="filled" onClick={handleSendClick}>
          Envoyer
        </PrimaryButton>
      </div>
    </div>
  );
}

ContactForm.propTypes = {
  width: PropTypes.number.isRequired,
};

export default ContactForm;
