import { useMediaQuery } from '@mui/material';

export function useIsTablet(): boolean {
  const isTablet = useMediaQuery('(max-width:768px)');

  return isTablet;
}
