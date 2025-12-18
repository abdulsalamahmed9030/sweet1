import { Instagram, Facebook } from "lucide-react";

const SocialProof = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container mx-auto text-center">
        <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6">
          Stay Connected
        </span>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mb-4">
          Follow Our Sweet Journey
        </h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          Behind-the-scenes baking, fresh drops, and customer favorites.
        </p>

        <div className="flex items-center justify-center gap-4">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center text-primary-foreground hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
          >
            <Instagram className="w-7 h-7" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center text-primary-foreground hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
          >
            <Facebook className="w-7 h-7" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
