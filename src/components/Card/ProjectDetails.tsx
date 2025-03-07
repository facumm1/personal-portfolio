import {Box, Button, Typography} from '@mui/material';
import {CodeProject} from '../../utils/projects';

const lightGreen = '#59D9C120';

export const ProjectDetails = ({data}: {data: CodeProject}) => {
  const {title, thumbnail, preview, github} = data;

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        my: 2,
      }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '90%',
        }}>
        <img
          src={thumbnail}
          alt="thumbnail"
          style={{
            borderRadius: '5px',
            margin: '10px 0',
            height: '35%',
            objectFit: 'cover',
            width: '80%',
          }}
        />

        <Typography
          sx={{width: '80%', color: 'secondary.main', fontWeight: '600'}}>
          {title}
        </Typography>

        <Typography sx={{width: '80%'}}>{data.description}</Typography>

        <Box sx={{display: 'flex', justifyContent: 'flex-start', mt: 2}}>
          <Button
            onClick={() => {
              if (preview) {
                window.open(preview);
              }
            }}>
            <Typography
              sx={{
                borderRadius: '15px',
                bgcolor: lightGreen,
                color: 'secondary.main',
                opacity: preview ? 1 : 0.5,
                fontSize: {xs: '14px', xl: '20px'},
                fontWeight: '800',
                my: 'auto',
                mx: 0.5,
                px: 2,
                py: 1,
                '&:hover': github
                  ? {
                      bgcolor: '#1a2640',
                      color: 'info.main',
                      transition: '0.5s',
                    }
                  : {},
              }}>
              Preview
            </Typography>
          </Button>

          <Button
            onClick={() => {
              if (github) {
                window.open(github);
              }
            }}>
            <Typography
              sx={{
                borderRadius: '15px',
                bgcolor: lightGreen,
                color: 'secondary.main',
                opacity: github ? 1 : 0.5,
                fontSize: {xs: '14px', xl: '20px'},
                fontWeight: '800',
                my: 'auto',
                mx: 0.5,
                px: 2,
                py: 1,
                '&:hover': github
                  ? {
                      bgcolor: '#1a2640',
                      color: 'info.main',
                      transition: '0.5s',
                    }
                  : {},
              }}>
              Github
            </Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
