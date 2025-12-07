import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  return (
    <div className="py-10"> {/* Reduced padding */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          My <span className="text-primary">Services</span>
        </h2>

        <p className="text-muted-foreground max-w-2xl mx-auto mb-10">
          I design and develop clean, modern, and responsive static websites
          that help businesses build their online presence.
          Perfect for product-based companies, startups, and small businesses —
          at an affordable price.
        </p>
      </section>
    </div>
  );
};

export default Services;
