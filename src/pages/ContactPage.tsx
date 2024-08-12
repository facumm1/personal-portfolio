import React from 'react';
import {Box, Button, TextField, Typography} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const lightGray = '#E2E8F0';

export const ContactPage: React.FC = () => {
  return (
    <Box sx={styles.box}>
      <Typography sx={styles.mainTitle}>Let's get in touch!</Typography>

      <Typography
        sx={{color: 'info.main', fontSize: '18px', textAlign: 'center'}}>
        It could be... For a job proposal? Or maybe for a freelance project, who
        knows? 🤔
      </Typography>

      {/* Form */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          my: 3,
        }}>
        <TextField
          sx={styles.textField}
          InputProps={{
            style: {color: '#FFF', fontSize: '18px'},
            disableUnderline: false,
          }}
          InputLabelProps={{
            style: {color: lightGray, fontWeight: '800', fontSize: '18px'},
          }}
          id="name"
          label="Your name"
          variant="standard"
        />
        <TextField
          sx={styles.textField}
          InputProps={{
            style: {color: '#FFF', fontSize: '18px'},
            disableUnderline: false,
          }}
          InputLabelProps={{
            style: {color: lightGray, fontWeight: '800', fontSize: '18px'},
          }}
          id="email"
          label="Your email"
          variant="standard"
        />
        <TextField
          sx={styles.textField}
          InputProps={{
            style: {color: '#FFF', fontSize: '18px'},
            disableUnderline: false,
          }}
          InputLabelProps={{
            style: {color: lightGray, fontWeight: '800', fontSize: '18px'},
          }}
          id="message"
          label="Your message"
          variant="standard"
        />

        <Button
          variant="outlined"
          color="secondary"
          sx={{borderRadius: '10px', mt: 5}}>
          <Typography sx={{textTransform: 'none', fontSize: '20px', px: 1}}>
            Send message
          </Typography>
          <SendIcon sx={{ml: 1}} />
        </Button>
      </Box>

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
      <Box display="flex" sx={{justifyContent: 'center', alignItems: 'center'}}>
        <Typography color="secondary" sx={{fontSize: '20px'}}>
          Copy my email
        </Typography>

        <Box
          sx={{
            bgcolor: 'secondary.main',
            px: 1,
            py: 0.5,
            ml: 1.5,
            borderRadius: '10px',
            display: 'flex',
            justifyContent: 'center',
          }}>
          <EmailOutlinedIcon color="primary" sx={{fontSize: '40px'}} />
        </Box>
      </Box>
    </Box>
  );
};

const styles = {
  mainTitle: {color: 'info.main', textAlign: 'center', fontSize: '30px', mb: 2},
  box: {
    minHeight: '100vh',
    py: 4,
    mx: 5,
    display: 'flex',
    flexDirection: 'column',
  },
  textField: {
    width: '90%',
    my: 1,
    '& .MuiInput-underline:before': {
      borderBottomColor: lightGray,
    },
    '& .MuiInput-underline:hover:before': {
      borderBottomColor: lightGray,
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: lightGray,
    },
    '& .Mui-focused': {
      color: lightGray,
    },
  },
};
