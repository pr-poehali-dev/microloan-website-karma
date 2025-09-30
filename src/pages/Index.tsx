import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const [isCopied, setIsCopied] = useState(false);

  const copyPhoneNumber = () => {
    navigator.clipboard.writeText('+79393351494');
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/50 to-purple-50/50">
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-blue-100 shadow-sm animate-fade-in">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                <Icon name="Building2" className="text-white" size={24} />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                БыстрыйВыход
              </h1>
            </div>
            <div className="hidden md:flex gap-6">
              <a href="#services" className="text-foreground hover:text-primary transition-colors font-medium">Услуги</a>
              <a href="#transfer" className="text-foreground hover:text-primary transition-colors font-medium">Переводы</a>
              <a href="#benefits" className="text-foreground hover:text-primary transition-colors font-medium">Преимущества</a>
            </div>
          </div>
        </div>
      </nav>

      <section className="container mx-auto px-4 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-slide-up">
            <Badge className="bg-primary/10 text-primary hover:bg-primary/20 px-4 py-2 text-sm font-semibold">
              Банк нового поколения
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold leading-tight">
              Банковские услуги{' '}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                без границ
              </span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Никаких комиссий за переводы, обслуживание и операции. 
              Управляйте деньгами свободно с БыстрыйВыход
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:opacity-90 shadow-lg hover:shadow-xl transition-all">
                <Icon name="CreditCard" size={20} className="mr-2" />
                Открыть счёт
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 border-primary/30 hover:border-primary">
                Подробнее
              </Button>
            </div>
          </div>
          
          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-3xl blur-3xl"></div>
            <img 
              src="/img/120e5deb-11b5-47c3-9899-0ca2cede0190.jpg" 
              alt="Banking illustration" 
              className="relative rounded-3xl shadow-2xl w-full"
            />
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center animate-fade-in">
              <div className="text-5xl font-bold text-primary mb-2">0%</div>
              <p className="text-muted-foreground font-medium">Комиссия на переводы</p>
            </div>
            <div className="text-center animate-fade-in" style={{animationDelay: '0.1s'}}>
              <div className="text-5xl font-bold text-secondary mb-2">0₽</div>
              <p className="text-muted-foreground font-medium">Обслуживание счёта</p>
            </div>
            <div className="text-center animate-fade-in" style={{animationDelay: '0.2s'}}>
              <div className="text-5xl font-bold text-accent mb-2">24/7</div>
              <p className="text-muted-foreground font-medium">Поддержка клиентов</p>
            </div>
            <div className="text-center animate-fade-in" style={{animationDelay: '0.3s'}}>
              <div className="text-5xl font-bold text-primary mb-2">∞</div>
              <p className="text-muted-foreground font-medium">Лимиты переводов</p>
            </div>
          </div>
        </div>
      </section>

      <section id="transfer" className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 animate-fade-in">Перевести средства</h2>
          <p className="text-center text-muted-foreground text-lg mb-12">
            Поддержите работу банка или отправьте средства напрямую
          </p>
          
          <Card className="border-2 border-primary/20 shadow-2xl animate-scale-in">
            <CardHeader className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                  <Icon name="Building2" size={24} className="text-white" />
                </div>
                <div>
                  <CardTitle className="text-2xl">ОЗОН БАНК</CardTitle>
                  <CardDescription className="text-base">Официальный счёт БыстрыйВыход</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-8 space-y-6">
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-6 rounded-2xl border-2 border-primary/10">
                <Label className="text-sm text-muted-foreground mb-2 block">Номер для перевода</Label>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-3xl font-bold tracking-wider">+7 939 335-14-94</span>
                  <Button 
                    size="lg"
                    onClick={copyPhoneNumber}
                    className="bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                  >
                    {isCopied ? (
                      <>
                        <Icon name="Check" size={20} className="mr-2" />
                        Скопировано
                      </>
                    ) : (
                      <>
                        <Icon name="Copy" size={20} className="mr-2" />
                        Копировать
                      </>
                    )}
                  </Button>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl">
                  <Icon name="Info" size={20} className="text-primary mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">Переводы без комиссии</p>
                    <p className="text-sm text-muted-foreground">
                      Банк БыстрыйВыход не взимает комиссию за входящие переводы на указанный номер
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-purple-50 rounded-xl">
                  <Icon name="Shield" size={20} className="text-secondary mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">Безопасность гарантирована</p>
                    <p className="text-sm text-muted-foreground">
                      Все операции защищены современными системами шифрования
                    </p>
                  </div>
                </div>
              </div>

              <Button className="w-full text-lg py-6 bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 shadow-lg">
                <Icon name="Send" size={20} className="mr-2" />
                Перейти к переводу
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="services" className="bg-gradient-to-br from-blue-50 to-purple-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 animate-fade-in">Наши услуги</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 border-primary/20 hover:border-primary hover:shadow-2xl transition-all duration-300 animate-slide-up">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/60 rounded-2xl flex items-center justify-center mb-4">
                  <Icon name="Wallet" size={32} className="text-white" />
                </div>
                <CardTitle className="text-2xl">Личные счета</CardTitle>
                <CardDescription className="text-base">Управление финансами</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={18} className="text-primary" />
                    <span>Бесплатное обслуживание</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={18} className="text-primary" />
                    <span>Мгновенные переводы</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={18} className="text-primary" />
                    <span>Кэшбэк до 10%</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary/20 hover:border-secondary hover:shadow-2xl transition-all duration-300 animate-slide-up" style={{animationDelay: '0.1s'}}>
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary/60 rounded-2xl flex items-center justify-center mb-4">
                  <Icon name="CreditCard" size={32} className="text-white" />
                </div>
                <CardTitle className="text-2xl">Дебетовые карты</CardTitle>
                <CardDescription className="text-base">Современные платёжные решения</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={18} className="text-secondary" />
                    <span>Выпуск за 5 минут</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={18} className="text-secondary" />
                    <span>Бесконтактные платежи</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={18} className="text-secondary" />
                    <span>Виртуальные карты</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent/20 hover:border-accent hover:shadow-2xl transition-all duration-300 animate-slide-up" style={{animationDelay: '0.2s'}}>
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/60 rounded-2xl flex items-center justify-center mb-4">
                  <Icon name="TrendingUp" size={32} className="text-white" />
                </div>
                <CardTitle className="text-2xl">Инвестиции</CardTitle>
                <CardDescription className="text-base">Приумножайте капитал</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={18} className="text-accent" />
                    <span>Вклады до 8% годовых</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={18} className="text-accent" />
                    <span>Доступ к биржам</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={18} className="text-accent" />
                    <span>Консультации экспертов</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="benefits" className="container mx-auto px-4 py-16">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 animate-fade-in">
          Почему выбирают БыстрыйВыход
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="border-2 hover:shadow-xl transition-all animate-scale-in">
            <CardHeader>
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-3">
                <Icon name="Ban" size={28} className="text-white" />
              </div>
              <CardTitle className="text-2xl">Никаких комиссий</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-lg">
                Забудьте о скрытых платежах. Мы не берём комиссию за переводы, снятие наличных и обслуживание счёта.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:shadow-xl transition-all animate-scale-in" style={{animationDelay: '0.1s'}}>
            <CardHeader>
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-3">
                <Icon name="Zap" size={28} className="text-white" />
              </div>
              <CardTitle className="text-2xl">Мгновенные операции</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-lg">
                Переводы происходят за секунды. Платежи, пополнения, снятия — всё моментально.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:shadow-xl transition-all animate-scale-in" style={{animationDelay: '0.2s'}}>
            <CardHeader>
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-3">
                <Icon name="Smartphone" size={28} className="text-white" />
              </div>
              <CardTitle className="text-2xl">Мобильный банк</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-lg">
                Полный контроль в одном приложении. Управляйте счетами, картами и инвестициями из любой точки мира.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:shadow-xl transition-all animate-scale-in" style={{animationDelay: '0.3s'}}>
            <CardHeader>
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-3">
                <Icon name="Lock" size={28} className="text-white" />
              </div>
              <CardTitle className="text-2xl">Максимальная защита</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-lg">
                Многоуровневое шифрование, биометрия и система защиты от мошенничества охраняют ваши средства.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-gradient-to-r from-primary via-secondary to-accent py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
            Присоединяйтесь к БыстрыйВыход
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Откройте счёт за 5 минут и получите доступ к банковским услугам нового поколения
          </p>
          <Button size="lg" className="text-lg px-10 py-7 bg-white text-primary hover:bg-gray-50 shadow-2xl hover:shadow-3xl transition-all font-semibold">
            <Icon name="UserPlus" size={22} className="mr-2" />
            Стать клиентом
          </Button>
        </div>
      </section>

      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Icon name="Building2" size={18} />
                </div>
                <h3 className="text-xl font-bold">БыстрыйВыход</h3>
              </div>
              <p className="text-white/70">Банк нового поколения без комиссий и границ</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-lg">Услуги</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#services" className="hover:text-primary transition-colors">Счета и карты</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">Переводы</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">Инвестиции</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-lg">О банке</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#benefits" className="hover:text-primary transition-colors">Преимущества</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Лицензии</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-lg">Переводы</h4>
              <p className="text-white/90 font-semibold mb-2">ОЗОН БАНК</p>
              <p className="text-primary text-lg font-bold">+7 939 335-14-94</p>
              <p className="text-white/60 text-sm mt-2">Без комиссии 24/7</p>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-8 text-center text-white/60">
            <p>&copy; 2024 БыстрыйВыход. Банковские услуги нового поколения.</p>
            <p className="text-sm mt-2">Генеральная лицензия Банка России</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;