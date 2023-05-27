import { motion } from "framer-motion";
import { memo } from 'react';

const RevelingText = ({
  component = 'p',
  className,
  children,
  delay = 0,
  speed = 'medium'
}) => {

  if (!children) {
    return null
  }

  const staggerChildren = {
    'slowest': 0.12,
    'slow': 0.08,
    'medium': 0.04,
    'fast': 0.02,
    'fastest': 0.01,
  }[speed]

  const Component = motion(component)

  return (
    <Component
      className={className}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            delay,
            staggerChildren
          }
        }
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {children.split('').map((char, index) => (
        <motion.span
          key={char + "-" + index}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0
            }
          }}
        >
          {char}
        </motion.span>
      ))}
    </Component>
  )
}

export default memo(RevelingText)