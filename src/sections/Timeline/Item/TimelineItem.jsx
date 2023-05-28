
import { TimelineConnector, TimelineContent, TimelineDot, TimelineItem as MuiTimelineItem, TimelineOppositeContent, TimelineSeparator } from '@mui/lab';
import { Box, Icon, useMediaQuery } from '@mui/material';

import './TimelineItem.css'
import RevelingText from '../../../components/RevelingText';

export default function TimelineItem({ title, date, children, icon, speed }) {

  const matches = useMediaQuery('(min-width:900px)')

  return (
    <MuiTimelineItem className="timeline__item">
      <TimelineOppositeContent className="timeline__opposite-content">
        <Box className="timeline__opposite-text">
          <RevelingText className="timeline__title">
            {title}
          </RevelingText>
          <RevelingText className="timeline__date">
            {date}
          </RevelingText>
        </Box>
      </TimelineOppositeContent>
      <TimelineSeparator className="timeline__separator">
        <TimelineConnector />
        <TimelineDot className="timeline__dot">
          <Icon baseClassName="material-icons-two-tone" sx={{ fontSize: matches ? '1.75rem' : '1.5rem' }}>{icon}</Icon>
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent className="timeline__content">
        {children}
      </TimelineContent>
    </MuiTimelineItem>
  )
}