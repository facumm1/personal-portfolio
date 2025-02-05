import {Avatar, Box, Button, useMediaQuery} from '@mui/material';
import React from 'react';
import {useTheme} from '@emotion/react';

import hamburger from '../assets/hamburger.svg';

interface Props {
  handleMenu: (state: boolean) => void;
}

export const Header: React.FC<Props> = ({handleMenu}) => {
  const theme = useTheme();
  const isLaptop = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        pt: 3,
        pb: isLaptop ? 1 : 2,
      }}>
      <Button
        onClick={() => handleMenu(true)}
        sx={{position: isLaptop ? 'static' : 'static', top: '5%'}}>
        <Avatar
          alt="hamburger"
          src={hamburger}
          sx={{ml: 4, width: '45px', height: '45px'}}
        />
      </Button>
    </Box>
  );
};
