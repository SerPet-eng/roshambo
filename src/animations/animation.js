export const fadeInY = (position) => ({
  hidden: { opacity: 0, y: position },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
});

export const fadeInX = (position) => ({
  hidden: { opacity: 0, x: position },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
});

export const fadeInYDelay = (delay) => ({
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { duration: delay } },
});

export const fadeIn = () => ({
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
});
