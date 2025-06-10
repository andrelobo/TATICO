import { motion } from 'framer-motion';

export const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900 text-white py-6 text-center"
    >
      <div className="container mx-auto px-4">
        <p className="text-sm text-gray-400">
          Desenvolvido por AndreLobo © 2025
        </p>
      </div>
    </motion.footer>
  );
};