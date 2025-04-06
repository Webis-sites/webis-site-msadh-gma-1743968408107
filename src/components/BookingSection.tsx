'use client';

import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaClock, FaUser, FaPhone, FaEnvelope, FaComment } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';

interface BookingFormValues {
  name: string;
  phone: string;
  email: string;
  message: string;
  date: Date | null;
  time: string;
}

const BookingSection: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validationSchema = Yup.object({
    name: Yup.string().required('שדה חובה'),
    phone: Yup.string().required('שדה חובה').matches(/^[0-9]{9,10}$/, 'מספר טלפון לא תקין'),
    email: Yup.string().email('כתובת אימייל לא תקינה').required('שדה חובה'),
    message: Yup.string(),
    date: Yup.date().required('שדה חובה').nullable(),
    time: Yup.string().required('שדה חובה'),
  });

  const formik = useFormik<BookingFormValues>({
    initialValues: {
      name: '',
      phone: '',
      email: '',
      message: '',
      date: null,
      time: '12:00',
    },
    validationSchema,
    onSubmit: async (values) => {
      setIsSubmitting(true);
      
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      console.log('Form submitted:', values);
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        formik.resetForm();
        setIsSubmitted(false);
      }, 3000);
    },
  });

  return (
    <section className="relative w-full py-16 overflow-hidden bg-white rtl" dir="rtl">
      <div 
        className="absolute inset-0 z-0 opacity-20" 
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-white/30 to-white/90" />
      
      <div className="container relative z-10 px-4 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">הזמנת שולחן</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            אנו מזמינים אתכם להזמין שולחן במסעדה גמא ולהנות מחוויה קולינרית יוצאת דופן
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="p-8">
            <form onSubmit={formik.handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name Field */}
                <div className="relative">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    שם
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <FaUser className="h-5 w-5 text-primary" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={`block w-full rounded-md border pr-10 py-3 text-right ${
                        formik.touched.name && formik.errors.name 
                          ? 'border-red-300 focus:border-red-500 focus:ring-red-500' 
                          : 'border-gray-300 focus:border-primary focus:ring-primary'
                      } shadow-sm focus:outline-none focus:ring-2 focus:ring-opacity-50`}
                    />
                  </div>
                  {formik.touched.name && formik.errors.name && (
                    <p className="mt-1 text-sm text-red-600">{formik.errors.name}</p>
                  )}
                </div>

                {/* Phone Field */}
                <div className="relative">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    טלפון
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <FaPhone className="h-5 w-5 text-primary" />
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formik.values.phone}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={`block w-full rounded-md border pr-10 py-3 text-right ${
                        formik.touched.phone && formik.errors.phone 
                          ? 'border-red-300 focus:border-red-500 focus:ring-red-500' 
                          : 'border-gray-300 focus:border-primary focus:ring-primary'
                      } shadow-sm focus:outline-none focus:ring-2 focus:ring-opacity-50`}
                    />
                  </div>
                  {formik.touched.phone && formik.errors.phone && (
                    <p className="mt-1 text-sm text-red-600">{formik.errors.phone}</p>
                  )}
                </div>

                {/* Email Field */}
                <div className="relative">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    אימייל
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <FaEnvelope className="h-5 w-5 text-primary" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={`block w-full rounded-md border pr-10 py-3 text-right ${
                        formik.touched.email && formik.errors.email 
                          ? 'border-red-300 focus:border-red-500 focus:ring-red-500' 
                          : 'border-gray-300 focus:border-primary focus:ring-primary'
                      } shadow-sm focus:outline-none focus:ring-2 focus:ring-opacity-50`}
                    />
                  </div>
                  {formik.touched.email && formik.errors.email && (
                    <p className="mt-1 text-sm text-red-600">{formik.errors.email}</p>
                  )}
                </div>

                {/* Date Field */}
                <div className="relative">
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                    תאריך
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <FaCalendarAlt className="h-5 w-5 text-primary" />
                    </div>
                    <DatePicker
                      id="date"
                      selected={formik.values.date}
                      onChange={(date) => formik.setFieldValue('date', date)}
                      onBlur={formik.handleBlur}
                      dateFormat="dd/MM/yyyy"
                      minDate={new Date()}
                      className={`block w-full rounded-md border pr-10 py-3 text-right ${
                        formik.touched.date && formik.errors.date 
                          ? 'border-red-300 focus:border-red-500 focus:ring-red-500' 
                          : 'border-gray-300 focus:border-primary focus:ring-primary'
                      } shadow-sm focus:outline-none focus:ring-2 focus:ring-opacity-50`}
                    />
                  </div>
                  {formik.touched.date && formik.errors.date && (
                    <p className="mt-1 text-sm text-red-600">{formik.errors.date}</p>
                  )}
                </div>

                {/* Time Field */}
                <div className="relative">
                  <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                    שעה
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none z-10">
                      <FaClock className="h-5 w-5 text-primary" />
                    </div>
                    <TimePicker
                      onChange={(time) => formik.setFieldValue('time', time)}
                      value={formik.values.time}
                      disableClock={true}
                      format="HH:mm"
                      clearIcon={null}
                      className={`time-picker-wrapper ${
                        formik.touched.time && formik.errors.time 
                          ? 'error' 
                          : ''
                      }`}
                    />
                  </div>
                  {formik.touched.time && formik.errors.time && (
                    <p className="mt-1 text-sm text-red-600">{formik.errors.time}</p>
                  )}
                </div>
              </div>

              {/* Message Field */}
              <div className="relative">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  הודעה
                </label>
                <div className="relative">
                  <div className="absolute top-3 right-3 pointer-events-none">
                    <FaComment className="h-5 w-5 text-primary" />
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="block w-full rounded-md border border-gray-300 pr-10 py-3 text-right shadow-sm focus:border-primary focus:ring-primary focus:outline-none focus:ring-2 focus:ring-opacity-50"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center mt-8">
                <motion.button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className={`w-full md:w-auto px-8 py-3 rounded-lg font-medium text-white shadow-lg
                    ${isSubmitted ? 'bg-green-500' : 'bg-primary hover:bg-primary-dark'}
                    transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50`}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      מעבד...
                    </div>
                  ) : isSubmitted ? (
                    <div className="flex items-center justify-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      ההזמנה התקבלה!
                    </div>
                  ) : (
                    'קבע תור עכשיו'
                  )}
                </motion.button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;