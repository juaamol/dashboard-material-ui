import { useMediaQuery } from '@mui/material';

export function useIsMobile(): boolean {
  const isMobile = useMediaQuery('(max-width:599px)');

  return isMobile;
}
