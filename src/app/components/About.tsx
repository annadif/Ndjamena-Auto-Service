import { Target, Eye, Award } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  return (
    <section id="apropos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-5xl mb-6">À propos de N'djamena Auto Service</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                N'djamena Auto Service est un garage spécialisé dans l'entretien, la réparation
                et l'amélioration esthétique des véhicules. Avec des années d'expérience,
                nous sommes devenus la référence à N'Djamena pour tous vos besoins automobiles.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Notre équipe de techniciens qualifiés utilise des équipements modernes et
                des techniques éprouvées pour garantir la satisfaction de chaque client.
              </p>
            </div>
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1670736297573-fde2cbcf1de7?w=800&h=600&fit=crop"
                alt="Toyota Prado - Garage N'djamena Auto Service"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-muted p-8 rounded-xl text-center">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target size={32} />
              </div>
              <h3 className="text-xl mb-4">Notre Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                Offrir des services automobiles fiables et professionnels qui dépassent
                les attentes de nos clients à chaque intervention.
              </p>
            </div>

            <div className="bg-muted p-8 rounded-xl text-center">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye size={32} />
              </div>
              <h3 className="text-xl mb-4">Notre Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                Devenir le garage de référence au Tchad en combinant expertise technique,
                service client exceptionnel et innovation constante.
              </p>
            </div>

            <div className="bg-muted p-8 rounded-xl text-center">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award size={32} />
              </div>
              <h3 className="text-xl mb-4">Notre Expertise</h3>
              <p className="text-muted-foreground leading-relaxed">
                Plus de 10 ans d'expérience dans tous les aspects de l'entretien automobile,
                de la mécanique à l'esthétique automobile.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
