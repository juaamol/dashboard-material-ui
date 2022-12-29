import { Box, Typography, useTheme } from '@mui/material';
import { FC } from 'react';
import { tokens } from '../theme';

interface HeaderProps {
  title: string;
  subtitle: string;
}

export const Header: FC<HeaderProps> = (props) => {
  const { title, subtitle } = props;
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box>
      <Typography
        variant='h2'
        color={colors.grey[100]}
        fontWeight='bold'
        sx={{ mb: '5px' }}
      >
        {title}
      </Typography>
      <Typography variant='h5' color={colors.greenAccent[400]}>
        {subtitle}
      </Typography>
    </Box>
  );
};
