'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaUtensils, FaGlassCheers, FaBirthdayCake } from 'react-icons/fa';
import { MdEventAvailable } from 'react-icons/md';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  imageUrl: string;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, imageUrl, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.2 }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute inset-0 bg-primary bg-opacity-30 flex items-center justify-center text-4xl text-white">
          {icon}
        </div>
      </div>
      <div className="p-6 rtl-content">
        <h3 className="text-xl font-bold mb-3 text-primary">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </motion.div>
  );
};

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <FaUtensils />,
      title: "חוויית אוכל ייחודית",
      description: "תפריט עשיר ומגוון המשלב מטבח ים תיכוני מסורתי עם נגיעות מודרניות. כל מנה מוכנה מחומרי גלם טריים ואיכותיים.",
      imageUrl: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <MdEventAvailable />,
      title: "אירועים פרטיים",
      description: "אנו מציעים חלל ייחודי לאירועים פרטיים עד 100 איש. צוות המסעדה ילווה אתכם משלב התכנון ועד הביצוע המושלם.",
      imageUrl: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <FaGlassCheers />,
      title: "קייטרינג",
      description: "שירותי קייטרינג מקצועיים לכל סוגי האירועים. אנו מתאימים את התפריט לצרכים ולטעם האישי שלכם.",
      imageUrl: "https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <FaBirthdayCake />,
      title: "אירועים מיוחדים",
      description: "ימי הולדת, אירוסין, מסיבות רווקים/רווקות ועוד. נהפוך כל אירוע לחוויה בלתי נשכחת עם תפריט מותאם אישית.",
      imageUrl: "https://images.unsplash.com/photo-1464207687429-7505649dae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add RTL direction to the document if not already set
    if (document.dir !== 'rtl') {
      document.dir = 'rtl';
    }
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-secondary bg-opacity-20" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-primary mb-4"
          >
            השירותים שלנו
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: '100px' }}
            transition={{ duration: 0.7 }}
            className="h-1 bg-primary mx-auto mb-6"
          ></motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-700 max-w-2xl mx-auto"
          >
            במסעדה גמא אנו מציעים מגוון שירותים כדי להפוך כל ארוחה לחוויה מיוחדת
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              imageUrl={service.imageUrl}
              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;