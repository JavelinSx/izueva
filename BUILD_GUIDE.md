# Руководство по сборке и деплою

## SSG Build для Production

### Команды для сборки

```bash
# Установка зависимостей
npm install

# Development сервер
npm run dev

# Production SSG build
npm run generate

# Или используйте альтернативную команду
npm run build:ssg

# Preview production build локально
npm run preview

# Анализ размера бандла
npm run analyze
```

## Оптимизации, применённые в проекте

### 1. SSG (Static Site Generation)
- Настроен `nitro.preset: 'static'` для генерации статических файлов
- Все страницы предрендериваются на этапе сборки
- Crawl links включен для автоматического обнаружения всех страниц

### 2. Compression
- **Gzip** и **Brotli** compression включены
- Все статические ассеты сжимаются автоматически
- Настроены HTTP заголовки для кеширования

### 3. Image Optimization
- Использование Nuxt Image module
- Автоматическая конвертация в WebP и AVIF форматы
- Responsive images с различными размерами экранов
- Quality: 80 для баланса размера/качества
- Lazy loading для всех изображений

### 4. Code Splitting
- Автоматическое разделение JavaScript бундлов
- Swiper вынесен в отдельный chunk
- CSS code splitting включен

### 5. Lazy Loading
- Компоненты ниже fold загружаются лениво
- `ClientOnly` обертка для компонентов, не требующих SSR
- Lazy префикс для автоматической ленивой загрузки

### 6. External Scripts Optimization
- Yandex Metrika загружается асинхронно
- Scripts не блокируют рендеринг страницы
- Использование `defer` и `async`

### 7. Caching Strategy
```
- Static assets: Cache-Control: max-age=31536000 (1 год)
- HTML: Обновляется при деплое
- Images: Immutable cache
```

## Структура после сборки

```
.output/
├── public/          # Статические файлы для деплоя
│   ├── _nuxt/      # JS/CSS chunks
│   ├── images/     # Оптимизированные изображения
│   └── index.html  # Предрендеренные HTML страницы
└── server/         # (Не используется в SSG)
```

## Деплой

### Netlify
```bash
# Build command
npm run generate

# Publish directory
.output/public
```

### Vercel
```bash
# Build command
npm run generate

# Output directory
.output/public
```

### Cloudflare Pages
```bash
# Build command
npm run generate

# Build output directory
.output/public
```

### Nginx (Self-hosted)
```nginx
server {
    listen 80;
    server_name svk-hair.ru;

    root /var/www/izueva/.output/public;
    index index.html;

    # Gzip
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;

    # Brotli (если установлен модуль)
    brotli on;
    brotli_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;

    # Cache headers
    location ~* \.(js|css|png|jpg|jpeg|gif|webp|avif|ico|svg|woff|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

## Performance Checklist

- [x] SSG mode enabled
- [x] Image optimization (WebP/AVIF)
- [x] Lazy loading components
- [x] Code splitting
- [x] Gzip/Brotli compression
- [x] Async scripts loading
- [x] Proper caching headers
- [x] CSS minification
- [x] JS minification
- [x] robots.txt configured
- [x] sitemap.xml updated
- [x] Meta tags for SEO
- [x] Structured data (JSON-LD)

## Тестирование производительности

После деплоя протестируйте:
- Google PageSpeed Insights
- Lighthouse (в Chrome DevTools)
- GTmetrix
- WebPageTest

Целевые показатели:
- Performance: 90+
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Time to Interactive: < 3.5s
- Total Blocking Time: < 200ms
- Cumulative Layout Shift: < 0.1

## Troubleshooting

### Build errors
```bash
# Очистка кеша
rm -rf .nuxt .output node_modules/.cache

# Переустановка зависимостей
rm -rf node_modules package-lock.json
npm install
```

### Preview не работает
```bash
# Убедитесь что сборка завершена
npm run generate
# Затем запустите preview
npm run preview
```

## Полезные ссылки

- [Nuxt 3 Docs](https://nuxt.com)
- [Nuxt Image](https://image.nuxt.com)
- [Nuxt UI](https://ui.nuxt.com)
