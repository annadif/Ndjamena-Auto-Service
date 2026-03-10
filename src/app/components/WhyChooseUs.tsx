import { Award, Zap, Wrench, ThumbsUp } from 'lucide-react';
import { motion } from 'motion/react';

const reasons = [
  {
    icon: Award,
    title: 'Techniciens qualifiés',
    description: 'Une équipe d\'experts formés aux dernières technologies automobiles'
  },
  {
    icon: Wrench,
    title: 'Équipements modernes',
    description: 'Matériel de diagnostic et réparation de dernière génération'
  },
  {
    icon: Zap,
    title: 'Service rapide et fiable',
    description: 'Intervention efficace sans compromettre la qualité du travail'
  },
  {
    icon: ThumbsUp,
    title: 'Satisfaction client garantie',
    description: 'Votre satisfaction est notre priorité absolue'
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-gradient-to-br from-secondary via-secondary/95 to-background text-white relative overflow-hidden">
      {/* Animated background */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [90, 0, 90],
        }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl mb-4">Pourquoi choisir N'djamena Auto Service ?</h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            L'excellence au service de votre véhicule
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="bg-gradient-to-br from-primary to-accent w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary/30"
                >
                  <Icon size={36} />
                </motion.div>
                <h3 className="text-xl mb-3">{reason.title}</h3>
                <p className="text-white/70 leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
