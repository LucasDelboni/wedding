import { motion } from "framer-motion";
import { memo } from 'react';

const FadeInText = ({
  component = 'p',
  className,
  children,
  delay = 0,
  duration = 1
}) => {

  if (!children) {
    return null
  }

  const Component = motion(component)

  return (
    <Component
      className={className}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            duration,
            delay,
          }
        }
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {children}
    </Component>
  )
}

export default memo(FadeInText)