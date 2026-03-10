import { MessageCircle, ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import carouselImg from '../../assets/carousel.jpeg';

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="accueil" className="relative pt-20 min-h-[72vh] md:min-h-screen flex items-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/20 to-background">
        <div className="absolute inset-0 opacity-45 md:opacity-35">
          <img
            src={carouselImg}
            alt="N'Djamena Auto Service"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Animated gradient overlay */}
        <motion.div
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(230, 57, 70, 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(244, 162, 97, 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(230, 57, 70, 0.15) 0%, transparent 50%)',
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0"
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: '100vh', x: Math.random() * window.innerWidth, opacity: 0 }}
            animate={{
              y: '-100vh',
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-14 md:py-20 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6"
          >
            <Sparkles size={16} className="text-primary" />
            <span className="text-sm text-primary">Garage Premium à N'Djamena</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight"
          >
            Votre garage automobile de{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              confiance
            </span>{' '}
            à N'Djamena
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl"
          >
            Entretien, réparation, plastification et teinte de vitres réalisés par des professionnels.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.button
              onClick={() => scrollToSection('services')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-8 py-4 bg-primary text-white rounded-lg overflow-hidden group shadow-lg shadow-primary/30"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Voir nos services
                <ArrowRight size={20} />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-accent to-primary"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>

            <motion.a
              href="https://wa.me/23566740154"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-accent/10 border-2 border-accent text-accent rounded-lg flex items-center justify-center gap-2 backdrop-blur-sm hover:bg-accent hover:text-background transition-all shadow-lg"
            >
              <MessageCircle size={20} />
              Contact WhatsApp
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
