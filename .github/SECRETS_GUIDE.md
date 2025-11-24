# Настройка GitHub Secrets для деплоя

## Необходимые секреты

Для работы автоматического деплоя в Yandex Object Storage необходимо добавить следующие секреты в репозиторий GitHub:

### 1. YC_KEY_ID
**Описание:** Access Key ID от Yandex Cloud (статический ключ доступа)

**Как получить:**
1. Откройте [Yandex Cloud Console](https://console.cloud.yandex.ru/)
2. Выберите каталог
3. Перейдите в раздел "Сервисные аккаунты"
4. Создайте сервисный аккаунт (если нет)
5. Назначьте роль `storage.editor` или `storage.admin`
6. Создайте статический ключ доступа
7. Скопируйте "Идентификатор ключа"

### 2. YC_SECRET_KEY
**Описание:** Secret Access Key от Yandex Cloud

**Как получить:**
- При создании статического ключа доступа (см. выше)
- Скопируйте "Секретный ключ"
- ⚠️ **ВАЖНО:** Секретный ключ показывается только один раз!

### 3. YC_BUCKET_NAME
**Описание:** Имя бакета в Yandex Object Storage

**Значение:** Имя вашего бакета (например: `svk-hair` или `izueva-site`)

**Как получить:**
1. Откройте [Object Storage](https://console.cloud.yandex.ru/folders/YOUR_FOLDER_ID/storage)
2. Создайте новый бакет (если нет)
3. Настройки бакета:
   - Доступ: Публичный
   - Класс хранилища: Стандартное
   - Веб-сайт: Включить (index.html как главная страница)
4. Скопируйте имя бакета

## Добавление секретов в GitHub

1. Откройте репозиторий на GitHub
2. Перейдите в: **Settings** → **Secrets and variables** → **Actions**
3. Нажмите **"New repository secret"**
4. Добавьте каждый секрет:
   - Name: `YC_KEY_ID`
   - Secret: (вставьте значение)
   - Нажмите "Add secret"
5. Повторите для остальных секретов

## Проверка работы

После добавления всех секретов:

1. Сделайте коммит и push в ветку `main`
2. Перейдите в **Actions** вкладку в GitHub
3. Проверьте что workflow запустился
4. Дождитесь завершения (обычно 2-3 минуты)
5. Проверьте сайт по URL из логов деплоя

## Структура секретов

```bash
Secrets:
├── YC_KEY_ID           # Access Key ID (например: YCAJExxxxxxxxxxxx)
├── YC_SECRET_KEY       # Secret Key (длинная строка)
└── YC_BUCKET_NAME      # Имя бакета (например: svk-hair)
```

## Настройка доменного имени

После успешного деплоя в Object Storage:

1. **В Yandex Cloud:**
   - Откройте настройки бакета
   - Включите "Хостинг сайта"
   - Укажите `index.html` как главную страницу
   - Укажите `index.html` как страницу ошибки (для SPA)

2. **В DNS:**
   - Добавьте CNAME запись:
     ```
     svk-hair.ru → CNAME → <bucket-name>.website.yandexcloud.net
     ```

3. **Для HTTPS (опционально):**
   - Настройте CDN в Yandex Cloud
   - Получите SSL сертификат (Let's Encrypt)
   - Привяжите домен к CDN

## Troubleshooting

### Ошибка: "Access Denied"
- Проверьте что сервисный аккаунт имеет роль `storage.editor`
- Убедитесь что секреты добавлены правильно
- Проверьте что бакет существует

### Ошибка: "Invalid credentials"
- Пересоздайте статический ключ доступа
- Обновите секреты в GitHub

### Файлы не отображаются
- Проверьте что бакет публичный
- Убедитесь что "Хостинг сайта" включен
- Проверьте права доступа к файлам (должны быть public-read)

### Content-Type неправильный
- Workflow автоматически устанавливает правильные Content-Type
- Если проблема сохраняется, очистите бакет и задеплойте заново

## Полезные ссылки

- [Yandex Object Storage Docs](https://cloud.yandex.ru/docs/storage/)
- [Статические ключи доступа](https://cloud.yandex.ru/docs/iam/operations/sa/create-access-key)
- [Хостинг статического сайта](https://cloud.yandex.ru/docs/storage/operations/hosting/setup)
- [GitHub Actions Secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets)
