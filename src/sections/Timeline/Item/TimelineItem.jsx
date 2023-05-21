
import { TimelineConnector, TimelineContent, TimelineDot, TimelineItem as MuiTimelineItem, TimelineOppositeContent, TimelineSeparator } from '@mui/lab';
import { Box, Typography } from '@mui/material';

import HeartIcon from '@mui/icons-material/Favorite';

import './TimelineItem.css'

export default function TimelineItem({ title, date, children }) {

  return (
    <MuiTimelineItem className="timeline__item">
      <TimelineOppositeContent className="timeline__opposite-content">
        <Box className="timeline__opposite-text">
          <Typography>
            {title}
          </Typography>
          <Typography>
            {date}
          </Typography>
        </Box>
      </TimelineOppositeContent>
      <TimelineSeparator className="timeline__separator">
        <TimelineConnector />
        <TimelineDot className="timeline__dot">
          <HeartIcon />
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent className="timeline__content">
        {children}
      </TimelineContent>
    </MuiTimelineItem>
  )
}