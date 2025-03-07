import React from 'react';
import {Box, Button, Typography} from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

import {experiences} from '../utils/experiences';
import ArticleIcon from '@mui/icons-material/Article';

import {personalData} from '../utils/data';

const lightGreen = '#59D9C120';
const lightGray = '#E2E8F080';

export const Experience: React.FC = () => {
  return (
    <Box sx={{...styles.expBox, minHeight: {xs: '100vh', lg: 'none'}}}>
      <Typography
        sx={{color: lightGray, fontSize: {xs: '32px', xl: '40px'}, mx: 5}}>
        Experience
      </Typography>

      {experiences.map(exp => (
        <Box
          key={exp.jobName}
          sx={styles.expCard}
          onClick={() => {
            if (exp.website) {
              window.open(exp.website, '_blank');
            }
          }}>
          <Typography
            sx={{color: lightGray, fontSize: {xs: '14px', xl: '20px'}}}>
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

            {exp.website && (
              <ArrowOutwardIcon
                className="expCardTitle"
                sx={{color: 'info.main'}}
              />
            )}
          </Box>

          <Typography sx={styles.expCardSubTitle} className="expCardTitle">
            {exp.role}
          </Typography>

          <Typography
            sx={{
              color: 'info.main',
              fontSize: {xs: '18px', xl: '22px'},
              my: 2,
            }}>
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

      <Button
        variant="text"
        sx={styles.resumeBtn}
        target="_blank"
        href={personalData.resumeLink}>
        <Typography sx={styles.btnTitle}>Download resume</Typography>

        <ArticleIcon sx={styles.btnIcon} />
      </Button>
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
    fontSize: {xs: '22px', xl: '30px'},
    my: 1,
  },
  expCardSubTitle: {
    color: 'info.main',
    fontSize: {xs: '14px', xl: '20px'},
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
  resumeBtn: {
    alignSelf: 'center',
    border: '1px solid #FFF',
    borderColor: 'secondary.main',
    borderRadius: '10px',
    mt: 5,
    px: 3,
    width: 'fit-content',
    animation: 'pulse 2s infinite',
    position: 'relative',
    overflow: 'hidden',
    color: 'secondary.main',
    '&:hover': {
      bgcolor: 'secondary.main',
      color: 'primary.main',
    },
  },
  btnTitle: {
    textTransform: 'none',
    fontSize: {xs: '20px', xl: '24px'},
  },
  btnIcon: {
    fontSize: {xs: '40px', xl: '50px'},
    ml: 1,
  },
};
