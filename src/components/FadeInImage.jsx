import React from 'react';
import { motion } from 'framer-motion';

const FadeInImage = ({ duration = 0.5, ...rest }) => {
  return (
    <motion.img
      variants={{
        hidden: {
          opacity: 0,
        },
        visible: {
          opacity: 1,
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

export default FadeInImage;
