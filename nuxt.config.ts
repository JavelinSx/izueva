// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: {
    enabled: true,
    port: 24679, // Изменен порт для WebSocket
  },

  modules: ["@nuxt/ui", "@nuxt/image"],

  // Настройки image оптимизации
  image: {
    format: ['webp', 'avif'],
    quality: 80,
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
    densities: [1, 2],
  },

  // SSR и SSG конфигурация
  ssr: true,

  // Nitro конфигурация для SSG
  nitro: {
    preset: 'static',
    prerender: {
      routes: ['/'],
      crawlLinks: true,
    },
    // Compression
    compressPublicAssets: {
      gzip: true,
      brotli: true,
    },
    // Минификация
    minify: true,
    // Оптимизация вывода
    output: {
      publicDir: '.output/public'
    },
  },

  // Настройки роутинга для SSG
  routeRules: {
    '/': {
      prerender: true,
      headers: {
        'Cache-Control': 'public, max-age=3600, must-revalidate'
      }
    },
    '/_nuxt/**': {
      headers: {
        'Cache-Control': 'public, max-age=31536000, immutable'
      }
    },
    '/images/**': {
      headers: {
        'Cache-Control': 'public, max-age=31536000, immutable'
      }
    },
    '/assets/**': {
      headers: {
        'Cache-Control': 'public, max-age=31536000, immutable'
      }
    },
  },

  // Image optimization отключен для SSG
  // Используем обычные <img> теги с уже оптимизированными изображениями

  css: [
    "~/assets/css/main.css",
  ],

  // Experimental features для оптимизации
  experimental: {
    payloadExtraction: true,
    viewTransition: true,
    componentIslands: true,
  },

  // Оптимизация компонентов
  components: {
    global: false,
    dirs: [
      {
        path: '~/components',
        pathPrefix: false,
      },
    ],
  },

  // Vite оптимизации
  vite: {
    build: {
      cssCodeSplit: true,
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
      rollupOptions: {
        output: {
          manualChunks: (id) => {
            // Разделение Swiper на отдельный чанк
            if (id.includes('swiper')) {
              return 'swiper'
            }
            // Разделение node_modules на vendor чанк
            if (id.includes('node_modules')) {
              return 'vendor'
            }
          },
          // Оптимизация имен файлов для кэширования
          chunkFileNames: '_nuxt/[name]-[hash].js',
          entryFileNames: '_nuxt/[name]-[hash].js',
          assetFileNames: '_nuxt/[name]-[hash].[ext]',
        },
      },
      // Увеличиваем предел размера чанка
      chunkSizeWarningLimit: 1000,
    },
    optimizeDeps: {
      include: ['swiper/vue', 'swiper/modules'],
    },
  },

  runtimeConfig: {
    public: {
      // Google Таблица с ценами (доступ «все, у кого есть ссылка — читатель»)
      pricesSheetId: "1j2gEJF9QAewGXBwKYrH1a6XMGCj57gP3bUvUiSMLv9M",
      pricesSheetGid: "0",
    },
  },

  app: {
    head: {
      htmlAttrs: { lang: "ru" },
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Ботокс для волос, Кератиновое выпрямление в Савинском и Плесецке | Мастер Ирина Зуева",
      meta: [
        {
          name: "description",
          content: "Профессиональные процедуры для волос в п.Савинский и п.Плесецк. Ботокс, кератин, восстановление волос от мастера Ирины Зуевой с опытом 3+ лет. Сертифицированный специалист. Чай, кофе, комфортная атмосфера."
        },
        {
          name: "keywords",
          content: "ботокс для волос Плесецк, кератин Плесецк, восстановление волос Плесецк, ботокс волос Савинский, кератиновое выпрямление Савинский, мастер по волосам Плесецк, Ирина Зуева парикмахер, салон красоты Савинский, процедуры для волос Архангельская область, холодное восстановление волос, spa уход за волосами",
        },
        { name: "author", content: "Ирина Зуева" },
        { name: "yandex-verification", content: "585bf155bd068671" },
        { name: "theme-color", content: "#fbf3f1" },
        { name: "geo.region", content: "RU-ARK" },
        { name: "geo.placename", content: "Плесецк, Савинский" },
        { name: "robots", content: "index, follow" },
        { property: "og:title", content: "Ботокс и Кератин для волос в Савинском и Плесецке | Ирина Зуева" },
        { property: "og:description", content: "Профессиональное восстановление, ботокс и кератиновое выпрямление волос. Сертифицированный мастер с опытом 3+ лет. Комфортная атмосфера, угощения." },
        { property: "og:image", content: "/logo512.png" },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://svk-hair.ru" },
        { property: "og:locale", content: "ru_RU" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Ботокс и Кератин для волос в Савинском и Плесецке" },
        { name: "twitter:description", content: "Профессиональные процедуры для волос от мастера Ирины Зуевой" },
        { name: "twitter:image", content: "/logo512.png" },
      ],
      link: [
        // Основные favicon для браузеров
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
        { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
        { rel: "icon", type: "image/png", sizes: "48x48", href: "/favicon-48x48.png" },

        // Apple Touch Icons (iOS)
        { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
        { rel: "apple-touch-icon", sizes: "192x192", href: "/logo192.png" },

        // Android/Chrome
        { rel: "icon", type: "image/png", sizes: "192x192", href: "/logo192.png" },
        { rel: "icon", type: "image/png", sizes: "512x512", href: "/logo512.png" },

        // Manifest для PWA
        { rel: "manifest", href: "/manifest.json" },

        // Canonical URL
        { rel: "canonical", href: "https://svk-hair.ru" },

        // Preconnect для критических ресурсов
        { rel: "preconnect", href: "https://mc.yandex.ru" },
        { rel: "dns-prefetch", href: "https://mc.yandex.ru" },
        { rel: "preconnect", href: "https://www.youtube.com" },
        { rel: "dns-prefetch", href: "https://www.youtube.com" },

        // Шрифты: Cormorant Garamond (заголовки), Manrope (текст), Marck Script (подпись)
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "anonymous" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Manrope:wght@400;500;600;700&family=Marck+Script&display=swap",
        },
        // Preload фото мастера на первом экране
        {
          rel: "preload",
          href: "/images/master/master-hero.webp",
          as: "image",
          type: "image/webp",
          fetchpriority: "high"
        },
        // Таблица цен
        { rel: "preconnect", href: "https://docs.google.com" },
      ],
      style: [
        // Критический inline CSS для первого экрана
        {
          children: `
            html, body { margin: 0; background: #fbf3f1; color: #3a2333; font-family: "Manrope", system-ui, sans-serif; }
          `,
          type: 'text/css'
        }
      ],
      script: [
        // Включает анимации появления при скролле (без JS контент виден сразу)
        { children: "document.documentElement.classList.add('js-anim')" },
        // Yandex Metrika - оптимизированная загрузка
        {
          src: "https://mc.yandex.ru/metrika/tag.js",
          async: true,
          defer: true,
          id: "yandex-metrika",
        },
        {
          type: "text/javascript",
          children: `
            window.ym = window.ym || function() { (window.ym.a = window.ym.a || []).push(arguments) };
            window.ym.l = Date.now();

            if (document.readyState === 'loading') {
              document.addEventListener('DOMContentLoaded', function() {
                ym(96122282, "init", {
                  clickmap:true,
                  trackLinks:true,
                  accurateTrackBounce:true,
                  webvisor:false
                });
              });
            } else {
              ym(96122282, "init", {
                clickmap:true,
                trackLinks:true,
                accurateTrackBounce:true,
                webvisor:false
              });
            }
          `,
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "HairSalon",
                "@id": "https://svk-hair.ru/#organization",
                name: "Студия красоты Ирины Зуевой",
                url: "https://svk-hair.ru",
                logo: "https://svk-hair.ru/logo512.png",
                image: "https://svk-hair.ru/logo512.png",
                description: "Профессиональные процедуры для волос: ботокс, кератиновое выпрямление, восстановление волос в п.Савинский и п.Плесецк",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Плесецк, Савинский",
                  addressRegion: "Архангельская область",
                  addressCountry: "RU"
                },
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: "62.7000",
                  longitude: "40.2833"
                },
                areaServed: [
                  {
                    "@type": "City",
                    name: "Плесецк"
                  },
                  {
                    "@type": "City",
                    name: "Савинский"
                  }
                ],
                hasOfferCatalog: {
                  "@type": "OfferCatalog",
                  name: "Услуги для волос",
                  itemListElement: [
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Ботокс для волос",
                        description: "Профессиональный ботокс для восстановления и оздоровления волос"
                      }
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Кератиновое выпрямление волос",
                        description: "Кератиновое выпрямление для гладких и блестящих волос"
                      }
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Восстановление волос",
                        description: "Комплексное восстановление поврежденных волос"
                      }
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "SPA уход за волосами",
                        description: "SPA процедуры для здоровья и красоты волос"
                      }
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Холодное восстановление волос",
                        description: "Щадящее восстановление волос холодным способом"
                      }
                    }
                  ]
                },
                employee: {
                  "@type": "Person",
                  "@id": "https://svk-hair.ru/#person",
                  name: "Ирина Зуева",
                  jobTitle: "Мастер-стилист по волосам",
                  description: "Сертифицированный специалист по восстановлению волос с опытом работы более 3 лет",
                  knowsAbout: ["Ботокс для волос", "Кератиновое выпрямление", "Восстановление волос", "SPA уход"],
                  hasCredential: {
                    "@type": "EducationalOccupationalCredential",
                    credentialCategory: "Сертификат профессионального обучения"
                  }
                },
                amenityFeature: [
                  {
                    "@type": "LocationFeatureSpecification",
                    name: "Комплименты",
                    value: "Чай, кофе, угощения"
                  },
                  {
                    "@type": "LocationFeatureSpecification",
                    name: "Атмосфера",
                    value: "Комфортная и уютная обстановка"
                  }
                ],
                priceRange: "$$"
              },
              {
                "@type": "WebSite",
                "@id": "https://svk-hair.ru/#website",
                url: "https://svk-hair.ru",
                name: "Студия красоты Ирины Зуевой - Ботокс и Кератин для волос",
                publisher: {
                  "@id": "https://svk-hair.ru/#organization"
                }
              },
              {
                "@type": "WebPage",
                "@id": "https://svk-hair.ru/#webpage",
                url: "https://svk-hair.ru",
                name: "Ботокс для волос, Кератиновое выпрямление в Савинском и Плесецке",
                isPartOf: {
                  "@id": "https://svk-hair.ru/#website"
                },
                about: {
                  "@id": "https://svk-hair.ru/#organization"
                },
                description: "Профессиональные процедуры для волос в п.Савинский и п.Плесецк. Ботокс, кератин, восстановление волос от мастера Ирины Зуевой"
              }
            ]
          })
        },
      ],
      noscript: [
        {
          children:
            '<div><img src="https://mc.yandex.ru/watch/96122282" style="position:absolute; left:-9999px;" alt="" /></div>',
        },
      ],
    },
  },

  typescript: {
    strict: true,
    typeCheck: false, // Отключаем typeCheck из-за проблем с vue-tsc
  },
});
