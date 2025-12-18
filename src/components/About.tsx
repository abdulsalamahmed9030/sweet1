const About = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6">
            Our Story
          </span>

          <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mb-8">
            A Bakery That Goes{" "}
            <span className="italic text-chocolate-light">Beyond Ordinary</span>
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Dough & Beyond is your go-to cloud kitchen for indulgent desserts inspired by the rich traditions of Spain and Italy. Every dessert is freshly prepared with premium ingredients, perfect textures, and authentic flavors. From our fluffy, filled Bomboloni to our iconic San Sebastian Cheesecake, each bite is crafted with care and passion.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            We don't bake until you order — because freshness makes all the difference.
          </p>

          <div className="inline-block p-6 bg-secondary rounded-2xl">
            <p className="text-xl font-display italic text-primary">
              "You can taste the difference quality makes."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
