import { Star } from "lucide-react";

const CustomerLove = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto text-center">
        <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6">
          Testimonials
        </span>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mb-8">
          Customer Love
        </h2>

        <div className="max-w-xl mx-auto">
          <div className="bg-card rounded-3xl shadow-card p-8">
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-accent text-accent" />
              ))}
            </div>
            
            <p className="text-xl font-display italic text-primary mb-4">
              Reviews coming soon ✨
            </p>
            <p className="text-muted-foreground">
              Our desserts are already winning hearts across Hyderabad.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerLove;
