import {Box, Button, Fade, Modal, Typography} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import {CodeProject} from '../../utils/projects';
import {ProjectDetails} from '../Card/ProjectDetails';

type Props = {
  details: CodeProject[];
  isModalOpened: boolean;
  handleModal: () => void;
};

export const ProjectModal = ({details, isModalOpened, handleModal}: Props) => {
  return (
    <Modal
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: {xs: '100%', lg: '50%'},
        overflow: 'hidden',
      }}
      disableEnforceFocus
      disableAutoFocus
      open={isModalOpened}
      onClose={() => handleModal()}>
      <Fade in={isModalOpened} timeout={500}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            bgcolor: 'primary.main',
            width: {xs: '90%', borderRadius: '5px'},
            color: 'info.main',
            maxHeight: '95vh',
            overflowY: 'auto',
          }}>
          {/* Title n Close Button */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              my: 1,
            }}>
            <Typography
              sx={{
                fontSize: {xs: '22px', xl: '30px'},
                fontWeight: '600',
                px: 3,
              }}>
              Projects
            </Typography>

            <Button onClick={() => handleModal()} sx={{mt: 0.5}}>
              <CloseIcon sx={{color: 'info.main', padding: 0}} />
            </Button>
          </Box>

          {/* CARDS */}
          {details.map(projectDetail => (
            <ProjectDetails key={projectDetail.title} data={projectDetail} />
          ))}
        </Box>
      </Fade>
    </Modal>
  );
};
