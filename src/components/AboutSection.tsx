'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutSection: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: 'easeOut',
        delay: 0.3,
      },
    },
  };

  return (
    <section 
      ref={ref} 
      className="py-16 bg-white overflow-hidden"
      dir="rtl"
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <motion.div 
            className="md:w-1/2 order-2 md:order-1"
            initial="hidden"
            animate={controls}
            variants={textVariants}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              אודות מסעדה גמא
            </h2>
            <div className="w-20 h-1 bg-secondary mb-8"></div>
            <p className="text-lg leading-relaxed mb-6 text-gray-700">
              אנחנו מסעדה מוביל בתחום השירותים עם ניסיון של שנים רבות. אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו.
            </p>
            <p className="text-lg leading-relaxed mb-8 text-gray-700">
              הצוות המקצועי שלנו מחויב לספק חוויה קולינרית יוצאת דופן, עם דגש על חומרי גלם טריים ואיכותיים, שירות אדיב ואווירה נעימה.
            </p>
            <button className="bg-primary hover:bg-primary-dark text-white font-medium py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105">
              קרא עוד
            </button>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 order-1 md:order-2"
            initial="hidden"
            animate={controls}
            variants={imageVariants}
          >
            <div className="relative w-full h-[400px] overflow-hidden rounded-xl shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="מסעדה גמא - חלל פנימי"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-primary bg-opacity-10"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;