'use client';

import React, { useState, useEffect, useRef } from 'react';
import { FaStar, FaChevronRight, FaChevronLeft, FaQuoteRight } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

interface Testimonial {
  id: number;
  name: string;
  rating: number;
  quote: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'דניאל כהן',
    rating: 5,
    quote: 'האוכל במסעדה גמא פשוט מדהים! השירות היה מעולה והאווירה נעימה ומזמינה. בהחלט אחזור לכאן שוב.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 2,
    name: 'מיכל לוי',
    rating: 4,
    quote: 'המנות במסעדה גמא מוגשות בצורה אסתטית ומרשימה. הטעמים מיוחדים והשף באמת יודע מה הוא עושה!',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 3,
    name: 'יוסי אברהם',
    rating: 5,
    quote: 'חגגנו את יום הנישואין שלנו במסעדה גמא והיה מושלם. תודה על ערב בלתי נשכח עם אוכל מעולה ושירות מצוין.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 4,
    name: 'רונית שמעוני',
    rating: 5,
    quote: 'המסעדה הטובה ביותר באזור! התפריט מגוון, המחירים הוגנים והאווירה נעימה. ממליצה בחום לכל מי שמחפש חוויה קולינרית מיוחדת.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 5,
    name: 'אבי גולדשטיין',
    rating: 4,
    quote: 'מקום מקסים עם אוכל טעים ושירות אדיב. האווירה נעימה ומתאימה לארוחות משפחתיות וגם לפגישות עסקיות.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80'
  }
];

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  
  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0
      };
    }
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    const newIndex = (currentIndex + newDirection + testimonials.length) % testimonials.length;
    setCurrentIndex(newIndex);
    resetAutoPlay();
  };

  const resetAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
    
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setDirection(1);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);
    }
  };

  useEffect(() => {
    resetAutoPlay();
    
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying]);

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <FaStar
          key={i}
          className={`inline-block ${
            i < rating ? 'text-yellow-400' : 'text-gray-300'
          }`}
        />
      ));
  };

  return (
    <section className="testimonials-section bg-gray-50 py-16 px-4 md:px-8 lg:px-16 dir-rtl">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">מה הלקוחות שלנו אומרים</h2>
          <div className="w-24 h-1 bg-secondary mx-auto"></div>
        </div>

        <div className="relative overflow-hidden max-w-4xl mx-auto">
          <div className="testimonial-slider h-[400px] md:h-[350px] relative">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);
                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className="absolute w-full h-full"
              >
                <div className="testimonial-card bg-white rounded-lg shadow-lg p-6 md:p-8 h-full flex flex-col items-center justify-center text-center">
                  <div className="quote-icon text-primary text-4xl mb-4">
                    <FaQuoteRight />
                  </div>
                  <div className="avatar mb-4">
                    <img
                      src={testimonials[currentIndex].avatar}
                      alt={testimonials[currentIndex].name}
                      className="w-20 h-20 rounded-full object-cover border-4 border-secondary"
                    />
                  </div>
                  <div className="rating mb-4">
                    {renderStars(testimonials[currentIndex].rating)}
                  </div>
                  <p className="quote text-lg md:text-xl mb-4 text-gray-700">
                    "{testimonials[currentIndex].quote}"
                  </p>
                  <h3 className="name text-xl font-bold text-primary">
                    {testimonials[currentIndex].name}
                  </h3>
                </div>
              </motion.div>
            </AnimatePresence>

            <button
              onClick={() => paginate(-1)}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-primary p-2 rounded-full shadow-md z-10 hover:bg-primary hover:text-white transition-colors duration-300"
              aria-label="הקודם"
            >
              <FaChevronRight className="text-xl" />
            </button>
            
            <button
              onClick={() => paginate(1)}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-primary p-2 rounded-full shadow-md z-10 hover:bg-primary hover:text-white transition-colors duration-300"
              aria-label="הבא"
            >
              <FaChevronLeft className="text-xl" />
            </button>
          </div>

          <div className="dots flex justify-center mt-6 space-x-2 space-x-reverse">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                  resetAutoPlay();
                }}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? 'bg-primary' : 'bg-gray-300'
                } transition-colors duration-300`}
                aria-label={`עבור לביקורת ${index + 1}`}
              />
            ))}
          </div>

          <div className="mt-6 text-center">
            <button
              onClick={toggleAutoPlay}
              className="text-sm text-gray-600 hover:text-primary transition-colors duration-300"
            >
              {isAutoPlaying ? 'עצור החלפה אוטומטית' : 'הפעל החלפה אוטומטית'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;