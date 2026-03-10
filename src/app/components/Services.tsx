import { Car, ShieldCheck, Shield, Palette } from 'lucide-react';
import { motion } from 'motion/react';

const services = [
  {
    icon: Car,
    title: 'Plastification PPF',
    description: 'Film de protection haute performance appliqué sur la carrosserie pour préserver la peinture originale de votre véhicule contre les chocs et intempéries.'
  },
  {
    icon: ShieldCheck,
    title: 'Teinte des vitres',
    description: 'Pose professionnelle de films teintés pour réduire la chaleur, protéger l\'habitacle des UV et améliorer l\'esthétique de votre véhicule.'
  },
  {
    icon: Shield,
    title: 'Protection anti-rayures',
    description: 'Application de revêtements transparents ultra-résistants pour protéger votre carrosserie contre les rayures du quotidien et préserver l\'éclat de votre véhicule.'
  },
  {
    icon: Palette,
    title: 'Covering vinyle',
    description: 'Habillage complet ou partiel de la carrosserie en vinyle PVC : changement de couleur, finition mate, satinée, chromée ou texturée — 100 % réversible et sans altération de la peinture d\'origine.'
  },
];

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

export function Services() {
  return (
    <section id="services" className="py-20 bg-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">
            Nos services automobiles
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Des services professionnels pour tous vos besoins automobiles
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-6"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group bg-muted/50 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 relative overflow-hidden"
              >
                {/* Hover gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="relative bg-gradient-to-br from-primary to-accent text-white w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mb-4 sm:mb-5 shadow-lg shadow-primary/30"
                >
                  <Icon size={22} className="sm:w-[26px] sm:h-[26px]" />
                </motion.div>

                <h3 className="text-base sm:text-lg mb-2 sm:mb-3 relative">{service.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed relative">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
