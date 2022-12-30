import { Box, useTheme } from '@mui/material';
import { Header } from '../../components/Header';
import { GeographyChart } from '../../components/GeographyChart';
import { tokens } from '../../theme';

export const Geography = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m='20px'>
      <Box>
        <Header
          title='GEOGRAPHY CHART'
          subtitle='Check a map of the world'
        ></Header>
      </Box>
      <Box
        m='40px 0 0 0'
        height='75vh'
        border={`1px solid ${colors.grey[100]}`}
        borderRadius='4px'
      >
        <GeographyChart></GeographyChart>
      </Box>
    </Box>
  );
};
