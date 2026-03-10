import { Phone } from 'lucide-react';

export function CallToAction() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-r from-primary to-primary/90 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl mb-6">
            Votre voiture mérite le meilleur entretien
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Confiez votre véhicule à des professionnels passionnés.
            Contactez-nous dès maintenant pour un devis gratuit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-white text-primary px-8 py-4 rounded-lg hover:bg-white/90 transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              <Phone size={20} />
              Contactez-nous maintenant
            </button>
            <a
              href="https://wa.me/23566740154"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-secondary px-8 py-4 rounded-lg hover:bg-accent/90 transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              Discuter sur WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
