/**
 * Плагин для директивы v-animate
 * Автоматически применяет анимацию появления при скролле к элементам
 *
 * @example
 * ```vue
 * <template>
 *   <!-- Простое использование -->
 *   <div v-animate>Контент</div>
 *
 *   <!-- С выбором типа анимации -->
 *   <div v-animate="'fade-in-left'">Контент</div>
 *
 *   <!-- С настройками -->
 *   <div v-animate="{ animation: 'scale-in', delay: 200, once: false }">Контент</div>
 * </template>
 * ```
 */

type AnimationType = 'fade-in' | 'fade-in-up' | 'fade-in-down' | 'fade-in-left' | 'fade-in-right' | 'scale-in'

interface AnimateDirectiveOptions {
  animation?: AnimationType
  delay?: number
  once?: boolean
  threshold?: number
  rootMargin?: string
}

const observerMap = new WeakMap<HTMLElement, IntersectionObserver>()

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('animate', {
    mounted(el: HTMLElement, binding) {
      // Парсим аргументы директивы
      let options: AnimateDirectiveOptions = {}

      if (typeof binding.value === 'string') {
        options.animation = binding.value as AnimationType
      } else if (typeof binding.value === 'object') {
        options = binding.value
      }

      const {
        animation = 'fade-in-up',
        delay = 0,
        once = true,
        threshold = 0.1,
        rootMargin = '0px 0px -50px 0px'
      } = options

      // Проверяем настройку prefers-reduced-motion
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (prefersReducedMotion) {
        el.classList.add('is-visible')
        return
      }

      // Добавляем базовые классы
      el.classList.add('animate-on-scroll', animation)

      // Добавляем задержку если указана
      if (delay > 0) {
        el.style.animationDelay = `${delay}ms`
      }

      // Создаем observer
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible')

              if (once) {
                observer.unobserve(entry.target)
              }
            } else if (!once) {
              entry.target.classList.remove('is-visible')
            }
          })
        },
        {
          threshold,
          rootMargin
        }
      )

      observer.observe(el)
      observerMap.set(el, observer)
    },

    unmounted(el: HTMLElement) {
      const observer = observerMap.get(el)
      if (observer) {
        observer.unobserve(el)
        observer.disconnect()
        observerMap.delete(el)
      }
    }
  })
})
