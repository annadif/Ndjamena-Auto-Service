import { Facebook, Instagram, MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import logo from '../../assets/logo.png';

export function Footer() {
  const scrollToSection = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  const contactDetails = [
    { icon: MapPin,        content: "Avenue Charles de Gaulle, N'Djamena, Tchad", href: undefined },
    { icon: Phone,         content: '+235 66 74 01 54',                            href: 'tel:+23566740154' },
    { icon: MessageCircle, content: 'WhatsApp : +235 66 74 01 54',                 href: 'https://wa.me/23566740154' },
    { icon: Mail,          content: 'contact@ndjamenaauto.com',                    href: 'mailto:contact@ndjamenaauto.com' },
    { icon: Clock,         content: 'Lun–Sam : 8h–18h  ·  Dim : 9h–13h',          href: undefined },
  ];

  return (
    <footer id="contact" className="bg-secondary text-white">
      <div className="container mx-auto px-4 pt-12 pb-8">

        {/* ── Single row : Logo · Links · Services · Contact · Map ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 mb-10 items-start">

          {/* Logo */}
          <div>
            <img src={logo} alt="N'djamena Auto Service" className="h-12 w-auto mb-3 object-contain" />
            <p className="text-white/60 text-xs leading-relaxed">
              Votre partenaire de confiance pour l'entretien et la protection automobile à N'Djamena.
            </p>
          </div>

          {/* Liens rapides */}
          <div>
            <h4 className="text-sm font-semibold mb-3">Liens rapides</h4>
            <ul className="space-y-0">
              {[['accueil','Accueil'],['services','Services'],['galerie','Galerie'],['contact','Contact']].map(([id, label]) => (
                <li key={id}>
                  <button onClick={() => scrollToSection(id)}
                    className="text-white/60 hover:text-white transition-colors text-xs">
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold mb-3">Nos services</h4>
            <ul className="space-y-0 text-white/60 text-xs">
              {['Plastification PPF','Teinte des vitres','Covering vinyle','Protection anti-rayures'].map(s => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-sm font-semibold mb-3">Contact</h4>
            <ul className="space-y-0">
              {contactDetails.map(({ icon: Icon, content, href }) => (
                <li key={content} className="flex items-start gap-1.5">
                  <Icon size={12} className="text-primary flex-shrink-0 mt-0.5" />
                  {href ? (
                    <a href={href} target={href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="text-white/60 hover:text-white transition-colors text-xs leading-snug">
                      {content}
                    </a>
                  ) : (
                    <span className="text-white/60 text-xs leading-snug">{content}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Map */}
          <div className="rounded-xl overflow-hidden border border-white/10 min-h-[180px]">
            <iframe
              title="N'djamena Auto Service Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3936.2891815476845!2d15.047425!3d12.134846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDA4JzA1LjQiTiAxNcKwMDInNTAuNyJF!5e0!3m2!1sen!2s!4v1234567890"
              width="100%" height="100%"
              style={{ border: 0, display: 'block', minHeight: '180px' }}
              allowFullScreen loading="lazy"
            />
          </div>
        </div>

        {/* ── Copyright + social ── */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">© 2026 N'djamena Auto Service. Tous droits réservés.</p>
          <div className="flex gap-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
              className="bg-white/10 w-9 h-9 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
              <Facebook size={18} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
              className="bg-white/10 w-9 h-9 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
              <Instagram size={18} />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
