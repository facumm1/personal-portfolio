import React from 'react';
import {Box, Divider, Typography} from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

import {projects} from '../utils/projects';

const lightGreen = '#59D9C120';

type DOMComponent = React.ForwardRefExoticComponent<
  React.RefAttributes<HTMLDivElement>
>;

export const ProjectsPage: DOMComponent = React.forwardRef((_, ref) => {
  return (
    <Box ref={ref}>
      <Divider sx={{borderColor: 'info.main'}} />

      {/* Content */}
      <Box sx={styles.box}>
        <Typography sx={styles.mainTitle}>Projects</Typography>

        {projects.map(project => (
          <Box sx={styles.card}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Typography
                sx={{color: 'info.main', fontSize: '22px', mb: 1}}
                className="cardTitle">
                {project.title}
              </Typography>

              <ArrowOutwardIcon
                className="cardTitle"
                sx={{color: 'info.main', mb: 1}}
              />
            </Box>

            <Typography sx={{color: 'info.main', fontSize: '18px'}}>
              {project.description}
            </Typography>

            <Box sx={{mt: 1}}>
              <Box sx={{display: 'flex', flexWrap: 'wrap'}}>
                {project.skills.map((skill, index) => (
                  <Typography
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
  mainTitle: {color: 'info.main', textAlign: 'center', fontSize: '30px', mb: 4},
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
    fontSize: '14px',
    fontWeight: '800',
    my: 'auto',
    mx: 0.5,
    px: 2,
    py: 1,
  },
};
