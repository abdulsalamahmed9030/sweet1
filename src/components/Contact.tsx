import { Phone, Mail, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container mx-auto text-center">
        <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6">
          Get in Touch
        </span>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mb-12">
          Order Directly From Us
        </h2>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
          <a
            href="tel:+917995419191"
            className="flex items-center gap-3 text-primary hover:text-accent transition-colors"
          >
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
              <Phone className="w-5 h-5 text-accent" />
            </div>
            <span className="font-semibold">+91 79954 19191</span>
          </a>

          <a
            href="mailto:contact@doughandbeyond.net"
            className="flex items-center gap-3 text-primary hover:text-accent transition-colors"
          >
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
              <Mail className="w-5 h-5 text-accent" />
            </div>
            <span className="font-semibold">contact@doughandbeyond.net</span>
          </a>
        </div>

        <a
          href="https://wa.me/917995419191"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
        >
          <MessageCircle className="w-6 h-6" />
          Chat on WhatsApp
        </a>
      </div>
    </section>
  );
};

export default Contact;
