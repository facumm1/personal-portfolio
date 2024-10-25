import React from 'react';
import {Controller, useForm} from 'react-hook-form';

import {Box, Button, TextField, Typography} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const lightGray = '#E2E8F0';

type Form = {
  name: string;
  email: string;
  message: string;
};

export const ContactForm: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<Form>({
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = (data: Form) => {
    const subject = `Message from ${data.name}`;
    const body = `Hello, Facundo.%0D%0A%0D%0A${data.message}%0D%0A%0D%0AThank you,%0D%0A${data.name}`;

    window.location.href = `mailto:${data.email}?subject=${subject}&body=${body}`;
  };

  return (
    <Box sx={styles.box}>
      <Controller
        name="name"
        control={control}
        defaultValue=""
        rules={{
          required: 'Your name is required',
          maxLength: {
            value: 40,
            message: 'Your name cannot exceed 40 characters',
          },
        }}
        render={({field}) => (
          <TextField
            {...field}
            error={!!errors.name}
            helperText={errors.name ? errors.name.message : ''}
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
        )}
      />

      <Controller
        name="email"
        control={control}
        defaultValue=""
        rules={{
          required: 'Your email is required',
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: 'Please enter a valid email address',
          },
          maxLength: {
            value: 50,
            message: 'Your email cannot exceed 50 characters',
          },
        }}
        render={({field}) => (
          <TextField
            {...field}
            error={!!errors.email}
            helperText={errors.email ? errors.email.message : ''}
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
        )}
      />

      <Controller
        name="message"
        control={control}
        defaultValue=""
        rules={{
          required: 'Your message is required',
          maxLength: {
            value: 500,
            message: 'Your message cannot exceed 500 characters',
          },
        }}
        render={({field}) => (
          <TextField
            {...field}
            error={!!errors.message}
            helperText={errors.message ? errors.message.message : ''}
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
        )}
      />

      <Button
        variant="outlined"
        color="secondary"
        sx={{borderRadius: '10px', mt: 5}}
        onClick={handleSubmit(onSubmit)}>
        <Typography sx={{textTransform: 'none', fontSize: '20px', px: 1}}>
          Send message
        </Typography>
        <SendIcon sx={{ml: 1}} />
      </Button>
    </Box>
  );
};

const styles = {
  box: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    my: 3,
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
