import { CircularProgress, colors, useTheme } from '@mui/material';
import { FC } from 'react';
import { tokens } from '../theme';

interface ProgressCircleProps {
  size?: number;
  progress: number;
}

export const ProgressCircle: FC<ProgressCircleProps> = (props) => {
  const { progress, size } = props;
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <CircularProgress
      variant='determinate'
      value={progress}
      size={size || 40}
      color='error'
      thickness={6}
      sx={{
        '.MuiCircularProgress-circleDeterminate': {
          stroke: colors.blueAccent[500],
        },
      }}
    />
  );
};
