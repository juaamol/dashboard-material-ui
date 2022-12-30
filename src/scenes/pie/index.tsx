import { Box } from '@mui/material';
import { Header } from '../../components/Header';
import { PieChart } from '../../components/PieChart';

export const Pie = () => {
  return (
    <Box m='20px'>
      <Box>
        <Header
          title='PIE CHART'
          subtitle='Check statistics in a pie chart'
        ></Header>
      </Box>
      <Box m='40px 0 0 0' height='75vh'>
        <PieChart></PieChart>
      </Box>
    </Box>
  );
};
