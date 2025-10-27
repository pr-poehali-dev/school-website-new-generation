import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('main');

  const navigation = [
    { id: 'main', label: 'Главная', icon: 'Home' },
    { id: 'news', label: 'Новости', icon: 'Newspaper' },
    { id: 'schedule', label: 'Расписание', icon: 'Calendar' },
    { id: 'teachers', label: 'Учителя', icon: 'Users' },
    { id: 'achievements', label: 'Достижения', icon: 'Trophy' },
    { id: 'gallery', label: 'Галерея', icon: 'Image' },
    { id: 'documents', label: 'Документы', icon: 'FileText' },
    { id: 'contacts', label: 'Контакты', icon: 'Phone' },
  ];

  const news = [
    { id: 1, title: 'Открытие новой лаборатории робототехники', date: '15 октября 2025', content: 'В школе открылась современная лаборатория для изучения робототехники и программирования' },
    { id: 2, title: 'Победа в олимпиаде по физике', date: '10 октября 2025', content: 'Наши ученики заняли призовые места на региональной олимпиаде' },
    { id: 3, title: 'День космонавтики', date: '12 апреля 2025', content: 'Прошёл тематический день, посвящённый космосу и исследованиям' },
  ];

  const teachers = [
    { name: 'Иванова Анна Петровна', subject: 'Математика и физика', experience: '15 лет', achievements: 'Кандидат наук, победитель конкурса "Учитель года"' },
    { name: 'Смирнов Игорь Владимирович', subject: 'Информатика', experience: '10 лет', achievements: 'Мастер спорта по программированию' },
    { name: 'Петрова Мария Сергеевна', subject: 'Литература и русский язык', experience: '20 лет', achievements: 'Заслуженный учитель РФ' },
  ];

  const achievements = [
    { title: 'Победа в конкурсе "Шаг в будущее"', year: '2025', description: 'Проект по альтернативной энергетике' },
    { title: 'Золотая медаль WorldSkills Junior', year: '2025', description: 'Компетенция "Мобильная робототехника"' },
    { title: '1 место в региональной олимпиаде по астрономии', year: '2024', description: 'Командное первенство' },
  ];

  return (
    <div className="min-h-screen cosmic-gradient stars-bg relative overflow-hidden">
      <div className="absolute top-20 right-10 w-48 h-48 animate-float opacity-60 pointer-events-none">
        <img 
          src="https://cdn.poehali.dev/projects/b1b62870-3fc6-4202-8df8-c67eebcd01d0/files/2fab8d66-f573-4a77-8e2c-28ba6e8a8210.jpg" 
          alt="planet"
          className="w-full h-full object-contain mix-blend-lighten"
        />
      </div>
      <div className="absolute bottom-40 left-20 w-32 h-32 animate-float opacity-50 pointer-events-none" style={{ animationDelay: '1s' }}>
        <img 
          src="https://cdn.poehali.dev/projects/b1b62870-3fc6-4202-8df8-c67eebcd01d0/files/50414ef8-1d2c-4308-9fa0-d676a616d4be.jpg" 
          alt="planet"
          className="w-full h-full object-contain mix-blend-lighten"
        />
      </div>
      <div className="absolute top-1/2 left-5 w-24 h-24 animate-float opacity-70 pointer-events-none" style={{ animationDelay: '2s' }}>
        <img 
          src="https://cdn.poehali.dev/projects/b1b62870-3fc6-4202-8df8-c67eebcd01d0/files/43ff8cd5-175f-4a07-9df6-450ab2c924bd.jpg" 
          alt="rocket"
          className="w-full h-full object-contain mix-blend-lighten"
        />
      </div>
      
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 animate-fade-in">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center animate-pulse-glow">
                <Icon name="Rocket" size={24} className="text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">Новое поколение</h1>
                <p className="text-sm text-muted-foreground">Школа будущего</p>
              </div>
            </div>

            <Tabs defaultValue="parents" className="w-auto">
              <TabsList className="bg-card">
                <TabsTrigger value="parents" className="gap-2">
                  <Icon name="Users" size={16} />
                  Родителям
                </TabsTrigger>
                <TabsTrigger value="students" className="gap-2">
                  <Icon name="GraduationCap" size={16} />
                  Ученикам
                </TabsTrigger>
                <TabsTrigger value="teachers" className="gap-2">
                  <Icon name="BookOpen" size={16} />
                  Учителям
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <nav className="mt-4 flex flex-wrap gap-2">
            {navigation.map((item) => (
              <Button
                key={item.id}
                variant={activeSection === item.id ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setActiveSection(item.id)}
                className="gap-2 transition-all hover:scale-105"
              >
                <Icon name={item.icon} size={16} />
                {item.label}
              </Button>
            ))}
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 relative">
        {activeSection === 'main' && (
          <div className="space-y-8 animate-fade-in">
            <section className="text-center py-20 relative">
              <div className="absolute -top-10 right-1/4 w-32 h-32 animate-float opacity-80" style={{ animationDelay: '0.5s' }}>
                <img 
                  src="https://cdn.poehali.dev/projects/b1b62870-3fc6-4202-8df8-c67eebcd01d0/files/43ff8cd5-175f-4a07-9df6-450ab2c924bd.jpg" 
                  alt="rocket"
                  className="w-full h-full object-contain mix-blend-lighten"
                />
              </div>
              <div className="relative inline-block mb-6">
                <div className="absolute inset-0 bg-primary blur-3xl opacity-50 animate-pulse-glow"></div>
                <h2 className="relative text-6xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-float">
                  Добро пожаловать в будущее
                </h2>
              </div>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mt-4">
                Школа "Новое поколение" — это современное образовательное пространство, 
                где каждый ребёнок раскрывает свой потенциал и готовится к космическим свершениям
              </p>
              <div className="flex gap-4 justify-center mt-8">
                <Button size="lg" className="gap-2">
                  <Icon name="Calendar" size={20} />
                  Записаться на экскурсию
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  <Icon name="Play" size={20} />
                  Видео о школе
                </Button>
              </div>
            </section>

            <section className="grid md:grid-cols-3 gap-6 relative">
              <div className="absolute -bottom-20 -right-20 w-64 h-64 animate-float opacity-40 pointer-events-none" style={{ animationDelay: '1.5s' }}>
                <img 
                  src="https://cdn.poehali.dev/projects/b1b62870-3fc6-4202-8df8-c67eebcd01d0/files/2fab8d66-f573-4a77-8e2c-28ba6e8a8210.jpg" 
                  alt="planet"
                  className="w-full h-full object-contain mix-blend-lighten"
                />
              </div>
              
              <Card className="bg-card/50 backdrop-blur border-border hover:border-primary transition-all hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                    <Icon name="Sparkles" size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Инновации</h3>
                  <p className="text-muted-foreground">Современные технологии и методики обучения</p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur border-border hover:border-primary transition-all hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary/20 flex items-center justify-center">
                    <Icon name="Target" size={32} className="text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Результаты</h3>
                  <p className="text-muted-foreground">98% выпускников поступают в ведущие вузы</p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur border-border hover:border-primary transition-all hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center">
                    <Icon name="Heart" size={32} className="text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Забота</h3>
                  <p className="text-muted-foreground">Индивидуальный подход к каждому ученику</p>
                </CardContent>
              </Card>
            </section>
          </div>
        )}

        {activeSection === 'news' && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-4xl font-bold mb-8">Новости школы</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {news.map((item) => (
                <Card key={item.id} className="bg-card/50 backdrop-blur border-border hover:border-primary transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Icon name="Newspaper" size={24} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                        <p className="text-sm text-muted-foreground mb-3">{item.date}</p>
                        <p className="text-foreground">{item.content}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'schedule' && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-4xl font-bold mb-8">Расписание</h2>
            <Card className="bg-card/50 backdrop-blur border-border">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница'].map((day, idx) => (
                    <div key={day} className="border-b border-border pb-4 last:border-0">
                      <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                        <Icon name="Calendar" size={20} className="text-primary" />
                        {day}
                      </h3>
                      <div className="grid md:grid-cols-2 gap-3 text-sm">
                        <div className="flex justify-between p-2 bg-muted/30 rounded">
                          <span>8:30 - 9:15</span>
                          <span className="font-medium">Математика</span>
                        </div>
                        <div className="flex justify-between p-2 bg-muted/30 rounded">
                          <span>9:25 - 10:10</span>
                          <span className="font-medium">Русский язык</span>
                        </div>
                        <div className="flex justify-between p-2 bg-muted/30 rounded">
                          <span>10:30 - 11:15</span>
                          <span className="font-medium">Физика</span>
                        </div>
                        <div className="flex justify-between p-2 bg-muted/30 rounded">
                          <span>11:25 - 12:10</span>
                          <span className="font-medium">Информатика</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'teachers' && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-4xl font-bold mb-8">Наши учителя</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teachers.map((teacher, idx) => (
                <Card key={idx} className="bg-card/50 backdrop-blur border-border hover:border-primary transition-all hover:scale-105">
                  <CardContent className="p-6">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <Icon name="User" size={40} className="text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold text-center mb-2">{teacher.name}</h3>
                    <p className="text-center text-primary mb-2">{teacher.subject}</p>
                    <p className="text-sm text-muted-foreground text-center mb-3">Стаж: {teacher.experience}</p>
                    <p className="text-sm text-foreground text-center">{teacher.achievements}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'achievements' && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-4xl font-bold mb-8">Наши достижения</h2>
            <div className="space-y-4">
              {achievements.map((achievement, idx) => (
                <Card key={idx} className="bg-card/50 backdrop-blur border-border hover:border-primary transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                        <Icon name="Trophy" size={32} className="text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-xl font-semibold">{achievement.title}</h3>
                          <span className="text-sm text-primary font-medium">{achievement.year}</span>
                        </div>
                        <p className="text-foreground">{achievement.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'gallery' && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-4xl font-bold mb-8">Галерея</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <Card key={item} className="bg-card/50 backdrop-blur border-border overflow-hidden hover:scale-105 transition-all">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <Icon name="Image" size={48} className="text-primary" />
                  </div>
                  <CardContent className="p-4">
                    <p className="text-sm text-muted-foreground">Мероприятие {item}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'documents' && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-4xl font-bold mb-8">Документы</h2>
            <div className="space-y-3">
              {['Устав школы', 'Лицензия на образовательную деятельность', 'Правила внутреннего распорядка', 'Положение о приёме', 'Образовательная программа', 'Годовой календарный график'].map((doc, idx) => (
                <Card key={idx} className="bg-card/50 backdrop-blur border-border hover:border-primary transition-all">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Icon name="FileText" size={24} className="text-primary" />
                        <span className="font-medium">{doc}</span>
                      </div>
                      <Button size="sm" variant="ghost" className="gap-2">
                        <Icon name="Download" size={16} />
                        Скачать
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'contacts' && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-4xl font-bold mb-8">Контакты</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-card/50 backdrop-blur border-border">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="MapPin" size={24} className="text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Адрес</h3>
                      <p className="text-muted-foreground">г. Москва, ул. Космонавтов, д. 42</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Phone" size={24} className="text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Телефон</h3>
                      <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Mail" size={24} className="text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-muted-foreground">info@newgeneration.school</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Clock" size={24} className="text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Режим работы</h3>
                      <p className="text-muted-foreground">Пн-Пт: 8:00 - 18:00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur border-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Напишите нам</h3>
                  <form className="space-y-4">
                    <input
                      type="text"
                      placeholder="Ваше имя"
                      className="w-full px-4 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring text-foreground"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full px-4 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring text-foreground"
                    />
                    <textarea
                      placeholder="Ваше сообщение"
                      rows={4}
                      className="w-full px-4 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring text-foreground"
                    />
                    <Button className="w-full">Отправить</Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </main>

      <footer className="mt-20 border-t border-border backdrop-blur-md bg-background/80">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Icon name="Rocket" size={20} className="text-primary-foreground" />
              </div>
              <div>
                <p className="font-semibold">Школа "Новое поколение"</p>
                <p className="text-sm text-muted-foreground">© 2025 Все права защищены</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon">
                <Icon name="Facebook" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Instagram" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Youtube" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;