// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: {
    enabled: true,
    port: 24679, // Изменен порт для WebSocket
  },

  modules: ["@nuxt/ui", "@nuxt/image"],

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
  },

  // Настройки роутинга для SSG
  routeRules: {
    '/': { prerender: true },
    '/**': {
      headers: {
        'Cache-Control': 'public, max-age=31536000, immutable'
      }
    },
    '/images/**': {
      headers: {
        'Cache-Control': 'public, max-age=31536000, immutable'
      }
    },
  },

  // Оптимизация изображений
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

  css: [
    "~/assets/css/main.css",
    "swiper/css",
    "swiper/css/navigation",
    "swiper/css/pagination",
    "swiper/css/zoom",
    "swiper/css/effect-coverflow",
  ],

  // Experimental features для оптимизации
  experimental: {
    payloadExtraction: true,
    viewTransition: true,
  },

  // Vite оптимизации
  vite: {
    build: {
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          manualChunks: {
            'swiper': ['swiper'],
          },
        },
      },
    },
  },

  app: {
    head: {
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
        { name: "theme-color", content: "#5c5552" },
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
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "apple-touch-icon", href: "/logo192.png" },
        { rel: "manifest", href: "/manifest.json" },
        { rel: "canonical", href: "https://svk-hair.ru" },
      ],
      script: [
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
