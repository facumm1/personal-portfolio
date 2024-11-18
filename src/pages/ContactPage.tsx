import React from 'react';
import {Box, Button, Divider, Typography, useMediaQuery} from '@mui/material';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

import {ContactForm} from '../components/ContactForm';
import {toastify} from '../utils/toastify';
import {useTheme} from '@emotion/react';

const email = 'facundomamani120@gmail.com';

type DOMComponent = React.ForwardRefExoticComponent<
  React.RefAttributes<HTMLDivElement>
>;

export const ContactPage: DOMComponent = React.forwardRef((_, ref) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  const handleCopy = () => {
    navigator.clipboard
      .writeText(email)
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
          sx={{...styles.mainTitle, fontSize: isDesktop ? '38px' : '30px'}}>
          Let's get in touch!
        </Typography>

        <Typography
          sx={{color: 'info.main', fontSize: '18px', textAlign: 'center'}}>
          It could be... For a job proposal? Or maybe for a freelance project,
          who knows? 🤔
        </Typography>

        {/* Form */}
        <ContactForm />

        <Typography
          sx={{
            color: 'info.main',
            textAlign: 'center',
            fontSize: '20px',
            my: 5,
          }}>
          or do you prefer a simpler
          <br /> way to contact me?
        </Typography>

        {/* Email to clipboard */}
        <Box
          display="flex"
          sx={{justifyContent: 'center', alignItems: 'center'}}>
          <Typography color="secondary" sx={{fontSize: '20px'}}>
            Copy my email
          </Typography>

          <Button
            variant="contained"
            sx={styles.emailButton}
            onClick={handleCopy}>
            <EmailOutlinedIcon sx={{fontSize: '40px'}} />
          </Button>
        </Box>
      </Box>
    </Box>
  );
});

const styles = {
  mainTitle: {color: 'info.main', textAlign: 'center', mb: 2},
  box: {
    minHeight: '100vh',
    py: 4,
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
      color: 'secondary.main'
    },
  },
};
