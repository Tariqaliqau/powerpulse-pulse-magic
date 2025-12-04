import { useState } from "react";
import { ExternalLink, X } from "lucide-react";

import googleAds from "@/assets/portfolio/google-ads.png";
import greenTaxi from "@/assets/portfolio/green-taxi.png";
import inventory from "@/assets/portfolio/inventory.png";
import manufacturing from "@/assets/portfolio/manufacturing.png";
import poAnalysis from "@/assets/portfolio/po-analysis.png";
import sales from "@/assets/portfolio/sales.png";
import shipmentAnalysis from "@/assets/portfolio/shipment-analysis.png";
import salesAnalysis from "@/assets/portfolio/sales-analysis.png";
import trainingAnalysis from "@/assets/portfolio/training-analysis.webp";

const portfolioItems = [
  {
    id: 1,
    title: "Google Ads & Analytics Dashboard",
    category: "Power BI",
    image: googleAds,
    description: "Comprehensive Google Ads and Analytics dashboard tracking users, sessions, impressions, clicks, CPC, and conversion costs across multiple campaigns.",
  },
  {
    id: 2,
    title: "Green Taxi Trips Analysis",
    category: "Power BI",
    image: greenTaxi,
    description: "NYC Green Taxi analysis dashboard with trip metrics, fare analysis, payment types, pickup/dropoff zones, and time-based trip patterns.",
  },
  {
    id: 3,
    title: "Inventory Analysis Report",
    category: "Data Integration",
    image: inventory,
    description: "End-to-end inventory management dashboard tracking stock positions, inventory turnover, best sellers, and insufficient inventory items.",
  },
  {
    id: 4,
    title: "Manufacturing Dashboard",
    category: "Microsoft Fabric",
    image: manufacturing,
    description: "Production analytics dashboard monitoring items completed, scrap rates, rejects, shortages, and shop order status by item and location.",
  },
  {
    id: 5,
    title: "PO Analysis Report",
    category: "Advanced Analytics",
    image: poAnalysis,
    description: "Purchase order analytics with PO trends, sector analysis, customer type breakdown, sales performance, and invoice tracking.",
  },
  {
    id: 6,
    title: "Sales Analysis Report",
    category: "Power BI",
    image: sales,
    description: "Sales performance dashboard with order tracking, gross margin analysis, sales trends, city-wise distribution, and top customer insights.",
  },
  {
    id: 7,
    title: "Shipment Analysis",
    category: "Data Integration",
    image: shipmentAnalysis,
    description: "Logistics and shipment tracking dashboard with backorder trends, delivery performance, lead time analysis, and return rate metrics.",
  },
  {
    id: 8,
    title: "Sales Analysis Dashboard",
    category: "Power BI",
    image: salesAnalysis,
    description: "Automotive sales analysis with brand performance, sales funnel, branch comparisons, and integrated Monday.com task board.",
  },
  {
    id: 9,
    title: "Training Analysis Report",
    category: "Advanced Analytics",
    image: trainingAnalysis,
    description: "HR training analytics tracking participants by month, training type, location, division, team, and leadership breakdown.",
  },
];

const categories = ["All", "Power BI", "Microsoft Fabric", "Data Integration", "Advanced Analytics"];

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
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group cursor-pointer bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all hover:shadow-lg"
            >
              <div className="relative overflow-hidden aspect-[16/10]">
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
              className="bg-card rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full object-contain max-h-[60vh]"
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
