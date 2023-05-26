
import { TimelineConnector, TimelineContent, TimelineDot, TimelineItem as MuiTimelineItem, TimelineOppositeContent, TimelineSeparator } from '@mui/lab';
import { Box, Typography, Icon } from '@mui/material';

import './TimelineItem.css'

export default function TimelineItem({ title, date, children, icon }) {

  return (
    <MuiTimelineItem className="timeline__item">
      <TimelineOppositeContent className="timeline__opposite-content">
        <Box className="timeline__opposite-text">
          <Typography className="timeline__title">
            {title}
          </Typography>
          <Typography className="timeline__date">
            {date}
          </Typography>
        </Box>
      </TimelineOppositeContent>
      <TimelineSeparator className="timeline__separator">
        <TimelineConnector />
        <TimelineDot className="timeline__dot">
          <Icon baseClassName="material-icons-two-tone">{icon}</Icon>
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent className="timeline__content">
        {children}
      </TimelineContent>
    </MuiTimelineItem>
  )
}