import { useMediaQuery } from '@mui/material';

export function useIsMobile(): boolean {
  const isMobile = useMediaQuery('(max-width:440px)');

  return isMobile;
}
