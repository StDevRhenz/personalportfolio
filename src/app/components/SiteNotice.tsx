'use client';
import { motion } from 'framer-motion';

export default function DevelopmentMode() {
  return (
    <div className="flex items-center justify-center min-h-screen font-poppins" >
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.90, ease: "easeOut" }}
        className="text-gray-800 text-lg font-semibold "
      >
        SALAMAT SA IYONG PAGBISITA NGUNIT HINDI PA ITO TAPOS!
      </motion.div>
    </div>
  );
}