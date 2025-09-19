import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Icon from "@/components/ui/icon";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";

const Prices = () => {
  const fuelPrices = [
    { type: "АИ-92", price: "54.90", description: "Экономичный бензин", discount: "2%" },
    { type: "АИ-95", price: "57.30", description: "Премиум бензин", discount: "3%" },
    { type: "АИ-98", price: "62.10", description: "Супер премиум", discount: "4%" },
    { type: "Дизель", price: "55.80", description: "Евро-5 стандарт", discount: "2%" }
  ];

  const washPrices = [
    { service: "Экспресс-мойка", price: "500", description: "Кузов + диски" },
    { service: "Стандарт", price: "800", description: "Кузов + диски + салон" },
    { service: "Комплекс", price: "1200", description: "Полная мойка + химчистка" },
    { service: "Премиум", price: "1800", description: "Комплекс + полировка" }
  ];

  const servicePrices = [
    { service: "Замена масла", price: "800", time: "30 мин" },
    { service: "Замена фильтров", price: "600", time: "20 мин" },
    { service: "Диагностика", price: "1000", time: "45 мин" },
    { service: "Шиномонтаж", price: "400", time: "15 мин" }
  ];

  const corporatePackages = [
    {
      name: "Базовый",
      volume: "до 5,000 л/мес",
      discount: "2%",
      features: [
        "Скидка на топливо",
        "Ежемесячная отчетность",
        "Техподдержка в рабочее время"
      ],
      price: "Бесплатно"
    },
    {
      name: "Стандарт",
      volume: "5,000-15,000 л/мес",
      discount: "4%",
      features: [
        "Увеличенная скидка",
        "Детализированная отчетность",
        "Приоритетное обслуживание",
        "Техподдержка 24/7"
      ],
      price: "5,000 ₽/мес"
    },
    {
      name: "Премиум",
      volume: "15,000+ л/мес",
      discount: "7%",
      features: [
        "Максимальная скидка",
        "Персональный менеджер",
        "Индивидуальные условия",
        "Дополнительные услуги"
      ],
      price: "Договорная"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Актуальные цены</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Прозрачное ценообразование и выгодные условия для всех категорий клиентов
          </p>
          <div className="mt-8 bg-white/10 rounded-lg p-4 inline-block">
            <div className="flex items-center text-lg">
              <Icon name="Clock" size={20} className="mr-2" />
              Цены обновлены: {new Date().toLocaleDateString('ru-RU')}
            </div>
          </div>
        </div>
      </section>

      {/* Fuel Prices */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Цены на топливо</h2>
            <p className="text-xl text-muted-foreground">Конкурентные цены на все виды топлива</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-lg font-semibold">Тип топлива</TableHead>
                    <TableHead className="text-lg font-semibold">Цена за литр</TableHead>
                    <TableHead className="text-lg font-semibold">Корпоративная скидка</TableHead>
                    <TableHead className="text-lg font-semibold">Описание</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {fuelPrices.map((fuel, index) => (
                    <TableRow key={index} className="hover:bg-muted/50">
                      <TableCell className="font-medium text-lg">{fuel.type}</TableCell>
                      <TableCell className="text-xl font-bold text-accent">{fuel.price} ₽</TableCell>
                      <TableCell>
                        <Badge variant="secondary">от {fuel.discount}</Badge>
                      </TableCell>
                      <TableCell className="text-muted-foreground">{fuel.description}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Prices */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Дополнительные услуги</h2>
            <p className="text-xl text-muted-foreground">Комплексное обслуживание по доступным ценам</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Car Wash */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="bg-accent/10 p-3 rounded-full mr-4">
                    <Icon name="Car" size={24} className="text-accent" />
                  </div>
                  <CardTitle className="text-primary">Автомойка</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {washPrices.map((wash, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-b-0">
                      <div>
                        <div className="font-medium">{wash.service}</div>
                        <div className="text-sm text-muted-foreground">{wash.description}</div>
                      </div>
                      <div className="text-lg font-bold text-accent">{wash.price} ₽</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Technical Service */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="bg-accent/10 p-3 rounded-full mr-4">
                    <Icon name="Wrench" size={24} className="text-accent" />
                  </div>
                  <CardTitle className="text-primary">Техобслуживание</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {servicePrices.map((service, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-b-0">
                      <div>
                        <div className="font-medium">{service.service}</div>
                        <div className="text-sm text-muted-foreground">~{service.time}</div>
                      </div>
                      <div className="text-lg font-bold text-accent">{service.price} ₽</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Corporate Packages */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Корпоративные тарифы</h2>
            <p className="text-xl text-muted-foreground">Выгодные условия для юридических лиц</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {corporatePackages.map((pkg, index) => (
              <Card key={index} className={`text-center hover:shadow-lg transition-shadow ${
                index === 1 ? 'border-accent border-2 scale-105' : ''
              }`}>
                <CardHeader>
                  {index === 1 && (
                    <Badge className="bg-accent text-accent-foreground mb-4 mx-auto">Популярный</Badge>
                  )}
                  <CardTitle className="text-primary text-2xl">{pkg.name}</CardTitle>
                  <CardDescription className="text-lg">{pkg.volume}</CardDescription>
                  <div className="text-3xl font-bold text-accent mt-4">
                    Скидка {pkg.discount}
                  </div>
                  <div className="text-muted-foreground">{pkg.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-left">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <Icon name="Check" size={16} className="text-accent mr-3" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full mt-6 ${
                      index === 1 
                        ? 'bg-accent hover:bg-accent/90 text-accent-foreground' 
                        : 'bg-primary hover:bg-primary/90 text-primary-foreground'
                    }`}
                  >
                    Выбрать тариф
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold text-primary mb-6">Программа лояльности</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Копите бонусы с каждой заправкой и получайте дополнительные скидки
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <Icon name="Gift" size={20} className="text-accent mr-3" />
                  <span>1 балл за каждые 10 ₽ покупки</span>
                </li>
                <li className="flex items-center">
                  <Icon name="Star" size={20} className="text-accent mr-3" />
                  <span>Особые предложения для VIP-клиентов</span>
                </li>
                <li className="flex items-center">
                  <Icon name="Calendar" size={20} className="text-accent mr-3" />
                  <span>Скидки в день рождения до 10%</span>
                </li>
                <li className="flex items-center">
                  <Icon name="Smartphone" size={20} className="text-accent mr-3" />
                  <span>Удобное мобильное приложение</span>
                </li>
              </ul>
            </div>
            <Card className="bg-gradient-to-br from-accent/10 to-primary/10">
              <CardHeader>
                <CardTitle className="text-primary text-2xl">Способы оплаты</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center p-3 bg-white rounded-lg">
                    <Icon name="CreditCard" size={24} className="text-accent mr-3" />
                    <span className="font-medium">Банковские карты</span>
                  </div>
                  <div className="flex items-center p-3 bg-white rounded-lg">
                    <Icon name="Smartphone" size={24} className="text-accent mr-3" />
                    <span className="font-medium">Мобильные платежи</span>
                  </div>
                  <div className="flex items-center p-3 bg-white rounded-lg">
                    <Icon name="Banknote" size={24} className="text-accent mr-3" />
                    <span className="font-medium">Наличные</span>
                  </div>
                  <div className="flex items-center p-3 bg-white rounded-lg">
                    <Icon name="Building" size={24} className="text-accent mr-3" />
                    <span className="font-medium">Безналичный расчет</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Есть вопросы по ценам?</h2>
          <p className="text-xl mb-8 text-gray-200">
            Свяжитесь с нами для получения индивидуального предложения
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Icon name="Phone" size={20} className="mr-2" />
                Связаться с нами
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                <Icon name="List" size={20} className="mr-2" />
                Посмотреть услуги
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Prices;