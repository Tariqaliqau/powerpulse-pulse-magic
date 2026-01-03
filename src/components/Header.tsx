import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoFull from "@/assets/logo-full.png";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [{
    href: "#home",
    label: "Home"
  }, {
    href: "#about",
    label: "About"
  }, {
    href: "#services",
    label: "Services"
  }, {
    href: "#portfolio",
    label: "Portfolio"
  }, {
    href: "#why-us",
    label: "Why Us"
  }, {
    href: "#contact",
    label: "Contact"
  }];
  return <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center">
          <img src={logoFull} alt="insightX" className="h-14 w-auto object-contain" />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(link => <a key={link.href} href={link.href} className="text-muted-foreground hover:text-foreground transition-colors text-base font-semibold text-center">
              {link.label}
            </a>)}
        </nav>

        <Button asChild className="hidden md:flex bg-primary text-primary-foreground hover:bg-primary/90">
          <a href="mailto:info@inxightx.com?subject=Free Consultation Request">Get Free Consultation</a>
        </Button>

        <button className="md:hidden text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && <div className="md:hidden bg-background border-t border-border">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map(link => <a key={link.href} href={link.href} className="text-muted-foreground hover:text-foreground transition-colors" onClick={() => setIsMenuOpen(false)}>
                {link.label}
              </a>)}
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 w-full">
              <a href="mailto:info@inxightx.com?subject=Free Consultation Request">Get Free Consultation</a>
            </Button>
          </nav>
        </div>}
    </header>;
};
export default Header;