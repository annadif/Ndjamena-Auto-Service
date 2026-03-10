import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Bonjour, je suis ${formData.name}. ${formData.message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/23566740154?text=${encodedMessage}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl mb-4">Contactez-nous</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Notre équipe est à votre écoute pour répondre à toutes vos questions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl mb-6">Envoyez-nous un message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2">Nom complet</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-input-background rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block mb-2">Téléphone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-input-background rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="+235 XX XX XX XX"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-input-background rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Décrivez votre besoin..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Envoyer via WhatsApp
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-lg flex items-start gap-4">
              <div className="bg-primary text-white w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="mb-2">Adresse</h4>
                <p className="text-muted-foreground">
                  Avenue Charles de Gaulle<br />
                  N'Djamena, Tchad
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg flex items-start gap-4">
              <div className="bg-primary text-white w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="mb-2">Téléphone</h4>
                <a href="tel:+23566740154" className="text-muted-foreground hover:text-primary">
                  +235 66 74 01 54
                </a>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg flex items-start gap-4">
              <div className="bg-accent text-secondary w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                <MessageCircle size={24} />
              </div>
              <div>
                <h4 className="mb-2">WhatsApp</h4>
                <a
                  href="https://wa.me/23566740154"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                >
                  +235 66 74 01 54
                </a>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg flex items-start gap-4">
              <div className="bg-primary text-white w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="mb-2">Email</h4>
                <a href="mailto:contact@ndjamenaauto.com" className="text-muted-foreground hover:text-primary">
                  contact@ndjamenaauto.com
                </a>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg flex items-start gap-4">
              <div className="bg-primary text-white w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock size={24} />
              </div>
              <div>
                <h4 className="mb-2">Horaires d'ouverture</h4>
                <p className="text-muted-foreground">
                  Lundi - Samedi: 8h00 - 18h00<br />
                  Dimanche: 9h00 - 13h00
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-12 max-w-6xl mx-auto">
          <div className="bg-white p-4 rounded-xl shadow-lg">
            <iframe
              title="N'djamena Auto Service Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3936.2891815476845!2d15.047425!3d12.134846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDA4JzA1LjQiTiAxNcKwMDInNTAuNyJF!5e0!3m2!1sen!2s!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
