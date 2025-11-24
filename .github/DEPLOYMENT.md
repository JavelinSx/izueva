# Деплой на Yandex Object Storage

Этот проект автоматически деплоится на Yandex Object Storage при каждом push в ветку `main`.

## Настройка секретов GitHub

Для работы автоматического деплоя необходимо добавить следующие секреты в настройках репозитория:

### Как добавить секреты:
1. Перейдите в Settings репозитория на GitHub
2. Выберите Secrets and variables > Actions
3. Нажмите New repository secret
4. Добавьте каждый из следующих секретов:

### Необходимые секреты:

#### `YC_KEY_ID`
- **Описание**: Идентификатор ключа доступа Yandex Cloud
- **Где получить**:
  1. Перейдите в [консоль Yandex Cloud](https://console.cloud.yandex.ru/)
  2. Выберите нужный каталог
  3. Перейдите в "Сервисные аккаунты"
  4. Создайте или выберите существующий сервисный аккаунт
  5. Создайте статический ключ доступа
  6. Скопируйте "Идентификатор ключа"

#### `YC_SECRET_KEY`
- **Описание**: Секретный ключ доступа Yandex Cloud
- **Где получить**: Копируется вместе с идентификатором при создании статического ключа
- **⚠️ ВАЖНО**: Секретный ключ показывается только один раз при создании!

## Настройка Yandex Object Storage

### 1. Создание бакета

1. Перейдите в [Object Storage](https://console.cloud.yandex.ru/folders/{folder-id}/storage)
2. Нажмите "Создать бакет"
3. Укажите имя: `svkhair.ru`
4. Выберите класс хранилища: "Стандартное"
5. Доступ к объектам: "Публичный"
6. Создайте бакет

### 2. Настройка статического сайта

1. Откройте созданный бакет
2. Перейдите в "Настройки"
3. Включите "Хостинг статического сайта"
4. Главная страница: `index.html`
5. Страница ошибки: `index.html` (для SPA)
6. Сохраните изменения

### 3. Настройка домена (опционально)

Для использования собственного домена `svkhair.ru`:

1. В настройках бакета включите "HTTPS"
2. Добавьте CNAME запись в DNS:
   ```
   svkhair.ru. CNAME svkhair.ru.website.yandexcloud.net.
   ```
3. Дождитесь обновления DNS (может занять до 24 часов)

## URL сайта после деплоя

После успешного деплоя сайт будет доступен по следующим адресам:

- **Основной домен**: https://svkhair.ru *(после настройки DNS)*
- **Yandex Cloud**: http://svkhair.ru.website.yandexcloud.net
- **Прямой URL**: https://storage.yandexcloud.net/svkhair.ru

## Ручной запуск деплоя

1. Перейдите в Actions на GitHub
2. Выберите workflow "Deploy to Yandex Object Storage"
3. Нажмите "Run workflow"
4. Выберите ветку `main`
5. Нажмите "Run workflow"

## Устранение неполадок

### Ошибка: "Access Denied"
- Проверьте, что секреты `YC_KEY_ID` и `YC_SECRET_KEY` заданы правильно
- Убедитесь, что сервисный аккаунт имеет роль `storage.editor` для бакета

### Ошибка: "Bucket not found"
- Убедитесь, что бакет `svkhair.ru` создан
- Проверьте имя бакета в файле `.github/workflows/deploy.yml`

### Сайт не обновляется
- Очистите кеш браузера (Ctrl+Shift+R)
- Проверьте, что деплой прошел успешно в разделе Actions
- Проверьте логи workflow на наличие ошибок

## Локальная сборка

Для проверки сборки локально:

```bash
# Установка зависимостей
npm install

# Локальная разработка
npm run dev

# Сборка статического сайта
npm run generate

# Результат будет в .output/public/
```

## Структура проекта

```
.
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── .output/
│   └── public/                 # Сгенерированный статический сайт (после build)
├── components/                 # Vue компоненты
├── pages/                      # Страницы приложения
├── public/                     # Статические файлы (favicon, images, etc)
├── assets/                     # Ресурсы для сборки (CSS, fonts)
└── nuxt.config.ts             # Конфигурация Nuxt
```

## Дополнительная информация

- [Документация Yandex Object Storage](https://cloud.yandex.ru/docs/storage/)
- [Хостинг статических сайтов](https://cloud.yandex.ru/docs/storage/concepts/hosting)
- [GitHub Actions документация](https://docs.github.com/en/actions)
