import { Box } from '@mui/material';
import { Header } from '../../components/Header';
import { BarChart } from '../../components/BarChart';

export const Bar = () => {
  return (
    <Box m='20px'>
      <Box display='flex' justifyContent='space-between' alignItems='center'>
        <Header
          title='BAR CHART'
          subtitle='Check statistics in a bar chart'
        ></Header>
      </Box>
      <Box m='40px 0 0 0' height='75vh'>
        <BarChart hasAxisLegends></BarChart>
      </Box>
    </Box>
  );
};
