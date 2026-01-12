import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import logoFull from "@/assets/logo-full.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
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
  }, {
    href: "/blog",
    label: "Blog",
    isRoute: true
  }];

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  return <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-background via-background/95 to-primary/10 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="/" onClick={handleLogoClick} className="flex items-center cursor-pointer">
          <img src={logoFull} alt="insightX" className="h-14 w-auto object-contain dark:brightness-0 dark:invert" />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(link => 
            'isRoute' in link && link.isRoute ? (
              <Link key={link.href} to={link.href} className="text-muted-foreground hover:text-foreground transition-colors text-base font-semibold text-center">
                {link.label}
              </Link>
            ) : (
              <a key={link.href} href={link.href} className="text-muted-foreground hover:text-foreground transition-colors text-base font-semibold text-center">
                {link.label}
              </a>
            )
          )}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
            <a href="mailto:info@inxightx.com?subject=Free Consultation Request">Get Free Consultation</a>
          </Button>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && <div className="md:hidden bg-background border-t border-border">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map(link => 
              'isRoute' in link && link.isRoute ? (
                <Link key={link.href} to={link.href} className="text-muted-foreground hover:text-foreground transition-colors" onClick={() => setIsMenuOpen(false)}>
                  {link.label}
                </Link>
              ) : (
                <a key={link.href} href={link.href} className="text-muted-foreground hover:text-foreground transition-colors" onClick={() => setIsMenuOpen(false)}>
                  {link.label}
                </a>
              )
            )}
            <div className="flex items-center justify-between pt-2 border-t border-border">
              <span className="text-muted-foreground text-sm">Theme</span>
              <ThemeToggle />
            </div>
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 w-full">
              <a href="mailto:info@inxightx.com?subject=Free Consultation Request">Get Free Consultation</a>
            </Button>
          </nav>
        </div>}
    </header>;
};
export default Header;