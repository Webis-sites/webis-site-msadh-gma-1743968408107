'use client';

import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Newsletter subscription logic would go here
    alert('תודה שנרשמת לניוזלטר שלנו!');
    setEmail('');
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white rtl" dir="rtl">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Logo and About */}
          <div className="flex flex-col items-start">
            <div className="mb-4 relative h-16 w-48">
              <Image 
                src="/logo.png" 
                alt="מסעדה גמא לוגו"
                layout="fill"
                objectFit="contain"
                className="object-right"
              />
            </div>
            <p className="text-sm mb-4">
              מסעדה גמא מציעה חוויה קולינרית ייחודית עם תפריט עשיר ומגוון המשלב מסורת וחדשנות.
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <Link href="https://facebook.com" passHref>
                <a className="text-white hover:text-secondary transition-colors duration-300" aria-label="פייסבוק">
                  <FaFacebook size={24} />
                </a>
              </Link>
              <Link href="https://instagram.com" passHref>
                <a className="text-white hover:text-secondary transition-colors duration-300" aria-label="אינסטגרם">
                  <FaInstagram size={24} />
                </a>
              </Link>
              <Link href="https://twitter.com" passHref>
                <a className="text-white hover:text-secondary transition-colors duration-300" aria-label="טוויטר">
                  <FaTwitter size={24} />
                </a>
              </Link>
              <Link href="https://whatsapp.com" passHref>
                <a className="text-white hover:text-secondary transition-colors duration-300" aria-label="וואטסאפ">
                  <FaWhatsapp size={24} />
                </a>
              </Link>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-secondary">ניווט מהיר</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <a className="hover:text-secondary transition-colors duration-300">דף הבית</a>
                </Link>
              </li>
              <li>
                <Link href="/menu">
                  <a className="hover:text-secondary transition-colors duration-300">תפריט</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="hover:text-secondary transition-colors duration-300">אודות</a>
                </Link>
              </li>
              <li>
                <Link href="/gallery">
                  <a className="hover:text-secondary transition-colors duration-300">גלריה</a>
                </Link>
              </li>
              <li>
                <Link href="/events">
                  <a className="hover:text-secondary transition-colors duration-300">אירועים</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="hover:text-secondary transition-colors duration-300">צור קשר</a>
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-secondary">פרטי התקשרות</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <FaMapMarkerAlt className="ml-2 text-secondary" />
                <span>רחוב הרצל 123, תל אביב</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="ml-2 text-secondary" />
                <span>03-1234567</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="ml-2 text-secondary" />
                <span>info@gamarest.co.il</span>
              </li>
              <li className="mt-4">
                <p className="font-semibold">שעות פעילות:</p>
                <p>ראשון-חמישי: 12:00-23:00</p>
                <p>שישי-שבת: 12:00-00:00</p>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-secondary">הירשמו לניוזלטר</h3>
            <p className="text-sm mb-4">
              הישארו מעודכנים עם המבצעים והאירועים האחרונים שלנו
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col">
              <div className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="הזינו את האימייל שלכם"
                  required
                  className="px-4 py-2 w-full text-gray-800 rounded-r-md focus:outline-none"
                  dir="rtl"
                />
                <button
                  type="submit"
                  className="bg-secondary text-gray-800 px-4 py-2 rounded-l-md hover:bg-opacity-90 transition-colors duration-300 font-semibold"
                >
                  הרשמה
                </button>
              </div>
            </form>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white border-opacity-20 mt-8 pt-6 text-center">
          <p>© {currentYear} מסעדה גמא. כל הזכויות שמורות.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;