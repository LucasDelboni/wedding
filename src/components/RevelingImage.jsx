import React from 'react';
import { motion } from 'framer-motion';

const RevelingImage = ({ duration = 0.5, ...rest }) => {

  return (
    <motion.img
      variants={{
        hidden: {
          opacity: 0,
          scale: 0.3
        },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            duration
          }
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      {...rest}
    />
  );
};

export default RevelingImage;
