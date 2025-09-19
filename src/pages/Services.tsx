import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";

const Services = () => {
  const fuelServices = [
    {
      title: "АИ-92",
      description: "Экономичный бензин для повседневного использования",
      price: "54.90",
      features: ["Европейский стандарт", "Низкий расход", "Доступная цена"]
    },
    {
      title: "АИ-95",
      description: "Премиум бензин с повышенным октановым числом",
      price: "57.30",
      features: ["Лучшая производительность", "Меньше выбросов", "Защита двигателя"]
    },
    {
      title: "АИ-98",
      description: "Топливо высшего качества для спортивных автомобилей",
      price: "62.10",
      features: ["Максимальная мощность", "Спортивная формула", "Премиум качество"]
    },
    {
      title: "Дизельное топливо",
      description: "Качественное дизельное топливо евро-5",
      price: "55.80",
      features: ["Евро-5 стандарт", "Экономичность", "Надежность"]
    }
  ];

  const additionalServices = [
    {
      icon: "Car",
      title: "Автомойка",
      description: "Комплексная мойка автомобилей",
      services: [
        "Мойка кузова и дисков",
        "Химчистка салона",
        "Полировка кузова",
        "Нанесение защитных покрытий"
      ],
      priceFrom: "500"
    },
    {
      icon: "Wrench",
      title: "Техническое обслуживание",
      description: "Быстрый сервис и ремонт",
      services: [
        "Замена масла и фильтров",
        "Диагностика двигателя",
        "Шиномонтаж",
        "Мелкий ремонт"
      ],
      priceFrom: "800"
    },
    {
      icon: "CreditCard",
      title: "Топливные карты",
      description: "Корпоративные решения",
      services: [
        "Льготные цены для предприятий",
        "Детализированная отчетность",
        "Лимиты и контроль расходов",
        "Безналичные расчеты"
      ],
      priceFrom: "Скидка до 5%"
    },
    {
      icon: "Coffee",
      title: "Кафе",
      description: "Зона отдыха для водителей",
      services: [
        "Горячие напитки и закуски",
        "Wi-Fi зона",
        "Парковка для отдыха",
        "Детская площадка"
      ],
      priceFrom: "150"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Наши услуги</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Полный спектр услуг для автомобилистов - от качественного топлива до комплексного обслуживания
          </p>
        </div>
      </section>

      {/* Fuel Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Топливо</h2>
            <p className="text-xl text-muted-foreground">Высококачественное топливо от ведущих поставщиков</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fuelServices.map((fuel, index) => (
              <Card key={index} className="relative hover:shadow-lg transition-shadow animate-scale-in">
                <CardHeader className="text-center">
                  <div className="mx-auto bg-accent/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <Icon name="Fuel" size={32} className="text-accent" />
                  </div>
                  <CardTitle className="text-primary">{fuel.title}</CardTitle>
                  <div className="text-3xl font-bold text-accent">{fuel.price} ₽</div>
                  <CardDescription>{fuel.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {fuel.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <Icon name="Check" size={16} className="text-accent mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Дополнительные услуги</h2>
            <p className="text-xl text-muted-foreground">Комплексное обслуживание для вашего автомобиля</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {additionalServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow animate-fade-in">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="bg-accent/10 p-3 rounded-full mr-4">
                      <Icon name={service.icon as any} size={24} className="text-accent" />
                    </div>
                    <div>
                      <CardTitle className="text-primary">{service.title}</CardTitle>
                      <Badge variant="secondary" className="mt-1">
                        от {service.priceFrom} ₽
                      </Badge>
                    </div>
                  </div>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.services.map((item, idx) => (
                      <li key={idx} className="flex items-center">
                        <Icon name="CheckCircle" size={16} className="text-accent mr-3" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold text-primary mb-6">Корпоративным клиентам</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Специальные условия и программы лояльности для юридических лиц и автопарков
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <Icon name="Percent" size={20} className="text-accent mr-3" />
                  <span>Скидки до 7% при объеме свыше 10,000 литров в месяц</span>
                </li>
                <li className="flex items-center">
                  <Icon name="FileText" size={20} className="text-accent mr-3" />
                  <span>Детализированная отчетность по каждому автомобилю</span>
                </li>
                <li className="flex items-center">
                  <Icon name="Shield" size={20} className="text-accent mr-3" />
                  <span>Лимиты расходов и контроль использования</span>
                </li>
                <li className="flex items-center">
                  <Icon name="Clock" size={20} className="text-accent mr-3" />
                  <span>Приоритетное обслуживание без очередей</span>
                </li>
              </ul>
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Icon name="Phone" size={20} className="mr-2" />
                Оставить заявку
              </Button>
            </div>
            <div className="bg-gradient-to-br from-accent/10 to-primary/10 p-8 rounded-lg animate-scale-in">
              <h3 className="text-2xl font-bold text-primary mb-6">Тарифные планы</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="font-medium">Базовый (до 5,000 л/мес)</span>
                  <Badge variant="outline">Скидка 2%</Badge>
                </div>
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="font-medium">Стандарт (5,000-15,000 л/мес)</span>
                  <Badge variant="outline">Скидка 4%</Badge>
                </div>
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="font-medium">Премиум (15,000+ л/мес)</span>
                  <Badge className="bg-accent text-accent-foreground">Скидка 7%</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Нужна консультация?</h2>
          <p className="text-xl mb-8 text-gray-200">
            Наши специалисты помогут выбрать оптимальный план обслуживания
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Связаться с нами
              </Button>
            </Link>
            <Link to="/prices">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                <Icon name="DollarSign" size={20} className="mr-2" />
                Посмотреть цены
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;