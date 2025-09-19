import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative text-white py-20">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url('/img/f1933ddc-3af9-4fc3-9e0c-a388e16a2ee9.jpg')`
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Современная заправочная станция
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Качественное топливо, профессиональный сервис и удобное расположение для вашего комфорта
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/services">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Icon name="MapPin" size={20} className="mr-2" />
                  Наши услуги
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  <Icon name="Info" size={20} className="mr-2" />
                  О компании
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Services Preview */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-primary mb-4">Что мы предлагаем</h3>
            <p className="text-xl text-muted-foreground">Полный спектр услуг для автомобилистов</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow animate-scale-in">
              <CardHeader>
                <div className="mx-auto bg-accent/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Icon name="Fuel" size={32} className="text-accent" />
                </div>
                <CardTitle className="text-primary">Заправка топливом</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Высококачественный бензин и дизельное топливо
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow animate-scale-in">
              <CardHeader>
                <div className="mx-auto bg-accent/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Icon name="Car" size={32} className="text-accent" />
                </div>
                <CardTitle className="text-primary">Автомойка</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Профессиональная мойка с современным оборудованием
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow animate-scale-in">
              <CardHeader>
                <div className="mx-auto bg-accent/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Icon name="Wrench" size={32} className="text-accent" />
                </div>
                <CardTitle className="text-primary">Техобслуживание</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Быстрое техническое обслуживание автомобилей
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow animate-scale-in">
              <CardHeader>
                <div className="mx-auto bg-accent/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Icon name="CreditCard" size={32} className="text-accent" />
                </div>
                <CardTitle className="text-primary">Топливные карты</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Корпоративные карты с льготными условиями
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Link to="/services">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Все услуги
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-4xl font-bold text-accent mb-2">15+</div>
              <div className="text-muted-foreground">Лет опыта</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-4xl font-bold text-accent mb-2">50K+</div>
              <div className="text-muted-foreground">Довольных клиентов</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-4xl font-bold text-accent mb-2">24/7</div>
              <div className="text-muted-foreground">Работаем круглосуточно</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-4xl font-bold text-accent mb-2">8</div>
              <div className="text-muted-foreground">Топливных колонок</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold mb-4">Готовы посетить нас?</h3>
          <p className="text-xl mb-8 text-gray-200">
            Мы находимся в удобном месте и работаем круглосуточно
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Icon name="MapPin" size={20} className="mr-2" />
                Найти нас
              </Button>
            </Link>
            <Link to="/prices">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                <Icon name="DollarSign" size={20} className="mr-2" />
                Цены
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;