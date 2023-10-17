import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.8,
    },
  },
};

const itemVariants = {
  hidden: {
    x: "-100vw",
  },
  visible: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 30,
    },
  },
};

const RouteError = () => {
  return (
    <motion.div
      className="container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 variants={itemVariants}>404 Error</motion.h1>
      <motion.h3 variants={itemVariants}>
        It must be about your internet connection...
      </motion.h3>
      <motion.h3 variants={itemVariants}>
        We don't have error in our website
      </motion.h3>
      <motion.h3 variants={itemVariants}>
        Never ever ever{" "}
        <span style={{ color: "red" }}>
          {" "}
          while(1) &#123; print 'ever' &#125;
        </span>{" "}
      </motion.h3>
      <motion.h5
        variants={itemVariants}
        // initial="hidden" animate="visible"
      >
        {" "}
        Oh there is another error ... It happens. You know ;(
      </motion.h5>
    </motion.div>
  );
};

export default RouteError;
