import { Box } from '@mui/material';
import { Header } from '../../components/Header';
import { LineChart } from '../../components/LineChart';

export const Line = () => {
  return (
    <Box m='20px'>
      <Box>
        <Header
          title='LINE CHART'
          subtitle='Check statistics in a line chart'
        ></Header>
      </Box>
      <Box m='40px 0 0 0' height='75vh'>
        <LineChart hasAxisLegends></LineChart>
      </Box>
    </Box>
  );
};
