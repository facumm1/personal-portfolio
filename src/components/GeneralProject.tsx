import {Box, Typography, useMediaQuery, useTheme} from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import {CodeProject, Project} from '../utils/projects';

type Props = {
  project: Project;
  handleModal: (project: CodeProject[]) => void;
};

const lightGreen = '#59D9C120';

export const GeneralProject = ({project, handleModal}: Props) => {
  const theme = useTheme();
  const isLaptop = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <Box
      sx={styles.card}
      key={project.title}
      onClick={() => handleModal(project.details)}>
      {/* Title and arrow */}
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
            mb: {xs: 1, lg: 0},
          }}
          className="cardTitle">
          {project.title}
        </Typography>

        <ArrowOutwardIcon
          className="cardTitle"
          sx={{color: 'info.main', mb: 1}}
        />
      </Box>

      <Typography
        sx={{
          borderRadius: '5px',
          color: 'secondary.main',
          fontSize: {xs: '14px', xl: '20px'},
          fontWeight: '800',
          my: 'auto',
          mx: 0,
          mb: 0,
          py: 0,
          alignSelf: 'flex-start',
        }}>
        {project.company}
      </Typography>

      {/* Image and description */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: {xs: 'column', lg: 'row'},
          alignItems: {xs: 'center', lg: 'flex-start'},
          justifyContent: {lg: 'flex-start'},
        }}>
        <Box sx={{width: {xs: '100%', lg: '25%'}}}>
          <img
            src={project.thumbnail}
            alt="thumbnail"
            style={{
              borderRadius: '5px',
              margin: '10px 0',
              width: isLaptop ? '100%' : '100%',
              height: '35%',
              marginRight: isLaptop ? '15px' : 0,
              marginBottom: '5px',
              objectFit: 'cover',
            }}
          />
        </Box>

        <Typography
          sx={{
            width: {xs: '100%', lg: '75%'},
            color: 'info.main',
            fontSize: {xs: '18px', xl: '22px'},
            px: {xs: 0, lg: 2},
          }}>
          {project.description}
        </Typography>
      </Box>

      {/* Tecnologies */}
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
  );
};

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
