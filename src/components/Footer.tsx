import { Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4 text-center space-y-4">
        <div className="flex justify-center gap-6">
          <Link 
            to="/blog" 
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Blog
          </Link>
          <a 
            href="#services" 
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Services
          </a>
          <a 
            href="#contact" 
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Contact
          </a>
        </div>
        <a 
          href="mailto:info@inxightx.com" 
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
        >
          <Mail className="h-4 w-4" />
          info@inxightx.com
        </a>
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} insightX. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
