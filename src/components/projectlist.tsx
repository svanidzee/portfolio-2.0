'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface IprojectlistProps {
  text: string;
}

const ProjectList = (props: IprojectlistProps) => {
  const words = props.text.split(' ');

  const visibleVariant = {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
  };

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: visibleVariant,
    //   {
    //   opacity: 1,
    //   x: 0,
    //   transition: {
    //     type: 'spring',
    //     damping: 12,
    //     stiffness: 100,
    //   },
    // },
    hidden: {
      opacity: 0,
      title: 'Opacity',
      //   type: ControlType.Number,
      min: 0,
      max: 1,
      step: 0.01,
      defaultValue: 0,
      x: 20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  //   const item = {
  //     hidden: { opacity, x, y, scale, rotate, rotateX, rotateY },
  //     visible: visibleVariant,
  //   };

  return (
    <motion.div
      style={{ overflow: 'hidden', display: 'flex', fontSize: '2rem', color: 'red' }}
      variants={container}
      initial='hidden'
      animate='visible'>
      {words.map((word, index) => (
        <motion.span variants={child} style={{ marginRight: '5px' }} key={index}>
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default ProjectList;
