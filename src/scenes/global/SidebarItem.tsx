import { Typography, useTheme } from '@mui/material';
import { FC, ReactNode } from 'react';
import { MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import { tokens } from '../../theme';

interface SidebarItemProps {
  title: string;
  to: string;
  icon: ReactNode;
  selected: string;
  setSelected: (title: string) => void;
}

export const SidebarItem: FC<SidebarItemProps> = (props) => {
  const { title, to, icon, selected, setSelected } = props;
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
      routerLink={<Link to={to} />}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  );
};
