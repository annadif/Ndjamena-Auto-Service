import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import imgTog2 from '../../assets/Tog2.jpeg';
import imgBMW from '../../assets/BMW.jpeg';
import imgMercedes from '../../assets/Mercedess.jpeg';
import imgTog from '../../assets/Tog.jpeg';
import imgDefender from '../../assets/Defender.jpeg';
import imgBYD from '../../assets/BYD.jpeg';
import imgChery from '../../assets/chery.jpeg';
import imgWW from '../../assets/WW.jpeg';
import imgLCV8Webp from '../../assets/Land Cruiser V8.webp';
import imgPrado2025 from '../../assets/Prado 2025.png';
import imgLCV82025 from '../../assets/Land Cruiser V8 2025.png';
import imgRav4 from '../../assets/Rav-4 .png';
import imgLCV8Jpg from '../../assets/Land Cruiser V8.jpg';
import imgCorolla from '../../assets/corolla.png';
import imgPatrol1 from '../../assets/Nissan Patrol (1).png';
import imgPatrol2 from '../../assets/Nissan Patrol (2).png';
import imgPatrol3 from '../../assets/Nissan Patrol (3).png';
import imgRangeRover from '../../assets/Range Rover.png';

const categories = ['Tout', 'Plastification PPF', 'Teinte', 'Protection', 'Covering'];

const galleryItems = [
  { category: 'Plastification PPF', image: imgTog2,      title: 'Plastification PPF Togg' },
  { category: 'Teinte',             image: imgBMW,        title: 'Teinte BMW' },
  { category: 'Plastification PPF', image: imgMercedes,   title: 'Plastification PPF Mercedes' },
  { category: 'Plastification PPF', image: imgTog,        title: 'Plastification PPF Togg' },
  { category: 'Protection',         image: imgDefender,   title: 'Protection anti-rayures Defender' },
  { category: 'Teinte',             image: imgBYD,        title: 'Teinte BYD' },
  { category: 'Protection',         image: imgChery,      title: 'Protection anti-rayures Chery' },
  { category: 'Protection',         image: imgWW,         title: 'Protection anti-rayures Volkswagen' },
  { category: 'Plastification PPF', image: imgLCV8Webp,   title: 'Plastification PPF Land Cruiser V8' },
  { category: 'Protection',         image: imgPrado2025,  title: 'Protection anti-rayures Prado 2025' },
  { category: 'Plastification PPF', image: imgLCV82025,   title: 'Plastification PPF Land Cruiser V8 2025' },
  { category: 'Teinte',             image: imgRav4,       title: 'Teinte RAV4' },
  { category: 'Protection',         image: imgLCV8Jpg,    title: 'Protection anti-rayures Land Cruiser V8' },
  { category: 'Teinte',             image: imgCorolla,    title: 'Teinte Toyota Corolla' },
  { category: 'Plastification PPF', image: imgPatrol1,    title: 'Plastification PPF Nissan Patrol' },
  { category: 'Teinte',             image: imgPatrol2,    title: 'Teinte Nissan Patrol' },
  { category: 'Protection',         image: imgPatrol3,    title: 'Protection anti-rayures Nissan Patrol' },
  { category: 'Plastification PPF', image: imgRangeRover, title: 'Plastification PPF Range Rover' },
];

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState('Tout');

  const filteredItems = activeCategory === 'Tout'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section id="galerie" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl mb-4">Nos réalisations</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Découvrez la qualité de notre travail à travers nos réalisations
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category)}
                className={`relative px-6 py-2 rounded-full transition-all ${
                  activeCategory === category
                    ? 'text-white'
                    : 'text-foreground hover:bg-muted/50'
                }`}
              >
                {activeCategory === category && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{category}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div layout className="grid grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-5">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={`${item.category}-${index}`}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -8 }}
                className="bg-muted/50 backdrop-blur-sm rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all"
              >
                <div className="relative overflow-hidden group">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-32 sm:h-44 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-3 sm:p-4">
                  <h3 className="text-sm sm:text-lg mb-1">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">{item.category}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
