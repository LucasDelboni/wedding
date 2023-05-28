import './ImageModal.css';

import React, { useState } from "react";

import { Box, IconButton, Modal } from '@mui/material';
import { motion } from 'framer-motion';
import CloseIcon from '@mui/icons-material/Close';
import ZoomIcon from '@mui/icons-material/ZoomOutMap';

import RevelingText from '../RevelingText';
import RevelingImage from '../RevelingImage';
import FadeInText from '../FadeInText';
import FadeInImage from '../FadeInImage';


const ImageModal = ({
  alt,
  className,
  src
}) => {
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true)
  };

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <Box
        className={`${className} image-modal-base`}
        onClick={handleOpen}
      >
        <FadeInImage
          aria-hidden="true"
          className={'image-modal-base__image'}
          onClick={handleOpen}
          src={src}
          alt={alt}
        />
        <motion.div
          whileHover={{ opacity: 1, transition: { duration: 0.3 } }}
          className="image-modal-base__overlay"
        >
          <ZoomIcon sx={{ color: 'rgba(255, 255, 255, 0.7)' }} />
        </motion.div>
      </Box>
      <Modal
        className="image-modal"
        open={isOpen}
        onClose={handleClose}
      >
        <>
          <Box className="image-modal__header">
            <RevelingText className="image-modal__header-title" speed="fastest">{alt}</RevelingText>
            <IconButton color="white" variant="text" onClick={handleClose} >
              <FadeInText className="image-modal__header-close" component="span">
                <CloseIcon sx={{ color: 'white' }} />
              </FadeInText>
            </IconButton>
          </Box>
          <Box onClick={handleClose} className="image-modal__content">
            <RevelingImage
              className="image-modal__image"
              src={src}
              alt={alt}
              onClick={event => event.stopPropagation()}
            />
          </Box>
        </>
      </Modal>
    </>
  );
}

export default ImageModal