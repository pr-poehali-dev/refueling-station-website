import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Icon from "@/components/ui/icon";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";

const Contact = () => {
  const contactInfo = [
    {
      icon: "MapPin",
      title: "Адрес",
      details: "г. Москва, ул. Примерная, д. 123",
      description: "Удобное расположение в центре города"
    },
    {
      icon: "Phone",
      title: "Телефон",
      details: "+7 (495) 123-45-67",
      description: "Круглосуточная техподдержка"
    },
    {
      icon: "Mail",
      title: "Email",
      details: "info@gasstation.ru",
      description: "Ответим в течение 24 часов"
    },
    {
      icon: "Clock",
      title: "Время работы",
      details: "24/7 без выходных",
      description: "Всегда к вашим услугам"
    }
  ];

  const workingHours = [
    { department: "Заправка", hours: "24/7", status: "Круглосуточно" },
    { department: "Автомойка", hours: "7:00 - 23:00", status: "Ежедневно" },
    { department: "Техсервис", hours: "8:00 - 20:00", status: "Пн-Сб" },
    { department: "Кафе", hours: "6:00 - 24:00", status: "Ежедневно" },
    { department: "Офис", hours: "9:00 - 18:00", status: "Пн-Пт" }
  ];

  const faqs = [
    {
      question: "Какие виды топлива у вас есть?",
      answer: "Мы предлагаем АИ-92, АИ-95, АИ-98 и дизельное топливо евро-5. Все топливо проходит строгий контроль качества."
    },
    {
      question: "Есть ли скидки для постоянных клиентов?",
      answer: "Да, у нас действует программа лояльности. Также есть корпоративные скидки до 7% для юридических лиц."
    },
    {
      question: "Можно ли оплатить безналичным способом?",
      answer: "Принимаем все виды карт, мобильные платежи, наличные и безналичный расчет для юрлиц."
    },
    {
      question: "Сколько времени занимает автомойка?",
      answer: "Экспресс-мойка 15-20 минут, стандартная мойка 30-40 минут, комплексная до 1,5 часов."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Контакты</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Мы всегда готовы помочь и ответить на ваши вопросы
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow animate-scale-in">
                <CardHeader>
                  <div className="mx-auto bg-accent/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <Icon name={info.icon as any} size={32} className="text-accent" />
                  </div>
                  <CardTitle className="text-primary">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-lg font-semibold mb-2">{info.details}</div>
                  <CardDescription>{info.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form & Map */}
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="text-primary text-2xl">Напишите нам</CardTitle>
                <CardDescription>Мы ответим в течение 24 hours</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Имя *</label>
                    <Input placeholder="Ваше имя" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Телефон *</label>
                    <Input placeholder="+7 (___) ___-__-__" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email *</label>
                  <Input placeholder="your@email.com" type="email" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Тема обращения</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите тему" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fuel">Вопросы по топливу</SelectItem>
                      <SelectItem value="wash">Автомойка</SelectItem>
                      <SelectItem value="service">Техобслуживание</SelectItem>
                      <SelectItem value="corporate">Корпоративные услуги</SelectItem>
                      <SelectItem value="complaint">Жалоба</SelectItem>
                      <SelectItem value="suggestion">Предложение</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Сообщение *</label>
                  <Textarea 
                    placeholder="Опишите ваш вопрос или предложение..." 
                    rows={5}
                  />
                </div>
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Icon name="Send" size={16} className="mr-2" />
                  Отправить сообщение
                </Button>
              </CardContent>
            </Card>

            <div className="space-y-8">
              {/* Map Placeholder */}
              <Card className="animate-scale-in">
                <CardHeader>
                  <CardTitle className="text-primary">Как нас найти</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted rounded-lg h-64 flex items-center justify-center mb-4">
                    <div className="text-center text-muted-foreground">
                      <Icon name="MapPin" size={48} className="mx-auto mb-2" />
                      <div className="text-lg">Интерактивная карта</div>
                      <div className="text-sm">г. Москва, ул. Примерная, д. 123</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="font-medium">🚗 На автомобиле:</div>
                      <div className="text-muted-foreground">5 минут от МКАД</div>
                    </div>
                    <div>
                      <div className="font-medium">🚇 На метро:</div>
                      <div className="text-muted-foreground">Станция "Примерная"</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Working Hours */}
              <Card className="animate-fade-in">
                <CardHeader>
                  <CardTitle className="text-primary">Режим работы</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {workingHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-b-0">
                        <div>
                          <div className="font-medium">{schedule.department}</div>
                          <div className="text-sm text-muted-foreground">{schedule.status}</div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium text-accent">{schedule.hours}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Часто задаваемые вопросы</h2>
            <p className="text-xl text-muted-foreground">Ответы на популярные вопросы наших клиентов</p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow animate-fade-in">
                <CardHeader>
                  <CardTitle className="text-primary text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{faq.answer}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">Не нашли ответ на свой вопрос?</p>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Icon name="MessageCircle" size={16} className="mr-2" />
              Задать вопрос
            </Button>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Экстренная связь</h2>
          <p className="text-xl mb-8 opacity-90">
            Если у вас срочная ситуация или вопрос, звоните прямо сейчас
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-accent hover:bg-white/90">
              <Icon name="Phone" size={20} className="mr-2" />
              +7 (495) 123-45-67
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-accent">
              <Icon name="MessageSquare" size={20} className="mr-2" />
              Написать в WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-primary mb-8">Мы в социальных сетях</h2>
          <div className="flex justify-center space-x-6">
            <Button variant="outline" size="lg" className="w-16 h-16 rounded-full">
              <span className="text-2xl">📱</span>
            </Button>
            <Button variant="outline" size="lg" className="w-16 h-16 rounded-full">
              <span className="text-2xl">📘</span>
            </Button>
            <Button variant="outline" size="lg" className="w-16 h-16 rounded-full">
              <span className="text-2xl">📸</span>
            </Button>
            <Button variant="outline" size="lg" className="w-16 h-16 rounded-full">
              <span className="text-2xl">🐦</span>
            </Button>
          </div>
          <p className="text-muted-foreground mt-6">
            Следите за новостями, акциями и специальными предложениями
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;