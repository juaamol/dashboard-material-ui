import { Box, useTheme } from '@mui/material';
import { Header } from '../../components/Header';
import { DataGrid } from '@mui/x-data-grid';
import { tokens } from '../../theme';
import { mockDataTeam } from '../../data/mockData';
import { AccessLevel } from './AccessLevel';

export const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: 'id', headerName: 'ID' },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      cellClassName: 'name-column--cell',
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
    },
    {
      field: 'phone',
      headerName: 'Phone Number',
      flex: 1,
    },
    {
      field: 'email',
      headerName: 'Email',
      flex: 1,
    },
    {
      field: 'access',
      headerName: 'Access Level',
      minWidth: 150,
      renderCell: ({ row: { access } }: { row: { access: string } }) => (
        <AccessLevel access={access} />
      ),
    },
  ];

  return (
    <Box m='20px'>
      <Box>
        <Header title='TEAM' subtitle='Manage team members'></Header>
        <Box
          m='40px 0 0 0'
          height='75vh'
          sx={{
            '& .MuiDataGrid-root': {
              border: 'none',
            },
            '& .MuiDataGrid-root .MuiDataGrid-cell': {
              borderBottom: 'none',
            },
            '& .name-column--cell': {
              color: colors.greenAccent[300],
            },
            '& .MuiDataGrid-columnHeaders': {
              backgroundColor: colors.blueAccent[700],
              borderBottom: 'none',
            },
            '& .MuiDataGrid-virtualScroller': {
              backgroundColor: colors.primary[400],
            },
            '& .MuiDataGrid-footerContainer': {
              borderTop: 'none',
              backgroundColor: colors.blueAccent[700],
            },
            '& .MuiCheckbox-root': {
              color: `${colors.greenAccent[200]} !important`,
            },
          }}
        >
          <DataGrid rows={mockDataTeam} columns={columns} />
        </Box>
      </Box>
    </Box>
  );
};
