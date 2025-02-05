import React from 'react';
import {Box, Divider, Typography, useMediaQuery} from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

import {projects} from '../utils/projects';
import {useTheme} from '@emotion/react';

const lightGreen = '#59D9C120';

export const ProjectsPage = React.forwardRef<HTMLDivElement>((_, ref) => {
  const theme = useTheme();
  const isLaptop = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <Box ref={ref}>
      <Divider sx={{borderColor: 'rgba(226, 233, 240, 0.25)'}} />

      {/* Content */}
      <Box sx={styles.box}>
        <Typography
          sx={{
            ...styles.mainTitle,
            fontSize: {xs: '30px', lg: '38px', xl: '50px'},
          }}>
          Projects
        </Typography>

        {projects.map(project => (
          <Box
            sx={styles.card}
            key={project.title}
            onClick={() => window.open(project.link)}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Typography
                sx={{
                  color: 'info.main',
                  fontSize: {xs: '22px', xl: '30px'},
                  mb: 1,
                }}
                className="cardTitle">
                {project.title}
              </Typography>

              <ArrowOutwardIcon
                className="cardTitle"
                sx={{color: 'info.main', mb: 1}}
              />
            </Box>

            <Box
              sx={{
                display: 'flex',
                flexDirection: {xs: 'column', lg: 'row'},
                alignItems: 'center',
              }}>
              <img
                src={project.thumbnail}
                alt="thumbnail"
                style={{
                  borderRadius: '5px',
                  margin: '20px 0',
                  width: isLaptop ? '25%' : '100%',
                  height: '35%',
                  marginRight: '15px',
                  objectFit: 'cover',
                }}
              />

              <Typography
                sx={{color: 'info.main', fontSize: {xs: '18px', xl: '22px'}}}>
                {project.description}
              </Typography>
            </Box>

            <Box sx={{mt: 1}}>
              <Box sx={{display: 'flex', flexWrap: 'wrap'}}>
                {project.skills.map((skill, index) => (
                  <Typography
                    key={skill}
                    sx={{...styles.skill, my: index === 1 ? 1 : 'auto'}}>
                    {skill}
                  </Typography>
                ))}
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
});

const styles = {
  mainTitle: {
    color: 'info.main',
    textAlign: 'center',
    mb: {xs: 4, xl: 6},
    mt: {xl: 2},
  },
  box: {
    minHeight: '100vh',
    py: 4,
    mx: 2,
    display: 'flex',
    flexDirection: 'column',
  },
  card: {
    cursor: 'pointer',
    px: 3,
    py: 2,
    mb: 3,
    '&:hover': {
      bgcolor: '#1a2640',
      color: 'secondary.main',
      transition: '0.5s',
    },
    '&:hover .cardTitle': {
      color: 'secondary.main',
      transition: '0.5s',
    },
  },
  cardTitle: {
    color: 'info.main',
    fontSize: '22px',
    my: 1,
  },
  skill: {
    borderRadius: '15px',
    bgcolor: lightGreen,
    color: 'secondary.main',
    fontSize: {xs: '14px', xl: '20px'},
    fontWeight: '800',
    my: 'auto',
    mx: 0.5,
    px: 2,
    py: 1,
  },
};
