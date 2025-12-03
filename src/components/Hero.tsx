import { Button } from "@/components/ui/button";
import dashboardPreview from "@/assets/dashboard-preview.gif";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="text-primary font-medium tracking-wide uppercase text-sm">
            Data Analytics Solutions for Your Business
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Power BI & Microsoft Fabric
            <span className="block text-primary">Consulting</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-lg">
            Transform your raw data into actionable insights with our expert Power BI and Microsoft Fabric consulting services. We help businesses make data-driven decisions that drive growth and success.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6">
              Get Free Consultation
            </Button>
            <Button variant="outline" className="border-border text-foreground hover:bg-secondary px-8 py-6">
              Schedule a Call
            </Button>
          </div>
        </div>
        <div className="relative">
          <div className="rounded-xl overflow-hidden shadow-2xl border border-border/50">
            <img
              src={dashboardPreview}
              alt="Power BI Sales Analysis Dashboard showing charts and KPIs"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
