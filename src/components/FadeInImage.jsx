import React from 'react';
import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const FadeInImage = ({ duration = 0.5, ...rest }) => {
  const LazyImage = React.forwardRef((props, ref) => (
    <div className="lazy-image" ref={ref}>
      <LazyLoadImage  {...props} />
    </div>
  ))

  const ImageMotion = motion(LazyImage)

  return (
    <ImageMotion
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
