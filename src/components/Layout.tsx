import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Link, useLocation } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();

  const navigation = [
    { name: "Главная", href: "/" },
    { name: "Услуги", href: "/services" },
    { name: "О компании", href: "/about" },
    { name: "Цены", href: "/prices" },
    { name: "Контакты", href: "/contact" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-primary text-primary-foreground shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3">
              <Icon name="Fuel" size={40} className="text-accent" />
              <h1 className="text-4xl font-bold tracking-wide">GAS STATION</h1>
            </Link>
            <nav className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`hover:text-accent transition-colors ${
                    location.pathname === item.href ? "text-accent" : ""
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <Link to="/contact">
              <Button variant="outline" className="bg-accent border-accent text-accent-foreground hover:bg-accent/90">
                <Icon name="Phone" size={16} className="mr-2" />
                Связаться
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-primary/90 text-primary-foreground py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <Icon name="Fuel" size={24} className="text-accent" />
              <span className="text-xl font-bold">GAS STATION</span>
            </div>
            <div className="text-gray-300">
              © 2024 Gas Station. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;