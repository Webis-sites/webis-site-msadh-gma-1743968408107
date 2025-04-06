'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

const ContactSection: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Success notification
      toast.success('ההודעה נשלחה בהצלחה!', {
        position: "top-right",
        rtl: true
      });
      
      // Reset form
      reset();
    } catch (error) {
      toast.error('שגיאה בשליחת הטופס. אנא נסה שוב מאוחר יותר.', {
        position: "top-right",
        rtl: true
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section dir="rtl" className="bg-white py-16 px-4 md:px-8">
      <ToastContainer />
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">צור קשר</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            אנחנו כאן לענות על כל שאלה. מלאו את הטופס או צרו איתנו קשר באחת מהדרכים הבאות
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">פרטי התקשרות</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-primary p-3 rounded-full text-white mr-4">
                  <FaMapMarkerAlt size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700">כתובת</h4>
                  <p className="text-gray-600">רחוב הרצל 123, תל אביב</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary p-3 rounded-full text-white mr-4">
                  <FaPhone size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700">טלפון</h4>
                  <p className="text-gray-600 hover:text-primary transition-colors">
                    <a href="tel:+972-3-1234567">03-1234567</a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary p-3 rounded-full text-white mr-4">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700">אימייל</h4>
                  <p className="text-gray-600 hover:text-primary transition-colors">
                    <a href="mailto:info@gama-restaurant.co.il">info@gama-restaurant.co.il</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">שעות פתיחה</h4>
              <div className="space-y-2">
                <p className="flex justify-between text-gray-600">
                  <span>ראשון - חמישי:</span>
                  <span>12:00 - 23:00</span>
                </p>
                <p className="flex justify-between text-gray-600">
                  <span>שישי:</span>
                  <span>12:00 - 16:00</span>
                </p>
                <p className="flex justify-between text-gray-600">
                  <span>שבת:</span>
                  <span>סגור</span>
                </p>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">עקבו אחרינו</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-primary text-white p-3 rounded-full hover:bg-primary-dark transition-colors"
                >
                  <FaFacebook size={20} />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-primary text-white p-3 rounded-full hover:bg-primary-dark transition-colors"
                >
                  <FaInstagram size={20} />
                </a>
                <a 
                  href="https://wa.me/9721234567" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-primary text-white p-3 rounded-full hover:bg-primary-dark transition-colors"
                >
                  <FaWhatsapp size={20} />
                </a>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">המיקום שלנו</h4>
              <div className="h-64 bg-gray-200 rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27034.90908492056!2d34.76383204272461!3d32.08799089999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4c86e794e4ad%3A0x2d00e8cfddcc69c7!2sTel%20Aviv-Yafo!5e0!3m2!1sen!2sil!4v1652345678901!5m2!1sen!2sil" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="מיקום מסעדה גמא"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">שלחו לנו הודעה</h3>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">שם מלא</label>
                <input
                  type="text"
                  id="name"
                  className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors`}
                  placeholder="הכנס את שמך המלא"
                  {...register('name', { required: 'שדה חובה' })}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">טלפון</label>
                <input
                  type="tel"
                  id="phone"
                  className={`w-full px-4 py-3 rounded-lg border ${errors.phone ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors`}
                  placeholder="הכנס את מספר הטלפון שלך"
                  dir="ltr"
                  {...register('phone', { 
                    required: 'שדה חובה',
                    pattern: {
                      value: /^[0-9]{9,10}$/,
                      message: 'מספר טלפון לא תקין'
                    }
                  })}
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">אימייל</label>
                <input
                  type="email"
                  id="email"
                  className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors`}
                  placeholder="הכנס את כתובת האימייל שלך"
                  dir="ltr"
                  {...register('email', { 
                    required: 'שדה חובה',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'כתובת אימייל לא תקינה'
                    }
                  })}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">הודעה</label>
                <textarea
                  id="message"
                  rows={5}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors`}
                  placeholder="כתוב את ההודעה שלך כאן"
                  {...register('message', { required: 'שדה חובה' })}
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
              </div>
              
              <motion.div 
                whileTap={{ scale: 0.95 }}
              >
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary-dark text-white font-medium py-3 px-6 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      שולח...
                    </div>
                  ) : 'שלח הודעה'}
                </button>
              </motion.div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;