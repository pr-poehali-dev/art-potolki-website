import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/79146666764", "_blank");
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="https://cdn.poehali.dev/projects/cf2dcab9-d1c8-4daa-aa94-83badc3fdb65/files/52944397-226d-432d-9974-a622d421d277.jpg" 
              alt="ARTPOTOLKI логотип" 
              className="h-12 w-12 object-contain"
            />
            <div>
              <h1 className="text-2xl font-bold text-primary">ARTPOTOLKI</h1>
              <p className="text-xs text-muted-foreground">Натяжные потолки в Артёме</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection("services")} className="text-sm font-medium hover:text-primary transition-colors">
              Услуги
            </button>
            <button onClick={() => scrollToSection("portfolio")} className="text-sm font-medium hover:text-primary transition-colors">
              Портфолио
            </button>
            <button onClick={() => scrollToSection("benefits")} className="text-sm font-medium hover:text-primary transition-colors">
              Преимущества
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-sm font-medium hover:text-primary transition-colors">
              Контакты
            </button>
          </nav>
          <Button onClick={handleWhatsAppClick} className="bg-[#25D366] hover:bg-[#20BA5A] text-white">
            <Icon name="MessageCircle" size={18} className="mr-2" />
            WhatsApp
          </Button>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-50 via-white to-orange-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                Натяжные потолки <span className="text-primary">в Артёме</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Профессиональный монтаж натяжных потолков любой сложности. Гарантия 10 лет. Более 500 выполненных проектов.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button onClick={handleWhatsAppClick} size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Заказать звонок
                </Button>
                <Button onClick={() => scrollToSection("portfolio")} size="lg" variant="outline" className="text-lg px-8 py-6">
                  Посмотреть работы
                </Button>
              </div>
              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <Icon name="Award" size={24} className="text-accent" />
                  <span className="text-sm font-semibold">Гарантия 10 лет</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Clock" size={24} className="text-accent" />
                  <span className="text-sm font-semibold">Монтаж за 1 день</span>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/cf2dcab9-d1c8-4daa-aa94-83badc3fdb65/files/05eeb84e-d127-4de1-a1f1-e8034740cf47.jpg" 
                alt="Натяжной потолок в Артёме - глянцевый белый в гостиной"
                className="rounded-2xl shadow-2xl w-full hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши услуги</h2>
            <p className="text-lg text-muted-foreground">Полный спектр работ по установке натяжных потолков в Артёме</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-xl transition-shadow duration-300 border-2 hover:border-primary">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Icon name="Sparkles" size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Глянцевые потолки</h3>
              <p className="text-muted-foreground mb-4">
                Идеальное решение для визуального увеличения пространства. Зеркальный эффект создаёт ощущение высоты и света.
              </p>
              <p className="text-sm text-primary font-semibold">От 350 ₽/м²</p>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-shadow duration-300 border-2 hover:border-primary">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Icon name="Home" size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Матовые потолки</h3>
              <p className="text-muted-foreground mb-4">
                Классический вариант для любого интерьера. Создают уютную атмосферу и отлично скрывают неровности.
              </p>
              <p className="text-sm text-primary font-semibold">От 300 ₽/м²</p>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-shadow duration-300 border-2 hover:border-primary">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Icon name="Layers" size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Многоуровневые</h3>
              <p className="text-muted-foreground mb-4">
                Дизайнерские решения любой сложности. Зонирование пространства и встроенная подсветка.
              </p>
              <p className="text-sm text-primary font-semibold">От 450 ₽/м²</p>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-shadow duration-300 border-2 hover:border-primary">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Icon name="Lightbulb" size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">С подсветкой</h3>
              <p className="text-muted-foreground mb-4">
                LED-освещение любой конфигурации. Создание уникальной атмосферы и экономия электроэнергии.
              </p>
              <p className="text-sm text-primary font-semibold">От 400 ₽/м²</p>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-shadow duration-300 border-2 hover:border-primary">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Icon name="Droplets" size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Для ванных</h3>
              <p className="text-muted-foreground mb-4">
                Влагостойкие материалы. Защита от протечек сверху. Долговечность и простота ухода.
              </p>
              <p className="text-sm text-primary font-semibold">От 380 ₽/м²</p>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-shadow duration-300 border-2 hover:border-primary">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Icon name="Wrench" size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Ремонт потолков</h3>
              <p className="text-muted-foreground mb-4">
                Устранение порезов, проколов и провисаний. Замена повреждённых участков. Быстро и качественно.
              </p>
              <p className="text-sm text-primary font-semibold">От 1500 ₽</p>
            </Card>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши работы</h2>
            <p className="text-lg text-muted-foreground">Более 500 реализованных проектов в Артёме и Приморском крае</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500">
              <img 
                src="https://cdn.poehali.dev/projects/cf2dcab9-d1c8-4daa-aa94-83badc3fdb65/files/05eeb84e-d127-4de1-a1f1-e8034740cf47.jpg" 
                alt="Глянцевый натяжной потолок в гостиной Артём"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Глянцевый потолок</h3>
                  <p className="text-sm">Гостиная, 25 м² • г. Артём</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500">
              <img 
                src="https://cdn.poehali.dev/projects/cf2dcab9-d1c8-4daa-aa94-83badc3fdb65/files/6d0e7def-c1f8-4ea5-9640-88ec6f384f60.jpg" 
                alt="Многоуровневый потолок с LED подсветкой Артём"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Многоуровневый с LED</h3>
                  <p className="text-sm">Спальня, 18 м² • г. Артём</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="benefits" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Почему выбирают нас</h2>
            <p className="text-lg text-muted-foreground">ARTPOTOLKI — лидер по монтажу натяжных потолков в Артёме</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <Icon name="Trophy" size={36} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold">500+ проектов</h3>
              <p className="text-muted-foreground">Опыт работы более 8 лет в Артёме и Приморском крае</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <Icon name="Shield" size={36} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold">Гарантия 10 лет</h3>
              <p className="text-muted-foreground">Официальная гарантия на материалы и работу</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <Icon name="Zap" size={36} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold">Монтаж за 1 день</h3>
              <p className="text-muted-foreground">Быстрая установка без пыли и грязи</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <Icon name="Wallet" size={36} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold">Честные цены</h3>
              <p className="text-muted-foreground">Никаких скрытых доплат. Цена фиксируется в договоре</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Готовы преобразить ваш потолок?</h2>
          <p className="text-xl mb-8 opacity-90">
            Бесплатный замер и консультация в Артёме. Звоните прямо сейчас!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button onClick={handleWhatsAppClick} size="lg" className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-6">
              <Icon name="Phone" size={20} className="mr-2" />
              +7 (914) 666-76-46
            </Button>
            <Button onClick={handleWhatsAppClick} size="lg" variant="outline" className="bg-[#25D366] hover:bg-[#20BA5A] border-white text-white text-lg px-8 py-6">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Написать в WhatsApp
            </Button>
          </div>
          <div className="space-y-2 opacity-80">
            <p className="flex items-center justify-center gap-2">
              <Icon name="MapPin" size={18} />
              г. Артём, Приморский край
            </p>
            <p className="flex items-center justify-center gap-2">
              <Icon name="Clock" size={18} />
              Работаем ежедневно с 9:00 до 21:00
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-8 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <img 
              src="https://cdn.poehali.dev/projects/cf2dcab9-d1c8-4daa-aa94-83badc3fdb65/files/52944397-226d-432d-9974-a622d421d277.jpg" 
              alt="ARTPOTOLKI" 
              className="h-10 w-10 object-contain"
            />
            <span className="text-xl font-bold">ARTPOTOLKI</span>
          </div>
          <p className="text-sm opacity-80 mb-2">Натяжные потолки в Артёме • Монтаж • Ремонт • Гарантия 10 лет</p>
          <p className="text-xs opacity-60">© 2024 ARTPOTOLKI. Все права защищены.</p>
        </div>
      </footer>

      <a 
        href="https://wa.me/79146666764" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 animate-pulse hover:animate-none"
        aria-label="Написать в WhatsApp"
      >
        <Icon name="MessageCircle" size={32} className="text-white" />
      </a>
    </div>
  );
};

export default Index;