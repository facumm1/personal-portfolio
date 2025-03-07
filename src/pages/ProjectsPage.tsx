import React, {useCallback, useState} from 'react';
import {Box, Divider, Typography} from '@mui/material';

import {CodeProject, projects} from '../utils/projects';
import {GeneralProject} from '../components/GeneralProject';
import {ProjectModal} from '../components/Modal';
import {useToggle} from '../hooks';

const lightGreen = '#59D9C120';

const initialDetails: CodeProject[] = [
  {
    title: '',
    description: '',
    github: '',
    preview: '',
    thumbnail: '',
  },
];

export const ProjectsPage = React.forwardRef<HTMLDivElement>((_, ref) => {
  const {t: isModalOpened, s: toggleModal} = useToggle();
  const [projectDetails, setProjectDetails] =
    useState<CodeProject[]>(initialDetails);

  const handleModal = (details: CodeProject[] = initialDetails) => {
    if (isModalOpened) {
      toggleModal(false);
      return;
    }

    setProjectDetails(details);
    toggleModal(true);
  };

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
          <GeneralProject
            key={project.title}
            project={project}
            handleModal={handleModal}
          />
        ))}

        <ProjectModal
          details={projectDetails}
          isModalOpened={isModalOpened}
          handleModal={handleModal}
        />
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
