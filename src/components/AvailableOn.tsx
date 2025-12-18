const platforms = [
  { name: "Zomato", url: "https://zomato.com", color: "bg-red-500" },
  { name: "Swiggy", url: "https://swiggy.com", color: "bg-orange-500" },
  { name: "Magicpin", url: "https://magicpin.in", color: "bg-purple-500" },
];

const AvailableOn = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container mx-auto text-center">
        <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6">
          Order Now
        </span>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mb-12">
          Find Us On
        </h2>

        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {platforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${platform.color} text-primary-foreground px-8 py-4 rounded-2xl font-semibold text-lg shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 min-w-[150px]`}
            >
              {platform.name}
            </a>
          ))}
        </div>

        <p className="text-muted-foreground">
          Serving dessert lovers across{" "}
          <span className="font-semibold text-primary">Kondapur</span> &{" "}
          <span className="font-semibold text-primary">Gachibowli</span>
        </p>
      </div>
    </section>
  );
};

export default AvailableOn;
