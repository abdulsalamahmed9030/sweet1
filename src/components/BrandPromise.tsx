import { Sparkles, Leaf, Truck } from "lucide-react";

const promises = [
  {
    icon: Sparkles,
    title: "Freshly Made Daily",
    description: "We don't bake until you order",
  },
  {
    icon: Leaf,
    title: "Premium Ingredients",
    description: "Only the finest quality",
  },
  {
    icon: Truck,
    title: "Fast & Safe Delivery",
    description: "Right to your doorstep",
  },
];

const BrandPromise = () => {
  return (
    <section className="bg-secondary py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {promises.map((promise, index) => (
            <div
              key={promise.title}
              className="flex items-center justify-center gap-4 p-4 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                <promise.icon className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-primary text-lg">
                  {promise.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {promise.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandPromise;
