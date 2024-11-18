import React from 'react';
import {useTheme} from '@emotion/react';
import {Box, Typography, useMediaQuery} from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import {experiences} from '../utils/experiences';

const lightGreen = '#59D9C120';
const lightGray = '#E2E8F080';

export const Experience: React.FC = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <Box sx={{...styles.expBox, minHeight: isDesktop ? 'none' : '100vh'}}>
      <Typography sx={{color: lightGray, fontSize: '32px', mx: 5}}>
        Experience
      </Typography>

      {experiences.map(exp => (
        <Box
          key={exp.jobName}
          sx={styles.expCard}
          onClick={() => window.open(exp.website, '_blank')}>
          <Typography sx={{color: lightGray, fontSize: '14px'}}>
            {exp.datePeriod}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Typography sx={styles.expCardTitle} className="expCardTitle">
              {exp.jobName}
            </Typography>

            <ArrowOutwardIcon
              className="expCardTitle"
              sx={{color: 'info.main'}}
            />
          </Box>

          <Typography sx={styles.expCardSubTitle} className="expCardTitle">
            {exp.role}
          </Typography>

          <Typography sx={{color: 'info.main', fontSize: '18px', my: 2}}>
            {exp.description}
          </Typography>

          <Box>
            <Box sx={{display: 'flex', flexWrap: 'wrap'}}>
              {exp.skills.map((skill, index) => (
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
  );
};

const styles = {
  expBox: {
    py: 4,
    display: 'flex',
    flexDirection: 'column',
  },
  expCard: {
    cursor: 'pointer',
    px: 3,
    py: 2,
    mx: 2,
    my: 1,
    '&:hover': {
      bgcolor: '#1a2640',
      color: 'secondary.main',
      transition: '0.5s',
    },
    '&:hover .expCardTitle': {
      color: 'secondary.main',
      transition: '0.5s',
    },
  },
  expCardTitle: {
    color: 'info.main',
    fontSize: '22px',
    my: 1,
  },
  expCardSubTitle: {
    color: 'info.main',
    fontSize: '14px',
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
