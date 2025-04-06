'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaUtensils, FaPizzaSlice, FaFish, FaCarrot, FaGlassMartiniAlt } from 'react-icons/fa';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

const ProductsSection: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const categories = ['all', 'main', 'appetizer', 'dessert', 'drink', 'vegetarian'];

  useEffect(() => {
    // Simulating data fetch - in a real app, this would come from an API
    const menuItems: Product[] = [
      {
        id: 1,
        name: 'שניצל ביתי',
        description: 'שניצל עוף טרי מוגש עם תוספת לבחירה',
        price: 65,
        image: 'https://images.unsplash.com/photo-1585325701956-60dd9c8553bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        category: 'main'
      },
      {
        id: 2,
        name: 'סלט יווני',
        description: 'עגבניות, מלפפונים, פלפלים, בצל, זיתים וגבינת פטה',
        price: 45,
        image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        category: 'vegetarian'
      },
      {
        id: 3,
        name: 'פסטה ברוטב עגבניות',
        description: 'פסטה טרייה ברוטב עגבניות ביתי ובזיליקום',
        price: 52,
        image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        category: 'main'
      },
      {
        id: 4,
        name: 'קרפצ׳יו סלמון',
        description: 'פרוסות דקות של סלמון טרי עם שמן זית, לימון ותבלינים',
        price: 58,
        image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        category: 'appetizer'
      },
      {
        id: 5,
        name: 'טירמיסו',
        description: 'קינוח איטלקי קלאסי עם קפה, מסקרפונה וקקאו',
        price: 38,
        image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        category: 'dessert'
      },
      {
        id: 6,
        name: 'מוחיטו',
        description: 'קוקטייל רענן עם רום, נענע, לימון וסוכר',
        price: 42,
        image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        category: 'drink'
      },
      {
        id: 7,
        name: 'פיצה מרגריטה',
        description: 'פיצה איטלקית עם רוטב עגבניות, מוצרלה ובזיליקום',
        price: 55,
        image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        category: 'main'
      },
      {
        id: 8,
        name: 'סופלה שוקולד',
        description: 'סופלה שוקולד חם עם גלידת וניל',
        price: 42,
        image: 'https://images.unsplash.com/photo-1511911063855-2bf39afa5b2e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        category: 'dessert'
      }
    ];

    setProducts(menuItems);
    setFilteredProducts(menuItems);
  }, []);

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.category === selectedCategory));
    }
  }, [selectedCategory, products]);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'main':
        return <FaUtensils />;
      case 'appetizer':
        return <FaPizzaSlice />;
      case 'dessert':
        return <FaUtensils />;
      case 'drink':
        return <FaGlassMartiniAlt />;
      case 'vegetarian':
        return <FaCarrot />;
      case 'all':
      default:
        return <FaUtensils />;
    }
  };

  const translateCategory = (category: string) => {
    const translations: Record<string, string> = {
      all: 'הכל',
      main: 'מנות עיקריות',
      appetizer: 'מנות ראשונות',
      dessert: 'קינוחים',
      drink: 'משקאות',
      vegetarian: 'צמחוני'
    };
    return translations[category] || category;
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="bg-white py-16 px-4 md:px-8 rtl" dir="rtl">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">התפריט שלנו</h2>
        
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-secondary hover:text-gray-800'
              }`}
            >
              <span>{getCategoryIcon(category)}</span>
              <span>{translateCategory(category)}</span>
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 product-card"
              variants={item}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-800">{product.name}</h3>
                  <span className="text-lg font-bold text-primary">₪{product.price}</span>
                </div>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {translateCategory(product.category)}
                  </span>
                  <button className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg transition-colors duration-300">
                    הזמן עכשיו
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;