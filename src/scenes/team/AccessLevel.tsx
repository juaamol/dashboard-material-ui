import { Box, Typography, useTheme } from '@mui/material';
import { tokens } from '../../theme';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';

export const AccessLevel = ({ access }: { access: string }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      width='130px'
      m='0 auto'
      p='5px'
      display='flex'
      justifyContent='center'
      bgcolor={
        access === 'admin'
          ? colors.greenAccent[600]
          : access === 'manager'
          ? colors.greenAccent[700]
          : colors.greenAccent[700]
      }
      borderRadius='4px'
    >
      {access === 'admin' && <AdminPanelSettingsOutlinedIcon />}
      {access === 'manager' && <SecurityOutlinedIcon />}
      {access === 'user' && <LockOpenOutlinedIcon />}
      <Typography color={colors.grey[100]} sx={{ ml: '5px' }}>
        {access}
      </Typography>
    </Box>
  );
};
