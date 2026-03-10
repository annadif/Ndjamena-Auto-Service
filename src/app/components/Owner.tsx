import { motion } from 'motion/react';
import { Award, Globe, Wrench } from 'lucide-react';
import ownerPhoto from '../../assets/proprietaire.jpeg';

const highlights = [
  { icon: Award,  label: '6 ans d\'expérience en Turquie' },
  { icon: Wrench, label: 'Spécialiste plastification & carrosserie' },
  { icon: Globe,  label: 'Formation internationale' },
];

export function Owner() {
  return (
    <section className="py-14 bg-gradient-to-br from-secondary via-secondary/95 to-secondary text-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="inline-block px-3 py-1 bg-primary/20 border border-primary/40 rounded-full text-primary text-xs mb-3">
            Le fondateur
          </span>
          <h2 className="text-2xl md:text-3xl">Notre propriétaire</h2>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col sm:flex-row gap-6 items-center"
        >
          {/* Photo */}
          <div className="relative flex-shrink-0">
            <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-primary shadow-lg shadow-primary/30">
              <img
                src={ownerPhoto}
                alt="Abdallah Saleh Youssouf"
                className="w-full h-full object-cover object-top"
              />
            </div>
            {/* Badge */}
            <div className="absolute -bottom-2 -right-2 bg-primary text-white text-xs font-bold rounded-full w-10 h-10 flex flex-col items-center justify-center leading-tight shadow">
              <span className="text-base leading-none">6</span>
              <span className="text-[9px] uppercase">ans</span>
            </div>
          </div>

          {/* Info */}
          <div className="flex-1 text-center sm:text-left">
            <h3 className="text-xl font-bold mb-0.5">Abdallah Saleh Youssouf</h3>
            <p className="text-primary text-sm font-medium mb-1">
              Spécialiste en plastification & entretien carrosserie
            </p>
            <p className="text-white/50 text-xs mb-4 flex items-center justify-center sm:justify-start gap-1">
              <Globe size={11} className="text-primary" />
              Formé en Turquie · 6 ans d'expérience
            </p>
            <p className="text-white/65 text-sm leading-relaxed mb-4">
              Fondateur de N'Djamena Auto Service, Abdallah a acquis
              une expertise pointue en plastification de véhicules et
              entretien du body automobile lors de ses <strong className="text-white">6 années en Turquie</strong>.
            </p>

            {/* Highlights */}
            <div className="flex flex-col gap-2">
              {highlights.map((h) => (
                <div key={h.label} className="flex items-center gap-2 text-sm text-white/70">
                  <h.icon size={14} className="text-primary flex-shrink-0" />
                  <span>{h.label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
