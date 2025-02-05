import React from 'react';
import {Box, Button, Divider, Typography} from '@mui/material';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

import {ContactForm} from '../components/ContactForm';
import {toastify} from '../utils/toastify';
import {personalData} from '../utils/data';

export const ContactPage = React.forwardRef<HTMLDivElement>((_, ref) => {
  const handleCopy = () => {
    navigator.clipboard
      .writeText(personalData.email)
      .then(() => {
        toastify('Copied to clipboard');
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
  };

  return (
    <Box ref={ref}>
      <Divider sx={{borderColor: 'rgba(226, 233, 240, 0.25)'}} />

      <Box sx={styles.box}>
        <Typography
          sx={{...styles.mainTitle, fontSize: {xs: '30px', xl: '50px'}}}>
          Let's get in touch!
        </Typography>

        <Typography
          sx={{
            color: 'info.main',
            fontSize: {xs: '18px', xl: '24px'},
            textAlign: 'center',
          }}>
          It could be... For a job proposal? <br /> Or maybe for a freelance
          project, who knows? 🤔
        </Typography>

        {/* Form */}
        <ContactForm />

        <Typography
          sx={{
            color: 'info.main',
            textAlign: 'center',
            fontSize: {xs: '20px', xl: '24px'},
            my: 5,
          }}>
          or do you prefer a simpler
          <br /> way to contact me?
        </Typography>

        {/* Email to clipboard */}
        <Box
          display="flex"
          sx={{justifyContent: 'center', alignItems: 'center'}}>
          <Typography
            color="secondary"
            sx={{fontSize: {xs: '20px', xl: '24px'}}}>
            Copy my email
          </Typography>

          <Button
            variant="contained"
            sx={styles.emailButton}
            onClick={handleCopy}>
            <EmailOutlinedIcon sx={{fontSize: {xs: '40px', xl: '50px'}}} />
          </Button>
        </Box>
      </Box>
    </Box>
  );
});

const styles = {
  mainTitle: {color: 'info.main', textAlign: 'center', mb: {xs: 2, xl: 4}},
  box: {
    minHeight: '100vh',
    py: {xs: 4, xl: 6},
    px: 5,
    display: 'flex',
    flexDirection: 'column',
  },
  emailButton: {
    bgcolor: 'secondary.main',
    color: 'primary.main',
    px: 0,
    py: 0.5,
    ml: 1.5,
    borderRadius: '10px',
    display: 'flex',
    justifyContent: 'center',
    '&:hover': {
      bgcolor: 'primary.main',
      color: 'secondary.main',
    },
  },
};
