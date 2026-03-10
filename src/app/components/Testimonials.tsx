import { Star, Quote } from 'lucide-react';
import { motion } from 'motion/react';

const testimonials = [
  {
    name: 'Ahmed Ibrahim',
    role: 'Propriétaire Toyota Land Cruiser',
    rating: 5,
    text: 'Service impeccable ! Mon véhicule a retrouvé toute sa brillance après la plastification. L\'équipe est professionnelle et à l\'écoute.'
  },
  {
    name: 'Marie Koné',
    role: 'Chef d\'entreprise',
    text: 'Je confie toute ma flotte de véhicules à N\'djamena Auto Service. Ils sont rapides, efficaces et les prix sont très corrects.',
    rating: 5
  },
  {
    name: 'Moussa Déby',
    role: 'Particulier',
    text: 'La teinte de mes vitres a été faite dans les règles de l\'art. Excellent travail et équipe sympathique. Je recommande vivement !',
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl mb-4">Ce que disent nos clients</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            La satisfaction de nos clients est notre meilleure récompense
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-muted/50 backdrop-blur-sm p-8 rounded-xl relative border border-border hover:border-primary/30 transition-all"
            >
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.2, type: 'spring' }}
              >
                <Quote className="absolute top-4 right-4 text-primary/20" size={48} />
              </motion.div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3 + i * 0.05 }}
                  >
                    <Star size={20} className="fill-accent text-accent" />
                  </motion.div>
                ))}
              </div>

              <p className="text-foreground mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              <div>
                <h4 className="mb-1">{testimonial.name}</h4>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
