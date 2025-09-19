import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-primary text-primary-foreground shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Icon name="Fuel" size={32} className="text-accent" />
              <h1 className="text-2xl font-bold">GAS STATION</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-accent transition-colors">Главная</a>
              <a href="#services" className="hover:text-accent transition-colors">Услуги</a>
              <a href="#about" className="hover:text-accent transition-colors">О нас</a>
              <a href="#contact" className="hover:text-accent transition-colors">Контакты</a>
            </nav>
            <Button variant="outline" className="bg-accent border-accent text-accent-foreground hover:bg-accent/90">
              <Icon name="Phone" size={16} className="mr-2" />
              Связаться
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-primary to-primary/90 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url('/img/7007aae1-efa0-442c-b9ab-3788baff7609.jpg')`
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
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Icon name="MapPin" size={20} className="mr-2" />
                Найти нас
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                <Icon name="Info" size={20} className="mr-2" />
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-primary mb-4">Наши услуги</h3>
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
                  Высококачественный бензин и дизельное топливо от ведущих поставщиков
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
                  Профессиональная мойка автомобилей с использованием современного оборудования
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
                  Быстрое техническое обслуживание и мелкий ремонт автомобилей
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
                  Корпоративные топливные карты с льготными условиями для предприятий
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h3 className="text-4xl font-bold text-primary mb-6">О нашей компании</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Мы работаем на рынке топливно-энергетических услуг более 15 лет, предоставляя 
                качественные услуги автомобилистам и корпоративным клиентам.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">15+</div>
                  <div className="text-muted-foreground">Лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">50K+</div>
                  <div className="text-muted-foreground">Довольных клиентов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">24/7</div>
                  <div className="text-muted-foreground">Работаем круглосуточно</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">8</div>
                  <div className="text-muted-foreground">Топливных колонок</div>
                </div>
              </div>
            </div>
            <div className="bg-muted p-8 rounded-lg animate-scale-in">
              <h4 className="text-2xl font-bold text-primary mb-4">Почему выбирают нас?</h4>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <Icon name="CheckCircle" size={20} className="text-accent mr-3" />
                  <span>Сертифицированное качественное топливо</span>
                </li>
                <li className="flex items-center">
                  <Icon name="CheckCircle" size={20} className="text-accent mr-3" />
                  <span>Удобное расположение и быстрое обслуживание</span>
                </li>
                <li className="flex items-center">
                  <Icon name="CheckCircle" size={20} className="text-accent mr-3" />
                  <span>Программы лояльности и скидки</span>
                </li>
                <li className="flex items-center">
                  <Icon name="CheckCircle" size={20} className="text-accent mr-3" />
                  <span>Современное оборудование и безопасность</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4">Свяжитесь с нами</h3>
            <p className="text-xl text-gray-200">Мы всегда готовы ответить на ваши вопросы</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="animate-fade-in">
              <h4 className="text-2xl font-bold mb-6">Контактная информация</h4>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Icon name="MapPin" size={20} className="text-accent mr-4" />
                  <span>г. Москва, ул. Примерная, д. 123</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Phone" size={20} className="text-accent mr-4" />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Mail" size={20} className="text-accent mr-4" />
                  <span>info@gasstation.ru</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Clock" size={20} className="text-accent mr-4" />
                  <span>Круглосуточно, без выходных</span>
                </div>
              </div>
            </div>
            
            <Card className="animate-scale-in">
              <CardHeader>
                <CardTitle className="text-primary">Напишите нам</CardTitle>
                <CardDescription>Мы ответим в течение 24 часов</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="Ваше имя" className="bg-white" />
                  <Input placeholder="Телефон" className="bg-white" />
                </div>
                <Input placeholder="Email" className="bg-white" />
                <Textarea placeholder="Ваше сообщение" className="bg-white" rows={4} />
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Icon name="Send" size={16} className="mr-2" />
                  Отправить сообщение
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

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

export default Index;