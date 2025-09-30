import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [loanAmount, setLoanAmount] = useState(10000);
  const [loanDays, setLoanDays] = useState(7);

  const calculateInterest = () => {
    const rate = loanDays <= 7 ? 0.02 : 0.10;
    return Math.round(loanAmount * rate);
  };

  const totalAmount = loanAmount + calculateInterest();

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-orange-50/30 to-cyan-50/30">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-orange-100 animate-fade-in">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Wallet" className="text-primary" size={28} />
              <h1 className="text-2xl font-bold text-foreground">Карманный Кредит</h1>
            </div>
            <div className="hidden md:flex gap-6">
              <a href="#conditions" className="text-foreground hover:text-primary transition-colors font-medium">Условия</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">Контакты</a>
              <a href="#faq" className="text-foreground hover:text-primary transition-colors font-medium">Вопросы</a>
            </div>
          </div>
        </div>
      </nav>

      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-up">
            <h2 className="text-5xl md:text-6xl font-bold leading-tight">
              Быстрый займ{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                в кармане
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Всего 2% на неделю — самые честные условия на рынке микрозаймов
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all">
                Получить займ
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2">
                <Icon name="Phone" size={20} className="mr-2" />
                Позвонить
              </Button>
            </div>
          </div>
          
          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
            <img 
              src="/img/49e437d2-3d2a-40d5-bfa0-6937e7e2222c.jpg" 
              alt="Financial illustration" 
              className="relative rounded-3xl shadow-2xl w-full"
            />
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <Card className="max-w-2xl mx-auto shadow-2xl border-2 border-orange-100 animate-fade-in">
          <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10">
            <CardTitle className="text-3xl">Калькулятор займа</CardTitle>
            <CardDescription className="text-base">Рассчитайте стоимость вашего займа прямо сейчас</CardDescription>
          </CardHeader>
          <CardContent className="pt-6 space-y-6">
            <div className="space-y-3">
              <Label htmlFor="amount" className="text-lg font-semibold">Сумма займа: {loanAmount.toLocaleString()} ₽</Label>
              <Input 
                id="amount"
                type="range" 
                min="1000" 
                max="30000" 
                step="1000"
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                className="h-3 cursor-pointer"
              />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>1 000 ₽</span>
                <span>30 000 ₽</span>
              </div>
            </div>

            <div className="space-y-3">
              <Label htmlFor="days" className="text-lg font-semibold">Срок займа: {loanDays} дней</Label>
              <Input 
                id="days"
                type="range" 
                min="1" 
                max="30" 
                value={loanDays}
                onChange={(e) => setLoanDays(Number(e.target.value))}
                className="h-3 cursor-pointer"
              />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>1 день</span>
                <span>30 дней</span>
              </div>
            </div>

            <div className="bg-gradient-to-r from-accent/30 to-secondary/20 p-6 rounded-2xl space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-lg">Процентная ставка:</span>
                <span className="text-2xl font-bold text-primary">{loanDays <= 7 ? '2%' : '10%'}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-lg">Проценты:</span>
                <span className="text-2xl font-bold">{calculateInterest().toLocaleString()} ₽</span>
              </div>
              <div className="border-t-2 border-foreground/20 pt-3 flex justify-between items-center">
                <span className="text-xl font-semibold">К возврату:</span>
                <span className="text-3xl font-bold text-secondary">{totalAmount.toLocaleString()} ₽</span>
              </div>
            </div>

            <Button className="w-full text-lg py-6 bg-gradient-to-r from-primary to-secondary hover:opacity-90 shadow-lg">
              Оформить займ
            </Button>
          </CardContent>
        </Card>
      </section>

      <section id="conditions" className="bg-gradient-to-br from-orange-50 to-cyan-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 animate-fade-in">Условия займов</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 border-primary/30 hover:border-primary transition-all hover:shadow-xl hover:scale-105 duration-300 animate-slide-up">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/60 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Zap" size={32} className="text-white" />
                </div>
                <CardTitle className="text-2xl">Краткосрочный</CardTitle>
                <CardDescription className="text-base">До 7 дней</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary mb-2">2%</div>
                  <p className="text-muted-foreground">Минимальная ставка</p>
                </div>
                <p className="text-center">Быстрое решение финансовых вопросов без переплат. Всего 2% — да, вы не ослышались!</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary/30 hover:border-secondary transition-all hover:shadow-xl hover:scale-105 duration-300 animate-slide-up" style={{animationDelay: '0.1s'}}>
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary/60 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Calendar" size={32} className="text-white" />
                </div>
                <CardTitle className="text-2xl">Долгосрочный</CardTitle>
                <CardDescription className="text-base">Свыше 7 дней</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-5xl font-bold text-secondary mb-2">10%</div>
                  <p className="text-muted-foreground">Честная ставка</p>
                </div>
                <p className="text-center">Максимально прозрачные 10%. Мы ценим ваше доверие и предлагаем честные условия.</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-destructive/30 hover:border-destructive transition-all hover:shadow-xl hover:scale-105 duration-300 animate-slide-up" style={{animationDelay: '0.2s'}}>
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-destructive to-destructive/60 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="AlertTriangle" size={32} className="text-white" />
                </div>
                <CardTitle className="text-2xl">Просрочка</CardTitle>
                <CardDescription className="text-base">При несвоевременной оплате</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-5xl font-bold text-destructive mb-2">+50%</div>
                  <p className="text-muted-foreground">Дополнительно к ставке</p>
                </div>
                <p className="text-center">Жизнь непредсказуема, но планируйте платежи заранее, чтобы избежать штрафов.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 animate-fade-in">Свяжитесь с нами</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 hover:shadow-xl transition-all animate-scale-in">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-4">
                  <Icon name="Phone" size={32} className="text-white" />
                </div>
                <CardTitle className="text-2xl">Позвоните нам</CardTitle>
                <CardDescription>Мы работаем круглосуточно</CardDescription>
              </CardHeader>
              <CardContent>
                <a href="tel:+79393351494" className="text-3xl font-bold text-primary hover:text-secondary transition-colors">
                  +7 939 335-14-94
                </a>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-all animate-scale-in" style={{animationDelay: '0.1s'}}>
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-2xl flex items-center justify-center mb-4">
                  <Icon name="Clock" size={32} className="text-white" />
                </div>
                <CardTitle className="text-2xl">Режим работы</CardTitle>
                <CardDescription>Всегда на связи</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-xl font-semibold">24/7</p>
                <p className="text-muted-foreground">Без выходных и праздников</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="faq" className="bg-gradient-to-br from-cyan-50 to-orange-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 animate-fade-in">Вопросы и ответы</h2>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-white rounded-2xl px-6 border-2 hover:border-primary/50 transition-all">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                  Как быстро я получу деньги?
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  После одобрения заявки деньги поступят на вашу карту в течение 15 минут. Мы работаем круглосуточно!
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded-2xl px-6 border-2 hover:border-primary/50 transition-all">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                  Какие документы нужны для займа?
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  Только паспорт РФ. Никаких справок о доходах или поручителей не требуется.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white rounded-2xl px-6 border-2 hover:border-primary/50 transition-all">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                  Что будет, если я не успею вернуть займ в срок?
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  В случае просрочки к вашему займу будет добавлено 50% к процентной ставке. Рекомендуем планировать платежи заранее.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white rounded-2xl px-6 border-2 hover:border-primary/50 transition-all">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                  Могу ли я досрочно погасить займ?
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  Да, вы можете погасить займ досрочно в любой момент. Проценты будут пересчитаны пропорционально фактическому сроку пользования займом.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-white rounded-2xl px-6 border-2 hover:border-primary/50 transition-all">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                  Есть ли скрытые комиссии?
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  Нет! Мы за полную прозрачность. Вы платите только указанную процентную ставку — 2% для займов до 7 дней и 10% для более длительных сроков.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Wallet" size={24} />
                <h3 className="text-xl font-bold">Карманный Кредит</h3>
              </div>
              <p className="text-white/70">Быстрые микрозаймы с честными условиями</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-lg">Навигация</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#conditions" className="hover:text-primary transition-colors">Условия займов</a></li>
                <li><a href="#contact" className="hover:text-primary transition-colors">Контакты</a></li>
                <li><a href="#faq" className="hover:text-primary transition-colors">Вопросы и ответы</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-lg">Контакты</h4>
              <a href="tel:+79393351494" className="text-primary hover:text-secondary transition-colors text-lg font-semibold">
                +7 939 335-14-94
              </a>
              <p className="text-white/70 mt-2">Работаем 24/7</p>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-8 text-center text-white/60">
            <p>&copy; 2024 Карманный Кредит. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;