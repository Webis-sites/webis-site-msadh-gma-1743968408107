'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus, FiMinus } from 'react-icons/fi';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [elementVisible, setElementVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const faqItems: FAQItem[] = [
    {
      id: 1,
      question: "איך אני יכול להזמין מקום במסעדה?",
      answer: "ניתן להזמין מקום במסעדת גמא באמצעות הטלפון, האתר שלנו או אפליקציית ההזמנות. אנו ממליצים להזמין מקום מראש, במיוחד בסופי שבוע וחגים כאשר המסעדה עמוסה במיוחד."
    },
    {
      id: 2,
      question: "מה שעות הפתיחה של המסעדה?",
      answer: "מסעדת גמא פתוחה בימים א'-ה' בין השעות 12:00-23:00, בימי שישי בין השעות 12:00-15:00 ובמוצאי שבת מ-19:00 עד 23:00. בשבת המסעדה סגורה."
    },
    {
      id: 3,
      question: "האם יש אירועים מיוחדים במסעדה?",
      answer: "אנו מקיימים ערבי טעימות יין פעם בחודש, וכן ערבי שף מיוחדים עם תפריט ייחודי. ניתן להתעדכן על אירועים מיוחדים באתר שלנו או בעמוד הפייסבוק של המסעדה."
    },
    {
      id: 4,
      question: "האם יש קוד לבוש במסעדה?",
      answer: "אין קוד לבוש רשמי במסעדת גמא, אך אנו ממליצים על לבוש אלגנטי-קז'ואל. אנו מבקשים להימנע מהגעה בבגדי ים או גופיות."
    },
    {
      id: 5,
      question: "האם יש חניה זמינה ליד המסעדה?",
      answer: "יש חניון ציבורי במרחק של 50 מטר מהמסעדה. בנוסף, בערב ובסופי שבוע ניתן לחנות ברחובות הסמוכים ללא תשלום. לאורחי המסעדה יש הנחה של 15% בחניון הסמוך."
    },
    {
      id: 6,
      question: "האם יש אפשרויות לתזונה מיוחדת בתפריט?",
      answer: "בהחלט! התפריט שלנו כולל מגוון אפשרויות צמחוניות, טבעוניות וללא גלוטן. נא לציין את הדרישות התזונתיות המיוחדות שלכם בעת ההזמנה, והשף שלנו ישמח להתאים את המנות בהתאם."
    },
    {
      id: 7,
      question: "האם ניתן להזמין את המסעדה לאירוע פרטי?",
      answer: "כן, ניתן להזמין את המסעדה לאירועים פרטיים כמו ימי הולדת, אירועי חברה או חגיגות משפחתיות. אנו מציעים חבילות אירועים מותאמות אישית. צרו קשר עם מנהל האירועים שלנו לפרטים נוספים."
    }
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setElementVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8 font-sans" dir="rtl" ref={sectionRef}>
      <motion.div
        className="max-w-3xl mx-auto"
        initial="hidden"
        animate={elementVisible ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">שאלות נפוצות</h2>
          <div className="h-1 w-24 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <button
                className={`w-full flex justify-between items-center p-4 text-right focus:outline-none ${
                  activeIndex === index ? 'bg-primary bg-opacity-10' : 'bg-white'
                }`}
                onClick={() => toggleAccordion(index)}
                aria-expanded={activeIndex === index}
                aria-controls={`faq-answer-${item.id}`}
              >
                <span className="font-medium text-lg text-gray-800">{item.question}</span>
                <span className="text-primary ml-2">
                  {activeIndex === index ? <FiMinus size={20} /> : <FiPlus size={20} />}
                </span>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    id={`faq-answer-${item.id}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 bg-secondary bg-opacity-5 border-t border-gray-100">
                      <p className="text-gray-600">{item.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default FAQSection;