
import { TimelineConnector, TimelineContent, TimelineDot, TimelineItem as MuiTimelineItem, TimelineOppositeContent, TimelineSeparator } from '@mui/lab';
import { Box, Icon } from '@mui/material';

import './TimelineItem.css'
import RevelingText from '../../../components/RevelingText';

export default function TimelineItem({ title, date, children, icon, speed }) {

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