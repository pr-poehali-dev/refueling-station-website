import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";

const About = () => {
  const teamMembers = [
    {
      name: "Алексей Петров",
      position: "Директор",
      experience: "15 лет в нефтегазовой отрасли",
      image: "👨‍💼"
    },
    {
      name: "Марина Сидорова",
      position: "Менеджер по качеству",
      experience: "8 лет контроля качества топлива",
      image: "👩‍🔬"
    },
    {
      name: "Сергей Иванов",
      position: "Технический директор",
      experience: "12 лет обслуживания оборудования",
      image: "👨‍🔧"
    }
  ];

  const achievements = [
    {
      icon: "Award",
      title: "Сертификат качества ISO 9001",
      description: "Международный стандарт менеджмента качества"
    },
    {
      icon: "Shield",
      title: "Лицензия на нефтепродукты",
      description: "Официальное разрешение на торговлю топливом"
    },
    {
      icon: "Star",
      title: "Лучшая АЗС района 2023",
      description: "По версии городской администрации"
    },
    {
      icon: "Users",
      title: "Более 50,000 клиентов",
      description: "Доверяют нам каждый день"
    }
  ];

  const milestones = [
    { year: "2009", event: "Основание компании", description: "Открытие первой заправочной станции" },
    { year: "2012", event: "Расширение услуг", description: "Добавили автомойку и мини-маркет" },
    { year: "2016", event: "Модернизация", description: "Установка современного оборудования" },
    { year: "2020", event: "Цифровизация", description: "Запуск мобильного приложения и топливных карт" },
    { year: "2024", event: "Экологические инициативы", description: "Переход на возобновляемые источники энергии" }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">О нашей компании</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            15 лет надежного сервиса и качественного топлива для автомобилистов
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold text-primary mb-6">Наша история</h2>
              <p className="text-lg text-muted-foreground mb-6">
                GAS STATION была основана в 2009 году с простой миссией - предоставлять автомобилистам 
                качественное топливо и профессиональный сервис. За 15 лет работы мы выросли от небольшой 
                заправочной станции до современного комплекса обслуживания автомобилей.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Сегодня мы гордимся тем, что являемся одной из ведущих независимых АЗС в регионе, 
                обслуживая более 50,000 клиентов и предлагая полный спектр услуг для автомобилистов.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">15+</div>
                  <div className="text-muted-foreground">Лет на рынке</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">50K+</div>
                  <div className="text-muted-foreground">Постоянных клиентов</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-accent/10 to-primary/10 p-8 rounded-lg animate-scale-in">
              <h3 className="text-2xl font-bold text-primary mb-6">Наши ценности</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Icon name="CheckCircle" size={20} className="text-accent mr-3 mt-1" />
                  <div>
                    <div className="font-semibold">Качество</div>
                    <div className="text-muted-foreground">Только сертифицированное топливо от проверенных поставщиков</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <Icon name="CheckCircle" size={20} className="text-accent mr-3 mt-1" />
                  <div>
                    <div className="font-semibold">Надежность</div>
                    <div className="text-muted-foreground">Стабильная работа 24/7 без перебоев</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <Icon name="CheckCircle" size={20} className="text-accent mr-3 mt-1" />
                  <div>
                    <div className="font-semibold">Инновации</div>
                    <div className="text-muted-foreground">Современные технологии и удобные сервисы</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <Icon name="CheckCircle" size={20} className="text-accent mr-3 mt-1" />
                  <div>
                    <div className="font-semibold">Клиентоориентированность</div>
                    <div className="text-muted-foreground">Индивидуальный подход к каждому клиенту</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Ключевые этапы развития</h2>
            <p className="text-xl text-muted-foreground">От первой колонки до современного комплекса</p>
          </div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-center mb-8 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="bg-accent text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mr-6">
                  {milestone.year}
                </div>
                <Card className="flex-1 hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-primary">{milestone.event}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{milestone.description}</CardDescription>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Наша команда</h2>
            <p className="text-xl text-muted-foreground">Профессионалы, которые делают нашу работу лучше</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow animate-scale-in">
                <CardHeader>
                  <div className="text-6xl mb-4">{member.image}</div>
                  <CardTitle className="text-primary">{member.name}</CardTitle>
                  <Badge variant="secondary" className="mx-auto">{member.position}</Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{member.experience}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Достижения и сертификаты</h2>
            <p className="text-xl text-muted-foreground">Подтверждение нашего профессионализма</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow animate-scale-in">
                <CardHeader>
                  <div className="mx-auto bg-accent/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <Icon name={achievement.icon as any} size={32} className="text-accent" />
                  </div>
                  <CardTitle className="text-primary text-lg">{achievement.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{achievement.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Присоединяйтесь к нам</h2>
          <p className="text-xl mb-8 text-gray-200">
            Станьте частью большой семьи довольных клиентов
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/services">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Icon name="Star" size={20} className="mr-2" />
                Наши услуги
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                <Icon name="Phone" size={20} className="mr-2" />
                Связаться с нами
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;