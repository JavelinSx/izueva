# Студия красоты Ирины Зуевой - Официальный сайт

> Профессиональный сайт студии красоты с процедурами для волос в Савинском и Плесецке

[![Deploy](https://github.com/YOUR_USERNAME/izueva/actions/workflows/deploy.yml/badge.svg)](https://github.com/YOUR_USERNAME/izueva/actions/workflows/deploy.yml)
[![Nuxt](https://img.shields.io/badge/Nuxt-4.2-00DC82?logo=nuxt.js)](https://nuxt.com)
[![License](https://img.shields.io/badge/license-Private-red.svg)](LICENSE)

## 🚀 Технологии

- **Framework:** [Nuxt 4](https://nuxt.com) - SSG mode
- **UI Library:** [Nuxt UI](https://ui.nuxt.com)
- **Styling:** Tailwind CSS
- **Images:** Nuxt Image (WebP/AVIF optimization)
- **Slider:** Swiper.js
- **Analytics:** Yandex Metrika
- **Deployment:** Yandex Object Storage + GitHub Actions

## ✨ Особенности

- ⚡ **SSG** - Статическая генерация для максимальной скорости
- 🖼️ **Image Optimization** - Автоматическая оптимизация изображений (WebP/AVIF)
- 🎨 **Responsive Design** - Полностью адаптивный дизайн
- 🚀 **Lazy Loading** - Ленивая загрузка компонентов и изображений
- 📱 **Mobile First** - Оптимизация для мобильных устройств
- 🔍 **SEO Optimized** - Полная SEO оптимизация с JSON-LD
- ⚙️ **Compression** - Gzip и Brotli сжатие
- 🎯 **Performance** - Lighthouse Score 90+

## 📦 Установка

```bash
# Клонирование репозитория
git clone https://github.com/YOUR_USERNAME/izueva.git
cd izueva

# Установка зависимостей
npm install
```

## 🛠️ Разработка

```bash
# Запуск dev сервера на http://localhost:3000
npm run dev
```

## 🏗️ Production Build

```bash
# SSG Build (рекомендуется)
npm run generate

# Альтернативная команда
npm run build:ssg

# Локальный preview production сборки
npm run preview

# Анализ размера bundle
npm run analyze
```

## 📂 Структура проекта

```
izueva/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions для автодеплоя
├── assets/
│   └── css/
│       └── main.css            # Основные стили
├── components/                  # Vue компоненты
│   ├── Header.vue
│   ├── MapSection.vue          # Секция с картами
│   ├── PriceSection.vue
│   └── ...
├── composables/                 # Composables
│   └── useImageSlides.ts
├── pages/                       # Страницы
│   └── index.vue
├── public/                      # Статические файлы
│   ├── images/                 # Изображения
│   ├── robots.txt
│   └── sitemap.xml
├── .env.example                # Пример env файлов
├── BUILD_GUIDE.md              # Полное руководство по сборке
├── OPTIMIZATION_CHECKLIST.md   # Чеклист оптимизаций
├── nuxt.config.ts              # Конфигурация Nuxt
├── package.json
└── tailwind.config.ts          # Конфигурация Tailwind
```

## 🚀 Деплой

### Автоматический деплой (GitHub Actions)

1. Настройте секреты в GitHub:
   - `YC_KEY_ID` - Access Key ID от Yandex Cloud
   - `YC_SECRET_KEY` - Secret Access Key
   - `YC_BUCKET_NAME` - Имя бакета

   📖 Подробная инструкция: [.github/SECRETS_GUIDE.md](.github/SECRETS_GUIDE.md)

2. Push в ветку `main` автоматически запустит деплой

3. Или запустите вручную:
   - GitHub → Actions → Deploy to Yandex Object Storage → Run workflow

### Ручной деплой

```bash
# 1. Собрать проект
npm run generate

# 2. Содержимое .output/public/ залить на хостинг
```

## 📊 Performance

Целевые показатели (Lighthouse):

- ✅ Performance: 90+
- ✅ Accessibility: 95+
- ✅ Best Practices: 95+
- ✅ SEO: 100

Core Web Vitals:
- ✅ LCP < 2.5s
- ✅ FID < 100ms
- ✅ CLS < 0.1

## 🔧 Оптимизации

- [x] Static Site Generation (SSG)
- [x] Image optimization (WebP, AVIF)
- [x] Lazy loading components
- [x] Code splitting (CSS & JS)
- [x] Gzip & Brotli compression
- [x] Async scripts loading
- [x] Proper caching headers
- [x] Minification (JS, CSS, HTML)
- [x] Tree shaking
- [x] Critical CSS

📖 Полный список: [OPTIMIZATION_CHECKLIST.md](OPTIMIZATION_CHECKLIST.md)

## 📝 Документация

- [BUILD_GUIDE.md](BUILD_GUIDE.md) - Руководство по сборке и деплою
- [OPTIMIZATION_CHECKLIST.md](OPTIMIZATION_CHECKLIST.md) - Чеклист оптимизаций
- [.github/SECRETS_GUIDE.md](.github/SECRETS_GUIDE.md) - Настройка GitHub Secrets

## 🧪 Тестирование

```bash
# Проверка типов
npm run typecheck

# Lint
npm run lint

# Build test
npm run generate
npm run preview
```

## 📱 Поддерживаемые браузеры

- Chrome (последние 2 версии)
- Firefox (последние 2 версии)
- Safari (последние 2 версии)
- Edge (последние 2 версии)
- iOS Safari (последние 2 версии)
- Chrome Android (последние 2 версии)

## 🔒 Безопасность

- Все секреты хранятся в GitHub Secrets
- HTTPS обязателен
- Безопасные заголовки HTTP
- CSP (Content Security Policy)

## 📞 Контакты

- **Сайт:** https://svk-hair.ru
- **Телефон:** 8 902 196-24-07
- **Локации:** Савинский, Плесецк

## 📄 Лицензия

Частный проект. Все права защищены © 2025 Студия красоты Ирины Зуевой

---

Made with ❤️ using [Nuxt 4](https://nuxt.com)
