import { Header } from '../../components/Header';
import { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import { formatDate } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from '@mui/material';
import { tokens } from '../../theme';
import { useIsMobile } from '../../hooks/useIsMobile';

export const Calendar = () => {
  const theme = useTheme();
  const isMobile = useIsMobile();
  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState<any[]>([]);

  const handleDateClick = (selected: any) => {
    const title = prompt('Please enter a new title for your event');
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };

  const handleEventClick = (selected: any) => {
    const event = selected.event.title;
    const confirmText = `Are you sure you want to delete the event '${event}'`;

    if (window.confirm(confirmText)) {
      selected.event.remove();
    }
  };

  return (
    <Box m='20px'>
      <Header title='CALENDAR' subtitle='Full Calendar Interactive Page' />

      <Box
        display='flex'
        justifyContent='space-between'
        flexDirection={isMobile ? 'column-reverse' : undefined}
        gap='15px'
      >
        <Box
          flex='1 1 20%'
          bgcolor={colors.primary[400]}
          p='15px'
          borderRadius='4px'
        >
          <Typography variant='h5'>Events</Typography>
          <List>
            {currentEvents.map((event) => (
              <ListItem
                key={event.id}
                sx={{
                  backgroundColor: colors.greenAccent[500],
                  margin: '10px 0',
                  borderRadius: '2px',
                }}
              >
                <ListItemText
                  primary={event.title}
                  secondary={
                    <Typography>
                      {formatDate(event.start, {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>
        <Box
          flex='1 1 100%'
          ml='15px'
          sx={{
            '--fc-neutral-bg-color': colors.primary[400],
            '--fc-list-event-hover-bg-color': '#6870fa',
            '--fc-button-bg-color': colors.primary[400],
          }}
        >
          <FullCalendar
            height='75vh'
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth',
            }}
            initialView='dayGridMonth'
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(events) => setCurrentEvents(events)}
            initialEvents={[
              {
                id: '12315',
                title: 'All-day event',
                date: '2022-09-14',
              },
              {
                id: '5123',
                title: 'Timed event',
                date: '2022-09-28',
              },
            ]}
          />
        </Box>
      </Box>
    </Box>
  );
};
