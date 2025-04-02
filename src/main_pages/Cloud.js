import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Cloud = ({ heading, content }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.2, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.02 }}
      id="cloud"
    >
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        id="cloudShape"
      >
        <span className="shadow"></span>
        <p id="cloudHeading">{heading}</p>
        <p id="cloudContent">{content}</p>
      </motion.div>
    </motion.div>
  );
};

export default Cloud;
