import { useState } from "react";
import { ExternalLink, X } from "lucide-react";

const portfolioItems = [
  {
    id: 1,
    title: "Sales Analytics Dashboard",
    category: "Power BI",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    description: "Comprehensive sales dashboard with KPIs, trends, and regional performance metrics.",
  },
  {
    id: 2,
    title: "Financial Reporting Suite",
    category: "Microsoft Fabric",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    description: "End-to-end financial reporting with real-time data integration.",
  },
  {
    id: 3,
    title: "Supply Chain Analytics",
    category: "Power BI",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=400&fit=crop",
    description: "Inventory tracking, supplier performance, and logistics optimization.",
  },
  {
    id: 4,
    title: "HR Analytics Platform",
    category: "Data Integration",
    image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=600&h=400&fit=crop",
    description: "Employee metrics, retention analysis, and workforce planning tools.",
  },
  {
    id: 5,
    title: "Marketing Performance",
    category: "Advanced Analytics",
    image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=600&h=400&fit=crop",
    description: "Campaign tracking, ROI analysis, and customer segmentation.",
  },
  {
    id: 6,
    title: "Operations Dashboard",
    category: "Power BI",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    description: "Real-time operational metrics and process efficiency tracking.",
  },
  {
    id: 7,
    title: "Customer Insights",
    category: "Data Modeling",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    description: "Customer behavior analysis and predictive churn modeling.",
  },
  {
    id: 8,
    title: "Executive Summary",
    category: "Microsoft Fabric",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=400&fit=crop",
    description: "C-level dashboard with high-level KPIs and business health metrics.",
  },
];

const categories = ["All", "Power BI", "Microsoft Fabric", "Data Integration", "Advanced Analytics", "Data Modeling"];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState<typeof portfolioItems[0] | null>(null);

  const filteredItems = activeCategory === "All"
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2">Our Work</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Portfolio & Projects
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore our recent data analytics and visualization projects
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-background text-muted-foreground hover:bg-primary/10 hover:text-primary"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group cursor-pointer bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all hover:shadow-lg"
            >
              <div className="relative overflow-hidden aspect-[3/2]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ExternalLink className="w-8 h-8 text-primary-foreground" />
                </div>
              </div>
              <div className="p-4">
                <span className="text-xs text-primary font-medium">{item.category}</span>
                <h3 className="text-lg font-semibold text-foreground mt-1">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedItem && (
          <div
            className="fixed inset-0 bg-foreground/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedItem(null)}
          >
            <div
              className="bg-card rounded-lg max-w-3xl w-full max-h-[90vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full aspect-video object-cover"
                />
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 bg-background/80 p-2 rounded-full hover:bg-background transition-colors"
                >
                  <X className="w-5 h-5 text-foreground" />
                </button>
              </div>
              <div className="p-6">
                <span className="text-sm text-primary font-medium">{selectedItem.category}</span>
                <h3 className="text-2xl font-bold text-foreground mt-2 mb-3">{selectedItem.title}</h3>
                <p className="text-muted-foreground">{selectedItem.description}</p>
                <a
                  href="#contact"
                  onClick={() => setSelectedItem(null)}
                  className="inline-block mt-6 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  Start a Similar Project
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
