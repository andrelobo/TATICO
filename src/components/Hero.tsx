import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section className="relative w-full h-screen max-h-[800px] overflow-hidden">
      <img
        src="/images/hero.jpg"
        alt="Arte urbana do artista Tático"
        className="absolute top-0 left-0 w-full h-full object-cover object-center"
        loading="eager"
      />

      <div className="absolute inset-0 bg-black/60 z-10 flex flex-col justify-center items-center text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-7xl text-spray font-graffiti mb-4 sm:mb-6"
        >
          TATICO
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg sm:text-xl md:text-2xl max-w-2xl mb-6 sm:mb-8 text-white px-4"
        >
          Transformando muros em arte urbana. Conheça o trabalho de Tatico.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Link
            to="/fotos"
            className="inline-block bg-spray hover:bg-green-600 text-black font-bold py-2 px-6 sm:py-3 sm:px-8 rounded-full transition-colors duration-300 text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-spray"
            aria-label="Ver portfólio de obras"
          >
            Ver Portfólio
          </Link>
        </motion.div>
      </div>
    </section>
  );
};