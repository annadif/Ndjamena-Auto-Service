import { Trophy, Wrench, Package, SmilePlus } from 'lucide-react';
import { motion } from 'motion/react';

const stats = [
  { icon: Trophy,    value: '10+',   label: "Années d'expérience" },
  { icon: Wrench,    value: '500+',  label: 'Services réalisés'   },
  { icon: Package,   value: '200+',  label: 'Produits disponibles'},
  { icon: SmilePlus, value: '1 000+',label: 'Clients satisfaits'  },
];

export function Stats() {
  return (
    <section className="py-10 bg-secondary border-y border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex flex-col items-center gap-2 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center">
                  <Icon size={22} className="text-primary" />
                </div>
                <span className="text-2xl font-bold text-white leading-none">{stat.value}</span>
                <span className="text-xs text-white/55 uppercase tracking-wide leading-tight">{stat.label}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
