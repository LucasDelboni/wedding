
import './Mosaic.css'

import { Box, ImageList, ImageListItem } from '@mui/material';

import ImageModal from '../../../components/ImageModal';
import RevelingText from '../../../components/RevelingText';

export default function Mosaic() {
  return (
    <Box className="mosaic">
      <RevelingText className="mosaic__title">
        ...e muitos outros momentos incríveis
      </RevelingText>
      <ImageList
        className="mosaic__list"
        variant="masonry"
        cols={4}
        rowHeight={121}
      >
        {Array.from(Array(130).keys()).map((photoIndex) => {
          const photoNumber = photoIndex + 1

          const sizes = {
            0: { rows: 2, cols: 2 },
            1: { rows: 1, cols: 1 },
            2: { rows: 1, cols: 1 },
            3: { rows: 1, cols: 2 },
            4: { rows: 1, cols: 2 },
            5: { rows: 2, cols: 2 },
            6: { rows: 1, cols: 1 },
            7: { rows: 1, cols: 1 },
          }[photoIndex % 8]

          return (
            <ImageListItem
              key={photoNumber}
              {...sizes}>
              <ImageModal
                className="mosaic__img"
                loading="lazy"
                src={`mosaic/photo${photoNumber}.jpg`}
              />
            </ImageListItem>
          )
        })}
      </ImageList>
    </Box>
  )
}